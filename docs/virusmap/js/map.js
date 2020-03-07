var map;var p;var zoom;var hash;var url;var number;var marker; var markers = []; var gps_button; var hinanj;var geok;var cloud;
var todou = new Array(47);var markers = new Array(47); var ido; var keido;var para; var par;var back_b;var url_hash;

	function start(x, y, z){
		map = L.map('map',{zoomControl: false});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map);
		L.control.zoom({position: 'topright'}).addTo(map);
		map.setView([x, y], z);
	}

    function aichi_ini() {
		start(29.993, 119.179, 4);
		todou = L.geoJson(aichi, {style: sty,onEachFeature: geo_k});
		map.addLayer(todou);
	}

function sty(feature) {
				return feature.properties && feature.properties.style;
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Kansen){
    	popup += '<br>感染者数：' + feature.properties.Kansen;
    }

    if (feature.properties && feature.properties.Shibou){
    	popup += '<br>死亡者数：' + feature.properties.Shibou;
    }

    layer.bindPopup(popup);
}