// Default Bus Location (Miryalguda)
let busLatitude = 17.2475;  
let busLongitude = 79.6267;

// Create Map
var map = L.map('map').setView([busLatitude, busLongitude], 14);

// Add Map Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add Bus Marker on Map
var busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61212.png',
    iconSize: [45, 45],
});

var marker = L.marker([busLatitude, busLongitude], { icon: busIcon }).addTo(map);

// Update Bus Location Function
function updateBusLocation(lat, lng) {
    marker.setLatLng([lat, lng]);
    map.setView([lat, lng]);
}

// (Optional) Test Auto Move Every 5 Seconds
// REMOVE this later if using Firebase GPS data
setInterval(() => {
    busLatitude += (Math.random() - 0.5) * 0.002;
    busLongitude += (Math.random() - 0.5) * 0.002;

    updateBusLocation(busLatitude, busLongitude);
}, 5000);
