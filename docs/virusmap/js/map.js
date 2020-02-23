function ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.067, 137.189], 6);
   Geost();
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
					fillColor: "#FFFF00",
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
