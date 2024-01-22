
var mymap = L.map('mapid_69').setView([45.764043, 4.835659], 13); // Coordonnées de Lyon

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Vous pouvez ajouter des marqueurs, des cercles ou des polygones ici
// Exemple: L.marker([45.764043, 4.835659]).addTo(mymap).bindPopup("Un exemple de popup.");
