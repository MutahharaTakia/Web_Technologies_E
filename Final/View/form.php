<?php
session_start();
$usernameError = $_SESSION["usernameErr"] ?? "";
$nameError = $_SESSION["nameErr"] ?? "";
$emailError = $_SESSION["emailErr"] ?? "";
$phonenoError = $_SESSION["phonenoErr"] ?? "";

$username = $_SESSION["username"] ?? "";
$name = $_SESSION["name"] ?? "";
$email = $_SESSION["email"] ?? "";
$phoneno = $_SESSION["phoneno"] ?? "";

$successMsg = $_SESSION["successMsg"] ?? "";

unset($_SESSION["usernameErr"]);
unset($_SESSION["nameErr"]);
unset($_SESSION["emailErr"]);
unset($_SESSION["phonenoErr"]);

unset($_SESSION["username"]);
unset($_SESSION["name"]);
unset($_SESSION["email"]);
unset($_SESSION["phoneno"]);

unset($_SESSION["successMsg"]);
?>

<html>
    <head>
        <title>Form</title>
    </head>
    <body>
        <h2>User Form</h2>

        <form method="post" action="../Controler/loginValidation.php">
            <table>
                <tr>
                    <td>Username</td>
                    <td><input type="text" name="username" placeholder="Enter username" value="<?php echo $username; ?>"></td>
                </tr>
            </table>
        </form>
    </body>
</html>

