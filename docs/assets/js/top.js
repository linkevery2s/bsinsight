function line(){
	var url = window.location.href;
	location.href = "line://msg/text/"+ url;
}

function mail(){
	var url = window.location.href;
	location.href =  "mailto:?body=" + url;
}

function tw(){
	var url = window.location.href;
	var hash = url.split("#",2);
	location.href = "https://twitter.com/share?url=" + hash[0] + "%23" + hash[1];
}

function fbt(){
	var url = window.location.href;
	var hash = url.split("#",2);
	location.href = "https://www.facebook.com/sharer/sharer.php?u=" + hash[0] + "%23" + hash[1];
}

function the1(){
	$("#theory1").show();
}

function the2(){
	$("#theory2").show();
}

function the3(){
	$("#theory3").show();
}

function the4(){
	$("#theory4").show();
}

function the5(){
	$("#theory5").show();
}

function the6(){
	$("#theory6").show();
}

function the7(){
	$("#theory7").show();
}

function the8(){
	$("#theory8").show();
}

function the9(){
	$("#theory9").show();
}

function the10(){
	$("#theory10").show();
}

function the11(){
	$("#theory11").show();
}

function the12(){
	$("#theory12").show();
}

function the13(){
	$("#theory13").show();
}

function the14(){
	$("#theory14").show();
}

function the15(){
	$("#theory15").show();
}

function the16(){
	$("#theory16").show();
}

function the17(){
	$("#theory17").show();
}

function the18(){
	$("#theory18").show();
}

function the19(){
	$("#theory19").show();
}

function the20(){
	$("#theory20").show();
}

function the21(){
	$("#theory21").show();
}

function the22(){
	$("#theory22").show();
}

function the23(){
	$("#theory23").show();
}

function the24(){
	$("#theory24").show();
}

function the25(){
	$("#theory25").show();
}

function the26(){
	$("#theory26").show();
}

function sel(){

	if(document.getElementById("demo-category").value == "1"){
		$("#okugai").hide();
		$("#norimono").hide();
		$("#yure").hide();
		$("#home").show();
	}
	else if(document.getElementById("demo-category").value == "2"){
		$("#home").hide();
		$("#norimono").hide();
		$("#yure").hide();
		$("#okugai").show();
	}
	else if(document.getElementById("demo-category").value == "3"){
		$("#home").hide();
		$("#okugai").hide();
		$("#yure").hide();
		$("#norimono").show();
	}
	else if(document.getElementById("demo-category").value == "4"){
		$("#home").hide();
		$("#okugai").hide();
		$("#norimono").hide();
		$("#yure").show();
	}
	else{
	}
}

function def(){
		$("#okugai").hide();
		$("#norimono").hide();
		$("#yure").hide();
		$("#home").hide();
}

/*function h_map(){

	if(document.getElementById("to-category").value == "hokkaido"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/hokkaido.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "aomori"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/aomori.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "akita"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/akita.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "iwate"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/iwate.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "yamagata"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/yamagata.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "miyagi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/miyagi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "fukushima"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/fukushima.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "nigata"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/nigata.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "tiba"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/tiba.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "tochigi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/tochigi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "gunma"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/gunma.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "saitama"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/saitama.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "ibaragi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/ibaragi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "tokyo"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/tokyo.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "kanagawa"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/kanagawa.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "yamanashi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/yamanashi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "nagano"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/nagano.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "shizuoka"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/shizuoka.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "toyama"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/toyama.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "ishikawa"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/ishikawa.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "gifu"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/gifu.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "aichi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/aichi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "mie"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/mie.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "fukui"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/fukui.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "shiga"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/shiga.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "kyoto"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/kyoto.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "nara"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/nara.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "osaka"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/osaka.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "wakayama"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/wakayama.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "hyogo"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/hyogo.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "tottori"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/tottori.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "okayama"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/okayama.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "shimane"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/shimane.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "hiroshima"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/hiroshima.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "yamaguchi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/yamaguchi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "kagawa"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/kagawa.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "tokushima"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/tokushima.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "ehime"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/ehime.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "kochi"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/kochi.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "fukuoka"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/fukuoka.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "saga"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/saga.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "nagasaki"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/nagasaki.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "oita"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/oita.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "kumamoto"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/kumamoto.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "miyazaki"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/miyazaki.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "kagoshima"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/kagoshima.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else if(document.getElementById("to-category").value == "okinawa"){
		document.getElementById("h_map").innerHTML = '<iframe src="map/okinawa.html" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';
	}
	else{
	}
}*/


