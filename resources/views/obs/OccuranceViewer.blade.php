@extends('obs.OccuranceMainPage')
@section('content')



<div class="body" style="display: none;">

	
	
	 <style>
      .map {
        height: 400px;
        width: 100%;
      }
		 
		 .ol-popup{
			 margin-left: -17.5px;
			 margin-top: -300%;
		 }
    </style>
<?php use Carbon\Carbon; 
$now = Carbon::now();

$AdminOnly = DB::table('UKHT_Occurance_Teams')
	->where('Member_ID', session('MY_ID') )
	->exists();
	
	
$ViewOnly = DB::table('UKHT_Occurance_Close_Call')
	->where('ID', $_GET['id'] )
	->where( 'Sign_Off', 1 )
	->exists();

$Actioner = DB::table('UKHT_Occurance_Close_Call')
	->where('ID', $_GET['id'] )
	->select('HSQE_Actioner as ID')
	->where('HSQE_Actioner', session('MY_ID') );

$ActionOnly = DB::table('UKHT_Occurance_Teams')
	->select('Member_ID as ID')
	->where('Member_ID', session('MY_ID') )
	->union($Actioner)
	->exists();



?>
<script>

	$(document).ready(function(){
			
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "md-toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": 300,
  "hideDuration": 1000,
  "timeOut": 0,
  "extendedTimeOut": 0,
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
	"tapToDismiss": false
}
	})

</script>
<?php 

$DATA = DB::table('UKHT_Occurance_Close_Call')->where('ID',$_GET['id'])->first(); 

$Occurance = DB::table('UKHT_Occurance')->where('ID',$DATA->Occurance)->first();

$Photos = DB::table('UKHT_Occurance_Photos')->where('Occurance_ID','=',$DATA->ID)->where('Post','!=',1);
$PostPhotos = DB::table('UKHT_Occurance_Photos')->where('Occurance_ID',$DATA->ID)->where('Post','=',1);
$HistPhotos = DB::table('UKHT_Occurance_Historic_Photo')->where('Occurance_ID',$DATA->Global_ID);

if($DATA->Site == 0){
		$SiteName = "Head Office";
	}else{
		$site = DB::table('Project')->where('Project_ID',$DATA->Site)->first();
		$SiteName = $site->Name;
	}

if(is_int($DATA->Location)){
$loc = DB::table('UKHT_Occurance_Location')->where('ID',$DATA->Location)->first();
	$locName =$loc->Name; 
}else{
	$locName =$DATA->Location;
}

if($DATA->Email){
	
	?>
<script> 
	$(document).ready(function(){
		
	
		
Command: toastr["warning"]("Please note, The submitter will recieve an email of all actions taken.", "Email Added")

	}); 
</script>


<?php
	
	
}


