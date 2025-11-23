document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([17.1466, 79.6221], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    // FORCED BUS ICON ONLY 🚍
    var busIcon = L.divIcon({
        html: "🚌",     // <<< ONLY BUS ICON
        className: "bus-icon",
        iconSize: [50, 50],
        iconAnchor: [25, 25]
    });

    var
