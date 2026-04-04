(function () {
  if (!window.L) {
    var mapElement = document.getElementById('map');
    mapElement.textContent = 'Impossibile caricare la mappa in questo ambiente.';
    return;
  }

  var map = L.map('map').setView([20, 0], 2);

  var openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
  });

  var relief = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; OpenTopoMap contributors'
  });

  L.control.layers({
    'Stradale (OpenStreetMap)': openStreetMap,
    'Satellite': satellite,
    'Rilievo': relief
  }).addTo(map);
})();
