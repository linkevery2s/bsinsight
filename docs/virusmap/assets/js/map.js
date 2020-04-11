var map;var zoom;var url;var todou; var ido; var keido;

	function start(x, y, z){
		map = L.map('map',{zoomControl: false});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map);
  		L.control.zoom({position: 'topright'}).addTo(map);
		map.setView([x, y], z);
	}

    function w_ini() {
		start(29.993, 139.179, 2);
		var count1 = L.geoJson(country1, {style: sty,onEachFeature: geo_k, pointToLayer: iro1});
		var count2 = L.geoJson(country2, {style: sty,onEachFeature: geo_k, pointToLayer: iro2});
		var count3 = L.geoJson(country3, {style: sty,onEachFeature: geo_k, pointToLayer: iro3});
		var count4 = L.geoJson(country4, {style: sty,onEachFeature: geo_k, pointToLayer: iro4});
		var count5 = L.geoJson(country5, {style: sty,onEachFeature: geo_k, pointToLayer: iro5});
		map.addLayer(count1);
		map.addLayer(count2);
		map.addLayer(count3);
		map.addLayer(count4);
		map.addLayer(count5);
	}

	function ni_ini(){
		var map2 = L.map('map2',{zoomControl: false});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map2);
  		L.control.zoom({position: 'topright'}).addTo(map2);
		map2.setView([38.101, 139.179], 5);
		var count1 = L.geoJson(japan1, {style: sty,onEachFeature: geo_k, pointToLayer: iro1});
		var count2 = L.geoJson(japan2, {style: sty,onEachFeature: geo_k, pointToLayer: iro2});
		var count3 = L.geoJson(japan3, {style: sty,onEachFeature: geo_k, pointToLayer: iro3});
		var count4 = L.geoJson(japan4, {style: sty,onEachFeature: geo_k, pointToLayer: iro4});
		var count5 = L.geoJson(japan5, {style: sty,onEachFeature: geo_k, pointToLayer: iro5});
		map2.addLayer(count1);
		map2.addLayer(count2);
		map2.addLayer(count3);
		map2.addLayer(count4);
		map2.addLayer(count5);
	}

function sty(feature) {
				return feature.properties && feature.properties.style;
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Kansen){
    	popup += '<br>感染者数：' + feature.properties.Kansen;
    }

    if (feature.properties && feature.properties.Shibou){
    	popup += '<br>死亡者数：' + feature.properties.Shibou;
    }

    layer.bindPopup(popup);
}

