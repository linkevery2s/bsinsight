/* Windy */
function windy_ame(){
	document.getElementById('rader_now1').innerHTML = '<iframe width="100%" height="500" src="https://embed.windy.com/embed2.html?lat=37.003&lon=136.978&zoom=5&level=surface&overlay=rain&menu=&message=true&marker=&calendar=&pressure=true&type=map&location=coordinates&detail=&detailLat=37.003&detailLon=136.978&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0" id="yout"></iframe>';

}

/* 気象庁 */
function ks_ame(){
	document.getElementById('rader_now').innerHTML = '<iframe width="100%" height="650" src="krader/index.html" frameborder="0" id="yout"></iframe>';

}

function rader(){

windy_ame();

ks_ame();

}
