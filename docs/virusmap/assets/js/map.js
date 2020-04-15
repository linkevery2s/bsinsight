var map;var zoom;var url;var todou; var ido; var keido;
var bed = new Array(47); var x = new Array(47); var y = new Array(47); var mitudo = Array(47); var mitudo_total = Array(47);  var density = Array(47);

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


function get_beds(){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');
			
				for(var i = 0;  i < 47;  i++){
					bed[i] = json_data.area[i].sum;
				}
    	}
  };
  var url = "https://www.stopcovid19.jp/data/bedforinfection_summary.json";
  xhr.open('GET', url);
  xhr.send(null);

}


function get_kansen(){

	get_beds();
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');

			/* 全体 */
			var txt = "日本全国<br>陽性者数：" + json_data.npatients;
			txt += "<br>退院者　：" + json_data.nexits;
			txt += "<br>現患者数：" + json_data.ncurrentpatients;
			txt += "<br>死亡者　：" + json_data.ndeaths;
			document.getElementById('ja_ka').innerHTML = txt;

			var hokkaido = "北海道<br>陽性者数：" + json_data.area[0].npatients;
			hokkaido += "<br>退院者　：" + json_data.area[0].nexits;
			hokkaido += "<br>現患者数：" + json_data.area[0].ncurrentpatients;
			hokkaido += "<br>死亡者　：" + json_data.area[0].ndeaths;
			document.getElementById('ja_hokkaido').innerHTML = hokkaido;

			var aomori = "青森県<br>陽性者数：" + json_data.area[1].npatients;
			aomori += "<br>退院者　：" + json_data.area[1].nexits;
			aomori += "<br>現患者数：" + json_data.area[1].ncurrentpatients;
			aomori += "<br>死亡者　：" + json_data.area[1].ndeaths;
			document.getElementById('ja_aomori').innerHTML = aomori;

			var iwate = "岩手県<br>陽性者数：" + json_data.area[2].npatients;
			iwate += "<br>退院者　：" + json_data.area[2].nexits;
			iwate += "<br>現患者数：" + json_data.area[2].ncurrentpatients;
			iwate += "<br>死亡者　：" + json_data.area[2].ndeaths;
			document.getElementById('ja_iwate').innerHTML = iwate;

			var miyagi = "宮城県<br>陽性者数：" + json_data.area[3].npatients;
			miyagi += "<br>退院者　：" + json_data.area[3].nexits;
			miyagi += "<br>現患者数：" + json_data.area[3].ncurrentpatients;
			miyagi += "<br>死亡者　：" + json_data.area[3].ndeaths;
			document.getElementById('ja_miyagi').innerHTML = miyagi;

			var akita = "秋田県<br>陽性者数：" + json_data.area[4].npatients;
			akita += "<br>退院者　：" + json_data.area[4].nexits;
			akita += "<br>現患者数：" + json_data.area[4].ncurrentpatients;
			akita += "<br>死亡者　：" + json_data.area[4].ndeaths;
			document.getElementById('ja_akita').innerHTML = akita;

			var yamagata = "山形県<br>陽性者数：" + json_data.area[5].npatients;
			yamagata += "<br>退院者　：" + json_data.area[5].nexits;
			yamagata += "<br>現患者数：" + json_data.area[5].ncurrentpatients;
			yamagata += "<br>死亡者　：" + json_data.area[5].ndeaths;
			document.getElementById('ja_yamagata').innerHTML = yamagata;

			var fukushima = "福島県<br>陽性者数：" + json_data.area[6].npatients;
			fukushima += "<br>退院者　：" + json_data.area[6].nexits;
			fukushima += "<br>現患者数：" + json_data.area[6].ncurrentpatients;
			fukushima += "<br>死亡者　：" + json_data.area[6].ndeaths;
			document.getElementById('ja_fukushima').innerHTML = fukushima;

			var ibaraki = "茨城県<br>陽性者数：" + json_data.area[7].npatients;
			ibaraki += "<br>退院者　：" + json_data.area[7].nexits;
			ibaraki += "<br>現患者数：" + json_data.area[7].ncurrentpatients;
			ibaraki += "<br>死亡者　：" + json_data.area[7].ndeaths;
			document.getElementById('ja_ibaraki').innerHTML = ibaraki;

			var tochigi = "栃木県<br>陽性者数：" + json_data.area[8].npatients;
			tochigi += "<br>退院者　：" + json_data.area[8].nexits;
			tochigi += "<br>現患者数：" + json_data.area[8].ncurrentpatients;
			tochigi += "<br>死亡者　：" + json_data.area[8].ndeaths;
			document.getElementById('ja_tochigi').innerHTML = tochigi;

			var gunma = "群馬県<br>陽性者数：" + json_data.area[9].npatients;
			gunma += "<br>退院者　：" + json_data.area[9].nexits;
			gunma += "<br>現患者数：" + json_data.area[9].ncurrentpatients;
			gunma += "<br>死亡者　：" + json_data.area[9].ndeaths;
			document.getElementById('ja_gunma').innerHTML = gunma;

			var saitama = "埼玉県<br>陽性者数：" + json_data.area[10].npatients;
			saitama += "<br>退院者　：" + json_data.area[10].nexits;
			saitama += "<br>現患者数：" + json_data.area[10].ncurrentpatients;
			saitama += "<br>死亡者　：" + json_data.area[10].ndeaths;
			document.getElementById('ja_saitama').innerHTML = saitama;

			var tiba = "千葉県<br>陽性者数：" + json_data.area[11].npatients;
			tiba += "<br>退院者　：" + json_data.area[11].nexits;
			tiba += "<br>現患者数：" + json_data.area[11].ncurrentpatients;
			tiba += "<br>死亡者　：" + json_data.area[11].ndeaths;
			document.getElementById('ja_tiba').innerHTML = tiba;

			var tokyo = "東京都<br>陽性者数：" + json_data.area[12].npatients;
			tokyo += "<br>退院者　：" + json_data.area[12].nexits;
			tokyo += "<br>現患者数：" + json_data.area[12].ncurrentpatients;
			tokyo += "<br>死亡者　：" + json_data.area[12].ndeaths;
			document.getElementById('ja_tokyo').innerHTML = tokyo;

			var kanagawa = "神奈川県<br>陽性者数：" + json_data.area[13].npatients;
			kanagawa += "<br>退院者　：" + json_data.area[13].nexits;
			kanagawa += "<br>現患者数：" + json_data.area[13].ncurrentpatients;
			kanagawa += "<br>死亡者　：" + json_data.area[13].ndeaths;
			document.getElementById('ja_kanagawa').innerHTML = kanagawa;

			var niigata = "新潟県<br>陽性者数：" + json_data.area[14].npatients;
			niigata += "<br>退院者　：" + json_data.area[14].nexits;
			niigata += "<br>現患者数：" + json_data.area[14].ncurrentpatients;
			niigata += "<br>死亡者　：" + json_data.area[14].ndeaths;
			document.getElementById('ja_niigata').innerHTML = niigata;

			var toyama = "富山県<br>陽性者数：" + json_data.area[15].npatients;
			toyama += "<br>退院者　：" + json_data.area[15].nexits;
			toyama += "<br>現患者数：" + json_data.area[15].ncurrentpatients;
			toyama += "<br>死亡者　：" + json_data.area[15].ndeaths;
			document.getElementById('ja_toyama').innerHTML = toyama;

			var ishikawa = "石川県<br>陽性者数：" + json_data.area[16].npatients;
			ishikawa += "<br>退院者　：" + json_data.area[16].nexits;
			ishikawa += "<br>現患者数：" + json_data.area[16].ncurrentpatients;
			ishikawa += "<br>死亡者　：" + json_data.area[16].ndeaths;
			document.getElementById('ja_ishikawa').innerHTML = ishikawa;

			var fukui = "福井県<br>陽性者数：" + json_data.area[17].npatients;
			fukui += "<br>退院者　：" + json_data.area[17].nexits;
			fukui += "<br>現患者数：" + json_data.area[17].ncurrentpatients;
			fukui += "<br>死亡者　：" + json_data.area[17].ndeaths;
			document.getElementById('ja_fukui').innerHTML = fukui;

			var yamanashi = "山梨県<br>陽性者数：" + json_data.area[18].npatients;
			yamanashi += "<br>退院者　：" + json_data.area[18].nexits;
			yamanashi += "<br>現患者数：" + json_data.area[18].ncurrentpatients;
			yamanashi += "<br>死亡者　：" + json_data.area[18].ndeaths;
			document.getElementById('ja_yamanashi').innerHTML = yamanashi;

			var nagano = "長野県<br>陽性者数：" + json_data.area[19].npatients;
			nagano += "<br>退院者　：" + json_data.area[19].nexits;
			nagano += "<br>現患者数：" + json_data.area[19].ncurrentpatients;
			nagano += "<br>死亡者　：" + json_data.area[19].ndeaths;
			document.getElementById('ja_nagano').innerHTML = nagano;

			var gifu = "岐阜県<br>陽性者数：" + json_data.area[20].npatients;
			gifu += "<br>退院者　：" + json_data.area[20].nexits;
			gifu += "<br>現患者数：" + json_data.area[20].ncurrentpatients;
			gifu += "<br>死亡者　：" + json_data.area[20].ndeaths;
			document.getElementById('ja_gifu').innerHTML = gifu;

			var shizuoka = "静岡県<br>陽性者数：" + json_data.area[21].npatients;
			shizuoka += "<br>退院者　：" + json_data.area[21].nexits;
			shizuoka += "<br>現患者数：" + json_data.area[21].ncurrentpatients;
			shizuoka += "<br>死亡者　：" + json_data.area[21].ndeaths;
			document.getElementById('ja_shizuoka').innerHTML = shizuoka;

			var aichi = "愛知県<br>陽性者数：" + json_data.area[22].npatients;
			aichi += "<br>退院者　：" + json_data.area[22].nexits;
			aichi += "<br>現患者数：" + json_data.area[22].ncurrentpatients;
			aichi += "<br>死亡者　：" + json_data.area[22].ndeaths;
			document.getElementById('ja_aichi').innerHTML = aichi;

			var mie = "三重県<br>陽性者数：" + json_data.area[23].npatients;
			mie += "<br>退院者　：" + json_data.area[23].nexits;
			mie += "<br>現患者数：" + json_data.area[23].ncurrentpatients;
			mie += "<br>死亡者　：" + json_data.area[23].ndeaths;
			document.getElementById('ja_mie').innerHTML = mie;

			var shiga = "滋賀県<br>陽性者数：" + json_data.area[24].npatients;
			shiga += "<br>退院者　：" + json_data.area[24].nexits;
			shiga += "<br>現患者数：" + json_data.area[24].ncurrentpatients;
			shiga += "<br>死亡者　：" + json_data.area[24].ndeaths;
			document.getElementById('ja_shiga').innerHTML = shiga;

			var kyoto = "京都府<br>陽性者数：" + json_data.area[25].npatients;
			kyoto += "<br>退院者　：" + json_data.area[25].nexits;
			kyoto += "<br>現患者数：" + json_data.area[25].ncurrentpatients;
			kyoto += "<br>死亡者　：" + json_data.area[25].ndeaths;
			document.getElementById('ja_kyoto').innerHTML = kyoto;

			var osaka = "大阪府<br>陽性者数：" + json_data.area[26].npatients;
			osaka += "<br>退院者　：" + json_data.area[26].nexits;
			osaka += "<br>現患者数：" + json_data.area[26].ncurrentpatients;
			osaka += "<br>死亡者　：" + json_data.area[26].ndeaths;
			document.getElementById('ja_osaka').innerHTML = osaka;

			var hyogo = "兵庫県<br>陽性者数：" + json_data.area[27].npatients;
			hyogo += "<br>退院者　：" + json_data.area[27].nexits;
			hyogo += "<br>現患者数：" + json_data.area[27].ncurrentpatients;
			hyogo += "<br>死亡者　：" + json_data.area[27].ndeaths;
			document.getElementById('ja_hyogo').innerHTML = hyogo;

			var nara = "奈良県<br>陽性者数：" + json_data.area[28].npatients;
			nara += "<br>退院者　：" + json_data.area[28].nexits;
			nara += "<br>現患者数：" + json_data.area[28].ncurrentpatients;
			nara += "<br>死亡者　：" + json_data.area[28].ndeaths;
			document.getElementById("ja_nara").innerHTML = nara;

			var wakayama = "和歌山県<br>陽性者数：" + json_data.area[29].npatients;
			wakayama += "<br>退院者　：" + json_data.area[29].nexits;
			wakayama += "<br>現患者数：" + json_data.area[29].ncurrentpatients;
			wakayama += "<br>死亡者　：" + json_data.area[29].ndeaths;
			document.getElementById("ja_wakayama").innerHTML = wakayama;

			var tottori = "鳥取県<br>陽性者数：" + json_data.area[30].npatients;
			tottori += "<br>退院者　：" + json_data.area[30].nexits;
			tottori += "<br>現患者数：" + json_data.area[30].ncurrentpatients;
			tottori += "<br>死亡者　：" + json_data.area[30].ndeaths;
			document.getElementById("ja_tottori").innerHTML = tottori;

			var shimane = "島根県<br>陽性者数：" + json_data.area[31].npatients;
			shimane += "<br>退院者　：" + json_data.area[31].nexits;
			shimane += "<br>現患者数：" + json_data.area[31].ncurrentpatients;
			shimane += "<br>死亡者　：" + json_data.area[31].ndeaths;
			document.getElementById("ja_shimane").innerHTML = shimane;

			var okayama = "岡山県<br>陽性者数：" + json_data.area[32].npatients;
			okayama += "<br>退院者　：" + json_data.area[32].nexits;
			okayama += "<br>現患者数：" + json_data.area[32].ncurrentpatients;
			okayama += "<br>死亡者　：" + json_data.area[32].ndeaths;
			document.getElementById("ja_okayama").innerHTML = okayama;

			var hiroshima = "広島県<br>陽性者数：" + json_data.area[33].npatients;
			hiroshima += "<br>退院者　：" + json_data.area[33].nexits;
			hiroshima += "<br>現患者数：" + json_data.area[33].ncurrentpatients;
			hiroshima += "<br>死亡者　：" + json_data.area[33].ndeaths;
			document.getElementById("ja_hiroshima").innerHTML = hiroshima;

			var yamaguchi = "山口県<br>陽性者数：" + json_data.area[34].npatients;
			yamaguchi += "<br>退院者　：" + json_data.area[34].nexits;
			yamaguchi += "<br>現患者数：" + json_data.area[34].ncurrentpatients;
			yamaguchi += "<br>死亡者　：" + json_data.area[34].ndeaths;
			document.getElementById("ja_yamaguchi").innerHTML = yamaguchi;

			var tokushima = "徳島県<br>陽性者数：" + json_data.area[35].npatients;
			tokushima += "<br>退院者　：" + json_data.area[35].nexits;
			tokushima += "<br>現患者数：" + json_data.area[35].ncurrentpatients;
			tokushima += "<br>死亡者　：" + json_data.area[35].ndeaths;
			document.getElementById("ja_tokushima").innerHTML = tokushima;

			var kagawa = "香川県<br>陽性者数：" + json_data.area[36].npatients;
			kagawa += "<br>退院者　：" + json_data.area[36].nexits;
			kagawa += "<br>現患者数：" + json_data.area[36].ncurrentpatients;
			kagawa += "<br>死亡者　：" + json_data.area[36].ndeaths;
			document.getElementById("ja_kagawa").innerHTML = kagawa;

			var ehime = "愛媛県<br>陽性者数：" + json_data.area[37].npatients;
			ehime += "<br>退院者　：" + json_data.area[37].nexits;
			ehime += "<br>現患者数：" + json_data.area[37].ncurrentpatients;
			ehime += "<br>死亡者　：" + json_data.area[37].ndeaths;
			document.getElementById("ja_ehime").innerHTML = ehime;

			var kochi = "高知県<br>陽性者数：" + json_data.area[38].npatients;
			kochi += "<br>退院者　：" + json_data.area[38].nexits;
			kochi += "<br>現患者数：" + json_data.area[38].ncurrentpatients;
			kochi += "<br>死亡者　：" + json_data.area[38].ndeaths;
			document.getElementById("ja_kochi").innerHTML = kochi;

			var fukuoka = "福岡県<br>陽性者数：" + json_data.area[39].npatients;
			fukuoka += "<br>退院者　：" + json_data.area[39].nexits;
			fukuoka += "<br>現患者数：" + json_data.area[39].ncurrentpatients;
			fukuoka += "<br>死亡者　：" + json_data.area[39].ndeaths;
			document.getElementById("ja_fukuoka").innerHTML = fukuoka;

			var saga = "佐賀県<br>陽性者数：" + json_data.area[40].npatients;
			saga += "<br>退院者　：" + json_data.area[40].nexits;
			saga += "<br>現患者数：" + json_data.area[40].ncurrentpatients;
			saga += "<br>死亡者　：" + json_data.area[40].ndeaths;
			document.getElementById("ja_saga").innerHTML = saga;

			var nagasaki = "長崎県<br>陽性者数：" + json_data.area[41].npatients;
			nagasaki += "<br>退院者　：" + json_data.area[41].nexits;
			nagasaki += "<br>現患者数：" + json_data.area[41].ncurrentpatients;
			nagasaki += "<br>死亡者　：" + json_data.area[41].ndeaths;
			document.getElementById("ja_nagasaki").innerHTML = nagasaki;

			var kumamoto = "熊本県<br>陽性者数：" + json_data.area[42].npatients;
			kumamoto += "<br>退院者　：" + json_data.area[42].nexits;
			kumamoto += "<br>現患者数：" + json_data.area[42].ncurrentpatients;
			kumamoto += "<br>死亡者　：" + json_data.area[42].ndeaths;
			document.getElementById("ja_kumamoto").innerHTML = kumamoto;

			var oita = "大分県<br>陽性者数：" + json_data.area[43].npatients;
			oita += "<br>退院者　：" + json_data.area[43].nexits;
			oita += "<br>現患者数：" + json_data.area[43].ncurrentpatients;
			oita += "<br>死亡者　：" + json_data.area[43].ndeaths;
			document.getElementById("ja_oita").innerHTML = oita;

			var miyazaki = "宮崎県<br>陽性者数：" + json_data.area[44].npatients;
			miyazaki += "<br>退院者　：" + json_data.area[44].nexits;
			miyazaki += "<br>現患者数：" + json_data.area[44].ncurrentpatients;
			miyazaki += "<br>死亡者　：" + json_data.area[44].ndeaths;
			document.getElementById("ja_miyazaki").innerHTML = miyazaki;

			var kagoshima = "鹿児島県<br>陽性者数：" + json_data.area[45].npatients;
			kagoshima += "<br>退院者　：" + json_data.area[45].nexits;
			kagoshima += "<br>現患者数：" + json_data.area[45].ncurrentpatients;
			kagoshima += "<br>死亡者　：" + json_data.area[45].ndeaths;
			document.getElementById("ja_kagoshima").innerHTML = kagoshima;

			var okinawa = "沖縄県<br>陽性者数：" + json_data.area[46].npatients;
			okinawa += "<br>退院者　：" + json_data.area[46].nexits;
			okinawa += "<br>現患者数：" + json_data.area[46].ncurrentpatients;
			okinawa += "<br>死亡者　：" + json_data.area[46].ndeaths;
			document.getElementById("ja_okinawa").innerHTML = okinawa;

			/* 病床数との比較 */
			bed[0] = "250";
			bed[15] = "100";
			bed[6] = "111";
			bed[25] = "140";
			bed[17] = "84";
			bed[28] = "64";
			bed[16] = "500";
			bed[31] = "30";
			bed[38] = "23";
			bed[22] = "300";
			bed[42] = "218";
			bed[43] = "118";
			bed[30] = "265";
			bed[32] = "117";
			bed[12] = "1000";
			bed[26] = "600";
			bed[11] = "247";
			bed[10] = "225";
			bed[7] = "200";
			bed[27] = "246";
			bed[3] = "78";
			bed[35] = "130";
			document.getElementById('2ja_ka').style.backgroundColor = '#FFFFFF';
			document.getElementById('2ja_hokkaido').innerHTML = "北海道<br><center>現患者数／病床数<br>" + json_data.area[0].ncurrentpatients + "／" + bed[0] + "</center>";
			document.getElementById('2ja_aomori').innerHTML = "青森県<br><center>現患者数／病床数<br>" + json_data.area[1].ncurrentpatients + "／" + bed[1] + "</center>";
			document.getElementById('2ja_iwate').innerHTML = "岩手県<br><center>現患者数／病床数<br>" + json_data.area[2].ncurrentpatients + "／" + bed[2] + "</center>";
			document.getElementById('2ja_miyagi').innerHTML = "宮城県<br><center>現患者数／病床数<br>" + json_data.area[3].ncurrentpatients + "／" + bed[3] + "</center>";
			document.getElementById('2ja_akita').innerHTML = "秋田県<br><center>現患者数／病床数<br>" + json_data.area[4].ncurrentpatients + "／" + bed[4] + "</center>";
			document.getElementById('2ja_yamagata').innerHTML = "山形県<br><center>現患者数／病床数<br>" + json_data.area[5].ncurrentpatients + "／" + bed[5] + "</center>";
			document.getElementById('2ja_fukushima').innerHTML = "福島県<br><center>現患者数／病床数<br>" + json_data.area[6].ncurrentpatients + "／" + bed[6] + "</center>";
			document.getElementById('2ja_ibaraki').innerHTML = "茨城県<br><center>現患者数／病床数<br>" + json_data.area[7].ncurrentpatients + "／" + bed[7] + "</center>";
			document.getElementById('2ja_tochigi').innerHTML = "栃木県<br><center>現患者数／病床数<br>" + json_data.area[8].ncurrentpatients + "／" + bed[8] + "</center>";
			document.getElementById('2ja_gunma').innerHTML = "群馬県<br><center>現患者数／病床数<br>" + json_data.area[9].ncurrentpatients + "／" + bed[9] + "</center>";
			document.getElementById('2ja_saitama').innerHTML = "埼玉県<br><center>現患者数／病床数<br>" + json_data.area[10].ncurrentpatients + "／" + bed[10] + "</center>";
			document.getElementById('2ja_tiba').innerHTML = "千葉県<br><center>現患者数／病床数<br>" + json_data.area[11].ncurrentpatients + "／" + bed[11] + "</center>";
			document.getElementById('2ja_tokyo').innerHTML = "東京都<br><center>現患者数／病床数<br>" + json_data.area[12].ncurrentpatients + "／" + bed[12] + "</center>";
			document.getElementById('2ja_kanagawa').innerHTML = "神奈川県<br><center>現患者数／病床数<br>" + json_data.area[13].ncurrentpatients + "／" + bed[13] + "</center>";
			document.getElementById('2ja_niigata').innerHTML = "新潟県<br><center>現患者数／病床数<br>" + json_data.area[14].ncurrentpatients + "／" + bed[14] + "</center>";
			document.getElementById('2ja_toyama').innerHTML = "富山県<br><center>現患者数／病床数<br>" + json_data.area[15].ncurrentpatients + "／" + bed[15] + "</center>";
			document.getElementById('2ja_ishikawa').innerHTML = "石川県<br><center>現患者数／病床数<br>" + json_data.area[16].ncurrentpatients + "／" + bed[16] + "</center>";
			document.getElementById('2ja_fukui').innerHTML = "福井県<br><center>現患者数／病床数<br>" + json_data.area[17].ncurrentpatients + "／" + bed[17] + "</center>";
			document.getElementById('2ja_yamanashi').innerHTML = "山梨県<br><center>現患者数／病床数<br>" + json_data.area[18].ncurrentpatients + "／" + bed[18] + "</center>";
			document.getElementById('2ja_nagano').innerHTML = "長野県<br><center>現患者数／病床数<br>" + json_data.area[19].ncurrentpatients + "／" + bed[19] + "</center>";
			document.getElementById('2ja_gifu').innerHTML = "岐阜県<br><center>現患者数／病床数<br>" + json_data.area[20].ncurrentpatients + "／" + bed[20] + "</center>";
			document.getElementById('2ja_shizuoka').innerHTML = "静岡県<br><center>現患者数／病床数<br>" + json_data.area[21].ncurrentpatients + "／" + bed[21] + "</center>";
			document.getElementById('2ja_aichi').innerHTML = "愛知県<br><center>現患者数／病床数<br>" + json_data.area[22].ncurrentpatients + "／" + bed[22] + "</center>";
			document.getElementById('2ja_mie').innerHTML = "三重県<br><center>現患者数／病床数<br>" + json_data.area[23].ncurrentpatients + "／" + bed[23] + "</center>";
			document.getElementById('2ja_shiga').innerHTML = "滋賀県<br><center>現患者数／病床数<br>" + json_data.area[24].ncurrentpatients + "／" + bed[24] + "</center>";
			document.getElementById('2ja_kyoto').innerHTML = "京都府<br><center>現患者数／病床数<br>" + json_data.area[25].ncurrentpatients + "／" + bed[25] + "</center>";
			document.getElementById('2ja_osaka').innerHTML = "大阪府<br><center>現患者数／病床数<br>" + json_data.area[26].ncurrentpatients + "／" + bed[26] + "</center>";
			document.getElementById('2ja_hyogo').innerHTML = "兵庫県<br><center>現患者数／病床数<br>" + json_data.area[27].ncurrentpatients + "／" + bed[27] + "</center>";
			document.getElementById("2ja_nara").innerHTML = "奈良県<br><center>現患者数／病床数<br>" + json_data.area[28].ncurrentpatients + "／" + bed[28] + "</center>";
			document.getElementById("2ja_wakayama").innerHTML = "和歌山県<br><center>現患者数／病床数<br>" + json_data.area[29].ncurrentpatients + "／" + bed[29] + "</center>";
			document.getElementById("2ja_tottori").innerHTML = "鳥取県<br><center>現患者数／病床数<br>" + json_data.area[30].ncurrentpatients + "／" + bed[30] + "</center>";
			document.getElementById("2ja_shimane").innerHTML = "島根県<br><center>現患者数／病床数<br>" + json_data.area[31].ncurrentpatients + "／" + bed[31] + "</center>";
			document.getElementById("2ja_okayama").innerHTML = "岡山県<br><center>現患者数／病床数<br>" + json_data.area[32].ncurrentpatients + "／" + bed[32] + "</center>";
			document.getElementById("2ja_hiroshima").innerHTML = "広島県<br><center>現患者数／病床数<br>" + json_data.area[33].ncurrentpatients + "／" + bed[33] + "</center>";
			document.getElementById("2ja_yamaguchi").innerHTML = "山梨県<br><center>現患者数／病床数<br>" + json_data.area[34].ncurrentpatients + "／" + bed[34] + "</center>";
			document.getElementById("2ja_tokushima").innerHTML = "徳島県<br><center>現患者数／病床数<br>" + json_data.area[35].ncurrentpatients + "／" + bed[35] + "</center>";
			document.getElementById("2ja_kagawa").innerHTML = "香川県<br><center>現患者数／病床数<br>" + json_data.area[36].ncurrentpatients + "／" + bed[36] + "</center>";
			document.getElementById("2ja_ehime").innerHTML = "愛媛県<br><center>現患者数／病床数<br>" + json_data.area[37].ncurrentpatients + "／" + bed[37] + "</center>";
			document.getElementById("2ja_kochi").innerHTML = "高知県<br><center>現患者数／病床数<br>" + json_data.area[38].ncurrentpatients + "／" + bed[38] + "</center>";
			document.getElementById("2ja_fukuoka").innerHTML = "福岡県<br><center>現患者数／病床数<br>" + json_data.area[39].ncurrentpatients + "／" + bed[39] + "</center>";
			document.getElementById("2ja_saga").innerHTML = "佐賀県<br><center>現患者数／病床数<br>" + json_data.area[40].ncurrentpatients + "／" + bed[40] + "</center>";
			document.getElementById("2ja_nagasaki").innerHTML = "長崎県<br><center>現患者数／病床数<br>" + json_data.area[41].ncurrentpatients + "／" + bed[41] + "</center>";
			document.getElementById("2ja_kumamoto").innerHTML = "熊本県<br><center>現患者数／病床数<br>" + json_data.area[42].ncurrentpatients + "／" + bed[42] + "</center>";
			document.getElementById("2ja_oita").innerHTML = "大分県<br><center>現患者数／病床数<br>" + json_data.area[43].ncurrentpatients + "／" + bed[43] + "</center>";
			document.getElementById("2ja_miyazaki").innerHTML ="宮崎県<br><center>現患者数／病床数<br>" + json_data.area[44].ncurrentpatients + "／" + bed[44] + "</center>";
			document.getElementById("2ja_kagoshima").innerHTML = "鹿児島県<br><center>現患者数／病床数<br>" + json_data.area[45].ncurrentpatients + "／" + bed[45] + "</center>";
			document.getElementById("2ja_okinawa").innerHTML = "沖縄県<br><center>現患者数／病床数<br>" + json_data.area[46].ncurrentpatients + "／" + bed[46] + "</center>";

			/* 色分け判定 */
			x[0] = document.getElementById('2ja_hokkaido');
			x[1] = document.getElementById('2ja_aomori');
			x[2] = document.getElementById('2ja_iwate');
			x[3] = document.getElementById('2ja_miyagi');
			x[4] = document.getElementById('2ja_akita');
			x[5] = document.getElementById('2ja_yamagata');
			x[6] = document.getElementById('2ja_fukushima');
			x[7] = document.getElementById('2ja_ibaraki');
			x[8] = document.getElementById('2ja_tochigi');
			x[9] = document.getElementById('2ja_gunma');
			x[10] = document.getElementById('2ja_saitama');
			x[11] = document.getElementById('2ja_tiba');
			x[12] = document.getElementById('2ja_tokyo');
			x[13] = document.getElementById('2ja_kanagawa');
			x[14] = document.getElementById('2ja_niigata');
			x[15] = document.getElementById('2ja_toyama');
			x[16] = document.getElementById('2ja_ishikawa');
			x[17] = document.getElementById('2ja_fukui');
			x[18] = document.getElementById('2ja_yamanashi');
			x[19] = document.getElementById('2ja_nagano');
			x[20] = document.getElementById('2ja_gifu');
			x[21] = document.getElementById('2ja_shizuoka');
			x[22] = document.getElementById('2ja_aichi');
			x[23] = document.getElementById('2ja_mie');
			x[24] = document.getElementById('2ja_shiga');
			x[25] = document.getElementById('2ja_kyoto');
			x[26] = document.getElementById('2ja_osaka');
			x[27] = document.getElementById('2ja_hyogo');
			x[28] = document.getElementById("2ja_nara");
			x[29] = document.getElementById("2ja_wakayama");
			x[30] = document.getElementById("2ja_tottori");
			x[31] = document.getElementById("2ja_shimane");
			x[32] = document.getElementById("2ja_okayama");
			x[33] = document.getElementById("2ja_hiroshima");
			x[34] = document.getElementById("2ja_yamaguchi");
			x[35] = document.getElementById("2ja_tokushima");
			x[36] = document.getElementById("2ja_kagawa");
			x[37] = document.getElementById("2ja_ehime");
			x[38] = document.getElementById("2ja_kochi");
			x[39] = document.getElementById("2ja_fukuoka");
			x[40] = document.getElementById("2ja_saga");
			x[41] = document.getElementById("2ja_nagasaki");
			x[42] = document.getElementById("2ja_kumamoto");
			x[43] = document.getElementById("2ja_oita");
			x[44] = document.getElementById("2ja_miyazaki");
			x[45] = document.getElementById("2ja_kagoshima");
			x[46] = document.getElementById("2ja_okinawa");

			for(var i = 0;  i < 47;  i++){
			
				if(json_data.area[i].ncurrentpatients > bed[i]){
					x[i].style.backgroundColor = '#FF0000';
				}
				else if(json_data.area[i].ncurrentpatients > bed[i]*0.5){
					x[i].style.backgroundColor = '#FF9900';
				}
				else if(json_data.area[i].ncurrentpatients > bed[i]*0.2){
					x[i].style.backgroundColor = '#FFFF00';
					x[i].style.color = "#000000";
				}
				else{
					x[i].style.backgroundColor = '#CCFF00';
					x[i].style.color = "#000000";
				}
			
			}

			/* density */
			
density[0]="5286000";
density[1]="1263000";
density[2]="1241000";
density[3]="2316000";
density[4]="981000";
density[5]="1090000";
density[6]="1864000";
density[7]="2877000";
density[8]="1946000";
density[9]="1952000";
density[10]="7330000";
density[11]="6255000";
density[12]="13822000";
density[13]="9177000";
density[14]="2246000";
density[15]="1050000";
density[16]="1143000";
density[17]="774000";
density[18]="817000";
density[19]="2063000";
density[20]="1997000";
density[21]="3659000";
density[22]="7537000";
density[23]="1791000";
density[24]="1412000";
density[25]="2591000";
density[26]="8813000";
density[27]="5484000";
density[28]="1339000";
density[29]="935000";
density[30]="560000";
density[31]="680000";
density[32]="1898000";
density[33]="2817000";
density[34]="1370000";
density[35]="736000";
density[36]="962000";
density[37]="1352000";
density[38]="706000";
density[39]="5107000";
density[40]="819000";
density[41]="1341000";
density[42]="1757000";
density[43]="1144000";
density[44]="1081000";
density[45]="1614000";
density[46]="1448000";


			y[0] = document.getElementById('3ja_hokkaido');
			y[1] = document.getElementById('3ja_aomori');
			y[2] = document.getElementById('3ja_iwate');
			y[3] = document.getElementById('3ja_miyagi');
			y[4] = document.getElementById('3ja_akita');
			y[5] = document.getElementById('3ja_yamagata');
			y[6] = document.getElementById('3ja_fukushima');
			y[7] = document.getElementById('3ja_ibaraki');
			y[8] = document.getElementById('3ja_tochigi');
			y[9] = document.getElementById('3ja_gunma');
			y[10] = document.getElementById('3ja_saitama');
			y[11] = document.getElementById('3ja_tiba');
			y[12] = document.getElementById('3ja_tokyo');
			y[13] = document.getElementById('3ja_kanagawa');
			y[14] = document.getElementById('3ja_niigata');
			y[15] = document.getElementById('3ja_toyama');
			y[16] = document.getElementById('3ja_ishikawa');
			y[17] = document.getElementById('3ja_fukui');
			y[18] = document.getElementById('3ja_yamanashi');
			y[19] = document.getElementById('3ja_nagano');
			y[20] = document.getElementById('3ja_gifu');
			y[21] = document.getElementById('3ja_shizuoka');
			y[22] = document.getElementById('3ja_aichi');
			y[23] = document.getElementById('3ja_mie');
			y[24] = document.getElementById('3ja_shiga');
			y[25] = document.getElementById('3ja_kyoto');
			y[26] = document.getElementById('3ja_osaka');
			y[27] = document.getElementById('3ja_hyogo');
			y[28] = document.getElementById("3ja_nara");
			y[29] = document.getElementById("3ja_wakayama");
			y[30] = document.getElementById("3ja_tottori");
			y[31] = document.getElementById("3ja_shimane");
			y[32] = document.getElementById("3ja_okayama");
			y[33] = document.getElementById("3ja_hiroshima");
			y[34] = document.getElementById("3ja_yamaguchi");
			y[35] = document.getElementById("3ja_tokushima");
			y[36] = document.getElementById("3ja_kagawa");
			y[37] = document.getElementById("3ja_ehime");
			y[38] = document.getElementById("3ja_kochi");
			y[39] = document.getElementById("3ja_fukuoka");
			y[40] = document.getElementById("3ja_saga");
			y[41] = document.getElementById("3ja_nagasaki");
			y[42] = document.getElementById("3ja_kumamoto");
			y[43] = document.getElementById("3ja_oita");
			y[44] = document.getElementById("3ja_miyazaki");
			y[45] = document.getElementById("3ja_kagoshima");
			y[46] = document.getElementById("3ja_okinawa");


			
			for (var i = 0; i < 47; i++){
				mitudo[i] = Math.round(json_data.area[i].ncurrentpatients / density[i] * 100000 * 10)/10;
				y[i].innerHTML = json_data.area[i].name_jp + "<br><center>" + mitudo[i] +"</center>";
			}

			/* 色分け判定 */
			document.getElementById('3ja_ka').style.backgroundColor = '#FFFFFF';
			for(var i = 0;  i < 47;  i++){
			
				if(mitudo[i] > 10){
					y[i].style.backgroundColor = '#FF0000';
				}
				else if(mitudo[i] > 7){
					y[i].style.backgroundColor = '#FF6600';
				}
				else if(mitudo[i] > 4){
					y[i].style.backgroundColor = '#FFFF00';
					y[i].style.color = "#000000";
				}
				else if(mitudo[i] > 1){
					y[i].style.backgroundColor = '#CCFF00';
					y[i].style.color = "#000000";
				}
				else{
					y[i].style.backgroundColor = '#0000FF';
				}
			
			}
			
			for (var i = 0; i < 47; i++){
				mitudo_total[i] = Math.round(json_data.area[i].npatients / density[i] * 100000 * 10)/10;
			}


      var day1 = json_data.lastUpdate.split("-");
      document.getElementById('day_s').innerHTML = "最終更新：" + day1[0] + "." + day1[1] + "." + day1[2];
    }
  };
  var url = "https://www.stopcovid19.jp/data/covid19japan.json";
  xhr.open('GET', url);
  xhr.send(null);
}

function calculate(){
	var select=document.getElementById("demo-category").value;

	if( select == ""){
		alert("都道府県を選択してください。");
		exit;
	}else{}
	
	var input_jinko = document.getElementById("jinko").value;
	
	if( input_jinko == ""){
		alert("市町村の人口を入力してください。");
		exit;
	}else{}
	
	var answer1 = mitudo[select] * input_jinko / 10;
	
	var answer2 = mitudo_total[select] * input_jinko / 10;
	
	answer1 = Math.round(answer1 * 10)/10;
	
	answer2 = Math.round(answer2 * 10)/10;
	
	var vari = document.getElementsByName("vari");
	
	if( vari[0].checked ){

		document.getElementById("answer").innerHTML = answer2;
	}else{

		document.getElementById("answer").innerHTML = answer1;
	}
	
}

function func1(){
	$("#zentai").show();
	$("#beds").hide();
	$("#density").hide();
}

function func2(){
	$("#zentai").hide();
	$("#beds").show();
	$("#density").hide();
}

function func3(){
	$("#zentai").hide();
	$("#beds").hide();
	$("#density").show();
}