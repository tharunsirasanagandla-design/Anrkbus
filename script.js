function initMap() {

    // Example bus location - replace with your bus lat & long
    var busLocation = { lat: 17.2253, lng: 79.5941 };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: busLocation
    });

    var marker = new google.maps.Marker({
        position: busLocation,
        map: map,
        title: "College Bus"
    });
}