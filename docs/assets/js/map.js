//version 5.
var map;var basemaps; var p;var zoom;var hash;var url;var number;var marker; var markers = [];

function map_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
	});

var test = new L.tileLayer('https://tile.geospatial.jp/nankaitrough/sindobunpu/{z}/{x}/{y}.png', {
    opacity: 0.7
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [34.791, 135.893], zoom: 5,layers: [tiri, test]});

}

function map_ini2(){

   var map2 = new L.Map('re_map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map2);

   map2.setView([35.067, 137.189], 9);

	new L.Control.Fullscreen().addTo(map2);

}