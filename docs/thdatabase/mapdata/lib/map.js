		for (var i = 0, latlngs = [], len = route.length; i < len; i++) {
			latlngs.push(new L.LatLng(route[i][0], route[i][1]));
		}

		var path = L.polyline(latlngs);

		var map = L.map('map');

		var positron = 	L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);


		map.fitBounds(L.latLngBounds(latlngs));

		map.addLayer(L.marker(latlngs[0]));
		map.addLayer(L.marker(latlngs[len - 1]));

		map.addLayer(path);


		function snake() {
			path.snakeIn();
		}