function iro1(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 18,
		fillColor: "#ff0000",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro2(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 16,
		fillColor: "#ff4500",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro3(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 14,
		fillColor: "#ffff00",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro4(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 12,
		fillColor: "#008000",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}

function iro5(feature, latlng) {
	return L.circleMarker(latlng, {
		radius: 10,
		fillColor: "#0000ff",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	});
}


function get_kansen(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');

			var txt = "日本全国<br>陽性者数：" + json_data.npatients;
			txt += "<br>退院者　：" + json_data.nexits;
			txt += "<br>入院中　：" + json_data.ncurrentpatients;
			txt += "<br>死亡者　：" + json_data.ndeaths;
			document.getElementById('ja_ka').innerHTML = txt;

			var hokkaido = "北海道<br>陽性者数：" + json_data.area[0].npatients;
			hokkaido += "<br>退院者　：" + json_data.area[0].nexits;
			hokkaido += "<br>入院中　：" + json_data.area[0].ncurrentpatients;
			hokkaido += "<br>死亡者　：" + json_data.area[0].ndeaths;
			document.getElementById('ja_hokkaido').innerHTML = hokkaido;

			var aomori = "青森県<br>陽性者数：" + json_data.area[1].npatients;
			aomori += "<br>退院者　：" + json_data.area[1].nexits;
			aomori += "<br>入院中　：" + json_data.area[1].ncurrentpatients;
			aomori += "<br>死亡者　：" + json_data.area[1].ndeaths;
			document.getElementById('ja_aomori').innerHTML = aomori;

			var iwate = "岩手県<br>陽性者数：" + json_data.area[2].npatients;
			iwate += "<br>退院者　：" + json_data.area[2].nexits;
			iwate += "<br>入院中　：" + json_data.area[2].ncurrentpatients;
			iwate += "<br>死亡者　：" + json_data.area[2].ndeaths;
			document.getElementById('ja_iwate').innerHTML = iwate;

			var miyagi = "宮城県<br>陽性者数：" + json_data.area[3].npatients;
			miyagi += "<br>退院者　：" + json_data.area[3].nexits;
			miyagi += "<br>入院中　：" + json_data.area[3].ncurrentpatients;
			miyagi += "<br>死亡者　：" + json_data.area[3].ndeaths;
			document.getElementById('ja_miyagi').innerHTML = miyagi;

			var akita = "秋田県<br>陽性者数：" + json_data.area[4].npatients;
			akita += "<br>退院者　：" + json_data.area[4].nexits;
			akita += "<br>入院中　：" + json_data.area[4].ncurrentpatients;
			akita += "<br>死亡者　：" + json_data.area[4].ndeaths;
			document.getElementById('ja_akita').innerHTML = akita;

			var yamagata = "山形県<br>陽性者数：" + json_data.area[5].npatients;
			yamagata += "<br>退院者　：" + json_data.area[5].nexits;
			yamagata += "<br>入院中　：" + json_data.area[5].ncurrentpatients;
			yamagata += "<br>死亡者　：" + json_data.area[5].ndeaths;
			document.getElementById('ja_yamagata').innerHTML = yamagata;

			var fukushima = "福島県<br>陽性者数：" + json_data.area[6].npatients;
			fukushima += "<br>退院者　：" + json_data.area[6].nexits;
			fukushima += "<br>入院中　：" + json_data.area[6].ncurrentpatients;
			fukushima += "<br>死亡者　：" + json_data.area[6].ndeaths;
			document.getElementById('ja_fukushima').innerHTML = fukushima;

			var ibaraki = "茨城県<br>陽性者数：" + json_data.area[7].npatients;
			ibaraki += "<br>退院者　：" + json_data.area[7].nexits;
			ibaraki += "<br>入院中　：" + json_data.area[7].ncurrentpatients;
			ibaraki += "<br>死亡者　：" + json_data.area[7].ndeaths;
			document.getElementById('ja_ibaraki').innerHTML = ibaraki;

			var tochigi = "栃木県<br>陽性者数：" + json_data.area[8].npatients;
			tochigi += "<br>退院者　：" + json_data.area[8].nexits;
			tochigi += "<br>入院中　：" + json_data.area[8].ncurrentpatients;
			tochigi += "<br>死亡者　：" + json_data.area[8].ndeaths;
			document.getElementById('ja_tochigi').innerHTML = tochigi;

			var gunma = "群馬県<br>陽性者数：" + json_data.area[9].npatients;
			gunma += "<br>退院者　：" + json_data.area[9].nexits;
			gunma += "<br>入院中　：" + json_data.area[9].ncurrentpatients;
			gunma += "<br>死亡者　：" + json_data.area[9].ndeaths;
			document.getElementById('ja_gunma').innerHTML = gunma;

			var saitama = "埼玉県<br>陽性者数：" + json_data.area[10].npatients;
			saitama += "<br>退院者　：" + json_data.area[10].nexits;
			saitama += "<br>入院中　：" + json_data.area[10].ncurrentpatients;
			saitama += "<br>死亡者　：" + json_data.area[10].ndeaths;
			document.getElementById('ja_saitama').innerHTML = saitama;

			var tiba = "千葉県<br>陽性者数：" + json_data.area[11].npatients;
			tiba += "<br>退院者　：" + json_data.area[11].nexits;
			tiba += "<br>入院中　：" + json_data.area[11].ncurrentpatients;
			tiba += "<br>死亡者　：" + json_data.area[11].ndeaths;
			document.getElementById('ja_tiba').innerHTML = tiba;

			var tokyo = "東京都<br>陽性者数：" + json_data.area[12].npatients;
			tokyo += "<br>退院者　：" + json_data.area[12].nexits;
			tokyo += "<br>入院中　：" + json_data.area[12].ncurrentpatients;
			tokyo += "<br>死亡者　：" + json_data.area[12].ndeaths;
			document.getElementById('ja_tokyo').innerHTML = tokyo;

			var kanagawa = "神奈川県<br>陽性者数：" + json_data.area[13].npatients;
			kanagawa += "<br>退院者　：" + json_data.area[13].nexits;
			kanagawa += "<br>入院中　：" + json_data.area[13].ncurrentpatients;
			kanagawa += "<br>死亡者　：" + json_data.area[13].ndeaths;
			document.getElementById('ja_kanagawa').innerHTML = kanagawa;

			var kanagawa = "神奈川県<br>陽性者数：" + json_data.area[13].npatients;
			kanagawa += "<br>退院者　：" + json_data.area[13].nexits;
			kanagawa += "<br>入院中　：" + json_data.area[13].ncurrentpatients;
			kanagawa += "<br>死亡者　：" + json_data.area[13].ndeaths;
			document.getElementById('ja_kanagawa').innerHTML = kanagawa;

			var niigata = "新潟県<br>陽性者数：" + json_data.area[14].npatients;
			niigata += "<br>退院者　：" + json_data.area[14].nexits;
			niigata += "<br>入院中　：" + json_data.area[14].ncurrentpatients;
			niigata += "<br>死亡者　：" + json_data.area[14].ndeaths;
			document.getElementById('ja_niigata').innerHTML = niigata;

			var toyama = "富山県<br>陽性者数：" + json_data.area[15].npatients;
			toyama += "<br>退院者　：" + json_data.area[15].nexits;
			toyama += "<br>入院中　：" + json_data.area[15].ncurrentpatients;
			toyama += "<br>死亡者　：" + json_data.area[15].ndeaths;
			document.getElementById('ja_toyama').innerHTML = toyama;

			var ishikawa = "石川県<br>陽性者数：" + json_data.area[16].npatients;
			ishikawa += "<br>退院者　：" + json_data.area[16].nexits;
			ishikawa += "<br>入院中　：" + json_data.area[16].ncurrentpatients;
			ishikawa += "<br>死亡者　：" + json_data.area[16].ndeaths;
			document.getElementById('ja_ishikawa').innerHTML = ishikawa;

			var fukui = "福井県<br>陽性者数：" + json_data.area[17].npatients;
			fukui += "<br>退院者　：" + json_data.area[17].nexits;
			fukui += "<br>入院中　：" + json_data.area[17].ncurrentpatients;
			fukui += "<br>死亡者　：" + json_data.area[17].ndeaths;
			document.getElementById('ja_fukui').innerHTML = fukui;

			var yamanashi = "山梨県<br>陽性者数：" + json_data.area[18].npatients;
			yamanashi += "<br>退院者　：" + json_data.area[18].nexits;
			yamanashi += "<br>入院中　：" + json_data.area[18].ncurrentpatients;
			yamanashi += "<br>死亡者　：" + json_data.area[18].ndeaths;
			document.getElementById('ja_yamanashi').innerHTML = yamanashi;

			var nagano = "長野県<br>陽性者数：" + json_data.area[19].npatients;
			nagano += "<br>退院者　：" + json_data.area[19].nexits;
			nagano += "<br>入院中　：" + json_data.area[19].ncurrentpatients;
			nagano += "<br>死亡者　：" + json_data.area[19].ndeaths;
			document.getElementById('ja_nagano').innerHTML = nagano;

			var gifu = "岐阜県<br>陽性者数：" + json_data.area[20].npatients;
			gifu += "<br>退院者　：" + json_data.area[20].nexits;
			gifu += "<br>入院中　：" + json_data.area[20].ncurrentpatients;
			gifu += "<br>死亡者　：" + json_data.area[20].ndeaths;
			document.getElementById('ja_gifu').innerHTML = gifu;

			var shizuoka = "静岡県<br>陽性者数：" + json_data.area[21].npatients;
			shizuoka += "<br>退院者　：" + json_data.area[21].nexits;
			shizuoka += "<br>入院中　：" + json_data.area[21].ncurrentpatients;
			shizuoka += "<br>死亡者　：" + json_data.area[21].ndeaths;
			document.getElementById('ja_shizuoka').innerHTML = shizuoka;

			var aichi = "愛知県<br>陽性者数：" + json_data.area[22].npatients;
			aichi += "<br>退院者　：" + json_data.area[22].nexits;
			aichi += "<br>入院中　：" + json_data.area[22].ncurrentpatients;
			aichi += "<br>死亡者　：" + json_data.area[22].ndeaths;
			document.getElementById('ja_aichi').innerHTML = aichi;














      var day1 = json_data.lastUpdate.split("-");
      document.getElementById('day_s').innerHTML = "最終更新：" + day1[0] + "." + day1[1] + "." + day1[2];
    }
  };
  var url = "https://www.stopcovid19.jp/data/covid19japan.json";
  xhr.open('GET', url);
  xhr.send(null);
};