function ini() {
    map = new L.Map('map');                       
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
   map.setView([35.067, 137.189], 6);
   
   /*北海道*/ chip_map(43.469, 141.987, 5, 3, 2);
   /*青森県*/ chip_map(40.651, 140.624, 5, 3, 2);
   /*岩手県*/ chip_map(39.686, 141.224, 5, 3, 2);
   /*秋田県*/ chip_map(39.729, 140.189, 5, 3, 2);
   /*宮城県*/ chip_map(38.505, 140.707, 5, 3, 2);
   /*山形県*/ chip_map(38.428, 139.926, 5, 3, 2);
   /*福島県*/ chip_map(37.392, 139.983, 5, 3, 2);
   /*新潟県*/ chip_map(37.375, 138.735, 5, 3, 2);
   /*栃木県*/ chip_map(36.673, 139.653, 5, 3, 2);
   /*群馬県*/ chip_map(36.461, 138.950, 5, 3, 2);
   /*茨城県*/ chip_map(36.171, 140.235, 5, 3, 2);
   /*千葉県*/ chip_map(35.488, 140.066, 5, 3, 2);
   /*埼玉県*/ chip_map(35.929, 139.147, 5, 3, 2);
   /*東京都*/ chip_map(35.695, 139.392, 5, 3, 2);
   /*神奈川県*/ chip_map(35.398, 139.231, 5, 3, 2);
   /*山梨県*/ chip_map(35.532, 138.465, 5, 3, 2);
   /*長野県*/ chip_map(36.060, 137.828, 5, 3, 2);
   /*静岡県*/ chip_map(35.012, 138.214, 5, 3, 2);
   /*愛知県*/ chip_map(35.052, 136.975, 5, 3, 2);
   /*岐阜県*/ chip_map(35.724, 136.890, 5, 3, 2);
   /*富山県*/ chip_map(36.624, 137.016, 5, 3, 2);
   /*石川県*/ chip_map(36.544, 136.285, 5, 3, 2);
   /*福井県*/ chip_map(35.898, 136.192, 5, 3, 2);
   /*滋賀県*/ chip_map(35.255, 135.950, 5, 3, 2);
   /*三重県*/ chip_map(34.606, 136.225, 5, 3, 2);
   /*京都府*/ chip_map(35.156, 135.368, 5, 3, 2);
   /*大阪府*/ chip_map(34.692, 135.311, 5, 3, 2);
   /*奈良県*/ chip_map(34.407, 135.718, 5, 3, 2);
   /*和歌山県*/ chip_map(33.575, 135.368, 5, 3, 2);
   /*兵庫県*/ chip_map(35.043, 134.484, 5, 3, 2);
   /*鳥取県*/ chip_map(35.513, 133.586, 5, 3, 2);
   /*岡山県*/ chip_map(34.940, 133.550, 5, 3, 2);
   /*島根県*/ chip_map(35.254, 132.347, 5, 3, 2);
   /*広島県*/ chip_map(34.556, 132.512, 5, 3, 2);
   /*山口県*/ chip_map(34.207, 131.550, 5, 3, 2);
   /*香川県*/ chip_map(34.257, 133.726, 5, 3, 2);
   /*徳島県*/ chip_map(33.852, 133.923, 5, 3, 2);
   /*愛媛県*/ chip_map(33.679, 132.764, 5, 3, 2);
   /*高知県*/ chip_map(33.390, 133.259, 5, 3, 2);
   /*福岡県*/ chip_map(33.631, 130.383, 5, 3, 2);
   /*佐賀県*/ chip_map(33.270, 129.973, 5, 3, 2);
   /*大分県*/ chip_map(33.128, 131.083, 5, 3, 2);
   /*長崎県*/ chip_map(32.875, 129.661, 5, 3, 2);
   /*熊本県*/ chip_map(32.626, 130.559, 5, 3, 2);
   /*宮崎県*/ chip_map(32.213, 131.188, 5, 3, 2);
   /*鹿児島県*/ chip_map(31.641, 130.515, 5, 3, 2);
   /*沖縄県*/ chip_map(26.436, 127.996, 5, 3, 2);
   
}

function chip_map(x, y, z, h, l){

	var chipIcons=[];
	for (var i = 0; i < z; i++) {chipIcons.push(L.icon.chip({color: "#FF0000"}));}
    var stack = L.marker.stack([x, y], {icons: chipIcons, stackOffset: [0, -5]});
    map.addLayer(stack);

	var chipIcons2=[];
	for (var i = 0; i < h; i++) {chipIcons2.push(L.icon.chip({color: "#00FF00"}));}
    var stack2 = L.marker.stack([x, y+0.2], {icons: chipIcons2, stackOffset: [0, -5]});
    map.addLayer(stack2);

	var chipIcons3=[];
	for (var i = 0; i < h; i++) {chipIcons3.push(L.icon.chip({color: "#0000FF"}));}
    var stack3 = L.marker.stack([x, y+0.4], {icons: chipIcons3, stackOffset: [0, -5]});
    map.addLayer(stack3);

}


function line(){
	var url = window.location.href;
	location.href = "line://msg/text/"+ url;
}

function mail(){
	var url = window.location.href;
	location.href =  "mailto:?body=URL " + url;
}