if($DATA->Risk_Prevented){
	
	?>
<script> 
	$(document).ready(function(){
		
	
		
Command: toastr["success"]("", "Risk Prevented")

	}); 
</script>


<?php
	
	
}else{
		?>
<script> 
	$(document).ready(function(){
		
	
		
Command: toastr["error"]("", "Risk NOT Prevented")

	}); 
</script>


<?php
	
}

	
	if(!$DATA->Sign_Off && $DATA->Actions_Taken_HSQE && !$DATA->ReAllocated){
		
		
	


?>
	
	
	<div class="col-12 adminonly  m-0 p-3">
	<div class="card  ">
	
		<h3 class="card-header bg-success">Closure</h3>
	
		<div class="card-body">
				<div id="RootUpdate" class="adminonly">
		
			
			<select class="mdb-select md-form colorful-select" searchable="Search here.." id="Roots">
  <option value="" disabled selected>Choose Root</option>
  <?php 
			$Roots = DB::table('UKHT_Occurance_Root')->where("Removed",0)->get();
				
			foreach($Roots as $Root){
			?>
				<option value="{{$Root->Root}}" data-id="{{$Root->ID}}">{{$Root->Root}}</option>
  
				
				<?php
			}
				?>
  
</select>
<label class="mdb-main-label">Root Cause</label>
			
			<div>
			<select class="mdb-select md-form subRoots" searchable="Search here.." id="SubRoots" disabled>
  <option value="" disabled selected>Choose Root first</option>
			</select>
			<label class="mdb-main-label subRootLabel">Sub Root</label>
		</div>
		<?php
			$Roots = DB::table('UKHT_Occurance_Root')->where("Removed",0)->get();
				
			foreach($Roots as $Root){
			?>
			<div style="display: none">		
		<select class="mdb-select md-form subRoots" style="display: none" searchable="Search here.." id="SubRoots{{$Root->ID}}">
  <option value="" disabled selected>Choose Sub Root</option>
  <?php 
			
			$Roots = DB::table('UKHT_Occurance_Root_Sub')->where('Root_ID',$Root->ID)->where("Removed",0)->get();
				
			foreach($Roots as $Root){
			?>
				<option value="{{$Root->Sub_Name}}" data-id="{{$Root->Root_ID}}" data-value="{{$Root->ID}}">{{$Root->Sub_Name}}</option>
  
				
				<?php
			}
				?>
</select>
<label class="mdb-main-label">Sub Category</label>
  </div>
				
				<?php
			}
		?> 
			
	
		</div>

			<div class="btn btn-lg btn-primary adminonly disabled" id="CloseOut">Close</div>
	
		</div>
	
	</div>
	
</div>	
	
	<?php
	
}
?>
	<div class="col-12 viewOnly m-0 p-3" style="display: none">
	<div class="card">
		<h3 class="card-header bg-success">CLOSED</h3>
		<div class="card-body">
		Root Cause: {{$DATA->Root_Cause}} / {{$DATA->Sub_Root}}
		</div></div></div>

<div class="col-md-6 float-right  m-0 p-3">

	<div class="card">
