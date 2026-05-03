/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat. De coördinaten van AP zijn: 51.23009 en 4.41616.
De initiële grootte is 16 met een maximale zoom van 19.
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap', {maxZoom: 19}).setView([51.25384, 4.46033], 16);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// plaats een marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.25384, 4.46033]).addTo(map);

apMarker
    .bindPopup('<b>Sint-Jozefkerk</b><br>Merksem')
    .openPopup();
