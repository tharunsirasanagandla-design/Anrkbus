document.addEventListener("DOMContentLoaded", function () {

    // Default view (Miryalguda)
    var map = L.map('map').setView([16.8730, 79.5715], 13);

    // Load map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    // Bus Icon
    var busIcon = L.divIcon({
        html: "🚌",
        className: "bus-icon",
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    // Bus Marker
    var busMarker = L.marker([16.8730, 79.5715], { icon: busIcon }).addTo(map);

});
