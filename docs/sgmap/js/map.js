//version 5.
var map;var p;var zoom;var marker; var markers = []; var gps_button; var hinanj;var marker11;var url_hash;
var todou = "" ;var ido; var keido; var hash;var back_b; var t1, t2, t3, t4, t5, t6, t7; var baseMaps; var cont = "";

	function start(x, y, z){
		map = L.map('map',{zoomControl: false});
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
  		hash = new L.Hash(map);
  		L.control.zoom({position: 'topright'}).addTo(map);
  		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}, {position: 'topright'}).addTo( map );
		back_b = L.easyButton('fa-undo', function(){rn();}, {position: 'topright'}).addTo(map);
		url_hash = location.hash;
		if(url_hash === ""){map.setView([x, y], z);}
	}

function rn(){
		location.href = "../index.html";
}

	function GPS(){
		if (navigator.geolocation) {
       	navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
       	alert("エラーが発生したので、現在地を取得できませんでした。");
     	}
	}

	function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
	//marker = L.marker([ido, keido]);
	//map.addLayer(marker);
	//var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
	
	L.marker([ido, keido]).addTo(map);

	
	}

	function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}

	function ini(){

		start(37.178, 137.769, 5);
	
	}

    function map_add(x, y) {

    if(todou === ""){	
    	}else{
		map.removeLayer(todou);
		
		}
	if(cont === ""){
		}else{
		cont.remove();
		t1.remove();t2.remove();t3.remove();t4.remove();t5.remove();t6.remove();t7.remove();
		}
		
		todou = L.geoJson(x, {style: sty,onEachFeature: geo_k, pointToLayer: iro}).addTo(map);
		map.fitBounds(todou.getBounds());
    	t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
    	t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
    	t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
		t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
		t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
		t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
		t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/' + y + '/{z}/{x}/{y}.png', {opacity: 0.8});
		
		baseMaps = {
			"指定緊急避難場所": todou,
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7
		};
		cont = L.control.layers(baseMaps).addTo(map);

	}


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
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}

	function sty(feature) {return feature.properties && feature.properties.style;}

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

function list(){
	
	var num = document.getElementById("number").value;
	
	switch (num) {
		case "01": map_add(hokkaido, num);break;
		case "02": map_add(aomori, num);break;
		case "03": map_add(iwate, num);break;
		case "04": map_add(miyagi, num);break;
		
		case "23": map_add(aichi, num);break;
		
		default:
	}
	
	
	
}