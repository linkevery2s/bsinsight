var map;var zoom;var url;var todou; var ido; var keido;

	function start(x, y, z){
		map = L.map('map',{zoomControl: false});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map);
  		L.control.zoom({position: 'topright'}).addTo(map);
		map.setView([x, y], z);
	}

    function w_ini() {
		start(29.993, 139.179, 2);
		var count1 = L.geoJson(country1, {style: sty,onEachFeature: geo_k, pointToLayer: iro1});
		var count2 = L.geoJson(country2, {style: sty,onEachFeature: geo_k, pointToLayer: iro2});
		var count3 = L.geoJson(country3, {style: sty,onEachFeature: geo_k, pointToLayer: iro3});
		var count4 = L.geoJson(country4, {style: sty,onEachFeature: geo_k, pointToLayer: iro4});
		var count5 = L.geoJson(country5, {style: sty,onEachFeature: geo_k, pointToLayer: iro5});
		map.addLayer(count1);
		map.addLayer(count2);
		map.addLayer(count3);
		map.addLayer(count4);
		map.addLayer(count5);
	}

	function ni_ini(){
		var map2 = L.map('map2',{zoomControl: false});
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map2);
  		L.control.zoom({position: 'topright'}).addTo(map2);
		map2.setView([38.101, 139.179], 5);
		var count1 = L.geoJson(japan1, {style: sty,onEachFeature: geo_k, pointToLayer: iro1});
		var count2 = L.geoJson(japan2, {style: sty,onEachFeature: geo_k, pointToLayer: iro3});
		var count3 = L.geoJson(japan3, {style: sty,onEachFeature: geo_k, pointToLayer: iro5});
		map2.addLayer(count1);
		map2.addLayer(count2);
		map2.addLayer(count3);
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

function iro1(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 18,
		fillColor: "#ff0000",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro2(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 16,
		fillColor: "#ff4500",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro3(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 14,
		fillColor: "#ffff00",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro4(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 12,
		fillColor: "#008000",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro5(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 10,
		fillColor: "#0000ff",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

 function get_kansen(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      var json_data = eval( '('+xhr.responseText +')');
      //var txt = xhr.responseText + '\n\n';
      txt = "陽性者数：" + json_data.npatients;
      txt += "<br>退院者　：" + json_data.nexits;
      txt += "<br>入院中　：" + json_data.ncurrentpatients;
      txt += "<br>死亡者　：" + json_data.ndeaths;

      var result = document.getElementById('ja_ka');
      result.innerHTML = txt;
      document.getElementById('day_s').innerHTML = "最終更新：" + json_data.lastUpdate;
    }
  };
  var url = "https://app.sabae.cc/api/covid19japan.json";
  xhr.open('GET', url);
  xhr.send(null);
};