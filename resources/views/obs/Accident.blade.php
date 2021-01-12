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

{{$Name}} <br> <span class="accent">Accident</span>

@stop
@section('content')
<div class="hidden" style="color: transparent" id="GeoLocate"></div>
<style>

	:root{
		--accent: #CC0003 
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
		background-color: var(--accent) !important
	}

	.accent{
		color: var(--accent) !important
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
					<h4 class="card-header accent-color text-white">Details of Injured Person:</h4>
					<div class="card-body">
						
						 <div class="form-row">
                <div class="col-sm-6">
                    <!-- First name -->
                    <div class="md-form">
                        <input type="text" id="InjuredFirstName" class="form-control required">
                        <label for="InjuredFirstName">First name</label>
                    </div>
                </div>
                <div class="col-sm-6">
                    <!-- Last name -->
                    <div class="md-form">
                        <input type="email" id="InjuredSurname" class="form-control required">
                        <label for="InjuredSurname">Last name</label>
                    </div>
                </div>
            </div>
						
							<div class="form-row">
                <div class="col-sm-6">
                    <!-- First name -->
                    <div class="md-form">
                        <input type="date" id="InjuredDOB" class="form-control required">
                        <label for="InjuredDOB">Date of Birth</label>
                    </div>
                </div>
                <div class="col-sm-6">
					<div class="col-sm-6">
							<div class="md-form">
						 		<input type="text" id="InjuredPhone" autocomplete="off" class="form-control required">
        						<label for="InjuredPhone">Phone Number </label>
							</div>
						</div>
                    <!-- Last name -->
                
                </div>
            </div>
					<div class="form-row">
						<div class="col-sm-6">
			   <!-- Name -->
            <div class="md-form mt-3">
                <input type="text" id="InjuredEmployer" class="form-control required">
                <label for="InjuredEmployer">Employer</label>
            </div>   <!-- Name -->
							</div>
							<div class="col-sm-6">
            <div class="md-form mt-3">
                <input type="text" id="InjuredOccupation" class="form-control required">
                <label for="InjuredOccupation">Occupation</label>
            </div>
						</div>
						</div>
						
							<div class="form-row">
						<div class="col-sm-6">
			   <!-- Name -->
            <div class="md-form mt-3">
                <textarea type="text" id="InjuredAddress" class="form-control required"></textarea>
                <label for="InjuredAddress">Address</label>
            </div>   <!-- Name -->
							</div>
							<div class="col-sm-6">
            <div class="md-form mt-3">
                <input type="text" id="InjuredPostCode" class="form-control required">
                <label for="InjuredPostCode">Post Code</label>
            </div>
						</div>
						</div>
						
												
																		<div class="switch">
  <label>
     Are they a member of public: <br><br> No
    <input type="checkbox" id="InjuredMember_Of_Public">
    <span class="lever"></span> Yes
  </label>
</div>
																		
				
						
						
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn next ml-auto btn-primary"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div>
					
					<div class="card mb-3"  style="display: none">
					<h4 class="card-header accent-color text-white">Details of Injury:</h4>
					<div class="card-body">
						
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="auto" height="500px" viewBox="0 0 800 1360" xml:space="preserve">
            <!--image overflow="visible" width="800" height="1440" xlink:href="assets/images/demo/ext-image.png"></image-->
            <path id="Head" d="M456.334,69C454.668,37,420,18,401,18c-30.833,0-50.167,31.5-53.167,44.5c-1.915,8.295-2.833,23.5-2.5,28.167s1,12.333,0.667,16.167c2.04,7.695,6.667,23,6.667,33c0.667,5.167,1.167,12.5,3.333,18.833c3,4,22.5,23.333,44.167,23.333s36.5-8.667,45.708-23c2.625-5.625,5-15.25,4.75-18.625c-0.708-5.125,4.708-28.042,5.709-32.708C457.001,100.334,458,101,456.334,69z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="RightEye" d="M378.5,101.25c8.561,0,15.5-4.197,15.5-9.375s-6.939-9.375-15.5-9.375c-9.75,0-15.5,4.197-15.5,9.375S369.939,101.25,378.5,101.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="LeftEye" d="M426.5,101.25c8.561,0,15.5-4.197,15.5-9.375s-5.5-9.375-15.5-9.375c-8.561,0-15.5,4.197-15.5,9.375S417.939,101.25,426.5,101.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="RightEar" d="M337.833,105c-4,4-1.833,17-0.833,20.667s5.833,14.667,7.167,15.833s5.167,4.833,8.5-1.667c0-10-4.627-25.305-6.667-33C345,105,341.833,101,337.833,105z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftEar" d="M450.625,140.375c3.75,6.375,8.875,3.25,10-1.75s7.625-7.875,6.75-23.625s-8.041-11.667-11.041-7.333C455.333,112.333,449.917,135.25,450.625,140.375z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="Nose" d="M393.375,104.25c-0.375,3.125-5,6.375-5.625,13.125c-0.438,4.731,6.25,7.5,10.25,6.5c5,2.625,6.75,0.625,9.875-0.625c5.75,0.875,8-3.25,8-7.75s-4.375-6.75-4.875-12.25s-3.375-7.625-3.125-13.5s-2.375-9.875-6.086-9.875c-5.21,0-6.289,7.875-5.914,10.625S393.75,101.125,393.375,104.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="Mouth" d="M412.25,132.25c-2.256-2.723-6.231-1.652-7.875-0.75c-0.882,0.484-3.5,0.875-5.125-0.375s-6.125-0.125-7.375,1.625s-11.75,5.125-12.625,8.125s8.625,3.25,11,4.125s4.5,3.75,13.125,3.75s10.966-2.787,13.25-3.25s8.125-1.125,8.5-3.5S415.875,136.625,412.25,132.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="Neck" d="M345.667,243.167c15.667-0.833,41.167-2.166,45.333,3.667s15.834,6,19.667,0s38.028-6.245,50.833-4.333c4.95,0.739,9.833,0.81,14.438,0.363c10.976-1.066,20.373-5.078,25.342-10.017c-8.889,0.081-18.524-5.195-31.03-10.721C454.125,215,445.625,206.25,445,203.5s0.125-34.5,0.875-44.5c-9.208,14.333-24.041,23-45.708,23S359,162.667,356,158.667c2.167,6.333,1.5,29.833,0.75,45.333c-8.5,15.25-40,24-48,27.5c2.042,1.655,10.695,6.598,20.857,9.508C334.793,242.493,340.373,243.448,345.667,243.167z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="UpperTorso" d="M524.5,294c-2.018-20.749-37.75-48.25-48.562-51.137c-4.605,0.447-9.488,0.376-14.438-0.363c-12.805-1.911-47-1.667-50.833,4.333s-15.5,5.833-19.667,0s-29.667-4.5-45.333-3.667c-5.294,0.281-10.873-0.674-16.059-2.159c-8.004,3.48-46.033,26.426-52.127,58.308c-0.459,2.402-0.744,4.852-0.814,7.351c-1,35.667,0.003,72.11-0.165,85.722c0.383-0.096,9.666,25.111,12.166,30.778S293.75,441,297.25,447.75C305.5,455.5,344,473,370.5,466s36.5-6.244,65,0.128s52.668-2.794,73.084-27.211c1.25-3.25,4.75-11.75,5.333-15s2.667-6.999,4.084-9.749s7.455-21.675,8.005-21.176C526.678,379.65,525.667,306.001,524.5,294z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer" ></path>
            <path id="LowerTorso" d="M435.5,466.128C407,459.756,397,459,370.5,466s-65-10.5-73.25-18.25c3.5,6.75,2,12,3.75,17.75s5,21.334,0.5,41.501s-1.667,35.666-0.5,40.166c0.785,3.029,2.326,5.001,1.419,8.813C314,567.5,332.834,590.5,402.917,590.5s86.417-20.498,98.75-33.499c-1.666-4.5-0.501-12,2.499-21.167s-3.499-44.667-3.833-52.833s2.501-21.5,2.751-27.584s4.25-13.25,5.5-16.5C488.168,463.334,464,472.5,435.5,466.128z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="Hip" d="M402.917,590.5c-70.083,0-88.917-23-100.498-34.52c-0.44,1.852-1.458,4.137-3.419,7.188c-2.708,4.214-5.009,15.491-6.673,27.332c10.34,9.027,56.21,47.939,84.084,82.636c8.0-3.802,35.957-5.104,49.606-0.453c28.214-33.03,74.964-71.046,85.649-79.515c-1-13.666-8.334-31.667-10-36.167C489.334,570.002,473,590.5,402.917,590.5z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="Groin" d="M376.412,673.136c7.636,9.505,13.921,18.693,17.755,26.864c1-2.167,2.75-2.833,6.833-3.167s5.75,0.834,6.917,1.584c3.8-7.69,10.229-16.519,18.101-25.734C412.368,668.031,384.667,669.334,376.412,673.136z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightShoulder" d="M277.48,299.316c6.094-31.882,44.123-54.828,52.127-58.308c-10.162-2.91-18.816-7.853-20.857-9.508c-8,3.5-15.5,2-26.75,4.25S240.5,249,228.5,273.5s-9.5,57-9.25,65.75c0.034,1.202,0.012,2.258-0.058,3.222C232.058,327.083,262.9,323.345,277.48,299.316z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftShoulder" d="M524.5,294c13.5,30.001,46.022,30.211,58.595,48.439c-0.768-3.438-1.004-7.947-0.345-14.439c1.931-19.007-4.875-52.125-17.875-68.5s-53.125-26.75-63.595-26.654c-4.969,4.939-14.366,8.951-25.342,10.017C486.75,245.75,522.482,273.251,524.5,294z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightUpperArm" d="M276.667,306.667c0.07-2.499,0.354-4.949,0.814-7.351c-14.58,24.029-45.423,27.768-58.288,43.156c-0.437,6.049-2.914,8.093-7.442,14.778C206.5,365,196.5,396.5,193,408.5c-0.507,1.738-0.896,3.229-1.221,4.551c-1.413,17.735,10.718,25.876,24.421,31.618c11.394,4.774,24.501,8.306,33.45,1.543c0.711-1.544,1.634-3.368,2.85-5.712c3.5-6.75,23.363-47.953,24.001-48.111C276.669,378.777,275.667,342.334,276.667,306.667z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftUpperArm" d="M587.573,444.669c14.284-5.985,25.869-14.57,23.177-33.919c-1.625-11.25-17.875-51.25-22-57.25c-2.265-3.294-4.53-6.027-5.655-11.061C570.522,324.211,538,324.001,524.5,294c1.167,12.001,2.178,85.65,1.506,98.992c0.108,0.098,20.827,42.675,23.494,48.175C558.012,454.281,574.009,450.353,587.573,444.669z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightElbow" d="M216.2,444.669c-13.704-5.742-25.834-13.883-24.421-31.618c-1.917,7.803-1.51,9.506-8.779,18.699c-5.907,7.47-15.794,29.063-22.538,48.927c15.882-28.244,68.495,4.695,75.547,19.871c6.154-16.332,11.13-43.69,11.49-47.172c0.245-2.366,0.814-4.26,2.15-7.163C240.702,452.975,227.594,449.443,216.2,444.669z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftElbow" d="M644,484.25c-2.028-7.858-4.954-16.438-9.03-24.074c-4.97-9.31-16.414-30.066-17.72-32.176c-3.25-5.25-5.336-9.194-6.5-17.25c2.692,19.349-8.893,27.934-23.177,33.919c-13.564,5.684-29.562,9.612-38.073-3.502c2.667,5.5,7,11.333,7,17.333c0,1.363,1.692,13.781,4.385,25.354c2.187,9.396,5.372,18.235,6.115,20.146C565.5,491,629.5,447,644,484.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightForearm" d="M160.462,480.677c-2.96,8.722-5.318,17.111-6.462,23.823c-2.028,11.896-8.779,39.212-16.707,62.487c-1.735,5.094-3.563,9.992-5.337,14.495c1.722,9.015,32.508,23.476,42.632,18.606c1.457-2.714,2.764-5.01,3.745-6.587c4.667-7.5,11.917-19.251,24.917-35.251s25.5-39.75,32-55.75c0.0-0.629,0.508-1.285,0.76-1.953C228.958,485.372,176.345,452.433,160.462,480.677z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftForearm" d="M670.833,580.061c-2.89-7.644-5.897-16.096-8.083-21.561c-4-10-12.75-51-18.75-74.25C629.5,447,565.5,491,567,504c7,18,35.75,60.25,40.375,65.875s16.49,23.007,19.5,28.25C633.414,608.279,672.667,589.667,670.833,580.061z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightWrist" d="M131.956,581.482c-5.112,12.975-9.774,22.651-10.456,24.143c-0.886,1.939-1.456,3.337-2.977,4.62c9.057,0.416,28.988,8.686,43.015,19.44c2.127-7.809,8.37-20.88,13.05-29.598C164.464,604.958,133.678,590.497,131.956,581.482z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftWrist" d="M686.75,610.25c-8.5-4-5.75-8.25-9.5-15c-1.7-3.061-4.019-8.847-6.417-15.189c1.834,9.606-37.419,28.219-43.958,18.064c1.544,2.689,5.188,10.48,8.506,17.668c3.15,6.824,6.007,13.104,6.494,13.957C656.75,617.834,678.333,609.666,686.75,610.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightHand" d="M160.833,633.167c0.096-0.975,0.344-2.156,0.705-3.481c-14.027-10.755-33.958-19.024-43.015-19.44c-1.911,1.612-5.326,3.042-12.773,5.13c-1.854,0.52-3.833,1.291-5.874,2.231c-12.688,5.84-27.892,18.435-31.876,21.019c-4.625,3-7.75,8.375-11.875,10.5s-4.125,8.625,0,10.5s9.625,0.125,13-1.5s9.042-8.457,15.5-10.5c3.788-1.198,7.625-1.5,7.625,0.125s-8.5,22.375-9.125,25.5s-3.875,13.875-5.875,21.125s-5.5,21.25-6.75,29.25s0.875,11.75,5.125,12.625s7.875-7.625,8.646-10.625s2.854-12.75,3.979-15.5s6.625-18.75,8-22s2.375-8.625,4.375-7.75s-0.375,5.875-1.75,9.75S91.75,714.875,91,718.75s-5,19.75-5.25,22.5s-1.875,8.75,2.75,10.5s7.75-1.875,9.5-5.625s5.375-17.625,7.375-26.125s5.75-19.5,7.125-24s2.125-8,3.875-7.875s1.5,2.5,0.75,4.75S111,713.5,110,718.5s-4.25,16.125-5.375,20.375s-1.75,9.25,2.5,10.75s6.875-1.5,8.75-4.75s7.875-21.5,9.369-27.125s4.756-18.5,6.131-22.375s2.5-5.625,3.625-5.5s0.25,2.625-1.125,7s-5.375,18.5-7.125,25s-2.25,9.625,0,12s7.083-0.541,8.25-2.541s3-11,5.667-16.333c1.676-3.352,3.669-11.246,6.53-19.381c1.691-4.808,4.336-9.699,5.636-13.786c0.352-1.106,0.67-2.172,0.973-3.219c2.707-9.367,3.628-16.586,6.027-25.281C162.5,643.667,160,641.667,160.833,633.167z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftHand" d="M740.25,640.25c-2.75-3.75-17.5-11.5-21.75-14.5c-2.125-1.5-7.938-4.375-14.281-7.375S691,612.25,686.75,610.25c-8.417-0.584-30,7.584-44.875,19.5c1,1.75-0.875,7.125,0.125,16.25s4.125,23.25,6.375,32.125s7,18.375,8.5,22.875s9.403,29.364,12.625,32c2.75,2.25,7.5,0.75,8.25-2.75s-1.625-10.875-2.5-14.125s-5.625-19.25-6.5-21.75s-2-5.125-0.25-5.125s2.125,2.75,3.25,5.625s5.875,19.5,6.875,24.125s4.5,17,6.25,21.75s5,10,9,9.75s4.875-4.75,5.125-8.375s-5.875-23.5-6.375-27.625s-5.375-19.25-6.125-21.25s-1.375-5,0.625-5.125s2.875,5.625,3.75,8.625s9.75,31.875,10.25,35.5s2.625,14.5,6,17.75c2.744,2.643,5.625,3.875,8.625,0.875s2.25-10,0.875-15.25s-4.625-21.125-5.5-25s-6.375-20.875-7.25-24s-2.125-5.375-1.125-5.75s2.25,1.125,3.5,5.25s6.625,20.5,8.375,25.5s1.5,11.625,4.125,17.375s7,7.625,10.625,7.125s4.277-7.391,4.375-10.125s-4.75-20.5-6.25-27.375s-5.25-16.625-6.5-23s-7.375-23.375-8.625-26s-0.625-4.75,2.5-3.875s9.25,2.625,13,7.625s10.875,6.75,13.375,7s8.5,0.375,9.25-6.375S743,644,740.25,640.25z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightUpperLeg" d="M292.327,590.5c-2.021,14.389-3.102,29.611-2.827,34c0.5,8-6.5,46-11.5,70c-3.981,19.107-12.131,56.915-14.375,92.478c-0.575,9.105,0.172,18.063,0.375,26.522c0.845,35.062,9.541,55.489,16.139,69.427c35.654,13.2,53.799,56.767,88.484,34.358c2.478-11.204,8.03-39.965,9.627-52.285c1.75-13.5,10.083-66.333,11.815-88.167s1.269-38.833,0.435-43.166s-0.167-12.667-0.417-21.334s3.083-10.166,4.083-12.333c-3.834-8.171-10.12-17.359-17.755-26.864C348.538,638.439,302.667,599.527,292.327,590.5z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftUpperLeg" d="M426.018,672.683c-7.872,9.216-14.301,18.044-18.101,25.734c1.167,0.75,3.083,5.083,4.333,8.083s1,20.75-0.25,31.5s1.5,59.75,3.75,71s8.417,55.334,10.084,67.001s5.166,31.5,7.166,39.833c36.334,25.833,52.479-20.023,89.334-33.168c5.667-10,13.999-27.333,15.999-52.333c0.874-10.926,1.603-27.168,0.824-43.078c-1.002-20.493-3.844-40.436-5.157-47.754c-2.333-13-14.834-82.834-17-92.667s-4.333-40-5.333-53.666C500.981,601.637,454.231,639.652,426.018,672.683z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightKnee" d="M280.139,882.927c1.212,2.56,2.353,4.901,3.361,7.073c6.5,14,6,37.5,6.5,61c0.078,3.657,0.262,7.679,0.348,11.921c10.591,44.449,51.024,21.223,68.904,3.938c0.325-1.35,0.929-2.658,1.373-3.483c0.875-1.625,2.125-10.625,3.375-16.625s2-18.5,4-26.75c0.175-0.721,0.386-1.643,0.623-2.715C333.938,939.693,315.793,896.127,280.139,882.927z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftKnee" d="M433,915.834c2,8.333,4.333,14.167,4.333,24s4,22.167,5.167,25c17.417,18.167,61,46.833,69.25-8.834c0-11.5,3.25-39.334,3.584-50.334s1.333-13,7-23C485.479,895.811,469.334,941.667,433,915.834z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightLowerLeg" d="M290.348,962.921c0.085,4.202,0.072,8.622-0.239,13.122c-1.393,20.15-4.799,41.913-4.109,52.957c1,16,4.5,62,7.5,83s6.875,83,7.125,87.5c0.06,1.082,0.008,2.26-0.107,3.478c6.992-11.484,36.463-9.869,44.754-6.101c-1.079-3.858-2.297-10.522-2.438-15.043c-0.167-5.333,7.5-47.167,8.333-58.333s3.667-29.5,4.333-33.333s5.75-17.168,9.5-25.918s3.5-20,2.5-27.25s-3.75-45.75-4.5-51.375s-2.25-13.125-3.5-15.125c-0.615-0.984-0.563-2.333-0.248-3.642C341.372,984.144,300.939,1007.37,290.348,962.921z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftLowerLeg" d="M442.5,964.834c1.167,2.833-1.25,16.416-4.25,33.916s-4.083,48.751-3.083,56.751s9.667,28.833,11.833,35s0.667,8.833,2,20.833s7.167,47.334,9,59s1.5,21-0.667,27.167C464,1193,500,1190.5,503.5,1206c-0.75-4.25-1.75-10-1-22.25s5-60.25,8.25-87.75s6.75-82,4.5-96.5s-3.5-32-3.5-43.5C503.5,1011.667,459.917,983.001,442.5,964.834z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightAnkle" d="M300.518,1202.978c-0.363,3.847-1.388,8.108-1.768,11.147c-0.5,4,2.125,8.625,1.375,15.875c-0.034,0.332-0.091,0.67-0.146,1.008c12.665-4.423,40.242,8.668,48.998,21.075c1.177-7.814,1.063-15.23-0.478-19.082c-1.667-4.166-2.167-7.167-0.833-12.5s-0.667-18.667-1.833-21.834c-0.178-0.482-0.368-1.097-0.562-1.79C336.981,1193.108,307.51,1191.493,300.518,1202.978z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftAnkle" d="M457.333,1197.501c-2.167,6.167-3.166,21-2.666,22.667s0.833,9.333-1,13.499s-1.667,13.334-0.667,21.5c6-13.583,37-29.917,50-23.667c-2-5.5-2.25-5.75-1-9.25s2.25-12,1.5-16.25C500,1190.5,464,1193,457.333,1197.501z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="RightFoot" d="M299.979,1231.008c-1.15,7.047-6.68,15.393-10.854,23.742c-4.375,8.75-13,19.375-21,28.25c-2.286,2.536-4.111,5.777-5.548,9.185c-3.593,8.519-4.755,18.083-4.577,20.315c0.25,3.125,3.125,5.875,6.125,5.5c0,1.125,1,2.875,4.25,2.5c0.25,2,0,6.25,8.25,5c4,4.875,7.875,4.625,10.75,1.75c5.292,6.314,10.383,6.492,15.75,5.809c4.375-0.558,11.125-7.809,12.25-10.559s2.25-3.875,5.875-6.75c1.972-1.563,3.795-4.086,5.156-8.824c0.683-2.376,1.247-5.519,1.657-8.232c0.275-1.824,0.481-3.456,0.604-4.525c0.667-5.833,0.667-10.834,4.5-21.334c8.667-3.667,14-10.333,15.5-18.833c0.113-0.642,0.215-1.28,0.311-1.918C340.221,1239.676,312.645,1226.585,299.979,1231.008z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
            <path id="LeftFoot" d="M541.166,1292.167c-1.167-4.167-9.666-14.833-16.333-21.833s-7.833-11.333-12.5-18.667S505,1237,503,1231.5c-13-6.25-44,10.084-50,23.667c1,8.166,12,15,15,16.5s3,4.167,3.833,7s2.834,10.667,3.834,21s6.25,15.749,8.666,17.666s2.834,3,3.667,4.667s3.417,6.083,11.167,9.75s14.999-1.167,16.749-4.75c4.5,4.5,11.084,0.416,12.25-2.084c4.916,1.416,7.834-3.25,7.917-5.166c1.583,0.334,3.584-1.082,4.25-2.582c0.833,0.334,2.5,0.666,5-3.334S542.333,1296.334,541.166,1292.167z" fill="#000000" fill-opacity="0" stroke="#000000" stroke-opacity="1" cursor="pointer"></path>
           </svg>

					
																		<div class="switch">
  <label>
     Was the injured person advised to see their doctor or visit a hospital?: <br><br> No
    <input type="checkbox" class="required" id="InjuredHospital">
    <span class="lever"></span> Yes
  </label>
</div>
						
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn next ml-auto btn-primary injuryarrow"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div>		

			
					<div class="card mb-3"  style="display: none">
					<h4 class="card-header accent-color text-white">Where did this happen?</h4>
					<div class="card-body">
						
				<div>
					<label for="where">Location</label>
					</div>
						<div>
							@desktop
						<select class="selectpicker required" id="where"  title="Choose one of the following...">
							@elsedesktop
						<select class="required form-control" id="where"  title="Choose one of the following...">	
							@enddesktop
  <?php $Locations = DB::table('UKHT_Occurance_Location')->where(['Site' => $ID, 'Removed' => 0 ])->get();
							
							foreach($Locations as $location){
								?>
							<option value="{{$location->ID}}">{{$location->Name}}</option>
							
							<?php
							}
							
							?>
							
</select>
						</div>
						<div class="ml-2">
						<label for="weather">Weather Conditions (can select Multiple)</label>
							</div>
						<div>
							@desktop
						<select class="required selectpicker " id="weather" multiple>
						
							@elsedesktop
						<select class="required form-control  " id="weather" multiple>	
							@enddesktop
  <option  data-icon="fa-sun-dust">Dry</option>
  <option data-icon="fa-raindrops">Wet</option>
  <option data-icon="fa-windsock">Windy</option>
  <option data-icon="fa-snowflake">Cold</option>
  <option data-icon="fa-temperature-high">Warm</option>
</select>
							</div>
						<div class="mt-2">
						<label for="light">Lighting Conditions (can select multiple)</label>
						</div>
						<div>
							@desktop
						<select class="required selectpicker " id="light" multiple>
						
							@elsedesktop
						<select class="required form-control  " id="light" multiple>	
							@enddesktop
  <option>Very Bright</option>
  <option>Light</option>
  <option>Overcast</option>
  <option>Dark</option>
  <option>Artifical Lighting</option>
</select>
							</div>
						
						
						
						
						</div>


						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn next ml-auto btn-primary"><i class="fas fa-arrow-right"></i></button>
						</div>
					</div>

					
					<div class="card mb-3"  style="display: none"> 
					<h4 class="card-header accent-color text-white">Describe the Event and What happened</h4>
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
					
					
					<div class="card mb-3"  style="display: none">
					<h4 class="card-header accent-color text-white">What were you able to do about it?</h4>
					<div class="card-body">
						
<div class="md-form amber-textarea active-amber-textarea">
  <textarea id="actions" class="md-textarea form-control required" rows="3"></textarea>
  <label for="actions">Required</label>
</div>
						
							 <div class="md-form">
                        <input type="text" id="Passed_To" class="form-control">
                        <label for="materialRegisterFormFirstName">Suggest an action owner: </label>
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
					</div>
					
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
						
						<div class="card-title">Your information</div>
						
						 <div class="form-row">
                <div class="col-sm-6">
                    <!-- First name -->
                    <div class="md-form">
                        <input type="text" id="materialRegisterFormFirstName" class="form-control required">
                        <label for="materialRegisterFormFirstName">First name</label>
                    </div>
                </div>
                <div class="col-sm-6">
                    <!-- Last name -->
                    <div class="md-form">
                        <input type="email" id="materialRegisterFormLastName" class="form-control required">
                        <label for="materialRegisterFormLastName">Last name</label>
                    </div>
                </div>
            </div> 
					
					<div class="form-row">
						<div class="col-sm-6">
			   <!-- Name -->
            <div class="md-form mt-3">
                <input type="text" id="materialSubscriptionFormPasswords" class="form-control required">
                <label for="materialSubscriptionFormPasswords">Employer</label>
            </div>   <!-- Name -->
							</div>
							<div class="col-sm-6">
            <div class="md-form mt-3">
                <input type="text" id="occupation" class="form-control required">
                <label for="occupation">Occupation</label>
            </div>
						</div>
						</div>
				
						
								<select class="custom-select md-form required" id="Member_Of_Public">
  <option value="" disabled selected>Please select who you are:</option>

							<option value="Member Of Publit">Member Of Public</option>
							<option value="Subcontractor">Subcontractor</option>
							<option value="HOCHTIEF Employee">HOCHTIEF Employee</option>
			
</select>
						

						<hr>
						
						<div class="card-title">Please provide your email address and Phone number:</div>
						
						<div class="form-row">
						<div class="col-sm-6">
							<div class="md-form">
						 		<input type="text" id="phone" autocomplete="off" class="form-control required">
        						<label for="phone">Phone Number </label>
							</div>
						</div>
						<div class="col-sm-6">
						<div class="status text-danger"></div>
						<div class="md-form">
        <input type="email" id="email" autocomplete="off" class="form-control required">
        <label for="email">E-mail </label>
      
						</div> <!--small class="text-danger">your email will remain hidden throughout the process. Once the occurance has been closed your email will be removed from the database. </small -->
						</div>
						</div>


						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn previous mr-auto btn-primary"><i class="fas fa-arrow-left"></i></button>
						<button class="btn btn-sm Review mx-auto btn-primary">Review</button>
						<button class="btn Submit ml-auto btn-primary btn-sm">Submit</button>
						</div>
					</div>
					
				</div>
 




<script>
	var injuries = [];
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
								$('#input-limited-range').pickatime('remove')
								if(moment(context['select']).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")){
									
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
	
	
	$('path').on('click',function(){
		var title = $(this).attr('id');
			var object = $(this);
		if($(this).attr('on') === 'true'){
			
			
			bootbox.confirm("Are you sure you would like to remove the "+title.replace(/([a-z])([A-Z])/g,'$1 $2').trim()+" ("+injuries.filter(p => p.BodyPart == title)[0]['Type']+") injury!", function(result){ 
   if(result === true){
	  
	   
	   injuries = injuries.filter(function(elem){
		   return elem.BodyPart != title
	   })
	   
	   object.attr('on','false')
			object.attr('fill','black');
			object.attr('fill-opacity',0)
	   validation();
   }
});
	validation()		
		}else{
			
			$(this).attr('on','true')
			$(this).attr('fill','red');
			$(this).attr('fill-opacity',0.4)
			
			bootbox.prompt({
    title: title ,
				message: 'Please Select Type of Injury',
    inputType: 'select',
    inputOptions: [
		 {
        text: 'Please Choose...',
        value: '',
    },
		@foreach(DB::table('UKHT_Occurance_Injury_Type')->get() as $injury)
    {
        text: '{{$injury->Name}}',
        value: '{{$injury->Name}}',
    },
		@endforeach
   
    ],
    callback: function (result) {
		if(result != false && result != null){
			if(result === "Other"){
				bootbox.prompt("Please elaborate!", function(other){ 
					if(result != false && result != null){
				
				injuries.push({ BodyPart: title,
						    Type: other});
			validation()
				
			}
			
			
		else{
			
			object.attr('on','false')
			object.attr('fill','black');
			object.attr('fill-opacity',0);

			validation()
			
		}
				})
			}else{
				
				injuries.push({ BodyPart: title,
						    Type: result});
			validation()
				
			}
			
			
		}else{
			
			object.attr('on','false')
			object.attr('fill','black');
			object.attr('fill-opacity',0);
			validation()
			
		}
    }
});
			
		}
		
		
		
	})
	
	
		$('.Submit').on('click',function(){
		
		var site = <?php echo $ID; ?>; 
		var dialog = bootbox.dialog({
   message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> Please wait while we do something...</p>',
   closeButton: false
});
			
			var Weather = $('#weather').val().toString();
			var Lighting_Conditions = $('#light').val().toString();

 			var Member_Of_Public = $('#Member_Of_Public').val();

			
			var Phone = $('#phone').val(); 
			var Occupation = $('#occupation').val(); 
		
		// post data 
		
		var array = []
		var date = $('#date-picker-example').val()
		var time = $('#input-limited-range').val()
		var datetime = moment( date+" "+time ).format('YYYY-MM-DD HH:mm:ss');
		var Cords = $('#GeoLocate').text()
		var where = $('#where').val()
			
		var details = $('#details').val()
	
		var actions = $('#actions').val()
	
		if($('#prevented').is(":checked")){
 var prevented = true;
}else{ 
var prevented = false;
}	
	
			var name = $('#materialRegisterFormFirstName').val()+" "+$('#materialRegisterFormLastName').val()
			var employer = $('#materialSubscriptionFormPasswords').val()
			var email = $('#email').val()
			
			var Passed_To = $('#Passed_To').val()
			var InjuredFirstName = $('#InjuredFirstName').val();
			var InjuredSurname = $('#InjuredSurname').val();
			var InjuredDOB = $('#InjuredDOB').val();
			var InjuredPhone = $('#InjuredPhone').val();
			var InjuredEmployer = $('#InjuredEmployer').val();
			var InjuredOccupation = $('#InjuredOccupation').val();
			var InjuredAddress = $('#InjuredAddress').val();
			var InjuredPostCode = $('#InjuredPostCode').val();
				if($('#InjuredMember_Of_Public').is(":checked")){
 var InjuredMember_Of_Public = true;
}else{ 
var InjuredMember_Of_Public = false;
}	
			
				if($('#InjuredHospital').is(":checked")){
 var InjuredHospital = true;
}else{ 
var InjuredHospital = false;
}	
			
			
		
		
		
		$.post('createOccurance', {'Date' : datetime, 'Where' : where, 'Details' : details, Weather:Weather, Lighting_Conditions:Lighting_Conditions, Member_Of_Public:Member_Of_Public, Phone:Phone, Occupation:Occupation, 'Actions' : actions, 'Prevented' : prevented,Cords:Cords, 'Name': name, 'Employer': employer, 'Email': email, 'Occurance': 4, 'Site': site,
								  InjuredFirstName:InjuredFirstName,
								  InjuredSurname:InjuredSurname,
								  InjuredDOB:InjuredDOB,
								  InjuredPhone:InjuredPhone,
								  InjuredEmployer:InjuredEmployer,
								  InjuredOccupation:InjuredOccupation,
								  InjuredAddress:InjuredAddress,
								  InjuredPostCode:InjuredPostCode,
								  InjuredMember_Of_Public:InjuredMember_Of_Public,
								   InjuredHospital:InjuredHospital, Passed_To: Passed_To
								  }).done(function(result){
			
								 if($.isNumeric(result)){
									 var LogID = result
			
									 	InjuryTest(injuries,LogID);
									       
            var files = $("#photos").prop("files");
            for (var i = 0; i < files.length; i++) {
                (function (file) {
                    if (file.type.indexOf("image") == 0) {
                        var fileReader = new FileReader();
                        fileReader.onload = function (f) {
                              $.ajax({
                                type: "POST",
                                url: "createOccurancePhotos",
                                data: {
                                    'file': f.target.result,
                                    'name': file.name,
                                    'LogID': LogID,
									'mode': 2
                                },
                                success: function (photoresult) {

                                }
                            });
                        };

                        fileReader.readAsDataURL(file);
                    }
                })(files[i]);
            }
  

					$.post('SendOccuranceEmail', {'Date' : datetime, 'Where' : where, 'Details' : details, 'Actions' : actions, 'Prevented' : prevented, 'Name': name, 'Employer': employer, 'Email': email, 'Occurance': 4, 'mode': 3, 'LogID': LogID, 'Site': site }).done(function(result){
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
								 
								 $.post('SendOccuranceEmail', {'Date' : datetime, 'Where' : where, 'Details' : details, 'Actions' : actions, 'Prevented' : prevented, 'Name': name, 'Employer': employer, 'Email': email, 'Occurance': 4, 'mode': 4, 'Site': site }).done(function(result){
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
		
		
	
		$('.next, .Submit').each(function(){
		var ok = true
		var eok = true
		
		
		$(this).parents('.card').find('.required, .success').each(function(){
			if(!$(this).val() || $(this).val().length == 0 ){ ok = false }else{ ok = true}
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
	

	
	function InjuryTest(injuries, id){
		
		 
								 $.post('UpdateInjuries', {'Occurance_ID':id, Injuries:injuries}).done(function(res){
									 console.log(res)
								 }); 
																										 
		
	}
	
	
	

</script>



       @stop