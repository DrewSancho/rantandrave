var $ = require('jquery');

function GeoLocation (cb) {
    function success (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        navigator.geolocation.getCurrentPosition(success);
    }
}

module.exports = GeoLocation;