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
});