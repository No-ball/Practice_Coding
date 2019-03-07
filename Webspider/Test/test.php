<?php
include("LIB_download_images.php");
$target = "http://140.115.35.132/obs/10MLive24h.php";
$this_image_file = download_images_for_page($target, $referer=$target);
echo "size: ".strlen($this_image_file);
?>