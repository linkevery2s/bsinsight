/* Windy */
function windy_ame(){
	document.getElementById('rader_now1').innerHTML = '<iframe width="100%" height="500" src="https://embed.windy.com/embed2.html?lat=37.003&lon=136.978&zoom=5&level=surface&overlay=rain&menu=&message=true&marker=&calendar=&pressure=true&type=map&location=coordinates&detail=&detailLat=37.003&detailLon=136.978&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0" id="yout"></iframe>';

}

/* 気象庁 */
function k_ame(){
	document.getElementById('rader_now2').innerHTML = '<iframe width="100%" height="650" src="https://www.jma.go.jp/bosai/nowc/#zoom:5/lat:38.131704/lon:136.908335/colordepth:normal/elements:hrpns" frameborder="0" id="yout"></iframe>';

}

function rader(){

windy_ame();

k_ame();

}