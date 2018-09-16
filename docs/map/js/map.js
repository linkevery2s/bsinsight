var map; var ido; var keido;var todou;var gps_button;var hash;var back_b;

    function aichi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.002, 137.200], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(aichi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function hokkaido_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([43.469, 141.987], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function aomori_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([40.651, 140.724], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(aomori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function iwate_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([39.686, 141.224], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(iwate, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function akita_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([39.529, 140.389], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(akita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function miyagi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([38.505, 140.707], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function yamagata_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([38.428, 140.026], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function fukushima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([37.392, 139.883], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function nigata_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([37.375, 138.735], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nigata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function tochigi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.673, 139.653], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function gunma_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.461, 138.950], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(gunma, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function ibaragi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.271, 140.235], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(ibaragi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function tiba_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.488, 139.966], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tiba, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function saitama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.929, 139.147], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(saitama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function tokyo_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.595, 139.592], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function kanagawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.3980, 139.3314], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function yamanashi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.532, 138.565], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function nagano_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.960, 137.928], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nagano, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function shizuoka_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.012, 138.214], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function gifu_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.724, 136.890], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(gifu, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function toyama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.624, 137.016], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(toyama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function ishikawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.844, 136.785], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function fukui_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.898, 136.192], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(fukui, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function shiga_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.255, 135.950], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shiga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function mie_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.606, 136.225], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(mie, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function kyoto_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.156, 135.368], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function osaka_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.692, 135.511], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(osaka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function nara_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.207, 135.818], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nara, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function wakayama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.975, 135.368], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function hyogo_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.043, 134.484], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function tottori_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.313, 133.786], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tottori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function okayama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.940, 133.550], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(okayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function shimane_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.854, 132.347], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shimane, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function hiroshima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.556, 132.512], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function yamaguchi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.207, 131.550], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function kagawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.057, 133.726], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function tokushima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.852, 133.923], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function ehime_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.679, 132.764], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(ehime, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function kochi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.390, 133.259], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kochi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function fukuoka_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.431, 130.583], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function saga_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.170, 130.073], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(saga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

function oita_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.128, 131.083], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(oita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}


    function nagasaki_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([32.875, 129.661], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function kumamoto_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([32.426, 130.759], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function miyazaki_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([32.213, 131.188], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function kagoshima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([31.541, 130.715], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

	}

    function okinawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([26.436, 127.996], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(okinawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);hash = new L.Hash(map);back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);

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
    
    layer.bindPopup(popup);
}


