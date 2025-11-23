document.addEventListener("DOMContentLoaded", function () {

    // Default location (Miryalguda)
    let lat = 16.8730;
    let lng = 79.5715;

    // Create map
    var map = L.map('map', {
        zoomControl: false,           // premium look
        scrollWheelZoom: true,
        smoothWheelZoom: true
    }).setView([lat, lng], 14);

    // Add modern tile style
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    // Custom Bus Icon
    var busIcon = L.divIcon({
        html: "<div class='bus-emoji'>🚌</div>",
        className: "bus-icon",
        iconSize: [50, 50],
        iconAnchor: [25, 25]
    });

    // Add marker
    var busMarker = L.marker([lat, lng], { icon: busIcon }).addTo(map);

    // Smooth animation function
    function moveBus(newLat, newLng) {
        let duration = 1000; // 1 sec animation
        let steps = 60;
        let latStep = (newLat - lat) / steps;
        let lngStep = (newLng - lng) / steps;
        let count = 0;

        let animate = setInterval(() => {
            lat += latStep;
            lng += lngStep;
            busMarker.setLatLng([lat, lng]);
            
            if (count === 0) {
                map.panTo([lat, lng], { animate: true, duration: 1 });
            }

            count++;
            if (count >= steps) {
                clearInterval(animate);
            }
        }, duration / steps);
    }

    // Dummy Movement Every 3 Seconds (For
