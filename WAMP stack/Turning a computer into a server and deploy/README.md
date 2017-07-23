## This is a tutorial on "how to turn your computer into a working web server and use it to deploy" (Note: Windows only! but MAC and Linux users should experience something similar but this only for Windows users).

**Literally this is a tutorial on turning your old/new computer into a web server to serve your websites.**

**Note: Do not use this attempt for a website where it involves a lot of security/payment transaction/ecommerce. Use this method for a website that is informational or purpose of just serving data from your database!**

**List of things you NEED!:** 

    1)A working piece of computer(Desktop/Laptop)
    
    2)A stable network connection(Mostly your home connection with a router)
    
    3)Admin access to your router
    
    4)WAMP Server installed!
    
    5)Command Prompt
    
### Step 1: Configuration/Editing of your Apache server using 'httpd.conf' in WAMP/XAMP!

**Open up 'httpd.conf' file by clicking the running WAMP icon like below**

![httpd](https://user-images.githubusercontent.com/10924864/28470624-4336c318-6e08-11e7-8b48-6aa47f8fc903.PNG)

**You'll see a lot of configuration settings of your Apache server, but find the**

    <Directory /> ... </Directory>

**tags and edit the inside like these:**

![1](https://user-images.githubusercontent.com/10924864/28470783-d8b09c52-6e08-11e7-9744-233391087c68.PNG)

![2](https://user-images.githubusercontent.com/10924864/28470784-d8b7752c-6e08-11e7-8a68-52ad7eda7e0d.PNG)

**The most important part is:**

    <Directory />
    
**And**

    Require all granted
    Allow from all 

**<Directory /> Literally means file path "/". This is like the root of all other paths in your webserver but you don't want people to access all over the server so you have to set this path where it's only visible to a visitor. Remember that in WAMP, you place your web fiels inside '/www/' directory. So,**

    <Directory /www/my_website/> ... </Diretory> 
    
**is something I would do. And what's inside "/my_website/"? It can be any HTML,CSS,PHP files to construct your website!**

    Require all granted
    Allow from all
    
**Basically means that you're allowing anyone to see and travel the path you set "/www/my_website"! You can prevent a visitor anytime but you're not actually here to block them but for the sake of future, use:**

    Require all denied 
    
**To block visitors accessing your server.**

**At this point, you're almost done literally! You just configured your server to accept any visitor. RESTART your WAMP server!**

### Step 2: Port Forwarding in your router!

**You need two pieces of IP address here: Your public IP address and your device IP address.**

**For public IP address, type 'IP Address' in Google search bar LoL**

![capture](https://user-images.githubusercontent.com/10924864/28471589-a77b3450-6e0b-11e7-9a08-2e1d1d623302.PNG)

**Your public IP address is the address that Internet uses to identify your router. Your device IP address is an address that your router sees and connect with. So in overall:**

      [Internet] ---->  [your router]  -------->   [your devices(laptop, desktop, tablet): each has different address but similar]
                          (Public IP Address)         (Device IP Address)
                          Ex: 98.14.XXX.XX              Ex: 192.168.1.9 (laptop) , 192.168.1.4 (desktop) , 192.168.1.8 (tablet)

**To simply find a device ip address of a computer you want to turn into a server: type:**

      ipconfig

**in your Command Prompt**

![123](https://user-images.githubusercontent.com/10924864/28472029-1e9dcbe6-6e0d-11e7-9b25-18ef39d11a62.PNG)

**At this point, keep your Public IP address and your device IP address (IPv4 address) in record!**

**Now you need to access your router's admin page. Most of router manufacturers use 192.168.0.1 or 192.168.1.1 as the default LAN IP address. Please type either one to get inside your admin page.**

![55](https://user-images.githubusercontent.com/10924864/28472192-9970c7d8-6e0d-11e7-8423-cde8d0669ed0.PNG)

**Usually the username is 'admin' and password is 'password'**
**Once you're in, it looks like this.**

![77](https://user-images.githubusercontent.com/10924864/28472316-1aa3ba04-6e0e-11e7-9a66-b2c8777e6229.PNG)

**Find Port forwarding option.**

![6](https://user-images.githubusercontent.com/10924864/28472317-1aa51048-6e0e-11e7-96d9-491564326d48.PNG)

**I've set it up one already. Make sure the Port # matched your 'httpd.conf', usually your webserver should be accepting at Port 80. Use TCP/UDP options if you're clueless on which one to pick. Now simply enter your Device IP address or IPv4 that you've found using Command Prompt. Then apply and exit.**

### Step 3: Testing! 

**Make sure your WAMP server is currrently running. Try to type your Public ip addrress into your web browser's URL.Like: It should work in any browser and from any computer in this world!**

      http://98.14.XXX.XXX
      
**It should be working but have some sample 'index.html' or 'index.php' placed inside your "/www/my_website/" to visually see** 
**If you have nothing there, you should see just a directory like this**

![inked28472660-70b60f40-6e0f-11e7-83a9-b38c6d4feb1e_li](https://user-images.githubusercontent.com/10924864/28500571-9b4619a0-6f98-11e7-9357-ce0dcb5a7265.jpg)

**Try to click 'Parent Directory' and see what happens! You have forbidden access! because you set this up in 'httpd.conf' :)** 

**Congratulation! Now you have your own webserver and it is deployable! Oh yeah, since nobody wants to and doesn't look legitimate to have such a url like http://98.14.XXX.XXX, make sure you get a [free domain](http://www.dot.tk/en/index.html?lang=en) and forward that domain name to your address. So anyone can just visit your server/website using http://www.your_website.tk**

**I've also tested this using PHP + MySQL setup for simple web page. I basically fetched a data from local Database using MySQL query and some PHP** 

![gg](https://user-images.githubusercontent.com/10924864/28472910-90972d48-6e10-11e7-8aaf-8b8abc49b6d1.PNG)

**I just fetched a row from my book database and displayed fetched row on the website!**

**Just to refresh your mind, Do not use this when you're doing websites that involve some user info, transaction, security and etc. Using your local server is not safe! as I've said, only use it for light websites where you just fetch data from local DB and show it to a user. Never accept user input and store it in local machine!** 







