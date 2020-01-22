// To display the result you need to acces to a service map like Google maps
function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else { x.innerHTML = "Geolocation is not supported by this browser."; }
}

function initMap() {

    function createMarker(place, map) {
        var marker = new google.maps.Marker({ map: map, position: place.geometry.location });
        google.maps.event.addListener(marker, 'click', function() {

            infowindow.setContent(place.name);
            infowindow.open(map, this);


        })
    }

    function getLocation(function(position) {
        var myMapCenter = { lat: position.coords.latitude, lng: position.coords.longitude };

    })
























}