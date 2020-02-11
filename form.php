<meta charset="utf-8">
<?php
    // 1
    if(isset($_POST['name']))   { $nm=$_POST['name'];       if($nm==""){unset($nm);}}
    if(isset($_POST['email']))  { $em=$_POST['email'];      if($em==""){unset($em);}}
    if(isset($_POST['subject'])){ $sb=$_POST['subject'];    if($sb==""){unset($sb);}}
    if(isset($_POST['content'])){ $cn=$_POST['content'];    if($cn==""){unset($cn);}}


    if(isset($nm)){
        $nm = stripslashes($nm);
        $nm = htmlspecialchars($nm);
    }
    if(isset($em)){
        $em = stripslashes($em);
        $em = htmlspecialchars($em);
    }
    if(isset($sb)){
        $sb = stripslashes($sb);
        $sb = htmlspecialchars($sb);
    }
    if(isset($cn)){
        $cn = stripslashes($cn);
        $cn = htmlspecialchars($cn);
    }


    $to = "Boston2468x@gmail.com";

    $note_text = "Topic: $sb \r\n Name : $nm \r\n Email : $em \r\n Adding information: $cn";
    if(isset($nm) && isset($sb)){
        mail($to, $sb, $note_text, "Content-type:text/plain; windows-1251");
        echo "<div style='color: #0ff'> Success sending</div>";
    }

    // if(isset($em) && isset($cn)){
    //     $headers =  'MIME-Version: 1.0' . "\r\n"; 
    //     $headers .= 'From: Your name <info@address.com>' . "\r\n";
    //     $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

    //     if(mail($to, $sb, $cn, $headers) == TRUE){
    //         echo "<div style='color: #0ff'> Success sending</div>";
    //     }
    // }


?>