<h4 class="card-header primary-color-dark text-white">HSQE Information</h4>
	<div class="card-body p-0">
		
		<div class="btn btn-lg bg-info adminonly" id="ChangeOccurance">Not a {{$Occurance->Name}}?</div>
		
		<p>
		<?php 
		
		if($DATA->Category){
			?>
		<div class="card-title p-2 mt-2 ml-0 mr-0 {{$Occurance->Class}}">Category </div>
	<div class="card-body">
		
		{{$DATA->Category}} \ {{$DATA->Sub}}
			
		<div class="btn btn-sm bg-secondary adminonly" id="ChangeCategory">change</div>
		
		<div id="categoriesUpdate" class="adminonly" style="display: none">
		
			
			<select class="mdb-select md-form colorful-select" searchable="Search here.." id="Cats">
  <option value="" disabled selected>Choose Category</option>
  <?php 
			$Categories = DB::table('UKHT_Occurance_Categories')->where("Removed",0)->get();
				
			foreach($Categories as $Cat){
			?>
				<option value="{{$Cat->Category_Name}}" data-id="{{$Cat->ID}}">{{$Cat->Category_Name}}</option>
  
				
				<?php
			}
				?>
  
</select>
<label class="mdb-main-label">Categories</label>
			
			<div>
			<select class="mdb-select md-form subCats" searchable="Search here.." id="SubCats" disabled>
  <option value="" disabled selected>Choose Category first</option>
			</select>
			<label class="mdb-main-label"Sub Category</label>
		</div>
		<?php
			$Categories = DB::table('UKHT_Occurance_Categories')->where("Removed",0)->get();
				
			foreach($Categories as $Cat){
			?>
			<div style="display: none">		
		<select class="mdb-select md-form subCats" style="display: none" searchable="Search here.." id="SubCats{{$Cat->ID}}">
  <option value="" disabled selected>Choose Sub Category</option>
  <?php 
			
			$Categories = DB::table('UKHT_Occurance_Sub')->where('Category_ID',$Cat->ID)->where("Removed",0)->get();
				
			foreach($Categories as $Cat){
			?>
				<option value="{{$Cat->Sub_Name}}" data-id="{{$Cat->Category_ID}}" data-value="{{$Cat->ID}}">{{$Cat->Sub_Name}}</option>
  
				
				<?php
			}
				?>
</select>
<label class="mdb-main-label">Sub Category</label>
  </div>
				
				<?php
			}
		?> 
			
		<div class="btn btn-primary disabled" id="SaveCategory" >Save</div>
			
		
		</div>
		
		</div>
		
			
			<?php
		}else{
			?>
			
			<select class="mdb-select md-form colorful-select adminonly" searchable="Search here.." id="Cats">
  <option value="" disabled selected>Choose Category</option>
  <?php 
			$Categories = DB::table('UKHT_Occurance_Categories')->where("Removed",0)->get();
				
			foreach($Categories as $Cat){
			?>
				<option value="{{$Cat->Category_Name}}" data-id="{{$Cat->ID}}">{{$Cat->Category_Name}}</option>
  
				
				<?php
			}
				?>
  
</select>
<label class="mdb-main-label adminonly">Categories</label>
			
			<div class="adminonly">
			<select class="mdb-select md-form subCats" searchable="Search here.." id="SubCats" disabled>
  <option value="" disabled selected>Choose Category first</option>
			</select>
			<label class="mdb-main-label"Sub Category</label>
		</div>
		<?php
			$Categories = DB::table('UKHT_Occurance_Categories')->where("Removed",0)->get();
				
			foreach($Categories as $Cat){
			?>
			<div class="adminonly" style="display: none">		
		<select class="mdb-select md-form subCats" style="display: none" searchable="Search here.." id="SubCats{{$Cat->ID}}">
  <option value="" disabled selected>Choose Sub Category</option>
  <?php 
			
			$Categories = DB::table('UKHT_Occurance_Sub')->where('Category_ID',$Cat->ID)->where("Removed",0)->get();
				
			foreach($Categories as $Cat){
			?>
				<option value="{{$Cat->Sub_Name}}" data-id="{{$Cat->Category_ID}}" data-value="{{$Cat->ID}}">{{$Cat->Sub_Name}}</option>
  
				
				<?php
			}
				?>
</select>
<label class="mdb-main-label">Sub Category</label>
  </div>
				
				<?php
			}
		?> 
			
		<div class="btn btn-primary disabled adminonly" id="SaveCategory" >Save</div>
			
			
			
			<?php
		
		}
		
		
		?>
			</p>
		
		<div class="card-title p-2 mt-2 ml-0 mr-0 {{$Occurance->Class}}">Currently Allocated To: </div>
		
		<?php 
		
			if($DATA->HSQE_Actioner){ 
				
				$ActionHide = "style=display:none"; 
				?>
				<div class="card-body">
		
		<p class="card-text font-weight-bold">{{DB::table('Contact')->where('Contact_ID',$DATA->HSQE_Actioner)->first()->Forename}} {{DB::table('Contact')->where('Contact_ID',$DATA->HSQE_Actioner)->first()->Surname}}</p>
		
			<div class="btn btn-sm bg-secondary adminonly" id="ChangeAllocation">New Allocation</div>
	
		</div>
				<?php
			}
		else{
			$ActionHide = ""; 
		}
		
		?> 
		
	<div class="card-body adminonly" {{$ActionHide}}>
		
		<div class="md-form amber-textarea active-amber-textarea">
  <textarea id="Instructions" class="md-textarea form-control " rows="3"></textarea>
  <label for="Instructions">Instructions for Allocated User:</label>
</div>
		
		<select class="mdb-select md-form" id="AllocatedTo" searchable="Search user..">
  <option value="" disabled selected>Choose your user</option>
			<?php 
			$USERS = DB::table('UKHT_Emails')->orderby('Name')->get(); 
			
			foreach($USERS as $User){
			?>
			  <option value="{{$User->ID}}">{{$User->Name}}</option>
			<?php	
			}
			
			
			?>
	
