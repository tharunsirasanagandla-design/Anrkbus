function startDriverLiveTracking() {
    if (!navigator.geolocation) {
        alert("GPS not supported");
        return;
    }

    navigator.geolocation.watchPosition(
        (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;

            // Update driver marker on map
            if (!driverMarker) {
                driverMarker = L.marker([lat, lng]).addTo(map).bindPopup("Driver");
            } else {
                driverMarker.setLatLng([lat, lng]);
            }

            map.setView([lat, lng], 16);

            // Later here we add Firebase update:
            // firebase.database().ref("bus/5999").set({lat: lat, lng: lng});
        },
        (err) => {
            alert("Please allow GPS permission");
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000
        }
    );
}
