//version 5.
var map;var basemaps; var p;var zoom;var hash;var url;var number;var marker; var markers = [];

function map_ini(){

var tiri = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
	});

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.791, 136.893], zoom: 5,layers: [tiri]});

var drawnItems = new L.FeatureGroup().addTo(map);

var drawControl = new L.Control.Draw({
    draw: {
    polyline: {
      shapeOptions:{
        color: '#ff0000',
        opacity: 0.8
      }
    }
    //,polygon: false
    ,rectangle: false
    ,circle: false
  }
  ,edit: {
    featureGroup: drawnItems
  }
  ,position: 'topright'
}).addTo(map);

map.on('draw:created', function(e) {
  drawnItems.addLayer(e.layer);
});

}