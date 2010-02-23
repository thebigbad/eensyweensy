<?php
// Copyright 2010 Ryan Wolf <rwolf@borderstylo.com>
//
// This file is part of eensyweensy and is released under the
// Tumbolia Public License. See LICENSE for more details.

if (!isset($_POST["data"])) {
  echo "<pre>You need to feed me some DATA.\nDada Dada Dada.</pre>";
  exit;
}

$data = json_decode(stripslashes($_REQUEST["data"]), true);
$results = array();

if (is_null($data["on_last_page"]) || !is_array($data["urls"])) {
  $results["error"] = "validation error: missing on_last_page or urls";
}
else {
  // http://www.tizag.com/phpT/fileappend.php
  $file_name = "output.txt";
  $file_handle = fopen($file_name, "a+");
  foreach ($data["urls"] as $url) {
    fwrite($file_handle, "$url\n");
  }
  fclose($file_handle);
  $results["error"] = "yay";
}

echo json_encode($results);
?>
