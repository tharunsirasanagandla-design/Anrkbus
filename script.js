// Set bus icon
var busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61212.png', 
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

// Create map
var map = L.map('map').setView([16.5925, 79.0075], 11);

// Load & display tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add marker (bus)
var marker = L.marker([16.5925, 79.0075], { icon: busIcon }).addTo(map);

// Update location (static example)
function updateLocation() {
    var newLat = 16.5925 + (Math.random() - 0.5) * 0.01;
    var newLng = 79.0075 + (Math.random() - 0.5) * 0.01;

    marker.setLatLng([newLat, newLng]);
    map.setView([newLat, newLng]);
}

// Update every 5 seconds
setInterval(updateLocation, 5000);
