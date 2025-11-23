document.addEventListener("DOMContentLoaded", function () {

    // Starting point
    let lat = 16.8730;
    let lng = 79.5715;

    // Map setup
    const map = L.map('map').setView([lat, lng], 14);

    // Tile layer (premium HOT theme)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    // Bus icon
    const busIcon = L.divIcon({
        html: "🚌",
        className: "bus-icon",
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    // Marker
    let marker = L.marker([lat, lng], { icon: busIcon }).addTo(map);

    // Smooth movement function
    function moveBus() {
        let newLat = lat + (Math.random() - 0.5) * 0.003;
        let newLng = lng + (Math.random() - 0.5) * 0.003;

        let steps = 60;
        let stepLat = (newLat - lat) / steps;
        let stepLng = (newLng - lng) / steps;
        let count = 0;

        let interval = setInterval(() => {
            lat += stepLat;
            lng += stepLng;
            marker.setLatLng([lat, lng]);

            if (count === 0) {
                map.panTo([lat, lng], { animate: true, duration: 1 });
            }

            count++;
            if (count >= steps) clearInterval(interval);
        }, 30);
    }

    // Move every 3 sec
    setInterval(moveBus, 3000);

});
