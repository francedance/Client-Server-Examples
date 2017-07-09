## This is example is about loading Flickr's latest images into your website using Flickr's provided API and AJAX call

![ezgif com-crop](https://user-images.githubusercontent.com/10924864/27997359-b22e1bba-64c4-11e7-9d47-b4dfaf1a7fca.gif)

**Actual image lists in Flickr's homepage**

![flikr](https://user-images.githubusercontent.com/10924864/27997366-cec9b91e-64c4-11e7-83cd-e7d92943dc26.PNG)

**I've used [Classic Movie Posters](https://www.flickr.com/groups/543627@N24/pool/) page as an example to pull their latest uploaded movie posters (You can always pull any images by using their id inside URL)**

### To give a brief explanation of how this example works, here's the logic:

**1) You have to use Flickr's API URL example:**

  https://api.flickr.com/services/feeds/groups_pool.gne?jsoncallback=?
  
**Note!**

      jsoncallback=?
      
**You're sending AJAX request to a server that's outside of your website bound. Usually you're allowed to AJAX call within the same website for security reason. By putting 'jsoncallback=?' you can make a AJAX call to other websites! Also that website must accept this method!** 
  
**Note that your URL might be slight different based on where you're getting your images from. example:**

**I have**

      groups_pool.gne? 
  
**inside my URL becaue I am retrieving images from Flickr's Groups. If you want to get from Public, it might look like this**

      photos_public.gne? 
  
**Refer [Flickr's API Documentation](https://www.flickr.com/services/api/) for more detail!**

**To find an id of a Flickr username: visit (http://idgettr.com)**

**Flickr's id looks like this: This was Classic Movie Posters' Flickr id**

    543628@N24 

**2) use AJAX call in your website**
  
    $.getJSON(URL, data, callbackfunction)
    
**URL is:**

      https://api.flickr.com/services/feeds/groups_pool.gne?jsoncallback=?

**data is: (It's good practice to pass it as object literal to $.getJson)**

```Javascript

     var serachInfo = {
        id: "543627@N24",
        format: "json"
      }
```    

**A callbackfunction is usually a function that is used to handle, upadate website contents. A callbackfunction accepts a response from a server as an argument.**

**For example, this is how my overall code looks like And it's where MAGIC is happening!**

```Javascript

    $.getJSON(URL, searchInfo, function(data){
          //URL = URL
          //searchInfo is object literal {id:"543627@N24; format: "json"}
          //function(data){} is the callback function
          
          //I am simply updating my current HTML contents by placing images!
          
          $('h1').text(data.title)
          
          var photoHTML = '';

          //you simply loop through each items in JSON that Flickr has returned.
          
          $.each(data.items, function(i,photo) {

            //i = index like '0' for first item , '1' for second item like in an array index
            //photo = photo's info and details such as link to image, title..etc.
            
            photoHTML += '<span class="image" title="'+ photo.title + '">';
            photoHTML += '<a href="' + photo.link + '" attribtue="' + photo.title + '">';
            photoHTML += '<img src="' + photo.media.m.replace('_m','_m') + ' "></a></span>';


    
    });
    
    $('.#photos').append(photoHTML); //just append images to current HTML contents

```
**This is how the whole JSON looks like!** 

![json](https://user-images.githubusercontent.com/10924864/27997302-7b935436-64c3-11e7-87fb-ba544b9ba450.PNG)


