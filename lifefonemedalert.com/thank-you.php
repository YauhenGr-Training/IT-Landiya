<?php
    global $tracking_link, $phone, $thanks, $name, $off_hours;
    $off_hours = false;
    $thanks = true;
    $phone = '222-333-8888';
    $name = ucwords(!empty($_COOKIE["username"]) ? " ".$_COOKIE["username"] : "");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <?php include 'css-files.php'; ?>
</head>

<body id="lifeFone" class="startForm">
<?php
    include 'sections/header.php';
    include 'sections/thanks.php';
    include 'sections/footer.php';
    include 'js-files.php';
?>
</body>

</html>
