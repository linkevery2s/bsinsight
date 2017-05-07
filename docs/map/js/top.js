var map; var geos; var geot; var geok; var geoo; var center; var circle; var markers = []; 

function view(){

	if(document.getElementById("pref").value == "hokkaido"){
		location.href = "https://linkevery2s.github.io/hinanmap/hokkaido.html";
	}
	else if(document.getElementById("pref").value == "aomori"){
		location.href = "https://linkevery2s.github.io/hinanmap/aomori.html";
	}
	else if(document.getElementById("pref").value == "akita"){
		location.href = "https://linkevery2s.github.io/hinanmap/akita.html";
	}
	else if(document.getElementById("pref").value == "iwate"){
		location.href = "https://linkevery2s.github.io/hinanmap/iwate.html";
	}
	else if(document.getElementById("pref").value == "yamagata"){
		location.href = "https://linkevery2s.github.io/hinanmap/yamagata.html";
	}
	else if(document.getElementById("pref").value == "miyagi"){
		location.href = "https://linkevery2s.github.io/hinanmap/miyagi.html";
	}
	else if(document.getElementById("pref").value == "fukushima"){
		location.href = "https://linkevery2s.github.io/hinanmap/fukushima.html";
	}
	else if(document.getElementById("pref").value == "nigata"){
		location.href = "https://linkevery2s.github.io/hinanmap/nigata.html";
	}
	else if(document.getElementById("pref").value == "tiba"){
		location.href = "https://linkevery2s.github.io/hinanmap/tiba.html";
	}
	else if(document.getElementById("pref").value == "tochigi"){
		location.href = "https://linkevery2s.github.io/hinanmap/tochigi.html";
	}
	else if(document.getElementById("pref").value == "gunma"){
		location.href = "https://linkevery2s.github.io/hinanmap/gunma.html";
	}
	else if(document.getElementById("pref").value == "saitama"){
		location.href = "https://linkevery2s.github.io/hinanmap/saitama.html";
	}
	else if(document.getElementById("pref").value == "ibaragi"){
		location.href = "https://linkevery2s.github.io/hinanmap/ibaragi.html";
	}
	else if(document.getElementById("pref").value == "tokyo"){
		location.href = "https://linkevery2s.github.io/hinanmap/tokyo.html";
	}
	else if(document.getElementById("pref").value == "kanagawa"){
		location.href = "https://linkevery2s.github.io/hinanmap/kanagawa.html";
	}
	else if(document.getElementById("pref").value == "yamanashi"){
		location.href = "https://linkevery2s.github.io/hinanmap/yamanashi.html";
	}
	else if(document.getElementById("pref").value == "nagano"){
		location.href = "https://linkevery2s.github.io/hinanmap/nagano.html";
	}
	else if(document.getElementById("pref").value == "shizuoka"){
		location.href = "https://linkevery2s.github.io/hinanmap/shizuoka.html";
	}
	else if(document.getElementById("pref").value == "toyama"){
		location.href = "https://linkevery2s.github.io/hinanmap/toyama.html";
	}
	else if(document.getElementById("pref").value == "ishikawa"){
		location.href = "https://linkevery2s.github.io/hinanmap/ishikawa.html";
	}
	else if(document.getElementById("pref").value == "gifu"){
		location.href = "https://linkevery2s.github.io/hinanmap/gifu.html";	
	}
	else if(document.getElementById("pref").value == "aichi"){
		location.href = "https://linkevery2s.github.io/hinanmap/aichi.html";
	}
	else if(document.getElementById("pref").value == "mie"){
		location.href = "https://linkevery2s.github.io/hinanmap/mie.html";
	}
	else if(document.getElementById("pref").value == "fukui"){
		location.href = "https://linkevery2s.github.io/hinanmap/fukui.html";
	}
	else if(document.getElementById("pref").value == "shiga"){
		location.href = "https://linkevery2s.github.io/hinanmap/shiga.html";
	}
	else if(document.getElementById("pref").value == "kyoto"){
		location.href = "https://linkevery2s.github.io/hinanmap/ktoto.html";
	}
	else if(document.getElementById("pref").value == "nara"){
		location.href = "https://linkevery2s.github.io/hinanmap/nara.html";
	}
	else if(document.getElementById("pref").value == "osaka"){
		location.href = "https://linkevery2s.github.io/hinanmap/osaka.html";
	}
	else if(document.getElementById("pref").value == "wakayama"){
		location.href = "https://linkevery2s.github.io/hinanmap/wakayama.html";
	}
	else if(document.getElementById("pref").value == "hyogo"){
		location.href = "https://linkevery2s.github.io/hinanmap/hyogo.html";
	}
	else if(document.getElementById("pref").value == "tottori"){
		location.href = "https://linkevery2s.github.io/hinanmap/tottori.html";
	}
	else if(document.getElementById("pref").value == "okayama"){
		location.href = "https://linkevery2s.github.io/hinanmap/okayama.html";
	}
	else if(document.getElementById("pref").value == "shimane"){
		location.href = "https://linkevery2s.github.io/hinanmap/shimane.html";
	}
	else if(document.getElementById("pref").value == "hiroshima"){
		location.href = "https://linkevery2s.github.io/hinanmap/hiroshima.html";
	}
	else if(document.getElementById("pref").value == "yamaguchi"){
		location.href = "https://linkevery2s.github.io/hinanmap/yamaguchi.html";
	}
	else if(document.getElementById("pref").value == "kagawa"){
		location.href = "https://linkevery2s.github.io/hinanmap/kagawa.html";
	}
	else if(document.getElementById("pref").value == "tokushima"){
		location.href = "https://linkevery2s.github.io/hinanmap/tokushima.html";
	}
	else if(document.getElementById("pref").value == "ehime"){
		location.href = "https://linkevery2s.github.io/hinanmap/ehime.html";
	}
	else if(document.getElementById("pref").value == "kochi"){
		location.href = "https://linkevery2s.github.io/hinanmap/kochi.html";
	}
	else if(document.getElementById("pref").value == "fukuoka"){
		location.href = "https://linkevery2s.github.io/hinanmap/fukuoka.html";
	}
	else if(document.getElementById("pref").value == "saga"){
		location.href = "https://linkevery2s.github.io/hinanmap/saga.html";
	}
	else if(document.getElementById("pref").value == "nagasaki"){
		location.href = "https://linkevery2s.github.io/hinanmap/nagasaki.html";
	}
	else if(document.getElementById("pref").value == "oita"){
		location.href = "https://linkevery2s.github.io/hinanmap/oita.html";
	}
	else if(document.getElementById("pref").value == "kumamoto"){
		location.href = "https://linkevery2s.github.io/hinanmap/kumamoto.html";
	}
	else if(document.getElementById("pref").value == "miyazaki"){
		location.href = "https://linkevery2s.github.io/hinanmap/miyazaki.html";
	}
	else if(document.getElementById("pref").value == "kagoshima"){
		location.href = "https://linkevery2s.github.io/hinanmap/kagoshima.html";
	}
	else if(document.getElementById("pref").value == "okinawa"){
		location.href = "https://linkevery2s.github.io/hinanmap/okinawa.html";
	}
	else{
	}
}

