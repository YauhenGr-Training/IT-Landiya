<?php 
    global $tracking_link, $phone, $thanks, $off_hours;
    $off_hours = false;
    $phone = '888-888-2345';
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Название Сайта</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <?php include 'css-files.php'; ?>
	</head>

	<body id="lifeFone">
		<?php
            include 'sections/modals/new-alerts.php';
			include 'sections/header.php';
			include 'sections/hero.php';
			include 'sections/footer.php';
			include 'js-files.php';
        ?>
	</body>
    <script src="slick/slick.js"></script>
</html>
