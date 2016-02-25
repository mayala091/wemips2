<?php
//echo "I'm working";

$myStr = exec("ls -lh", $output);

//echo "<br/><br/>" . $myStr;
echo (json_encode($output));
//var_dump($output);


