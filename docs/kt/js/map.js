function ini(){

		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a><br>活断層図：岡田篤正・廣内大助・松多信尚・宮内崇裕(2017):1:25,000都市圏活断層図「中津川」，国土地理院．'
  		}).addTo(map);
  		
    	var t1 = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/afm/{z}/{x}/{y}.png', {opacity: 0.8}).addTo(map);

  		hash = new L.Hash(map);
  		
		var para = location.hash;
		var par = para.split("/");
		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
		var marker = L.marker([par[1] ,par[2]] ,{icon: pulsingIcon}).addTo(map);

}

function sini(){

		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
  		
  		hash = new L.Hash(map);
  		
		var para = location.hash;
		var par = para.split("/");
		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'red'});
		var marker = L.marker([par[1] ,par[2]] ,{icon: pulsingIcon}).addTo(map);

}
