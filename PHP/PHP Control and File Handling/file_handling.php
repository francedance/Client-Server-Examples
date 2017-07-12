

<!DOCTYPE Html>

<html>
<head>
	<style>
		div {
			
			border: solid 2px blue;
			font-weight: bold;
			
		}
	</style>
</head>

<body>

	<h1>Simple PHP Control and Handling of a file</h1>

	<div>
	
	<?php

		echo "</br>", "Create or Open the file.", "<br/>";
		
		$fp = fopen("newfile.txt" , "a+"); //Creates a file named "newfile.txt" with 'write' and 'read'
		
		
		if ($fp) { //will return 'true' if successfully created, else 'false'
			
			echo "newfile.txt created." , "<br />";
			
		}else{
			
			echo "newfile.txt cannot be opened.", "<br />";
			
		}
		
		echo "<br />" , "Write the file.", "<br />";
		
		$bytes = fwrite ($fp, "This text you see is inside the file!!! \r\n"); //You're now writing a text into "newfile.txt" using fwrite(file_pointer, data_to_be_written) 
		
		if($bytes){ //returns 'true' if successfully written to the file, else 'false'.
			
			echo $bytes, " byte written." , "<br />";
			
		}else {
			
			echo "File not written.", "<br />";
		}
		
		echo "<br />" , "Rewind and read the file." , "<br />";
		
		rewind($fp); //Just like a video rewind, this resets the file pointer to the beginning of the file. 
		
		$data = fread ($fp, $bytes); //reads certain number of bytes into a string
		
		if($data) { //returns 'true' if read, else 'false'. So, if 'true' $data will hold a string.
			
			echo $data, "<br />";
			
		}else {
			
			echo "File not read." , "<br />";
			
		}
		
		echo "<br />" , "Close the file." , "<br />";
			
		if(fclose($fp)) { //simply closes the file pointer!
			
			echo "newfile.txt closed", "<br/>";
			
		}else {
			
			echo "newfile.txt not closed.", "<br />";
		}
	

	?>
	
	<div>

</body>


</html>