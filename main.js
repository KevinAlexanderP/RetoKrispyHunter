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

    getLocation(function(position) {
        // coordenadas centradas en el mapa // position coords
        var myMapCenter = { lat: position.coords.latitude, lng: position.coords.longitude };
        // mapa , map and zoom
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myMapCenter,
            zoom: 14
        });
        // this is how we setup our request, #radius is adjustable also

        var request = { location: myMapCenter, radius: '5000', name: 'Krispy Kreme' };
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            console.log(results, status)
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    createMarker(results[i], map);
                }

            }

        });
    });

}