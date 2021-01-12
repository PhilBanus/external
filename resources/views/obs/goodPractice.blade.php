<?php 

if($_GET['id'] != 0){ 
$Project = DB::table('Project')->where('Project_ID',$_GET['id'])->first();
	$ID = $_GET['id'];
	$Name = $Project->Name;


}else{ 
	
	$ID = 0;
	$Name = "Swindon - Head Office"; 


} ?>

@extends('welcome')
@section('titile')
HTUK
@stop
@section('Title')

{{$Name}} <br> <span class="accent">Good Practice</span>

@stop
@section('content')
<div class="hidden" style="color: transparent" id="GeoLocate"></div>
<style>

	html{
		--accent: #5cb85c
	}
	
.required{
border-color: red !important;
	background-color: rgba(255,226,227,0.53) !important;
	
	}
	
	.required > .select-dropdown{
border-color: red !important
	}
	
.success, .success > .select-dropdown, .success.select-dropdown{
border-color: green !important;
	background-color: rgba(236,255,234,0.74) !important;;
	
	}

	.accent-color{
		background-color: var(--accent, #024a94) !important
	}

	.accent{
		color: var(--accent, #024a94) !important
	}
</style>
<div class="mx-auto fa-2x col-12 text-center">
               <div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-yellow-only">
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
				<div class="col-lg-8 mx-auto ">
					
					
				
					<div class="card mb-3" style="display: none">
					<h4 class="card-header accent-color text-white">When did this happen?</h4>
					<div class="card-body">
				
<div class="md-form">
  <input placeholder="Select a date" type="text" id="date-picker-example" class="form-control datepicker required">
  <label for="date-picker-example">Date</label>
</div>			
						
						<div class="md-form">
  <input placeholder="Select a time" type="text" id="input-limited-range" class="form-control timepicker required">
  <label for="input-limited-range">Time</label>
</div>
						
						
						
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn next ml-auto btn-primary"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div>
				
					<div class="card mb-3"  style="display: none">
					<h4 class="card-header accent-color text-white">Where did this happen?</h4>
					<div class="card-body">
						
				
						<select class="mdb-select md-form required" id="where">
  <option value="" disabled selected>Choose location</option>
  <?php $Locations = DB::table('UKHT_Occurance_Location')->where(['Site' => $ID, 'Removed' => 0 ])->get();
							
							foreach($Locations as $location){
								?>
							<option value="{{$location->ID}}">{{$location->Name}}</option>
							
							<?php
							}
							
							?>
							
</select>
						
						
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn next ml-auto btn-primary"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div>
					
					<div class="card mb-3"  style="display: none"> 
					<h4 class="card-header accent-color text-white">Describe the Event</h4>
					<div class="card-body">
						
<div class="md-form amber-textarea active-amber-textarea">
  <textarea id="details" class="md-textarea form-control required" rows="3"></textarea>
  <label for="details">Required</label>
</div>		
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn next ml-auto btn-primary"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div>
					
					
					<!-- div class="card mb-3"  style="display: none">
					<h4 class="card-header accent-color text-white">What were you able to do about it?</h4>
					<div class="card-body">
						
<div class="md-form amber-textarea active-amber-textarea">
  <textarea id="actions" class="md-textarea form-control required" rows="3"></textarea>
  <label for="actions">Required</label>
</div>
						
												<div class="switch">
  <label>
     Has the risk been prevented: <br><br> No
    <input type="checkbox" id="prevented">
    <span class="lever"></span> Yes
  </label>
</div>
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn next ml-auto btn-primary"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div --->
					
					<div class="card mb-3"  style="display: none">
					<h4 class="card-header accent-color text-white">Further information</h4>
					<div class="card-body">
	<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Photos</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" ultiple id="photos" accept="image/png, image/jpeg"
      aria-describedby="inputGroupFileAddon01">
    <label class="custom-file-label" for="inputGroupFile01">Choose images</label>
  </div>
</div>
						<br>
						
						<div class="card-title">Your information (optional)</div>
						
						 <div class="form-row">
                <div class="col">
                    <!-- First name -->
                    <div class="md-form">
                        <input type="text" id="materialRegisterFormFirstName" class="form-control">
                        <label for="materialRegisterFormFirstName">First name</label>
                    </div>
                </div>
                <div class="col">
                    <!-- Last name -->
                    <div class="md-form">
                        <input type="email" id="materialRegisterFormLastName" class="form-control">
                        <label for="materialRegisterFormLastName">Last name</label>
                    </div>
                </div>
            </div>
						
			   <!-- Name -->
            <div class="md-form mt-3">
                <input type="text" id="materialSubscriptionFormPasswords" class="form-control">
                <label for="materialSubscriptionFormPasswords">Employer</label>
            </div>
						
						<div class="card-title">Please provide your email if you would like to be notified of any actions taken</div>
						
						<div class="status text-danger"></div>
						<div class="md-form">
        <input type="email" id="email" autocomplete="off" class="form-control">
        <label for="email">E-mail </label>
      </div> <small class="text-danger">your email will remain hidden throughout the process. Once the occurance has been closed your email will be removed from the database. </small>
						
						

						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn btn-sm Review mx-auto btn-primary">Review</button>
						<button class="btn Submit ml-auto btn-primary btn-sm">Submit</button>
						</div>
					</div>
					
				</div>
 




<script>
	
	$('div.card').hide()

$( document ).ready(function() {
	validation(); 
	
	$('input, select, textarea, #email').on('change select keyup blur', function(){
		validation()
		
	})
	
	$('.required, .success').on('change select keyup blur focus mouseout', function(){
		if($(this).val()){
			$(this).addClass('success'); 
			$(this).removeClass('required'); 
			$(this).siblings('input').addClass('success'); 
			$(this).siblings('input').removeClass('required'); 
			console.log('yay')
		}else{
			$(this).removeClass('success')
			$(this).addClass('required'); 
			$(this).siblings('input').removeClass('success')
			$(this).siblings('input').addClass('required'); 
		}
	})
	
	$('.preloader-wrapper').hide();
	$('div.card:first-child').fadeIn();
	
	$('.next').on('click', function(){
		$(this).parents('.card').fadeOut(500,function(){
		$(this).next('.card').stop(500).fadeIn();
			});
	})
	$('.previous').on('click', function(){
		$(this).parents('.card').fadeOut(500,function(){
		$(this).prev('.card').stop(500).fadeIn();
			});
	})
	$('.Review').on('click', function(){
		$(this).parents('.card').fadeOut(500,function(){
		$('.card').stop(500).fadeIn();
		$('.next, .previous, .Review').hide()
			});
	})
	
		var max = "";
  // Date Time Picker Initialization
$('.datepicker').pickadate({ max: new Date(),
							onSet: function(context) {
								validation()
								$('#input-limited-range').val('')
console.log('Just set stuff:', context)
								$('#input-limited-range').pickatime('remove')
								console.log(moment(context['select']).format("YYYY-MM-DD"))
								if(moment(context['select']).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")){
									console.log('today')
									
									$('#input-limited-range').pickatime({ max : moment().hours()+":"+moment().minutes(), onset: function(){ validation() } }).pickatime('show');
									max =  moment().hours()+":"+moment().minutes()
								}else{
									$('#input-limited-range').pickatime({ max : "23:59", onset: function(){ validation() } }).pickatime('show');
									max = "23:59";
								}
								
		$('#input-limited-range').pickatime({ max : max, onset: function(){ validation() } })						
}
})
	
	
	$('#input-limited-range').pickatime({ max : max, onset: function(){ validation() } })
	
	
	
		$('.Submit').on('click',function(){
		
		var site = <?php echo $ID; ?>; 
		var dialog = bootbox.dialog({
   message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> Please wait while we do something...</p>',
   closeButton: false
});
		
		// post data 
		
		var array = []
		var date = $('#date-picker-example').val()
		var time = $('#input-limited-range').val()
		var datetime = moment( date+" "+time ).format('YYYY-MM-DD HH:mm:ss');
		var Cords = $('#GeoLocate').text()
		var where = $('#where').val()
			
		var details = $('#details').val()
	
		var actions = "N/A"
	
	
 var prevented = true;


	
			var name = $('#materialRegisterFormFirstName').val()+" "+$('#materialRegisterFormLastName').val()
			var employer = $('#materialSubscriptionFormPasswords').val()
			var email = $('#email').val()
			
			
		
		
		
		$.post('CloseCallPost', {'Date' : datetime, 'Where' : where, 'Details' : details, 'Actions' : actions, 'Prevented' : prevented,Cords:Cords, 'Name': name, 'Employer': employer, 'Email': email, 'Occurance': 2, 'mode': 1, 'Site': site }).done(function(result){
			console.log(result);
			
								 if($.isNumeric(result)){
									 var LogID = result
									 
									       
            var files = $("#photos").prop("files");
            for (var i = 0; i < files.length; i++) {
                (function (file) {
                    if (file.type.indexOf("image") == 0) {
                        var fileReader = new FileReader();
                        fileReader.onload = function (f) {
                              $.ajax({
                                type: "POST",
                                url: "CloseCallPost",
                                data: {
                                    'file': f.target.result,
                                    'name': file.name,
                                    'LogID': LogID,
									'mode': 2
                                },
                                success: function (photoresult) {
                                    console.log(photoresult)
                                }
                            });
                        };

                        fileReader.readAsDataURL(file);
                    }
                })(files[i]);
            }
  

					$.post('CloseCallPost', {'Date' : datetime, 'Where' : where, 'Details' : details, 'Actions' : actions, 'Prevented' : prevented, 'Name': name, 'Employer': employer, 'Email': email, 'Occurance': 2, 'mode': 3, 'LogID': LogID, 'Site': site }).done(function(result){
									setTimeout(function() {
    dialog.modal('hide');	
					    
						
						bootbox.alert({
    message: "Thanks going back to the homescreen now.",
			centerVertical: true,
    callback: function () {
        window.location.replace('observations?id={{$ID}}')
    }
});
}, 3000);
						
					});
						
						
					
									 
									 
									 
									 
								 }else{
								 
								 $.post('CloseCallPost', {'Date' : datetime, 'Where' : where, 'Details' : details, 'Actions' : actions, 'Prevented' : prevented, 'Name': name, 'Employer': employer, 'Email': email, 'Occurance': 2, 'mode': 4, 'Site': site }).done(function(result){
									setTimeout(function() {
    dialog.modal('hide');	
					    
						
						bootbox.alert({
    message: "Thanks going back to the homescreen now.",
			centerVertical: true,
    callback: function () {
        window.location.replace('observations?id={{$ID}}')
    }
});
}, 3000);
						
						
					});
									 
								 }
		
						
	
		
	
		})
		
            
// do something in the background

		

		
	
	})

	
	
	
});
	
	
	
	
	
	function validation(){
	
		$('.next').each(function(){
		var ok = true
		var eok = true
		
		
		$(this).parents('.card').find('.required, .success').each(function(){
			if(!$(this).val()){ ok = false }else{ ok = true}
		})
			
			var email = $('#email').val()
		  if (email == "") {
      document.querySelector('.status').innerHTML = "";
      eok = true;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          eok = false;
      }else{
		  document.querySelector('.status').innerHTML = "";
          eok = true;
	  }
  }
		
		if(ok && eok){
			$(this).attr('disabled',false)
			$('.Submit').attr('disabled',false)
		}else{
			$(this).attr('disabled',true)
			$('.Submit').attr('disabled',true)
		}
	})
		
	
		
	
	}
	

	
	
	
	

</script>

<script>
var x = document.getElementById("GeoLocate");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "";
  }


function showPosition(position) {
  x.innerHTML = "" + position.coords.longitude +
  "," + position.coords.latitude;
}
</script>

       @stop