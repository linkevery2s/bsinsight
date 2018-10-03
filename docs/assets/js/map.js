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

function hazard_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_kuni_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [35.619, 138.466], zoom: 5,layers: [tiri, test]});

}

function dosha_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
	});

var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
var t8 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
var t9 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
var t10 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
var t11 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
var t12 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
var t13 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
var t14 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
var t15 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
var t16 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
var t17 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
var t18 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
var t19 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
var t20 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
var t21 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
var t22 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
var t23 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
var t24 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
var t25 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
var t26 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
var t27 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
var t28 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
var t29 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
var t30 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
var t31 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
var t32 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
var t33 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
var t34 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
var t35 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
var t36 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
var t37 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
var t38 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
var t39 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
var t40 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
var t41 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
var t42 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
var t43 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
var t44 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
var t45 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
var t46 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
var t47 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/47/{z}/{x}/{y}.png', {opacity: 0.8});

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [35.619, 138.466], zoom: 5,layers: [tiri, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47 ]});

}