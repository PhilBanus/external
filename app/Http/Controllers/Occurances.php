<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Mail\NewOccurance;
use App\Mail\NewIncident;
use App\Mail\NewAccident;
use App\Mail\ThankYouNewOccuranceLogged;
use App\Http\Requests;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use DB;

class Occurances extends Controller {
   
	
	public function insertOccurance(Request $request){
		
		
	
	$DATE = $request->Date;
	$WHERE = DB::table('UKHT_Occurance_Location')->where('ID',$request->Where)->first()->Name;
	$DETAILS = urlencode($request->Details);
	$ACTIONS = urlencode($request->Actions);
	$PREVENTED =$request->Prevented;
	$NAME =$request->Name;
	$EMPLOYER =$request->Employer;
	$EMAIL =$request->Email;
	$OCCURANCE =$request->Occurance;
	$SITE =$request->Site;
	$GPS =$request->Cords;
	$Weather = $request->Weather; 
	$Member_Of_Public = $request->Member_Of_Public; 
	$Phone = $request->Phone; 
	$Occupation = $request->Occupation; 
		$Lighting_Conditions = $request->Lighting_Conditions;
	 							  $InjuredFirstName = $request->InjuredFirstName;
								  $InjuredSurname = $request->InjuredSurname;
								  $InjuredDOB = $request->InjuredDOB;
								  $InjuredPhone = $request->InjuredPhone;
								  $InjuredEmployer = $request->InjuredEmployer;
								  $InjuredOccupation = $request->InjuredOccupation;
								  $InjuredAddress = $request->InjuredAddress;
								  $InjuredPostCode = $request->InjuredPostCode;
								  $InjuredMember_Of_Public = $request->InjuredMember_Of_Public;
								  $InjuredHospital = $request->InjuredHospital;
								  $Passed_To = $request->Passed_To;
	
	
	$id = DB::table('UKHT_Occurance_Close_Call')->insertGetId(
	['Site' => $SITE, 'Date' => $DATE, 'Location' => $WHERE, 'Email' => $EMAIL, 'Employer' => $EMPLOYER, 'Name' => $NAME, 'Details' => $DETAILS, 'Risk_Prevented' => $PREVENTED, 'Actions_Taken_Site' => $ACTIONS, 'Occurance' => $OCCURANCE, 'GPS' => $GPS,'Member_Of_Public' => $Member_Of_Public, 'Phone' => $Phone, 'Weather' => $Weather, 'Occupation' => $Occupation, 'Lighting_Conditions' => $Lighting_Conditions,
	 							'InjuredFirstName' => $InjuredFirstName,
								  'InjuredSurname' => $InjuredSurname,
								  'InjuredDOB' => $InjuredDOB,
								  'InjuredPhone' => $InjuredPhone,
								  'InjuredEmployer' => $InjuredEmployer,
								  'InjuredOccupation' => $InjuredOccupation,
								  'InjuredAddress' => $InjuredAddress,
								  'InjuredPostCode' => $InjuredPostCode,
								  'InjuredMember_Of_Public' => $InjuredMember_Of_Public,
								  'InjuredHospital' => $InjuredHospital, 
	 							  'Passed_To' => $Passed_To
	 
	]
	);
	
	return $id;
		
		
		
		
		
	}
	
	
	public function insertOccurancePhotos(Request $request){
	
	$FILE = $request->file;
	$NAME = $request->name;
	$ID = $request->LogID;
	
	DB::table('UKHT_Occurance_Photos')->insert(
	['Occurance_ID' => $ID, 'Photo' => $FILE, 'Name' => $NAME]
	); 
	
		
		
	}
	
	
	public function sendEmail(Request $request){
		
		

	$SITE = $request->Site;

	
	$Members = DB::table('UKHT_Occurance_Teams')->join('Contact_Email','Contact_ID','Member_ID')->where('Site',$SITE)->where('Removed',0)->pluck('Email');
	


		
		
		Mail::to($Members)->send(new NewOccurance($request));
		
		if($request->Email){
			Mail::to($request->Email)->send(new ThankYouNewOccuranceLogged($request));
		}
		
		
		$SeniorMembers =  DB::table('Role_Membership')
			->join('Contact','Contact.Contact_ID','Role_Membership.Contact_ID')
			->join('UKHT_Emails','UKHT_Emails.ID','Role_Membership.Contact_ID')
			->where('Role_Membership.User_Role_ID',808)->whereNull('Superceded_By_Date')->pluck('Email');
		
		if($request->Occurance == 3){
			Mail::to($SeniorMembers)->send(new NewIncident($request));
		}
		
		if($request->Occurance == 4){
			Mail::to($SeniorMembers)->send(new NewAccident($request));
		}
		
		
		
	
	
		
	}
	
	
	public function UpdateInjuries(Request $request){
		
		
		foreach($request->Injuries as $injury){
			
			
			
			DB::table('UKHT_Occurance_Injury_Location')->updateOrInsert(
			['Occurance_ID' => $request->Occurance_ID],
			[$injury['BodyPart'] => $injury['Type']]
			); 
			
		}
		
		
		
	}
	

  
}