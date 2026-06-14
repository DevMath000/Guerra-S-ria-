// MAPA
var map = L.map('map').setView([34.8, 38.9], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap'
}).addTo(map);

L.marker([33.5138, 36.2765]).addTo(map).bindPopup("Damasco");
L.marker([36.2021, 37.1343]).addTo(map).bindPopup("Aleppo");
L.marker([34.7324, 36.7181]).addTo(map).bindPopup("Homs");
L.marker([35.5433, 35.7802]).addTo(map).bindPopup("Latakia");


// GRÁFICO
new Chart(document.getElementById('grafico'), {
type: 'line',
data: {
labels: ['2011','2013','2015','2017','2019','2023'],
datasets: [{
label: 'Milhões de deslocados',
data: [1,4,8,11,13,13.5],
borderColor: '#38bdf8',
backgroundColor: 'rgba(56,189,248,0.2)',
tension: 0.4
}]
}
});
