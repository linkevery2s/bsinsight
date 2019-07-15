var map; var geos; var geot; var geok; var geoo; var center; var circle; var markers = []; 

function view(){

	if(document.getElementById("pref").value == "hokkaido"){
		location.href = "hokkaido.html";
	}
	else if(document.getElementById("pref").value == "aomori"){
		location.href = "aomori.html";
	}
	else if(document.getElementById("pref").value == "akita"){
		location.href = "akita.html";
	}
	else if(document.getElementById("pref").value == "iwate"){
		location.href = "iwate.html";
	}
	else if(document.getElementById("pref").value == "yamagata"){
		location.href = "yamagata.html";
	}
	else if(document.getElementById("pref").value == "miyagi"){
		location.href = "miyagi.html";
	}
	else if(document.getElementById("pref").value == "fukushima"){
		location.href = "fukushima.html";
	}
	else if(document.getElementById("pref").value == "nigata"){
		location.href = "nigata.html";
	}
	else if(document.getElementById("pref").value == "tiba"){
		location.href = "tiba.html";
	}
	else if(document.getElementById("pref").value == "tochigi"){
		location.href = "tochigi.html";
	}
	else if(document.getElementById("pref").value == "gunma"){
		location.href = "gunma.html";
	}
	else if(document.getElementById("pref").value == "saitama"){
		location.href = "saitama.html";
	}
	else if(document.getElementById("pref").value == "ibaragi"){
		location.href = "ibaragi.html";
	}
	else if(document.getElementById("pref").value == "tokyo"){
		location.href = "tokyo.html";
	}
	else if(document.getElementById("pref").value == "kanagawa"){
		location.href = "kanagawa.html";
	}
	else if(document.getElementById("pref").value == "yamanashi"){
		location.href = "yamanashi.html";
	}
	else if(document.getElementById("pref").value == "nagano"){
		location.href = "nagano.html";
	}
	else if(document.getElementById("pref").value == "shizuoka"){
		location.href = "shizuoka.html";
	}
	else if(document.getElementById("pref").value == "toyama"){
		location.href = "toyama.html";
	}
	else if(document.getElementById("pref").value == "ishikawa"){
		location.href = "ishikawa.html";
	}
	else if(document.getElementById("pref").value == "gifu"){
		location.href = "gifu.html";	
	}
	else if(document.getElementById("pref").value == "aichi"){
		location.href = "aichi.html";
	}
	else if(document.getElementById("pref").value == "mie"){
		location.href = "mie.html";
	}
	else if(document.getElementById("pref").value == "fukui"){
		location.href = "fukui.html";
	}
	else if(document.getElementById("pref").value == "shiga"){
		location.href = "shiga.html";
	}
	else if(document.getElementById("pref").value == "kyoto"){
		location.href = "ktoto.html";
	}
	else if(document.getElementById("pref").value == "nara"){
		location.href = "nara.html";
	}
	else if(document.getElementById("pref").value == "osaka"){
		location.href = "osaka.html";
	}
	else if(document.getElementById("pref").value == "shiga"){
		location.href = "shiga.html";
	}
	else if(document.getElementById("pref").value == "wakayama"){
		location.href = "wakayama.html";
	}
	else if(document.getElementById("pref").value == "hyogo"){
		location.href = "hyogo.html";
	}
	else if(document.getElementById("pref").value == "tottori"){
		location.href = "tottori.html";
	}
	else if(document.getElementById("pref").value == "okayama"){
		location.href = "okayama.html";
	}
	else if(document.getElementById("pref").value == "shimane"){
		location.href = "shimane.html";
	}
	else if(document.getElementById("pref").value == "hiroshima"){
		location.href = "hiroshima.html";
	}
	else if(document.getElementById("pref").value == "yamaguchi"){
		location.href = "yamaguchi.html";
	}
	else if(document.getElementById("pref").value == "kagawa"){
		location.href = "kagawa.html";
	}
	else if(document.getElementById("pref").value == "tokushima"){
		location.href = "tokushima.html";
	}
	else if(document.getElementById("pref").value == "ehime"){
		location.href = "ehime.html";
	}
	else if(document.getElementById("pref").value == "kochi"){
		location.href = "kochi.html";
	}
	else if(document.getElementById("pref").value == "fukuoka"){
		location.href = "fukuoka.html";
	}
	else if(document.getElementById("pref").value == "saga"){
		location.href = "saga.html";
	}
	else if(document.getElementById("pref").value == "nagasaki"){
		location.href = "nagasaki.html";
	}
	else if(document.getElementById("pref").value == "oita"){
		location.href = "oita.html";
	}
	else if(document.getElementById("pref").value == "kumamoto"){
		location.href = "kumamoto.html";
	}
	else if(document.getElementById("pref").value == "miyazaki"){
		location.href = "miyazaki.html";
	}
	else if(document.getElementById("pref").value == "kagoshima"){
		location.href = "kagoshima.html";
	}
	else if(document.getElementById("pref").value == "okinawa"){
		location.href = "okinawa.html";
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