
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="full-height">
    <head>
       
		@include('Head_Scripts')
        <title>Occurance</title>

        <!-- Styles -->
    </head>
   <body class="hochtief-skin bg-dark">
	
             
	   <main class="m-0">
		     
    <div class="container-fluid p-4">
		 	
		   
			
				@yield('content')
		   </div>
		</main>		
        
	   <div id="footer"></div>
		
		@include('Footer_Scripts')

    </body>
</html>
