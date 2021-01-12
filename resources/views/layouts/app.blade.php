<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


  <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote-bs4.css" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
	<style>
	
	.dropdsown:hover .dropdown-menu {display: block;}
	
	</style>
</head>
<body class="hochtief-skin bg-light">
    <div id="app">
      
		
		
		<!-- Navbar -->
<nav class="navbar navbar-expand-lg  navbar-light white">

  <!-- Navbar brand -->
  <a class="navbar-brand text-uppercase" href="#"><img src="{{ asset('images/HOCHTIEF.png') }}"   height="40" alt="HOCHTIEF logo" ></a>

  <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
    aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent2">

    <!-- Links -->
	  
	   <!-- Links -->
    <ul class="navbar-nav mr-auto">
	
		 <li class="nav-item dropdown mega-dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink3" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Careers</a>
        <div class="dropdown-menu mega-menu v-2 z-depth-1 primary-color-dark py-5 px-3"
          aria-labelledby="navbarDropdownMenuLink3">
          <div class="row">
            <div class="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
              <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
              <!--Featured image-->
             <div class="card rounded-0 text-center">
  <div class="card-body">
    <h5 class="card-title">Head of the World</h5>
    <p class="card-text">Time to take over the world interested?</p>
    <a href="#!" class="btn btn-primary">View More</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
              
            </div>
            <div class="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
              <h6 class="sub-title text-uppercase font-weight-bold white-text">Head Office</h6>
              <ul class="list-unstyled">
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-xl-4 sub-menu mb-0">
              <h6 class="sub-title text-uppercase font-weight-bold white-text">Projects</h6>
              <ul class="list-unstyled">
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                  </a>
                </li>
                <li>
                  <a class="menu-item pl-0" href="#!">
                    <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
		
		@auth
      <!-- News -->
      <li class="nav-item dropdown mega-dropdown">
         <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink2" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">My Applications
          <span class="sr-only">(current)</span>
        </a>
        <div class="dropdown-menu mega-menu v-3 z-depth-1 primary-color-dark py-5 px-3"
          aria-labelledby="navbarDropdownMenuLink5">
          <div class="row">
            <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-5">
              <ul class="list-unstyled">
                <li class="sub-title text-uppercase">
                  <a class="menu-item pl-1 mt-2" href="#!">
                    View Applications
                  </a>
                </li>
                <li class="sub-title text-uppercase">
                  <a class="menu-item pl-1 mt-2" href="#!">
                    My Messages
                  </a>
                </li>
                <li class="sub-title text-uppercase">
                  <a class="menu-item pl-1 mt-2" href="#!">
                    My Details
                  </a>
                </li>
                <li class="sub-title text-uppercase">
                  <a class="menu-item pl-1 mt-2" href="#!">
                    Feedback
                  </a>
                </li>
               
              </ul>
            </div>
            <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
              <!--Featured image-->
              <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg"
                  class="img-fluid" alt="First sample image">
                <div class="mask rgba-white-slight"></div>
              </a>
              
            </div>
            <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
              <!--Featured image-->
              <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg"
                  class="img-fluid" alt="First sample image">
                <div class="mask rgba-white-slight"></div>
              </a>
              
            </div>
            <div class="col-md-6 col-xl-3 sub-menu mb-0">
              <!--Featured image-->
              <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(9).jpg"
                  class="img-fluid" alt="First sample image">
                <div class="mask rgba-white-slight"></div>
              </a>
              
            </div>
          </div>
        </div>
      </li>

		@endauth
    </ul>
    <!-- Links -->

 <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
						
                        @endguest
                    </ul>
    <!-- Links -->


  </div>
  <!-- Collapsible content -->

</nav>
<!-- Navbar -->

        <main class="py-4 ">
            @yield('content')
        </main>
    </div>
	
	
<script src="{{ asset('mdbootstrap/js/jquery.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/popper.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/bootstrap.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/mdb.js') }}" defer></script>

<script src="{{ asset('mdbootstrap/js/addons-pro/cards-extended.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons-pro/chat.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons-pro/multi-range.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons-pro/simple-charts.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons-pro/steppers.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons-pro/timeline.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons/datatables.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons/datatables-select.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons/directives.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons/flag.min.js') }}" defer></script>
<script src="{{ asset('mdbootstrap/js/addons/rating.min.js') }}" defer></script>
<script src="{{ asset('countdown/jquery.countdown.js') }}" defer></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.4.0/bootbox.min.js
"></script>

  <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

	
	
</body>
</html>


