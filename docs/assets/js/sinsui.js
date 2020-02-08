var ido, keido;

 function getAltitude(lon, lat){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      var json_data = eval( '('+xhr.responseText +')');
      var txt;
      txt = json_data.elevation;
      var result = document.getElementById('hyoukou_result');
      result.innerHTML = txt;
      document.getElementById('hyoukou_result2').innerHTML = txt;
    }
  };
  var url = "https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php?lon=" + lon + "&lat=" + lat +"&outtype=JSON";
  xhr.open('GET', url);
  xhr.send(null);
};

 function getsinsui(lon, lat){
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
      		
      		if( xhr.responseText == "null"){
      			$('#sinsui_load').hide();
      			$('#kekka2').fadeIn(1000);
      			exit;
      		}
      		
      var json_data = eval( '('+xhr.responseText +')');
      var txt;
      txt = json_data.Depth;
      var result = document.getElementById('sinsui_result');
      result.innerHTML = txt;
      
      $('#sinsui_load').hide();
      $('#kekka').fadeIn(1000);
      
    }
  };
  var url = "https://suiboumap.gsi.go.jp/shinsuimap/Api/Public/GetMaxDepth?lon=" + lon + "&lat=" + lat + "&grouptype=0";
  xhr.open('GET', url);
  xhr.send(null);
};

function GPS() {
		
	if (navigator.geolocation) {
	   //geolocationの利用
       navigator.geolocation.getCurrentPosition(gps_get,gps_error3);
     } else {
     	alert("GPSの取得に失敗したため、起動できません。")
     }

}
	
function gps_error3(error) {
   		//失敗したら…
       alert("GPSの取得に失敗したため、起動できません。");
}
 
function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    
    ido = Math.round(ido * 1000) / 1000;
    keido = Math.round(keido * 1000) / 1000;
    
    document.getElementById('sin_keido').innerHTML = keido;
    document.getElementById('sin_ido').innerHTML = ido;
    
    document.getElementById('sin_keido2').innerHTML = keido;
    document.getElementById('sin_ido2').innerHTML = ido;
    
    $("#sinsui_load").show();
    
getAltitude(keido, ido);
getsinsui(keido, ido);

}