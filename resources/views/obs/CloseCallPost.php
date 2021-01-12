<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
date_default_timezone_set('Etc/UTC');

if($_POST['mode'] == 1){
	
	
}


if($_POST['mode'] == 2){

	

	
}



if($_POST['mode'] == 3){
	
	
	$DATE = $_POST['Date'];
	$WHERE = $_POST['Where'];
	$DETAILS = urlencode($_POST['Details']);
	$ACTIONS = urlencode($_POST['Actions']);
	$PREVENTED = $_POST['Prevented'];
	$NAME = $_POST['Name'];
	$EMPLOYER = $_POST['Employer'];
	$EMAIL = $_POST['Email'];
	$OCCURANCE = $_POST['Occurance'];
	$SITE = $_POST['Site'];
	$ID = str_replace(' ','',$_POST['LogID']);
	
	$OccuranceName = DB::table('UKHT_Occurance')->where('ID',$OCCURANCE)->first();	
	
	if($SITE == 0){
		$SiteName = "Head Office";
	}else{
		$site = DB::table('Project')->where('Project_ID',$SITE)->first();
		$SiteName = $site->Name;
	}
	
	$loc = DB::table('UKHT_Occurance_Location')->where('ID',$WHERE)->first();
	$locName =$loc->Name; 
	
	$Members = DB::table('UKHT_Occurance_Teams')->join('Contact_Email','Contact_ID','Member_ID')->where('Site',$SITE)->get();
	

	
	$mail = new PHPMailer(true);
		
	try {
    //Server settings
 $mail->isSMTP();
//Enable SMTP debugging
// SMTP::DEBUG_OFF = off (for production use)
// SMTP::DEBUG_CLIENT = client messages
// SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->SMTPDebug = 4;
//Set the hostname of the mail server
$mail->Host = '10.4.252.97';
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;

//Whether to use SMTP authentication
$mail->SMTPAuth = false;
$mail->Username = 'admin@ukht.org';
$mail->Password = 'Pan2er622';   
		$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
		
		// TCP port to connect to

    //Recipients
    $mail->setFrom('themis@hochtief.co.uk');
       // Add a recipient
    
			foreach($Members as $Member){
		 $mail->addAddress( $Member->Email );
				echo $Member-> Email;
	}

		$mail->addCC('philip.banus@hochtief.co.uk');
    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $OccuranceName->Name.' Notification - '.$SiteName;
    $mail->Body    = "This is to inform you that a $OccuranceName->Name has been reported at: $SiteName - $locName <br><br>
	Date and Time of observation = $DATE <br><br>
	Details - ".$_POST['Details']."<br><br>
	Risk Prevented - $PREVENTED <br><br>
	<a href='https://themis.ukht.org/intranet/OccuranceView?id=$ID'>Click to view the record</a>";
   
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "{$mail->ErrorInfo}";
}	
	
	
	
	
	
}

