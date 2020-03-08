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

    function w_ini() {
		start(29.993, 119.179, 4);
		todou = L.geoJson(country, {style: sty,onEachFeature: geo_k});
		map.addLayer(todou);
		map.addControl(new L.Control.Fullscreen({position: 'topright'}));
	}
	
	function ni_ini(){
		var map2 = L.map('map2',{zoomControl: false});
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map2);
  		L.control.zoom({position: 'topright'}).addTo(map2);
		map2.setView([38.101, 139.179], 5);
		map2.addControl(new L.Control.Fullscreen({position: 'topright'}));
		todou = L.geoJson(japan, {style: sty,onEachFeature: geo_k2});
		map2.addLayer(todou);
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

function geo_k2(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Day) {
        popup = feature.properties.Day;
    }
    
    if (feature.properties && feature.properties.Gaiyou){
    	popup += '<br>概要：<br>' + feature.properties.Gaiyou;
    }

    if (feature.properties && feature.properties.Jyoukyou){
    	popup += '<br><br>濃厚接触者の状況：' + feature.properties.Jyoukyou;
    }

    layer.bindPopup(popup);
}