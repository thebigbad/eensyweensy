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
  $results["error"] = "not really an error, success!";
}

echo json_encode($results);
?>
