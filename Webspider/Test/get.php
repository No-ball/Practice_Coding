<?php
    include("LIB_parse.php");
    include("LIB_http.php");

    $get = http_get("https://www.aqistudy.cn/historydata/daydata.php?city=%E5%B9%BF%E5%B7%9E&month=201401",$referer="");
    print($get['FILE']);

?>