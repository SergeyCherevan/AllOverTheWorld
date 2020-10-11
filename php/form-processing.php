<!DOCTYPE html>
<html>
<head>
	<title>Первый сайт на PHP</title>
	<meta charset="utf-8">
</head>

<body>
	<?php
		$name = $_POST["input-name"];
		echo "Спасибо, ".$name . ", наш менеджер свяжется с вами в ближайшее время!";
	?>
</body>
</html>