function h_map(){

	if(document.getElementById("to-category").value == "hokkaido"){
		location.href="map/hokkaido.html";
	}
	else if(document.getElementById("to-category").value == "aomori"){
		location.href="map/aomori.html";
	}
	else if(document.getElementById("to-category").value == "akita"){
		location.href="map/akita.html";
	}
	else if(document.getElementById("to-category").value == "iwate"){
		location.href="map/iwate.html";
	}
	else if(document.getElementById("to-category").value == "yamagata"){
		location.href="map/yamagata.html";
	}
	else if(document.getElementById("to-category").value == "miyagi"){
		location.href="map/miyagi.html";
	}
	else if(document.getElementById("to-category").value == "fukushima"){
		location.href="map/fukushima.html";
	}
	else if(document.getElementById("to-category").value == "nigata"){
		location.href="map/nigata.html";
	}
	else if(document.getElementById("to-category").value == "tiba"){
		location.href="map/tiba.html";
	}
	else if(document.getElementById("to-category").value == "tochigi"){
		location.href="map/tochigi.html";
	}
	else if(document.getElementById("to-category").value == "gunma"){
		location.href="map/gunma.html";
	}
	else if(document.getElementById("to-category").value == "saitama"){
		location.href="map/saitama.html";
	}
	else if(document.getElementById("to-category").value == "ibaragi"){
		location.href="map/ibaragi.html";
	}
	else if(document.getElementById("to-category").value == "tokyo"){
		location.href="map/tokyo.html";
	}
	else if(document.getElementById("to-category").value == "kanagawa"){
		location.href="map/kanagawa.html";
	}
	else if(document.getElementById("to-category").value == "yamanashi"){
		location.href="map/yamanashi.html";
	}
	else if(document.getElementById("to-category").value == "nagano"){
		location.href="map/nagano.html";
	}
	else if(document.getElementById("to-category").value == "shizuoka"){
		location.href="map/shizuoka.html";
	}
	else if(document.getElementById("to-category").value == "toyama"){
		location.href="map/toyama.html";
	}
	else if(document.getElementById("to-category").value == "ishikawa"){
		location.href="map/ishikawa.html";
	}
	else if(document.getElementById("to-category").value == "gifu"){
		location.href="map/gifu.html";
	}
	else if(document.getElementById("to-category").value == "aichi"){
		location.href="map/aichi.html";
	}
	else if(document.getElementById("to-category").value == "mie"){
		location.href="map/mie.html";
	}
	else if(document.getElementById("to-category").value == "fukui"){
		location.href="map/fukui.html";
	}
	else if(document.getElementById("to-category").value == "shiga"){
		location.href="map/shiga.html";
	}
	else if(document.getElementById("to-category").value == "kyoto"){
		location.href="map/kyoto.html";
	}
	else if(document.getElementById("to-category").value == "nara"){
		location.href="map/nara.html";
	}
	else if(document.getElementById("to-category").value == "osaka"){
		location.href="map/osaka.html";
	}
	else if(document.getElementById("to-category").value == "wakayama"){
		location.href="map/wakayama.html";
	}
	else if(document.getElementById("to-category").value == "hyogo"){
		location.href="map/hyogo.html";
	}
	else if(document.getElementById("to-category").value == "tottori"){
		location.href="map/tottori.html";
	}
	else if(document.getElementById("to-category").value == "okayama"){
		location.href="map/okayama.html";
	}
	else if(document.getElementById("to-category").value == "shimane"){
		location.href="map/shimane.html";
	}
	else if(document.getElementById("to-category").value == "hiroshima"){
		location.href="map/hiroshima.html";
	}
	else if(document.getElementById("to-category").value == "yamaguchi"){
		location.href="map/yamaguchi.html";
	}
	else if(document.getElementById("to-category").value == "kagawa"){
		location.href="map/kagawa.html";
	}
	else if(document.getElementById("to-category").value == "tokushima"){
		location.href="map/tokushima.html";
	}
	else if(document.getElementById("to-category").value == "ehime"){
		location.href="map/ehime.html";
	}
	else if(document.getElementById("to-category").value == "kochi"){
		location.href="map/kochi.html";
	}
	else if(document.getElementById("to-category").value == "fukuoka"){
		location.href="map/fukuoka.html";
	}
	else if(document.getElementById("to-category").value == "saga"){
		location.href="map/saga.html";
	}
	else if(document.getElementById("to-category").value == "nagasaki"){
		location.href="map/nagasaki.html";
	}
	else if(document.getElementById("to-category").value == "oita"){
		location.href="map/oita.html";
	}
	else if(document.getElementById("to-category").value == "kumamoto"){
		location.href="map/kumamoto.html";
	}
	else if(document.getElementById("to-category").value == "miyazaki"){
		location.href="map/miyazaki.html";
	}
	else if(document.getElementById("to-category").value == "kagoshima"){
		location.href="map/kagoshima.html";
	}
	else if(document.getElementById("to-category").value == "okinawa"){
		location.href="map/okinawa.html";
	}
	else{
	}
}


function ty(){

	if(document.getElementById("type-category").value == "1"){
		eq();
	}
	else if(document.getElementById("type-category").value == "2"){
		tn();
	}
	else if(document.getElementById("type-category").value == "3"){
		th();
	}
	else if(document.getElementById("type-category").value == "4"){
		ds();
	}
	else{
	}
}