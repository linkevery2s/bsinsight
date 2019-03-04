var map;var p;var zoom;var hash;var url;var number;var marker; var markers = []; var gps_button; var hinanj;var geok;var cloud;
var todou = new Array(47);var markers = new Array(47); var ido; var keido;var para; var par;

var lastup = "2019年3月4日";

	function start(){
		map = L.map('map');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>最終更新履歴：' + lastup
  		}).addTo(map);
		hash = new L.Hash(map);
		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);
	}

function map_ini2() {
   map = new L.Map('map');                       
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>最終更新履歴：' + lastup
  		}).addTo(map);

	para = location.hash;
	par = para.split("/");

		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
		var now = L.marker([par[1] ,par[2]] ,{icon: pulsingIcon}).addTo(map);

		hash = new L.Hash(map);

			var back = L.easyButton('fa-undo', function(){
    			location.href = "../index.html#refuge";
			}).addTo( map );

		todou_ini();
		 hinan_m();
}

    function aichi_ini() {
		start();
		todou = L.geoJson(aichi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);
	}

    function hokkaido_ini() {
		start();
		todou = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);
	}

    function aomori_ini() {
		start();		
		todou = L.geoJson(aomori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);
	}

    function iwate_ini() {
		start();
		todou = L.geoJson(iwate, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function akita_ini() {
		start();
		todou = L.geoJson(akita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyagi_ini() {
		start();
		todou = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamagata_ini() {
		start();
		todou = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukushima_ini() {
		start();
		todou = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nigata_ini() {
		start();
		todou = L.geoJson(nigata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tochigi_ini() {
		start();
		todou = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gunma_ini() {
		start();
		todou = L.geoJson(gunma, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ibaraki_ini() {
		start();
		todou = L.geoJson(ibaraki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tiba_ini() {
		start();
		todou = L.geoJson(tiba, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saitama_ini() {
		start();
		todou = L.geoJson(saitama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokyo_ini() {
		start();
		todou = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kanagawa_ini() {
		start();
		todou = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamanashi_ini() {
		start();
		todou = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nagano_ini() {
		start();
		todou = L.geoJson(nagano, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shizuoka_ini() {
		start();
		todou = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gifu_ini() {
		start();
		todou = L.geoJson(gifu, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function toyama_ini() {
		start();
		todou = L.geoJson(toyama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ishikawa_ini() {
		start();
		todou = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukui_ini() {
		start();
		todou = L.geoJson(fukui, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shiga_ini() {
		start();
		todou = L.geoJson(shiga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function mie_ini() {
		start();
		todou = L.geoJson(mie, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kyoto_ini() {
		start();
		todou = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function osaka_ini() {
		start();
		todou = L.geoJson(osaka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nara_ini() {
		start();
		todou = L.geoJson(nara, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function wakayama_ini() {
		start();
		todou = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hyogo_ini() {
		start();
		todou = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tottori_ini() {
		start();
		todou = L.geoJson(tottori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okayama_ini() {
		start();
		todou = L.geoJson(okayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shimane_ini() {
		start();
		todou = L.geoJson(shimane, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hiroshima_ini() {
		start();
		todou = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamaguchi_ini() {
		start();
		todou = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagawa_ini() {
		start();
		todou = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokushima_ini() {
		start();
		todou = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ehime_ini() {
		start();
		todou = L.geoJson(ehime, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kochi_ini() {
		start();
		todou = L.geoJson(kochi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukuoka_ini() {
		start();
		todou = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saga_ini() {
		start();
		todou = L.geoJson(saga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

function oita_ini() {
		start();
		todou = L.geoJson(oita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}


    function nagasaki_ini() {
		start();
		todou = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kumamoto_ini() {
		start();
		todou = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyazaki_ini() {
		start();
		todou = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagoshima_ini() {
		start();
		todou = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okinawa_ini() {
		start();
		todou = L.geoJson(okinawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

var return_button;

function GPS(){
	if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     } else {
       alert("エラーが発生したので、現在地を取得できませんでした。");      
     }
}

var b = 0;var marker1;var marker2;

function gps_get(position) {
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    map.setView([ido, keido], 15);

		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});

if( b == 0 ){
		marker1 = L.marker([ido, keido] ,{icon: pulsingIcon}).addTo(map);

b=1;

marker2.onRemove(map);

}
else{
marker1.onRemove(map);

marker2 = L.marker([ido, keido] ,{icon: pulsingIcon}).addTo(map);

b=0;

}
}

function gps_error(error) {
       alert("エラーが発生したので、現在地を取得できませんでした。");
}

function rn(){
		location.href = "../index.html#refuge";
}

function sty(feature) {
				return feature.properties && feature.properties.style;
			}

function iro(feature, latlng) {
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

    if (feature.properties && feature.properties.kouzui){
    	popup += '<br>洪水：<span id = "pop_moji">' + feature.properties.kouzui + '</span>';
    }

    if (feature.properties && feature.properties.gake){
    	popup += '　がけ崩れ、土石流及び地滑り：<span id = "pop_moji">' + feature.properties.gake + '</span><br>';
    }

    if (feature.properties && feature.properties.takashio){
    	popup += '高潮：<span id = "pop_moji">' + feature.properties.takashio + '</span>';
    }

    if (feature.properties && feature.properties.jishin){
    	popup += '　地震：<span id = "pop_moji">' + feature.properties.jishin + '</span>';
    }

    if (feature.properties && feature.properties.tsunami){
    	popup += '　津波：<span id = "pop_moji">' + feature.properties.tsunami + '</span><br>';
    }

    if (feature.properties && feature.properties.kaji){
    	popup += '大規模な火事：<span id = "pop_moji">' + feature.properties.kaji + '</span>';
    }

    if (feature.properties && feature.properties.naisui){
    	popup += '　内水氾濫：<span id = "pop_moji">' + feature.properties.naisui + '</span>';
    }

    if (feature.properties && feature.properties.kazan){
    	popup += '　火山：<span id = "pop_moji">' + feature.properties.kazan + '</span>';
    }

    layer.bindPopup(popup);
}


function todou_ini(){
		todou[0] = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[1] = L.geoJson(aomori, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[2] = L.geoJson(iwate, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[3] = L.geoJson(miyagi, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[4] = L.geoJson(akita, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[5] = L.geoJson(yamagata, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[6] = L.geoJson(fukushima, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[7] = L.geoJson(ibaraki, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[8] = L.geoJson(tochigi, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[9] = L.geoJson(gunma, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[10] = L.geoJson(saitama, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[11] = L.geoJson(tiba, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[12] = L.geoJson(tokyo, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[13] = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[14] = L.geoJson(nigata, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[15] = L.geoJson(toyama, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[16] = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[17] = L.geoJson(fukui, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[18] = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[19] = L.geoJson(nagano, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[20] = L.geoJson(gifu, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[21] = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[22] = L.geoJson(aichi, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[23] = L.geoJson(mie, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[24] = L.geoJson(shiga, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[25] = L.geoJson(kyoto, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[26] = L.geoJson(osaka, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[27] = L.geoJson(hyogo, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[28] = L.geoJson(nara, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[29] = L.geoJson(wakayama, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[30] = L.geoJson(tottori, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[31] = L.geoJson(shimane, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[32] = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[33] = L.geoJson(okayama, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[34] = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[35] = L.geoJson(tokushima, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[36] = L.geoJson(kagawa, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[37] = L.geoJson(ehime, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[38] = L.geoJson(kochi, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[39] = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[40] = L.geoJson(saga, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[41] = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[42] = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[43] = L.geoJson(oita, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[44] = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[45] = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
		todou[46] = L.geoJson(okinawa, {style: sty,onEachFeature: geo_m,pointToLayer: iro});
}

function hinan_m(){

for (  var i = 0;  i < 47;  i++  ) {
markers[i] = L.markerClusterGroup();
markers[i].addLayer(todou[i]);
map.addLayer(markers[i]);
}
}

function geo_m(feature, layer) {

    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }
    
    if (feature.properties && feature.properties.kouzui){
    	popup += '<br>洪水：<span id = "pop_moji">' + feature.properties.kouzui + '</span>';
    }

    if (feature.properties && feature.properties.gake){
    	popup += '　がけ崩れ、土石流及び地滑り：<span id = "pop_moji">' + feature.properties.gake + '</span><br>';
    }

    if (feature.properties && feature.properties.takashio){
    	popup += '高潮：<span id = "pop_moji">' + feature.properties.takashio + '</span>';
    }

    if (feature.properties && feature.properties.jishin){
    	popup += '　地震：<span id = "pop_moji">' + feature.properties.jishin + '</span>';
    }

    if (feature.properties && feature.properties.tsunami){
    	popup += '　津波：<span id = "pop_moji">' + feature.properties.tsunami + '</span><br>';
    }

    if (feature.properties && feature.properties.kaji){
    	popup += '大規模な火事：<span id = "pop_moji">' + feature.properties.kaji + '</span>';
    }

    if (feature.properties && feature.properties.naisui){
    	popup += '　内水氾濫：<span id = "pop_moji">' + feature.properties.naisui + '</span>';
    }

    if (feature.properties && feature.properties.kazan){
    	popup += '　火山：<span id = "pop_moji">' + feature.properties.kazan + '</span>';
    }

    popup += '<br><a href = "javascript:void(0);" onclick = "test(' + feature.geometry.coordinates[1] + "," + feature.geometry.coordinates[0] + ')">' + "ルート検索" + "</a>";


    layer.bindPopup(popup);
}

var a = 0; var way1; var way2;

function test(x, y){

map.closePopup();

if(a == 0){

way1 = L.Routing.control({
  waypoints: [
    L.latLng(par[1], par[2]),
    L.latLng(x, y)
  ],
    routeWhileDragging: false,
});

way1.onAdd(map);

 a = 1;
 
 way2.onRemove(map);

}
else{

	way1.onRemove(map);
	a = 0;

way2 = L.Routing.control({
  waypoints: [
    L.latLng(par[1], par[2]),
    L.latLng(x, y)
  ],
    routeWhileDragging: false,
});

way2.onAdd(map);

}


}