
@extends('welcome')
@section('titile')
HTUK
@stop

<?php 

if(!empty($_GET['id']) && $_GET['id'] === "Select"){
	
	?>
@section('Title')

Please Select a Project

@stop
@section('content')

	<div class="col-lg-4 mx-auto">
				
					<div class="card">
					<div class="card-body list-group list-group-flush p-0">
						
						<div class="list-group-item list-group-item-action list-group-item-light text-center">

        <a href="https://themis.ukht.org/XWeb/PublicAssets/external/public/observations?id=0">

          <!-- Content -->
   <p class="mb-0"> <span>Swindon - Head Office</span></p>
            
    

        </a>



    </div>   
<?php
	
	
	$Projects = DB::table("UKHT_Locations")->join("Project","Project.Project_ID","=","UKHT_Locations.Linked_Entity")->where("Type","=","Project")->where("Removed","=","0")->get();
	
	foreach($Projects as $Project)
	{
	
	
	?>


			

    <!-- Card -->
<div class="list-group-item list-group-item-action list-group-item-light text-center">

        <a href="https://themis.ukht.org/XWeb/PublicAssets/external/public/observations?id={{$Project->Linked_Entity}}">

          <!-- Content -->
   <p class="mb-0"> <span>{{$Project->Name}}</span></p>
            
    

        </a>



    </div>   
	
				
	
	
	<?php 
	
	}
	
	?>
							</div>
					</div>
					</div>
@stop
<?php 
	
	
}

else{
	
	



if(!empty($_GET['id'])){ 
$Project = DB::table('Project')->where('Project_ID',$_GET['id'])->first();
	$ID = $_GET['id'];
	$Name = $Project->Name;


}else{ 
	
	$ID = 0;
	$Name = "Head Office"; 

} ?>


@section('Title')

{{$Name}}

@stop

@section('content')

               
				<div class="col-lg-6 mx-auto">
				
					<div class="card">
					<h2 class="card-header primary-color text-white">I would like to report a . . .</h2>
					<div class="card-body">
						
						<a href="CloseCall?id={{$ID}}" class="btn btn-primary btn-lg w-100"><i class="fas fa-2x fa-closed-captioning mr-2"></i> <span class="fa-2x">Close Call</span> </a>
						<a href="GoodPractice?id={{$ID}}"  class="btn btn-success btn-lg w-100"><i class="fas fa-2x fa-check mr-2"></i> <span class="fa-2x">Good Practice</span> </a>
						<button onClick="choice()" class="btn btn-danger btn-lg w-100"><i class="fas fa-2x fa-user-injured mr-2"></i> <span class="fa-2x">Accident / Incident </span> </button>
						<button class="btn btn-info btn-lg w-100" hidden=""><i class="fas fa-2x fa-lightbulb mr-2"></i> <span class="fa-2x">Innovation</span> </button>

						
						
						</div>
					</div>
					
				</div>


<script>


function choice(){

	bootbox.dialog({
    message: "Has someone been injured?",
		centerVertical: true,
    buttons: {
        Yes: {
            label: 'Yes',
            className: 'btn-primary',
			callback: function(){
             location.href = "Accident?id={{$ID}}"                
            }
        },
        No: {
            label: 'No',
            className: 'btn-default',
			callback: function(){
            location.href = "Incident?id={{$ID}}"               
            }
			
        }
    }
});
	
	
}

</script>

  @stop
<?php }
?>
     