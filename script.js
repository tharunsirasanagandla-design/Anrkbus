/* FIREBASE CONFIG */
const firebaseConfig = {
    apiKey: "AIzaSyD-DUMMY-KEY",
    authDomain: "bus-tracking-pro.firebaseapp.com",
    databaseURL: "https://bus-tracking-pro-default-rtdb.firebaseio.com",
    projectId: "bus-tracking-pro",
    storageBucket: "bus-tracking-pro.appspot.com",
    messagingSenderId: "191919191919",
    appId: "1:191919191919:web:2919291929ee"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let map;
let markers = {};

/* STUDENT MAP INIT */
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 17.123, lng: 79.123 }
    });

    firebase.database().ref("buses").on("value", snapshot => {
        const buses = snapshot.val();
        if (!buses) return;

        Object.keys(buses).forEach(busId => {
           const data = buses[busId];

           if (!markers[busId]) {
                markers[busId] = new google.maps.Marker({
                    position: { lat: data.lat, lng: data.lng },
                    map: map,
                    label: busId
                });
           } else {
                markers[busId].setPosition({ lat: data.lat, lng: data.lng });
           }
        });
    });
}

window.initMap = initMap;

/* DRIVER LOCATION SHARE */
function startSharing() {
    const code = document.getElementById("busCode").value;

    const busCodes = {
        "599": "Bus1",
        "888": "Bus2",
        "777": "Bus3"
    };

    if (!busCodes[code]) {
        alert("Invalid Code!");
        return;
    }

    const busId = busCodes[code];

    navigator.geolocation.watchPosition(pos => {
        firebase.database().ref("buses/" + busId).set({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        });
    });

    alert("Sharing location for " + busId);
}

window.startSharing = startSharing;

/* PAGE SWITCH */
function openStudent() {
    document.getElementById("studentSection").style.display = "block";
    document.getElementById("driverSection").style.display = "none";
    document.getElementById("map").style.display = "block";
}

function openDriver() {
    document.getElementById("studentSection").style.display = "none";
    document.getElementById("driverSection").style.display = "block";
    document.getElementById("map").style.display = "none";
}

window.openStudent = openStudent;
window.openDriver = openDriver;
