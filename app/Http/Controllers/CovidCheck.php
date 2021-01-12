<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

use App\Contact;
use Carbon\Carbon;
use DB;

class CovidCheck extends Controller
{
    //
	
	public function check(Request $request){
		
		
		
		$contact = new Contact; 
		
		if($request->org){
			return $this->save($request,0);
		}else{
			
		
		
		$id = $contact->getID($request->name);
		
		if(!is_int($id)){
			return response('need org',211);
		}else{
			return $this->save($request,$id);
		}
		
		}
	}
	
	public function save($request,$id){
		if($id == 0){
		$check = DB::table('COVID_Clockin')->where('name','like',$request->name)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->exists();
		}else{
		$check = DB::table('COVID_Clockin')->where('contact_id',$id)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->exists();
		}
		
		if($check){
			//if($id == 0){
				$status = DB::table('COVID_Clockin')->where('name','like',$request->name)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->first();
				if($status->is_in){
					DB::table('COVID_Clockin')->where('name','like',$request->name)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->update(['is_in' => false,'check_out' => $request->time,'locale' => $request->locale]);
					return response("Thank you $request->name, you have Checked Out at ".Carbon::now('Europe/London')->toTimeString(), 200);
				}else{
					DB::table('COVID_Clockin')->where('name','like',$request->name)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->update(['is_in' => true,'check_out' => null,'locale' => $request->locale]);
					return response("Thank you $request->name, you have Checked In at ".Carbon::now('Europe/London')->toTimeString(), 200);
			}
		
		//}else{
		//		$status = DB::table('COVID_Clockin')->where('contact_id',$id)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->first();
		//		if($status->is_in){
		//			DB::table('COVID_Clockin')->where('contact_id',$id)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->update(['is_in' => false,'check_out' => $request->time,'locale' => $request->locale]);
		//			return response("Thank you $request->name, you have Checked Out at ".Carbon::now('Europe/London')->toTimeString(), 200);
		//		}else{
		//			DB::table('COVID_Clockin')->where('contact_id',$id)->whereDate('check_in',Carbon::now('Europe/London')->toDateString())->update(['is_in' => true,'check_out' => null,'locale' => $request->locale]);
		//			return response("Thank you $request->name, you have Checked In at ".Carbon::now('Europe/London')->toTimeString(), 200);
		//		};

		//};
			
		}else{
			if($id == 0){
		DB::table('COVID_Clockin')->insert([
			'check_in' => $request->time,
			'is_in' => true, 
			'name' => $request->name, 
			'organisation' => $request->org,
			'contact_id' => $id, 
			'device' => $request->device,
			'locale' => $request->locale
		]);
		}else{
	
			DB::table('COVID_Clockin')->insert([
			'check_in' => $request->time,
			'is_in' => true, 
			'name' => $request->name, 
			'contact_id' => $id, 
			'device' => $request->device,
			'locale' => $request->locale
		
		]);
		}
			
			return response("Thank you $request->name, you have Checked In at ".Carbon::now('Europe/London')->toTimeString(), 200);
		}
		
		
	}
	
}
