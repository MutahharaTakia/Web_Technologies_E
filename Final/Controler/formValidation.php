<?php
session_start();

$username = $_POST["username"] ?? "";
$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
$phoneno = $_POST["phoneno"] ?? "";
$hasUsernameError = true;
$hasNameError = true;
$hasEmailError = true;
$hasPhonenoError = true;
echo "<h1>Hello Mr, $username</h1>";
echo "<h3>Your name is : $name</h3>";
echo "<h3>Your email is : $email</h3>";
echo "<h3>Your phone No is : $phoneno</h3>";

if(!$username){
    $_SESSION["usernameErr"] = "username is required";
    $hasUsernameError = true;
}else{
    unset($_SESSION["usernameErr"]);
    $hasUsernameError = false;
}

if(!$name){
    $_SESSION["nameErr"] = "Name is required";
    $hasNameError = true;
}else{
    unset($_SESSION["nameErr"]);
    $hasNameError = false;
}

if(!$email){
    $_SESSION["emailErr"] = "Email is required";
    $hasEmailError = true;
}else{
    unset($_SESSION["emailErr"]);
    $hasEmailError = false;
}

if(!$phoneno){
    $_SESSION["phonenoErr"] = "Phone number is required";
    $hasPhonenpError = true;
}else{
    unset($_SESSION["phonenoErr"]);
    $hasPhonenoError = false;
}

if($hasUsernameError|| $hasNameError || $hasEmailError || $hasPhonenpError){
    $_SESSION["username"] = $username;
    $_SESSION["name"] = $name;
    $_SESSION["email"] = $email;
    $_SESSION["phoneno"] = $phoneno;
    Header("Location: ../view/form.php");
}else{
    $_SESSION["successMsg"] = "Form submitted successfully!";

    Header("Location: ../View/form.php");
}
?>


