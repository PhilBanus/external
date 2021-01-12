
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

<script type="text/javascript" src="{{ asset('mdbootstrap/js/popper.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/bootstrap.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/mdb.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons-pro/cards-extended.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons-pro/chat.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons-pro/multi-range.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons-pro/simple-charts.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons-pro/steppers.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons-pro/timeline.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons/datatables2.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons/datatables-select2.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons/directives.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons/flag.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/js/addons/rating.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('mdbootstrap/wysiwyg/js/wysiwyg.js') }}"></script>
<script type="text/javascript" src="{{ asset('countdown/jquery.countdown.js') }}"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.4.0/bootbox.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>


<script type="text/javascript" src="{{ asset('tinymce/js/tinymce/tinymce.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('tinymce/js/tinymce/jquery.tinymce.min.js') }}"></script>

  <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

<script>
$(document).ready(function() {
	
	$('.selectpicker').selectpicker({ iconBase: 'fa' });
	
		if (window.document.documentMode) {
        $('.mdb-select').addClass('browser-default');
        $('.mdb-select').removeClass('mdb-select');
    }
	

	

	
	var csrf_token = $('meta[name="csrf-token"]').attr('content');
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
    if (options.type.toLowerCase() === "post") {
        // initialize `data` to empty string if it does not exist
        options.data = options.data || "";

        // add leading ampersand if `data` is non-empty
        options.data += options.data?"&":"";

        // add _token entry
        options.data += "_token=" + encodeURIComponent(csrf_token);
    }
});
	
	

	
});
	
	
</script>


