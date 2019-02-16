var map; var ido; var keido;var todou;var gps_button;var hash;var back_b;

	function start(){
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a><br>最終更新履歴：2019年2月16日'
  		}).addTo(map);
		hash = new L.Hash(map);
		back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);
		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
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
		
  		
  	
		//map.setView([39.529, 140.389], 8);

		
		todou = L.geoJson(akita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyagi_ini() {
		start();
		
  		
  	
		//map.setView([38.505, 140.707], 8);

		
		todou = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamagata_ini() {
		start();
		
  		
  	
		//map.setView([38.428, 140.026], 8);

		
		todou = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukushima_ini() {
		start();
		
  		
  	
		//map.setView([37.392, 139.883], 8);

		
		todou = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nigata_ini() {
		start();
		
  		
  	
		//map.setView([37.375, 138.735], 8);

		
		todou = L.geoJson(nigata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tochigi_ini() {
		start();
		
  		
  	
		//map.setView([36.673, 139.653], 8);

		
		todou = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gunma_ini() {
		start();
		
  		
  	
		//map.setView([36.461, 138.950], 8);

		
		todou = L.geoJson(gunma, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ibaragi_ini() {
		start();
		
  		
  	
		//map.setView([36.271, 140.235], 8);

		
		todou = L.geoJson(ibaragi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tiba_ini() {
		start();
		
  		
  	
		//map.setView([35.488, 139.966], 8);

		
		todou = L.geoJson(tiba, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saitama_ini() {
		start();
		
  		
  	
		//map.setView([35.929, 139.147], 8);

		
		todou = L.geoJson(saitama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokyo_ini() {
		start();
		
  		
  	
		//map.setView([35.595, 139.592], 8);

		
		todou = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kanagawa_ini() {
		start();
		
  		
  	
		//map.setView([35.3980, 139.3314], 8);

		
		todou = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamanashi_ini() {
		start();
		
  		
  	
		//map.setView([35.532, 138.565], 8);

		
		todou = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nagano_ini() {
		start();
		
  		
  	
		//map.setView([35.960, 137.928], 8);

		
		todou = L.geoJson(nagano, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shizuoka_ini() {
		start();
		
  		
  	
		//map.setView([35.012, 138.214], 8);

		
		todou = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gifu_ini() {
		start();
		
  		
  	
		//map.setView([35.724, 136.890], 8);

		
		todou = L.geoJson(gifu, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function toyama_ini() {
		start();
		
  		
  	
		//map.setView([36.624, 137.016], 8);

		
		todou = L.geoJson(toyama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ishikawa_ini() {
		start();
		
  		
  	
		//map.setView([36.844, 136.785], 8);

		
		todou = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukui_ini() {
		start();
		
  		
  	
		//map.setView([35.898, 136.192], 8);

		
		todou = L.geoJson(fukui, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shiga_ini() {
		start();
		
  		
  	
		//map.setView([35.255, 135.950], 8);

		
		todou = L.geoJson(shiga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function mie_ini() {
		start();
		
  		
  	
		//map.setView([34.606, 136.225], 8);

		
		todou = L.geoJson(mie, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kyoto_ini() {
		start();
		
  		
  	
		//map.setView([35.156, 135.368], 8);

		
		todou = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function osaka_ini() {
		start();
		
  		
  	
		//map.setView([34.692, 135.511], 8);

		
		todou = L.geoJson(osaka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nara_ini() {
		start();
		
  		
  	
		//map.setView([34.207, 135.818], 8);

		
		todou = L.geoJson(nara, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function wakayama_ini() {
		start();
		
  		
  	
		//map.setView([33.975, 135.368], 8);

		
		todou = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hyogo_ini() {
		start();
		
  		
  	
		//map.setView([35.043, 134.484], 8);

		
		todou = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tottori_ini() {
		start();
		
  		
  	
		//map.setView([35.313, 133.786], 8);

		
		todou = L.geoJson(tottori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okayama_ini() {
		start();
		
  		
  	
		//map.setView([34.940, 133.550], 8);

		
		todou = L.geoJson(okayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shimane_ini() {
		start();
		
  		
  	
		//map.setView([34.854, 132.347], 8);

		
		todou = L.geoJson(shimane, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hiroshima_ini() {
		start();
		
  		
  	
		//map.setView([34.556, 132.512], 8);

		
		todou = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamaguchi_ini() {
		start();
		
  		
  	
		//map.setView([34.207, 131.550], 8);

		
		todou = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagawa_ini() {
		start();
		
  		
  	
		//map.setView([34.057, 133.726], 8);

		
		todou = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokushima_ini() {
		start();
		
  		
  	
		//map.setView([33.852, 133.923], 8);

		
		todou = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ehime_ini() {
		start();
		
  		
  	
		//map.setView([33.679, 132.764], 8);

		
		todou = L.geoJson(ehime, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kochi_ini() {
		start();
		
  		
  	
		//map.setView([33.390, 133.259], 8);

		
		todou = L.geoJson(kochi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukuoka_ini() {
		start();
		
  		
  	
		//map.setView([33.431, 130.583], 8);

		
		todou = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saga_ini() {
		start();
		
  		
  	
		//map.setView([33.170, 130.073], 8);

		
		todou = L.geoJson(saga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

function oita_ini() {
		start();
		
  		
  	
		//map.setView([33.128, 131.083], 8);

		
		todou = L.geoJson(oita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}


    function nagasaki_ini() {
		start();
		
  		
  	
		//map.setView([32.875, 129.661], 8);

		
		todou = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kumamoto_ini() {
		start();
		
  		
  	
		//map.setView([32.426, 130.759], 8);

		
		todou = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyazaki_ini() {
		start();
		
  		
  	
		//map.setView([32.213, 131.188], 8);

		
		todou = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagoshima_ini() {
		start();
		
  		
  	
		//map.setView([31.541, 130.715], 8);

		
		todou = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okinawa_ini() {
		start();
		
  		
  	
		//map.setView([26.436, 127.996], 8);

		
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

var a = 0; var way1; var way2;

function test(x,y){

map.closePopup();

if(a == 0){

way1 = L.Routing.control({
  waypoints: [
    L.latLng(ido, keido),
    L.latLng(x , y)
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
    L.latLng(ido, keido),
    L.latLng(x , y)
  ],
    routeWhileDragging: false,
});

way2.onAdd(map);

}


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


