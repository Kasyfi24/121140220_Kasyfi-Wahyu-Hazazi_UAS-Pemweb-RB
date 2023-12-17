<?php
// PHP script for session handling
session_start();

// Set session variables
$_SESSION["user_name"] = $name;
$_SESSION["user_email"] = $email;
?>
