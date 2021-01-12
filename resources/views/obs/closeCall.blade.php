<?php 

if($_GET['id'] != 0){ 
$Project = DB::table('Project')->where('Project_ID',$_GET['id'])->first();
	$ID = $_GET['id'];
	$Name = $Project->Name;


}else{ 
	
	$ID = 0;
	$Name = "Head Office"; 

} ?>

@extends('welcome')
@section('titile')
HTUK
@stop
@section('Title')

{{$Name}} <br> <span class="text-info">Close Call</span>

@stop
@section('content')


               
				<div class="col-lg-8 mx-auto">
				
					<div class="card">
					<h2 class="card-header primary-color text-white">When did this happen?</h2>
					<div class="card-body">
						
<div class="md-form">
  <input placeholder="Selected date" type="text" id="date-picker-example" class="form-control datepicker">
  <label for="date-picker-example">Try me...</label>
</div>			
						
						<div class="md-form">
  <input placeholder="Selected time" type="text" id="input-limited-range" class="form-control timepicker">
  <label for="input-limited-range">Try me</label>
</div>
						
						
						</div>
						
						<div class="card-footer d-flex">
						<button class="btn btn-lg next ml-auto btn-primary">Next</button>
						</div>
					</div>
					
				</div>
<script>
$( document ).ready(function() {
  // Date Time Picker Initialization
$('.datepicker').pickadate({ max: new Date(),
							onSet: function(context) {
console.log('Just set stuff:', context)
}
})
	
	
	$('#input-limited-range').pickatime({
    twelvehour: false,
   
    max: moment('now')
  });
	
	
});

</script>
       @stop