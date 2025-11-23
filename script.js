document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([17.1466, 79.6221], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    // BUS ICON
    var busIcon = L.divIcon({
        html: "🚌",  
        className: "bus-icon",
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    var marker = L.marker([17.1466, 79.6221], { icon: busIcon }).addTo(map);

    function updateLocation() {
        fetch('location.json')
            .then(response => response.json())
            .then(data => {
                marker.setLatLng([data.latitude, data.longitude]);
                map.setView([data.latitude, data.longitude], 13);
            });
    }

    updateLocation();
    setInterval(updateLocation, 5000);
});
