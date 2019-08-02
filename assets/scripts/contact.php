<?php
  if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $human = intval($_POST['human']);
    $from = 'Contact Form'; 
    $to = ''; 
    $subject = "Contact Form: $name";
    $headers = "From: $from\r\nReply-to: $email";
    $body ="From: $name <$email>\n\nMessage:\n\n$message";
    // Check if name has been entered
    if (!$_POST['name']) {
      $errName = 'Please enter your name';
    }
    
    // Check if email has been entered and is valid
    if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      $errEmail = 'Please enter a valid email address';
    }
    
    //Check if message has been entered
    if (!$_POST['message']) {
      $errMessage = 'Please enter your message';
    }
    //Check if simple anti-bot test is correct
    if ($human !== 17) {
      $errHuman = 'Your answer is incorrect';
    }
    // If there are no errors, send the email
    if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
      if (mail ($to, $subject, $body, $from, $headers)) {
        $result='<div class="alert alert-success text-center">Thank You! I will be in touch</div>';
      } else {
        $result='<div class="alert alert-danger text-center">Sorry there was an error sending your message. Please try again later.</div>';
      }
      $_POST['name'] = "";
      $_POST['email'] = "";
      $_POST['message'] = "";

    }

  }
?>