</select>
		
		<div class="md-form">
  <input placeholder="Selected date" type="text" id="deadline" class="form-control datepicker">
  <label for="deadline">Deadline</label>
</div>
		
		<label for="Urgancy">Reminder Schedule</label>
		
		<select class="mdb-select md-form" id="Urgancy">
			  <option value="1" selected>Daily</option>
			  <option value="2">Weekly</option>
		
</select>
		
		<div class="btn btn-primary disabled waves-effect waves-light" id="Allocate">Confirm and Allocate</div>
		
		</div>
		
	</div>
	</div>	
	
<?php if($DATA->HSQE_Actioner && !$DATA->Sign_Off && !$DATA->Actions_Taken_HSQE || $DATA->ReAllocated == 1){
	?>
<div class="card mt-2 actionOnly">
<h3 class="card-header bg-danger text-white">Actions</h3>
<div class="card-body">
	
		<div class="md-form amber-textarea active-amber-textarea">
  <textarea id="ActionsTaken" class="md-textarea form-control " rows="3"></textarea>
  <label for="ActionsTaken">What actions have you taken?</label>
</div>
	
	<div class="form-check">
    <input type="checkbox" class="form-check-input" id="SubbyYesNo">
    <label class="form-check-label" for="SubbyYesNo">Subcontractor involved?</label>
</div>
	
	<div class="md-form" style="display: none">
  <input type="text" id="Subby" class="form-control">
  <label for="Subby">Subcontractor(s) Name:</label>
</div>
	
	
	<div class="md-form">			
	<div class="file-field">
    <div class="btn btn-primary btn-sm float-left">
      <span>Upload Photos</span>
      <input type="file" multiple id="photos" accept="image/png, image/jpeg">
    </div>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text" placeholder="Upload one or more photos (optional)">
    </div>
  </div>
			</div>	
	
	<div class="btn btn-primary disabled" id="SubmitActions">Submit</div>
	</div>

</div>
<?php
}
	
	if($DATA->HSQE_Actioner){
	?>
	<div class="card mt-2">
<h3 class="card-header bg-danger text-white">Actions taken</h3>
<div class="card-body">
	<?php
		
		if($DATA->ReAllocated == 1 ){ ?>
			<div class="card-title badge badge-danger">Awaiting Action</div>
		<div class="row">
		<div class="col-3 text-right">Allocated To: </div>
		<div class="col">{{DB::table('Contact')->where('Contact_ID',$DATA->HSQE_Actioner)->first()->Forename}} {{DB::table('Contact')->where('Contact_ID',$DATA->HSQE_Actioner)->first()->Surname}}</div>
		</div>
	
		<div class="row">
		<div class="col-3 text-right">HSQE Instruction: </div>
		<div class="col">{{urldecode($DATA->HSQE_Instruction)}}</div>
		</div>
	<?php 
		}else{
		
		?>
	
	<div class="card-title badge badge-secondary">{{$DATA->Last_Updated}}</div>
		<div class="row">
		<div class="col-3 text-right">Allocated To: </div>
		<div class="col">{{DB::table('Contact')->where('Contact_ID',$DATA->HSQE_Actioner)->first()->Forename}} {{DB::table('Contact')->where('Contact_ID',$DATA->HSQE_Actioner)->first()->Surname}}</div>
		</div>
	
		<div class="row">
		<div class="col-3 text-right">HSQE Instruction: </div>
		<div class="col">{{urldecode($DATA->HSQE_Instruction)}}</div>
		</div>
	
		<div class="row">
		<div class="col-3 text-right">Deadline: </div>
		<div class="col">{{$DATA->DeadLine}}</div>
		</div>
	
	<div class="row">
		<div class="col-3 text-right">Actions Taken: </div>
		<div class="col">{{base64_decode($DATA->Actions_Taken_HSQE)}}</div>
		</div>
	<?php 
	
	if($DATA->Contractor_Involved){
		?>
	
	<div class="row">
		<div class="col-3 text-right">Subcontractor Involved: </div>
		<div class="col">{{base64_decode($DATA->Contractor_Name)}}</div>
		</div>
	
	<?php
	}else{
		?>
	<div class="row">
		<div class="col-3 text-right">Actions Taken: </div>
		<div class="col">No Subcontractor involved</div>
		</div>
	<?php
	}
		
		}
	
	
	
	$History = DB::table('UKHT_Occurance_History')
		->where([['HSQE_Instruction','!=',$DATA->HSQE_Instruction],['Occurance_ID',$DATA->ID],['ReAllocated',0]])
		->orWhere([['Actions_Taken_HSQE','!=',$DATA->Actions_Taken_HSQE],['Occurance_ID',$DATA->ID],['ReAllocated',0]])
		->orderby("Last_Updated","desc")
				 ->get(); 
		
		foreach($History as $item){
		
		?>
	
	<div class="card-title badge badge-primary">{{$item->Last_Updated}}</div>
		<div class="row">
		<div class="col-3 text-right">Allocated To: </div>
		<div class="col">{{DB::table('Contact')->where('Contact_ID',$item->HSQE_Actioner)->first()->Forename}} {{DB::table('Contact')->where('Contact_ID',$item->HSQE_Actioner)->first()->Surname}}</div>
		</div>
	
		<div class="row">
		<div class="col-3 text-right">HSQE Instruction: </div>
		<div class="col">{{urldecode($item->HSQE_Instruction)}}</div>
		</div>
	
		<div class="row">
		<div class="col-3 text-right">Deadline: </div>
		<div class="col">{{$item->DeadLine}}</div>
		</div>
	
	<div class="row">
		<div class="col-3 text-right">Actions Taken: </div>
		<div class="col">{{base64_decode($item->Actions_Taken_HSQE)}}</div>
		</div>
	<?php 
	
	if($DATA->Contractor_Involved){
		?>
	
	<div class="row">
		<div class="col-3 text-right">Subcontractor Involved: </div>
		<div class="col">{{base64_decode($item->Contractor_Name)}}</div>
		</div>
	
	<?php
	}else{
		?>
	<div class="row">
		<div class="col-3 text-right">Actions Taken: </div>
		<div class="col">No Subcontractor involved</div>
		</div>
	<?php
	}
		
		}
	
	
	
	
	
	
	
	?>
	
	
	
	
	<div class="card-title p-2 mt-2 ml-0 mr-0 text-white primary-color">Photos </div>
	<div class="card-body">
		
		<?php 
	
	if(!$PostPhotos->exists()){
		?>
No images.
			<?php 
	}
	
	
	
	?>
		
		<div id="mdb-lightbox-ui"></div>


   <div class="mdb-lightbox no-margin card-columns p-0 m-0" style="column-gap: 2; column-count: 6">
	<?php if($PostPhotos->exists()){
			
	
			foreach($PostPhotos->get() as $image){
			 
				?>
			 <figure class="card p-0 m-0 w-100">
        <a href="{{$image->Photo}}" data-size="968x1024" class="w-100">
          <img src="{{$image->Photo}}" style="height: 100px;" class="img-fluid w-100">
			 </a>
        <figcaption><?php echo ($image->Name); ?></figcaption>
      </figure>
			
			<?php 
				
			
			}
			

	
}else{
	
	
	
} ?>
			
		</div>

	
	</div>
		

</div>
</div>
	<?php
}

