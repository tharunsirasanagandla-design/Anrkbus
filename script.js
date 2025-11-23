let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 17.2000, lng: 79.6000 }
  });

  marker = new google.maps.Marker({
    position: { lat: 17.2000, lng: 79.6000 },
    map: map,
    title: "Bus Location"
  });

  // Call function every 2 seconds
  setInterval(updateBusLocation, 2000);
}

function updateBusLocation() {
  // You must update these values from API or database
  let newLat = window.currentLat;
  let newLng = window.currentLng;

  // Update only if changed
  if (marker.position.lat() !== newLat || marker.position.lng() !== newLng) {
    marker.setPosition({ lat: newLat, lng: newLng });
    map.setCenter({ lat: newLat, lng: newLng });
  }
}

// TEMP movement simulation (remove when connecting real GPS)
window.currentLat = 17.2000;
window.currentLng = 79.6000;

setInterval(() => {
  window.currentLat += 0.0005;
  window.currentLng += 0.0005;
}, 2000);

window.onload = initMap;
