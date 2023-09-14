var OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  
var OSM_ATTRIB = '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
var osmLayer = L.tileLayer(OSM_URL,  {attribution:  OSM_ATTRIB});  

var WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";  
var WAQI_ATTR = 'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
var waqiLayer = L.tileLayer(WAQI_URL,  {attribution:  WAQI_ATTR});  

var map = L.map('map').setView([40.7128, -74.0060],  11);  
map.addLayer(osmLayer).addLayer(waqiLayer);  