//version 5.
var map;var basemaps; var p;var zoom;var hash;var url;var number;var marker; var markers = [];

function map_ini(){

var tiri = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
	});

var test = new L.tileLayer('https://tile.geospatial.jp/nankaitrough/sindobunpu/{z}/{x}/{y}.png', {
    opacity: 0.7
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [34.791, 135.893], zoom: 5,layers: [tiri, test]});

}

function hazard_ini(){

var tiri = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_kuni_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [35.619, 138.466], zoom: 5,layers: [tiri, test]});

}

