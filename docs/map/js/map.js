function ame_ini() {

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
	});

L.YimgTileLayer = L.TileLayer.extend({
    getTileUrl: function (coords) {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hours = now.getHours();
        var minutes = now.getMinutes();

        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        if (hours < 10) hours = '0' + hours;
        minutes *= 0.1;
        minutes = Math.floor(minutes);
        minutes *= 10;
        if (minutes < 10) minutes = '0' + minutes;
        date = "" + year + month + day + hours + minutes;
        return L.Util.template(this._url, L.extend({
            d: date,
            x: coords.x,
            y: Math.pow(2, this._getZoomForUrl() - 1) - 1 - coords.y,
            z: this._getZoomForUrl() + 1
        }, this.options));
    }
});

var rainmap = new L.YimgTileLayer('http://weather.map.c.yimg.jp/weather?x={x}&y={y}&z={z}&size=256&date={d}', {
    attribution: '雨雲レーダー',
    maxZoom: 18,
    opacity: 0.5
});

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
	map = L.map('map', {center: [35.067, 137.189], zoom: 5 ,layers: [tiri, rainmap]});

}

function ai_ini() {
   map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.067, 137.189], 9);
   Geost();
   Geok();
   Geoo();
}

function ho_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([43.411, 142.695], 8);
   Geok();
}

function ku_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([32.7884, 130.7373], 9);
   Geost();
   Geok();
   Geoo();
}

function ao_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([40.8232, 140.7541], 9);
   Geok();
}

function iw_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([39.4966, 141.3391], 9);
   Geok();
}

function ak_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([39.5454, 140.4904], 9);
   Geost();
   Geok();
   Geoo();}

function my_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([38.2738, 140.8722], 9);
   Geost();
   Geok();
   Geoo();}

function yg_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([38.2953, 140.1498], 9);
   Geost();
   Geok();
   Geoo();}

function fk_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([37.4193, 140.1746], 9);
   Geost();
   Geok();
   Geoo();}

function ni_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([37.7088, 139.1309], 9);
   Geost();
   Geok();
   Geoo();}

function mi_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.5009, 136.3541], 9);
   Geost();
   Geok();
   Geoo();}

function ib_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.2609, 140.3146], 9);
   Geost();
   Geok();
   Geoo();}

function ok_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.9366, 133.6679], 9);
   Geost();
   Geok();
   Geoo();}

function ti_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.5350, 140.2336], 10);
   Geost();
   Geok();
   Geoo();}

function fo_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.4584, 130.6851], 10);
   Geost();
   Geok();
   Geoo();}

function tc_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.7064, 139.8354], 10);
   Geost();
   Geok();
   Geoo();}

function gu_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.3843, 138.8109], 10);
   Geost();
   Geok();
   Geoo();}

function si_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.0108, 139.3011], 10);
   Geost();
   Geok();
   Geoo();}

function tk_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.6899, 139.4296], 11);
   Geost();
   Geok();
   Geoo();}

function kn_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.4375, 139.3128], 11);
   Geost();
   Geok();
   Geoo();}

function yn_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.6132, 138.6145], 10);
   Geost();
   Geok();
   Geoo();}

function gi_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.8301, 137.0599], 9);
   Geost();
   Geok();
   Geoo();}

function ty_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.6546, 137.2426], 10);
   Geost();
   Geok();
   Geoo();}

function ng_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.1878, 137.8784], 9);
   Geost();
   Geok();
   Geoo();}

function sz_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.0429, 138.3701], 10);
   Geost();
   Geok();
   Geoo();}

function is_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([36.6937, 136.7990], 9);
   Geost();
   Geok();
   Geoo();}

function fi_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.8006, 136.2250], 10);
   Geost();
   Geok();
   Geoo();}

function sg_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.3426, 136.1110], 10);
   Geost();
   Geok();
   Geoo();}

function nr_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.3100, 135.8817], 10);
   Geost();
   Geok();
   Geoo();}

function wk_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.9314, 135.4436], 10);
   Geost();
   Geok();
   Geoo();}

function kt_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.2944, 135.2870], 10);
   Geost();
   Geok();
   Geoo();}

function os_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.6134, 135.5026], 10);
   Geost();
   Geok();
   Geoo();}

function hg_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.9771, 134.7418], 9);
   Geost();
   Geok();
   Geoo();}

function tt_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.2445, 133.7888], 9);
   Geost();
   Geok();
   Geoo();}

