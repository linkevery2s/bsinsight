/*気象庁レーダー*/
function rader_now(){

	/* 現在時刻取得 */
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	
	/* 0埋め */
	month +="";
	if ( month.length == 1){
		month = "0" + month;
	}
	var date = now.getDate();
	
	/* 0埋め */
	date +="";
	if ( date.length == 1){
		date = "0" + date;
	}
	
	var hour = now.getHours();

	/* 0埋め */
	hour +="";
	if ( hour.length == 1){
		hour = "0" + hour;
	}

	var min = now.getMinutes();

	/* 0埋め */
	min +="";
	if ( min.length == 1){
		min = "0" + min;
	}
	
	/* 2桁目 */
	var a = min.slice( 0, 1 ) ;
	
	/* 1桁目 */
	var b = min.slice( -1 ) ;
	
	if( b == 1 || b == 2 || b == 3 || b == 4){
		b = 0;
	}else if( b == 6 || b == 7 || b == 8 || b == 9 ){
		b = 5;
	}

	var rader_date = year + "" + month + "" + date + "" + hour + "" + a + "" + b;
	
	document.getElementById('rader_now3').innerHTML = "<img src = 'https://www.jma.go.jp/jp/radnowc/imgs/radar/000/" + rader_date + "-00.png' width = '100%'>";

}

/* Windy */
function windy_ame(){
	document.getElementById('rader_now1').innerHTML = '<iframe width="100%" height="500" src="https://embed.windy.com/embed2.html?lat=37.003&lon=136.978&zoom=5&level=surface&overlay=rain&menu=&message=true&marker=&calendar=&pressure=true&type=map&location=coordinates&detail=&detailLat=37.003&detailLon=136.978&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0" id="yout"></iframe>';

}

/* yahoo */
function yahoo_ame(){

	document.getElementById('rader_now2').innerHTML = '<iframe width="100%" height="560" src="ymap.html" frameborder="0" id="yout"></iframe>';

}

function rader(){

rader_now();

windy_ame();

yahoo_ame();

}