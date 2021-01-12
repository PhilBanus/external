<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MailController extends Controller {
   public function basic_email() {
      $data = array('name'=>"Philip Banus");
   
      Mail::send(['text'=>'mail'], $data, function($message) {
         $message->to('philip.banus@hochtief.co.uk', 'Philip Banus')->subject
            ('Laravel Basic Testing Mail');
         $message->from('themis@ukht.org', 'Themis');
      });
      echo "Basic Email Sent. Check your inbox.";
   }
   public function html_email() {
      $data = array('name'=>"Virat Gandhi");
      Mail::send('mail', $data, function($message) {
          $message->to('philip.banus@hochtief.co.uk', 'Philip Banus')->subject
            ('Laravel HTML Testing Mail');
        $message->from('themis@ukht.org', 'Themis');
      });
      echo "HTML Email Sent. Check your inbox.";
   }
  
}