function hi_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.5083, 132.5734], 10);
   Geost();
   Geok();
   Geoo();}

function sm_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.9231, 132.6242], 9);
   Geost();
   Geok();
   Geoo();}

function yc_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.2510, 131.6052], 10);
   Geost();
   Geok();
   Geoo();}

function kg_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([34.1692, 134.0730], 10);
   Geost();
   Geok();
   Geoo();}

function kc_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.5448, 133.5168], 9);
   Geost();
   Geok();
   Geoo();}

function eh_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.6935, 132.9950], 9);
   Geost();
   Geok();
   Geoo();}

function ts_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.9166, 134.2749], 10);
   Geost();
   Geok();
   Geoo();}

function ns_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.1709, 129.8145], 9);
   Geost();
   Geok();
   Geoo();}

function sa_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.3334, 130.2223], 10);
   Geost();
   Geok();
   Geoo();}

function oi_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([33.1985, 131.2042], 9);
   Geost();
   Geok();
   Geoo();}

function mz_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([32.3788, 131.3635], 9);
   Geost();
   Geok();
   Geoo();}

function ks_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([31.5820, 130.6851], 9);
   Geost();
   Geok();
   Geoo();}

function on_ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([26.4632, 127.8973], 10);
   Geost();
   Geok();
   Geoo();}

function mapi(){
	Geost();
	Geok();
	Geoo();
}

function st_checked(){
	if(document.getElementById("st").checked){
		Geost();
	}
	else{
		map.removeLayer(geost);
	}
}

function k_checked(){
	if(document.getElementById("k").checked){
		Geok();
	}
	else{
		map.removeLayer(geok);
	}
}

function o_checked(){
	if(document.getElementById("o").checked){
		Geoo();
	}
	else{
		map.removeLayer(geoo);
	}
}

function Geost(){
		geost = L.geoJson(st, {

			style: function (feature) {
				return feature.properties && feature.properties.style;
			},

			onEachFeature: geo_st,

			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}
		});
		
		map.addLayer(geost);

}

function geo_st(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }
    
    if (feature.properties && feature.properties.Capacity){
    	popup += '<br>収容人数：' + feature.properties.Capacity;
    }
    
	//popup += '<br><a href="https://maps.google.co.jp/maps?ll=' + feature.properties.la + "," + feature.properties.ln + "&q=" + feature.properties.la + "," + feature.properties.ln + '" target="_blank">Google マップで見る</a>'
	popup += '<br><a href="https://maps.google.co.jp/maps?daddr=' + feature.properties.la + "," + feature.properties.ln + '" target="_blank">Google マップでルート検索</a>'
    layer.bindPopup(popup);
}

function Geok(){
		geok = L.geoJson(k, {

			style: function (feature) {
				return feature.properties && feature.properties.style;
			},

			onEachFeature: geo_k,

			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}
		});
		
		map.addLayer(geok);
}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }
    
    if (feature.properties && feature.properties.Capacity){
    	popup += '<br>収容人数：' + feature.properties.Capacity;
    }
    
	popup += '<br><a href="https://maps.google.co.jp/maps?daddr=' + feature.properties.la + "," + feature.properties.ln + '" target="_blank">Google マップでルート検索</a>'
    layer.bindPopup(popup);
}

function Geoo(){
		geoo = L.geoJson(o, {

			style: function (feature) {
				return feature.properties && feature.properties.style;
			},

			onEachFeature: geo_o,

			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}
		});
		
		map.addLayer(geoo);
}

function geo_o(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }
    
    if (feature.properties && feature.properties.Capacity){
    	popup += '<br>収容人数：' + feature.properties.Capacity;
    }
    
	popup += '<br><a href="https://maps.google.co.jp/maps?daddr=' + feature.properties.la + "," + feature.properties.ln + '" target="_blank">Google マップでルート検索</a>'
    layer.bindPopup(popup);
}

function GPS(){
	if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     } else {
       alert("エラーが発生したので、現在地を取得できませんでした。");      
     }
}
 
function gps_get(position) {
    var ido = position.coords.latitude;
    var keido = position.coords.longitude;
    map.setView([ido, keido], 15);
		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
		var marker = L.marker([ido, keido] ,{icon: pulsingIcon}).addTo(map);

}

function gps_error(error) {
       alert("エラーが発生したので、現在地を取得できませんでした。");
}
