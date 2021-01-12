@component('mail::message',['header' => 'HOCHTIEF Active Reporting Tool'])
# HART Details

@php

	$OccuranceName = DB::table('UKHT_Occurance')->where('ID',$request->Occurance)->first();	
	$SITE = $request->Site;
	if($SITE == 0){
		$SiteName = "Head Office";
	}else{
		$site = DB::table('Project')->where('Project_ID',$SITE)->first();
		$SiteName = $site->Name;
	}

	$DATE = $request->Date;
	$WHERE = $request->Where;
	$DETAILS = urlencode($request->Details);
	$ACTIONS = urlencode($request->Actions);
	$PREVENTED = $request->Prevented;
	$NAME = $request->Name;
	$EMPLOYER = $request->Employer;
	$EMAIL = $request->Email;

	
	$ID = str_replace(' ','',$request->LogID);
	

	
	$loc = DB::table('UKHT_Occurance_Location')->where('ID',$WHERE)->first();
	$locName =$loc->Name; 

@endphp

Thank you for reporting a {{$OccuranceName->Name}} at: {{$SiteName}} - {{$locName}} <br><br>
	Date and Time of observation: {{$DATE}} <br><br>
	Details - {{$request->Details}}<br><br>
	Risk Prevented - {{$PREVENTED}} <br><br>

You will recieve a notification once the report has been closed. 




@endcomponent