?>

</div>


<div class="col-md-6 float-left m-0 p-3">

<div class="card">
<h4 class="card-header {{$Occurance->Class}}">{{$Occurance->Name}} Details</h4>
	
	<div class="card-body">
	
		<div class="row">
		<div class="col-3 text-right">Reported: </div>
		<div class="col">{{Carbon::createFromFormat('Y-m-d H:i:s.u',$DATA->Reported_Date)->toRfc7231String()}}</div>
		</div>
		<div class="row">
		<div class="col-3 text-right">Occurred: </div>
		<div class="col">{{Carbon::createFromFormat('Y-m-d H:i:s.u',$DATA->Date)->toRfc7231String()}}</div>
		</div>
		<div class="row">
		<div class="col-3 text-right">Site: </div>
		<div class="col">{{$SiteName}}</div>
		</div>
		<div class="row">
		<div class="col-3 text-right">Location: </div>
		<div class="col">{{$locName}}</div>
		</div>
		
<?php if($DATA->Name){ ?>
	<div class="row">
		<div class="col-3 text-right">Name: </div>
		<div class="col">{{$DATA->Name}}</div>
		</div>
<?php } ?>
<?php if($DATA->Employer){ ?>
	<div class="row">
		<div class="col-3 text-right">Employer: </div>
		<div class="col">{{$DATA->Employer}}</div>
		</div>
<?php } ?>
	
	</div>
	
	<div class="card-title p-2 mt-2 ml-0 mr-0 {{$Occurance->Class}}">Describe the Event and What Could have happened: </div>
	<div class="card-body">
		
		<div class=""><?php echo urldecode($DATA->Details) ?></div>
	
	</div>
	
	<div class="card-title p-2 mt-2 ml-0 mr-0 {{$Occurance->Class}}">What were you able to do about it? </div>
	<div class="card-body">
		
		<div class=""><?php echo urldecode($DATA->Actions_Taken_Site) ?></div>
	
	</div>
	<div class="card-title p-2 mt-2 ml-0 mr-0 {{$Occurance->Class}}">Photos </div>
	<div class="card-body">
		
		<?php 
	
	if(!$Photos->exists() && !$HistPhotos->exists()){
		?>
No images.
			<?php 
	}
	
	
	
	?>
		
		<div id="mdb-lightbox-ui"></div>


   <div class="mdb-lightbox no-margin card-columns p-0 m-0" style="column-gap: 2; column-count: 6">
	<?php if($Photos->exists()){
			
	
			foreach($Photos->get() as $image){
			 
				?>
			 <figure class="card p-0 m-0 w-100">
        <a href="{{$image->Photo}}" data-size="968x1024" class="w-100">
          <img src="{{$image->Photo}}" style="height: 100px;" class="img-fluid w-100">
			 </a>
        <figcaption><?php echo $image->Name; ?></figcaption>
      </figure>
			
			<?php 
				
			
			}
			

	
}else{
	
	if($HistPhotos->exists()){
			
	
			foreach($HistPhotos->get() as $image){
			 
				?>
			 <figure class="card p-0 m-0 w-100">
        <a href="https://themis.ukht.org/workflow/service.ashx/{{$image->This_ID}}/image" data-size="968x1024" class="w-100">
          <img src="https://themis.ukht.org/workflow/service.ashx/{{$image->This_ID}}/image" style="height: 100px;" class="img-fluid w-100">
			 </a>
        <figcaption>{{$image->This_ID}}</figcaption>
      </figure>
			
			<?php 
				
			
			}
			

	
}
	
	
	
} ?>
	   
	 	
		</div>
 
	   
	</div>
	<div class="card-title p-2 mt-2 ml-0 mr-0 {{$Occurance->Class}} mb-0">Location Map (remember GPS is not entirely accurate) </div>
		  <div id="map" class="map m-0"></div>
	 <div id="popup" class="ol-popup">
     <a href="#" id="popup-closer" class="ol-popup-closer"></a>
     <div id="popup-content"></div>
 </div>
	</div>

	</div>
