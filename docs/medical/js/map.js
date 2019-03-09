var map;var p;var zoom;var hash;var url;var number;var marker; var markers = []; var gps_button; var hinanj;var geok;var cloud;
var todou = new Array(47);var markers = new Array(47); var ido; var keido;var para; var par;

var lastup = "2019年3月4日";

	function start(){
		map = L.map('map');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>最終更新履歴：' + lastup
  		}).addTo(map);
		hash = new L.Hash(map);
	}

    function ini() {
		start();
		var kikan1 = L.geoJson(kikan, {style: sty,onEachFeature: geo_k, pointToLayer: iro1});
		map.addLayer(kikan1);
		var kikan2 = L.geoJson(chiki, {style: sty,onEachFeature: geo_k, pointToLayer: iro2});
		map.addLayer(kikan2);
	}

var return_button;

function rn(){
		location.href = "../index.html#medical";
}

function sty(feature) {
				return feature.properties && feature.properties.style;
			}

function iro1(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#FF0000",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function iro2(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }

    if (feature.properties && feature.properties.Niji){
    	popup += '<br>二次医療圏：' + feature.properties.Niji;
    }

    layer.bindPopup(popup);
}
