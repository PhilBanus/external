<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="full-height">
    <head>
       
		@include('Head_Scripts')
        <title>@yield('titile')</title>


 <link rel="manifest" href="{{ asset('manifest.json') }}">

<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="HART">
<meta name="apple-mobile-web-app-title" content="HART">
<meta name="theme-color" content="#024a94">
<meta name="msapplication-navbutton-color" content="#024a94">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="msapplication-starturl" content="https://themis.ukht.org/XWeb/PublicAssets/external/public/observations?id=Select">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="icon" href="{{ asset('HART.jpg') }}">
<link rel="apple-touch-icon" href="{{ asset('HART.jpg') }}">
	
       
        <!-- Styles -->
    </head>
   <body class="hidden-sn hochtief-skin w-100 lighten-5 " style="background-color: #404040">
	<div id="app" v-cloak></div>


	   <!--Main Navigation-->
<header>

<nav class="navbar navbar-light fixed-top">
  <span class="navbar-brand"><img src="{{ asset('images/HOCHTIEF.png') }}"  height="30"></span>
</nav>

</header>
<!--Main Navigation-->

	   <main>
	     
    <div class="container-fluid">
		 	
		
		 <h3 class="text-white text-center font-weight-bold">@yield('Title')</h3>
		   
			
				@yield('content')
		   </div>
		</main>		
        

		@include('Footer_Scripts')
		
    </body>
</html>
