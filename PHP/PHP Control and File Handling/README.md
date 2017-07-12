## This is an example on PHP's basic control and handling of a file using fopen(), fclose(), fread(), fwrite(), rewind() on your server storage.

**Code explanations are inside 'file_handling.php' but I am going to briefly explain here again:**

```Php

  $fp = fopen("newfile.txt" , "a+");

```
**You're basically creating a file pointer here with option of 'a+' = 'write' and 'read'!** 
**There are few more options like**

```Php

  a //write only
  a+ //write and read, starting at the end of the file or creating a new file, appending new information to what previously existed 
  r // read only
  r+ // read and write, from the beginning of the file
  w // write only, after deleting any file contents or creating a new file
  w+ //write and read, after deleting any file contents or creating a new file
  x //create a new file and write only, from the beginning of the file. Returns FALSE if the file exists
  x+//create a new file and write and read, from the beginning of the file. Returns FALSE if the file exists

```

**What you're doing here is basically telling PHP to open a file named "newfile.txt" if exist or make one if not existing.** 

```Php

  $bytes = fwrite ($fp, "This text you see is inside the file!!! \r\n");

```
**Simply telling PHP to write the data inside file_pointer which you set it up in the beginnig.**
**Byte here simply refers to character counts in the string, so "This" will have 4 bytes.**

```Php

rewind($fp);

```
**We're using this to make the current position of the file back to the beginning so that we can prepare to read from the beginning**

```Php

$data = fread ($fp, $bytes);

```
**It means to read a string from the file upto a certain byte. $bytes= contains number of characters which is 42 characters.**
**So, above code will read only upto 42 characters from the "newfile.txt"** 

**If you've written:**

```Php

$data = fread ($fp, 3); 

```

**You're reading only 3 bytes or 3 characters which $data = 'Thi'**

**Finally, you MUST close the file! This is very important practice for safety purpose**

```Php

fclose($fp);      

```
**And you're done! You'll see that a new file named "newfile.txt" is created in your server if you don't have this file beforehand.**
