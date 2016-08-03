//= require gmaps/google
$(document).ready(function(){
  var map = new GMaps({
    div: '#plek',
    lat: 52.747629,
    lng: 6.907549,
    zoom: 16,
   });
   
   map.addMarker({
    lat: 52.747629,
    lng: 6.907549,
    title: 'Pedicuresalon Zuidbarge',
});

$('.fotodiashow').fancybox();
        $(".fotodiashow-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});
                        
var selector = '.nav li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

});