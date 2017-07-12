var map; var geos; var geot; var geok; var geoo; var center; var circle; var markers = []; 

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