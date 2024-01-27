/* Windy */
function windy_ame() {
	document.getElementById('rader_now1').innerHTML = '<iframe width="100%" height="500" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=38.417&lon=137.294" frameborder="0" id="yout"></iframe>';

}

/* 気象庁 */
function ks_ame() {
	document.getElementById('rader_now').innerHTML = '<iframe width="100%" height="500" src="krader/index.html" frameborder="0" id="yout"></iframe>';

}

function rader() {

	windy_ame();

	ks_ame();

}
