<?php 

use Carbon\Carbon;
use Carbon\CarbonTimeZone;
use Jenssegers\Agent\Agent;




$agent = new Agent();

if($agent->isMobile() || $agent->isTablet()){
	
	$device = $agent->device().' / '.$agent->platform().' '.$agent->version($agent->platform()). ' / '.$agent->browser();
	
}else{
	
	$device = gethostbyaddr($_SERVER['REMOTE_ADDR']);; 
}

if($agent->isTablet()){
	$tablet = 'true';
}

if($agent->isMobile() || $agent->isDesktop()){
	$tablet = 'false';
}



?>



<?php


?>
@extends('welcome')

@section('titile')
COVID
@stop

@section('Title')

<span class="text-info">{{request('Locale')}}</span> 

@stop

@section('content')

<div class="card bg-transparent z-depth-0" style="display: none" id="load">
<div class="card-body text-center fa-2x">
	<div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
	</div> 
</div>

<div class="card mb-3 bg-danger" style="display: none" id="nope">

	<h2 class="card-header bg-danger rounded text-white">You are not in Head Office</h2>
	
</div>

					<div class="card mb-3" id="yup" style="display: none"  >
					<h4 class="card-header primary-color text-white" id="yup">Please enter your name</h4>
							<form>	
					<div class="card-body">
						<div class="input-group">
  <input type="text"  id="forename" name="forename" required   aria-label="First name" placeholder="Forename" class="form-control text-capitalize" autofocus />
  <input type="text"  id="surname" name="surname" required  aria-label="Last name" placeholder="Surname" class="form-control text-capitalize" />
</div>

	
						
						<div class="md-form d-none">
  <input type="text" id="datetime" readonly value="{{Carbon::now('Europe/London')}}" class="form-control required">
  <label for="Name">Time</label>
</div>
							
						<div class="md-form d-none">
  <input type="text" id="device" readonly value="{{$device}}" class="form-control required">
  <label for="device">device</label>
</div>
						
						
	
						
						</div>
						
						<div class="card-footer d-flex">
						<button type="submit" class="btn next mx-auto btn-primary" id="Submit"><i class="fas fa-clock"></i> Submit </button>
						</div>
						
						</form>		
					</div>



<script>


	

	
	 window.onload = function() {
		 
		 	$.extend($.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

$(document).on('keydown', ':focusable', function (e) {
    if (e.which == 32) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});
		 
		 var str = "{{$_SERVER['REMOTE_ADDR']}}";
		var skip = str.startsWith('10.4.252');
		 var Tablet = <?php echo $tablet ?>;
	
	if(!skip){

        var startPos;
        var startPosLat;
        var startPosLong;
        var distance;
      
        if (navigator.geolocation) {

          startPosLat = 51.550591;
          startPosLong = -1.850180;

          $("#startLat").text(startPosLat);
          $("#startLon").text(startPosLong);
      
          navigator.geolocation.getCurrentPosition(function(position) {
          

            distance = calculateDistance(startPosLat, startPosLong,position.coords.latitude, position.coords.longitude)
            $("#distance").text(distance);

            if(distance < 1){
              $("#yup").show();
            }else {
				
				$('#nope').show();
		  
												
        }})
		}
	}else {
				
				$('#yup').show();
		  
												
        }
		 
		 $('#forename').focus();
		 
	 }
      // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
      // http://www.movable-type.co.uk/scripts/latlong.html
      // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
      function calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = (lat2-lat1).toRad();
        var dLon = (lon2-lon1).toRad();
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d;
      }
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
	


$('form').on('submit',function(event){
	event.preventDefault()
var name = $.trim($('#forename').val())+' '+$.trim($('#surname').val());
var time = $('#datetime').val();
var device = $('#device').val();
	var locale = '{{request('Locale')}}';
		
	
	$.post('CovidCheck',{locale: locale, name:name, time:time, device:device}).done(function(result, statusText, xhr){
							 if(xhr.status === 211){
								var Org =  prompt('Please Provide your Organisation');
								 
								 $.post('CovidCheck',{locale: locale, name:name, time:time, device:device, org: Org}).done(function(result){
									 
									 alert(result);
									 location.reload();
return false;
									 
								 })
								
								
							 }
		else{
			 alert(result);
			
			 $('#yup').hide(); 
			$('#load').show();
			
			 location.reload();
return false;
		}
							  });
				
				
	
	
})
	
	
	
	
	
	
	</script>


@endsection