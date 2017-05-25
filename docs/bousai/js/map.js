function map_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [34.791, 135.893], zoom: 8,layers: [tiri]});

var drawnItems1 = new L.FeatureGroup().addTo(map1);

var drawControl = new L.Control.Draw({
    draw: {
    polyline: {
      shapeOptions:{
        color: '#ff0000',
        opacity: 0.8
      }
    }
    ,polygon: false
    ,rectangle: false
    ,circle: false
  }
  ,edit: {
    featureGroup: drawnItems
  }
  ,position: 'topright'
}).addTo(map);

map.on('draw:created', function(e) {
  drawnItems1.addLayer(e.layer);
});

}