function st_checked(){
	if(document.getElementById("st").checked){
		Geost();
	}
	else{
		map.removeLayer(geost);
	}
}

function k_checked(){
	if(document.getElementById("k").checked){
		Geok();
	}
	else{
		map.removeLayer(geok);
	}
}

function o_checked(){
	if(document.getElementById("o").checked){
		Geoo();
	}
	else{
		map.removeLayer(geoo);
	}
}

function hankei(){
	center = map.getCenter();

	if(document.getElementById("circle").value == "0"){
	if(markers.length ==1){
		map.removeLayer(circle);
		markers.length = 0;
		return;
	}
	else{}
	}else{}

	if(markers.length ==1){
		map.removeLayer(circle);
		markers.length = 0;
	}
	else{}

	if(document.getElementById("circle").value == "1"){
  		circle = L.circle([center.lat, center.lng], 1000,{
      	color:"#0000ff",
      	weight:5,
      	opacity:1,
      	fill:true,
      	fillColor:"#81DAF5",
      	fillOpacity:0.2
  		});
  		map.addLayer(circle);
  		markers.push(circle);
	}
	else if(document.getElementById("circle").value == "2"){
  		circle = L.circle([center.lat, center.lng], 2000,{
      	color:"#0000ff",
      	weight:5,
      	opacity:1,
      	fill:true,
      	fillColor:"#81DAF5",
      	fillOpacity:0.2
  		});
  		map.addLayer(circle);
  		markers.push(circle);
	}
	else if(document.getElementById("circle").value == "3"){
  		circle = L.circle([center.lat, center.lng], 3000,{
      	color:"#0000ff",
      	weight:5,
      	opacity:1,
      	fill:true,
      	fillColor:"#81DAF5",
      	fillOpacity:0.2
  		});
  		map.addLayer(circle);
  		markers.push(circle);
	}
	else if(document.getElementById("circle").value == "4"){
  		circle = L.circle([center.lat, center.lng], 5000,{
      	color:"#0000ff",
      	weight:5,
      	opacity:1,
      	fill:true,
      	fillColor:"#81DAF5",
      	fillOpacity:0.2
  		});
  		map.addLayer(circle);
  		markers.push(circle);
	}
	else if(document.getElementById("circle").value == "5"){
  		circle = L.circle([center.lat, center.lng], 10000,{
      	color:"#0000ff",
      	weight:5,
      	opacity:1,
      	fill:true,
      	fillColor:"#81DAF5",
      	fillOpacity:0.2
  		});
  		map.addLayer(circle);
  		markers.push(circle);
	}
	else{}

	if(document.getElementById("st").checked){
		map.removeLayer(geost);
		Geost();
	}
	else{}
	
	if(document.getElementById("k").checked){
		map.removeLayer(geok);
		Geok();
	}
	else{}
	
	if(document.getElementById("o").checked){
		map.removeLayer(geoo);
		Geoo();
	}
	else{}
}