</div>

<script>
	
	
	$(document).ready(function(){
		var GPS = [<?php echo $DATA->GPS ?>];
		if(!GPS || GPS.length === 0){
			$('.map').html('Location not provided')
			$('.map').addClass('card-text p-2')
			$('.map').removeClass('map')
			$('#popup').remove()
		}else{
		
			 var attribution = new ol.control.Attribution({
     collapsible: false
 });

 var map = new ol.Map({
     controls: ol.control.defaults({attribution: false}).extend([attribution]),
     layers: [
         new ol.layer.Tile({
            source: new ol.source.OSM()
         })
     ],
     target: 'map',
     view: new ol.View({
         center: ol.proj.fromLonLat(GPS),
         maxZoom: 18,
         zoom: 12
     })
 });
		
		 var layer = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat(GPS))
             })
         ]
     })
 });
 map.addLayer(layer);

		
		 var container = document.getElementById('popup');
 var content = document.getElementById('popup-content');
 var closer = document.getElementById('popup-closer');

 var overlay = new ol.Overlay({
     element: container,
     autoPan: true,
     autoPanAnimation: {
         duration: 250
     }
 });
		
		
	 content.innerHTML = ' <img src="{{asset("images/Pin/".$Occurance->Name.".png")}}" width="35px" alt="">';
 
		overlay.setPosition(ol.proj.fromLonLat(GPS));	

		
		
 map.addOverlay(overlay);

		

			
		}
		
	
		
		if (window.document.documentMode) {
        $('.mdb-select').addClass('browser-default');
        $('.mdb-select').removeClass('mdb-select');
    }

		
		<?php if($AdminOnly){ echo "var AdminOnly = true;"; }else{ echo "var AdminOnly = false;"; } ?>
		
		<?php if($ViewOnly){ echo "var ViewOnly = true;"; }else{ echo "var ViewOnly = false;"; } ?>
		
		<?php if($ActionOnly){ echo "var ActionOnly = true;"; }else{ echo "var ActionOnly = false;"; } ?>
	 
		if(AdminOnly == false){
			$('.adminonly').remove()
		}
		
		if(ViewOnly == true){
			$('.btn').remove()
			$('.adminonly').remove()
			$('.viewOnly').show();
		}else{
			$('.viewOnly').remove()
		}
		
		if(ActionOnly == false){
			$('.actionOnly').remove()
		}
		
		
		
	
		
		$('.toast').delay(2000).toast('show');
		
		$('#Cats').on('change',function(){
			var ID = $(this).children('option:selected').data('id');
			
	$(".subCats").parents('div').hide()	
$("#SubCats"+ID).parents('div').show()
$("#SubCats"+ID).parents('div').css("display",'block')

			
		})
		
		if(<?php echo $DATA->Occurance ?> == 2){
			$(".subRoots, .subRootLabel").remove(); 
			$('#Roots').on('change',function(){
				
					$('#CloseOut').removeClass('disabled');
		})
				
		}else{
			
			$('#Roots').on('change',function(){
			var ID = $(this).children('option:selected').data('id');
			
	$(".subRoots").parents('div').hide()	
$("#SubRoots"+ID).parents('div').show()
$("#SubRoots"+ID).parents('div').css("display",'block')

			
		})
			
		}
		
		
		
		
		$(".subCats").on('change',function(){
			$('#SaveCategory').removeClass('disabled');
		})
		$("#AllocatedTo").on('change',function(){
			$('#Allocate').removeClass('disabled');
		})
		
		$(".subRoots").on('change',function(){
			$('#CloseOut').removeClass('disabled');
		})
		$("#ChangeCategory").on('click',function(){
			$('#categoriesUpdate').show();
			$(this).hide()
		})
		
		$("#ChangeAllocation").on('click',function(){
			$(this).parent().siblings().show();
			$(this).hide()
		})
		
		$('#SaveCategory').on('click',function(){
			var CAT = $('#Cats').val();
			var CATID = $('#Cats').children('option:selected').data('id');
			var SUB = $("#SubCats"+CATID).val();
			 $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,CAT:CAT,SUB:SUB,Type:"UpdateCat"}).done(function(){
			location.reload();
		})
		})
		
		$('#CloseOut').on('click',function(){
			var ROOT = $('#Roots').val();
			
			if(<?php echo $DATA->Occurance ?> == 2){
				var SUBROOT = "Good Practice"
			}else{
				var ROOTID = $('#Roots').children('option:selected').data('id');
			var SUBROOT = $('#SubRoots'+ROOTID).val();
			}
			
			 $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,ROOT:ROOT,SUBROOT:SUBROOT,Type:"Close"}).done(function(){
			location.reload();
		})
		})	
		
		$('#Allocate').on('click',function(){
			var INS = $('#Instructions').val();
			var ALL = $('#AllocatedTo').val();
			var REM = $('#Urgancy').val();
			var DEAD = $('#deadline').val();
			
			 $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,ALL:ALL,REM:REM,INS:INS,DEAD:DEAD,Type:"Allocate"}).done(function(){
			location.reload();
		})
		})
		
		$('#ChangeOccurance').on('click',function(){
			 console.log('Custom cancel clicked');
			var dialog = bootbox.dialog({
    title: 'Please choose the correct Occurance',
    message: "<p>This can be reverted or changed again at any time before close.</p>",
    size: 'large',
    buttons: {
        cancel: {
            label: "Close",
            className: 'btn-default',
            callback: function(){
               
            }
        },
        cc: {
            label: "Close Call",
            className: 'btn-primary',
            callback: function(){
                 $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,OCC:1,Type:"ChangeOCC"}).done(function(){
			location.reload();
		})
            }
        },
        gp: {
            label: "Good Practice",
            className: 'btn-success',
            callback: function(){
             $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,OCC:2,Type:"ChangeOCC"}).done(function(){
			location.reload();
		})
            }
        },
        acc: {
            label: "Accident",
            className: 'btn-danger',
            callback: function(){
                  $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,OCC:4,Type:"ChangeOCC"}).done(function(){
			location.reload();
		})
			}
            },
        inc: {
            label: "Incident",
            className: 'btn-warning',
            callback: function(){
                $.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,OCC:3,Type:"ChangeOCC"}).done(function(){
			location.reload();
		})
            }
        }
    }
});
		})	
		
	})
	
	$('#SubbyYesNo').on('change',function(){
		console.log($(this).prop('checked'))
		
		if($(this).prop('checked') == true){
			$('#Subby').parent().show()
			$('#SubmitActions').addClass('disabled');
			$('#Subby').val('')
		}else{
			$('#Subby').parent().hide()
		}
	})
	
	
	$('#SubbyYesNo, #Subby, #ActionsTaken').on('change keyup select blur', function(){
		var Actions = $('#ActionsTaken').val();
		var Subby = $('#Subby').val();
		if(!$('#SubbyYesNo').prop('checked')){
			if(!Actions || Actions.trim() === '' ){
		   $('#SubmitActions').addClass('disabled');
		   }else{
			   $('#SubmitActions').removeClass('disabled');
		   }
		}else{
			if(!Subby || Subby.trim() === '' || !Actions || Actions.trim() === '' ){
		   $('#SubmitActions').addClass('disabled');
		   }else{
			   $('#SubmitActions').removeClass('disabled');
		   }
		}
		
	})
	
	
	
	$('#SubmitActions').on('click',function(){
		var Actions = $('#ActionsTaken').val();
		var SubYesNo = $('#SubbyYesNo').prop('checked');
		var Subby = $('#Subby').val();
		
		
		  var files = $("#photos").prop("files");
            for (var i = 0; i < files.length; i++) {
                (function (file) {
                    if (file.type.indexOf("image") == 0) {
                        var fileReader = new FileReader();
                        fileReader.onload = function (f) {
                              $.ajax({
                                type: "POST",
                                url: "locationPosts",
                                data: {
                                    'file': f.target.result,
                                    'name': file.name,
                                    'LogID': <?php echo $_GET['id']; ?>,
									'Type': 'ActionPhotos'
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
  
		
		$.post('locationPosts',{ID:<?php echo $_GET['id']; ?>,SubYesNo:SubYesNo,Actions: Actions, Subby: Subby, Type:"AllocatorActions"}).done(function(){
			location.reload();
		})
		
		
	})
	
	
	

		$('.body').show();

</script>


@stop