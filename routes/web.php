 <?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/home', function () {
    return view('home');
});
Route::get('/', function () {
    return view('welcome');
});


Route::get('observations', function() {
	return view('obs.nav');
});

Route::get('Covid', function() {
	return view('Covid.Login');
});
Route::post('CovidCheck','CovidCheck@Check');

Route::get('CloseCall', function() {
	return view('obs.closeCalls');
});

Route::get('Incident', function() {
	return view('obs.Incident');
});
Route::get('Accident', function() {
	return view('obs.Accident');
});



Route::get('GoodPractice', function() {
	return view('obs.goodPractices');
});
Route::get('OccuranceViewer', function() {
	return view('obs.OccuranceViewer');
});

Route::post('CloseCallPost', function() {
	return view('obs.CloseCallPost');
});

route::post('createOccurance','Occurances@insertOccurance');
route::post('createOccurancePhotos','Occurances@insertOccurancePhotos');
route::post('UpdateInjuries','Occurances@UpdateInjuries');
route::post('SendOccuranceEmail','Occurances@sendEmail');



Route::get('/', 'HomeController@index')->name('home');


Auth::routes();


