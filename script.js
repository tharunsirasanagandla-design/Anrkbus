// API from where bus sends location continuously
const API_URL = "https://your-api.com/bus-location.json";

// Initialize map
const map = L.map('map').setView([17.123, 79.654], 13);

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Bus icon
const busIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61282.png",
    iconSize: [40, 40],
});

// Initial marker
let busMarker = L.marker([17.123, 79.654], { icon: busIcon }).addTo(map);

// Function to fetch LIVE location
async function updateBusLocation() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const lat = data.latitude;
        const lng = data.longitude;

        // Update marker position
        busMarker.setLatLng([lat, lng]);

        // Smooth center follow
        map.setView([lat, lng], map.getZoom());
    } 
    catch (err) {
        console.log("Error fetching live location:", err);
    }
}

// Update every 5 seconds
setInterval(updateBusLocation, 5000);

// First update
updateBusLocation();
var map = L.map('map').setView([17.169, 79.632], 13);
