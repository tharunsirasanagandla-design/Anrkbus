// ----------------------------
//  FIREBASE CONFIG
// ----------------------------
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_KEY",
  databaseURL: "https://your-app.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let map, marker;
let selectedBus = "";


// ----------------------------
//  CHECK BUS CODE
// ----------------------------
function checkCode() {
  const code = document.getElementById("busCode").value;

  // ⭐ Bus 1 code
  if (code == "5999") {
    selectedBus = "bus1";
    startMap();
  } 
  // ⭐ Bus 2 code
  else if (code == "8888") {
    selectedBus = "bus2";
    startMap();
  }
  else {
    alert("Invalid Code");
  }
}


// ----------------------------
//  START MAP & LIVE TRACKING
// ----------------------------
function startMap() {
  document.getElementById("code-screen").style.display = "none";
  document.getElementById("map").style.display = "block";

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 17.2, lng: 79.6 }
  });

  marker = new google.maps.Marker({
    map: map,
    label: selectedBus === "bus1" ? "1" : "2"
  });

  // ⭐ Listen to selected bus location
  db.ref(selectedBus).on("value", snapshot => {
    const d = snapshot.val();
    if (!d) return;

    marker.setPosition({ lat: d.lat, lng: d.lng });
    map.setCenter({ lat: d.lat, lng: d.lng });
  });
}
