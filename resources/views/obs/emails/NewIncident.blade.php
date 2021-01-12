@component('mail::message',['header' => 'HOCHTIEF Active Reporting Tool','url' => 'https://themis.ukht.org/intranet/OccuranceView?id='.str_replace(' ','',$request->LogID)])
# Incident Details

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

This is to inform you that a {{$OccuranceName->Name}} has been reported at: {{$SiteName}} - {{$locName}} <br><br>
	Date and Time of observation: {{$DATE}} <br><br>
	Details:<br> {{$request->Details}}<br><br>
	

@endcomponent


