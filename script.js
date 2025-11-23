// ------------------ FIREBASE ------------------
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_KEY",
  databaseURL: "https://your.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ------------------ VARIABLES ------------------
let map, marker;
let selectedBus = "";
const correctCode = "5999";

// ------------------ MAP INIT ------------------
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 17.2, lng: 79.6 }
  });
}

initMap();

// ------------------ POPUP OPEN ------------------
function openCodeBox(bus) {
  selectedBus = bus;
  document.getElementById("codePopup").style.display = "flex";
}

// ------------------ POPUP CLOSE ------------------
function closePopup() {
  document.getElementById("codePopup").style.display = "none";
}

// ------------------ VERIFY CODE ------------------
function verifyCode() {
  const entered = document.getElementById("codeInput").value;

  if (entered !== correctCode) {
    alert("Wrong Code!");
    return;
  }

  closePopup();
  startTracking(selectedBus);
}

// ------------------ REAL-TIME TRACKING ------------------
function startTracking(bus) {
  db.ref(bus).on("value", snap => {
    const d = snap.val();
    if (!d) return;

    const pos = { lat: d.lat, lng: d.lng };

    if (!marker) {
      marker = new google.maps.Marker({
        map: map,
        position: pos,
        icon: "https://cdn-icons-png.flaticon.com/512/61/61290.png"
      });
    } else {
      marker.setPosition(pos);
    }

    map.setCenter(pos);
  });
}
