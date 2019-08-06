function line(){
	var url = window.location.href;
	var hash = url.split("#",2);
	location.href = "line://msg/text/"+ hash[0];
}

function mail(){
	var url = window.location.href;
	var hash = url.split("#",2);
	location.href =  "mailto:?body=" + hash[0];
}

function tw(){
	var url = window.location.href;
	var hash = url.split("#",2);
	location.href = "https://twitter.com/share?url=" + hash[0] + "%23" + hash[1];
}

function fb(){
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