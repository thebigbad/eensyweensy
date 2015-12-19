<?php
if (!isset($_POST["data"])) {
  echo "<pre>You need to feed me some DATA.\nDada Dada Dada.</pre>";
  exit;
}

$data = json_decode(stripslashes($_REQUEST["data"]), true);
$results = array();

if (is_null($data["href"]) || is_null($data["on_last_page"])
      || !is_array($data["urls"])) {
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

  if ($data["on_last_page"] == "true") {
    $results["url"] = "http://hampsterdance.com";
  }
  else {
    function next_url ($matches) {
      if (count($matches) == 2) {
        return $matches[1] . "?page=2";
      }
      $page = (int) $matches[3];
      $page++;
      return $matches[1] . "?page=$page";
    };
    $results["url"] = preg_replace_callback(
      "/^([^\?]+)(\?page=(\d*))?$/",
      "next_url",
      $data["href"]
    );
  }
}

echo json_encode($results);
?>
