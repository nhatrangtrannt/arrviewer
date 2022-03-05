<?php
session_start();
//$conn = mysqli_connect("localhost", "root", "root", "model");
$server = "localhost";
$dbuser = "root";
$pass = "root";
$db = "model";
// Database connection (server,username,password,database)
$conn = new mysqli($server,$dbuser,$pass,$db);
// Check connection
if($conn === false){
    die("COULD NOT CONNECT. ".$conn->connect_error);
}
//$phpvariable = "<script>document.write(localStorage.getItem('file'))</script>";
$test = $_GET['var_PHP_data'];
echo "variable is : .$test";

if (isset($_POST['btn'])){
    echo "YESSSSS I LOVE IT";
    echo $_POST['text'];
}
else{
    echo "NOTHING";
}
if(isset($_POST['data1'])){ 
	echo $_POST['data1'];
} 
if(count($_COOKIE) > 0){
    echo ('There are cookies as below: ');
    echo "<br>";
    $cookiename = array_keys($_COOKIE);

    echo (''.$_COOKIE['file']);
    $phpvariable = $_COOKIE['file'];



//if (isset($phpvariable)){
    //$phpvariable = $_GET['file'];

    //$imgData = file_put_contents($phpvariable);
    //$imagetype = "blob";
    $table = "output_images";
    $imagetype = '';

    
    define('UPLOAD_DIR', 'blob/');
	$img = $phpvariable;
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.glb';
	$success = file_put_contents($file, $data);
    

    echo "DATA after decode";
    echo "<br>";
    echo $data;
    echo "<br>";
    echo "image type ";
    echo $imagetype;
    
    //$sql = "INSERT INTO ".$table."(imageType ,imageData) VALUES ('$imagetype', '$data')";
    //$current_id = mysqli_query($conn, $sql) or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_error($conn));
    //echo "<br>";
    //echo $img;

    if(isset($current_id)) {
        print $data;
    }
}
else{
    echo "NOOOOOO";
}

?>

<html>
<head>
	<title>3D Model AR</title>
	<meta charset="UTF-8" />
    <script src="jquery.min.js"></script>
     <form name="form" action="" method="post">
    <div id='text' name='text'></div>
    <button id="btn" name="btn">BUTTON </button>
   </form>

   <form name="form" action="" method="post">
    <div id='text' name='text'></div>
   </form>
  
   <!-- document.getElementById("file").onload = function() {myFunction()};
    function myFunction() {
        console.log("1");
        var my = document.getElementById("file").value;
        document.getElementById("cookies").innerHTML = my;
        console.log(my);
    }
    var myInput = document.getElementById("file");
    if (myInput && myInput.value) {
    console.log("My input has a value!");
    }
    document.getElementById("cookies").innerHTML = myInput.value;
-->


</head>

<body class="w-100 sans-serif bg-white"> 
<!--<model-viewer ar ar-modes="webxr scene-viewer quick-look" camera-controls src="model/2chairs.glb" alt="A 2 chair">
</model-viewer>
-->
<!-- <code id="cookies">HERE</code> -->
<!--<button onclick="myFunction()">Try it</button> -->



</body>
</html>
<script>
var file = localStorage.getItem('file');
//document.getElementById("text").innerHTML = file;

var inputF = document.getElementById("text");
inputF.setAttribute('value', file);

//sessionStorage.setItem("file", file);
console.log("Console ");
console.log(file);
console.log(localStorage.getItem('file'));
function createCookie(name,value,minutes) {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime()+(minutes*60*1000));
        var expires = "; expires="+date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

createCookie("file", file, 2);


/*$.ajax({
    url: 'twochair1.php',
    type: 'POST',
    data: { var_PHP_data: file },
    success: function(data) {
        console.log("SUCCESSFULY");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("ERROR");
    }
});*/
      
</script>
<?php 

?>