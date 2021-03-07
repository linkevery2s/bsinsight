//version 5.
var map;var basemaps; var p;var zoom;var hash;var url;var number;var marker; var markers = [];

function map_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://tile.geospatial.jp/nankaitrough/sindobunpu/{z}/{x}/{y}.png', {
    opacity: 0.7
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [34.791, 135.893], zoom: 5,layers: [tiri, test]});

}

/* 洪水浸水想定区域（想定最大規模） */

function shinsui_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_kuni_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 浸水継続時間（想定最大規模） */

function shinsuikeizoku_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_keizoku_kuni_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 家屋倒壊等氾濫想定区域（氾濫流） */

function kaokuhanran_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_kaokutoukai_hanran_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 家屋倒壊家屋倒壊等氾濫想定区域（河岸侵食） */

function kaokukawagan_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_kaokutoukai_kagan_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 高潮浸水想定区域 */

function takashio_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/03_hightide_l2_shinsuishin_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}


/* 津波浸水想定 */

function tunami_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/04_tsunami_newlegend_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 土砂災害警戒区域（土石流） */

function doseki_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 土砂災害警戒区域（急傾斜地の崩壊） */

function keisya_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 土砂災害警戒区域（地すべり） */

function jisuberi_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 土石流危険渓流 */

function kikenkeiryu_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 急傾斜地崩壊危険箇所 */

function kikenkeisya_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai/{z}/{x}/{y}.png', {
    opacity: 1.0
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 地すべり危険箇所 */

function kikenjisuberi_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}

/* 雪崩危険箇所 */

function kikennadare_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
var map = L.map('map_canvas', {center: [37.619, 138.466], zoom: 5,layers: [tiri, test]});

}
