<?php 
include("LIB_download_images.php");
$target = "http://pblap.atm.ncu.edu.tw/weather03.asp?fbclid=IwAR2QsZK_Nq0vdt5IehOkZ--qGAkCXP5Jrfsj6UWBbeyOphGNwJbHSpEEL8Q";
$this_image_file = download_binary_file($target, $referer=$target);
echo "size: ".strlen($this_image_file);

$fp = fopen("D:/temp/test.png", "w+");
fputs($fp, $this_image_file);
fclose($fp);
echo "\n";


?>