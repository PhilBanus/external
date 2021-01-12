<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Contact extends Model
{
    //
	
	protected $table = 'Contact'; 
	
	
	public function getID($name){
		$contact = $this->whereNull('Superceded_By_Date')->where('Organisation_ID','<',0)->where(db::raw("LOWER(Forename+' '+Surname)"),"like", DB::raw("(LOWER('%$name%'))"))->orderby('Contact_ID','desc'); 
		if($contact->exists()){
		return  intval($contact->first()->Contact_ID);
		}else{
			return 'external';
		}
	}
	
} 
