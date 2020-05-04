var map;var zoom;var url;var todou; var ido; var keido;
var bed = new Array(47); var syoki = new Array(47); var x = new Array(47); var y = new Array(47); var mitudo = new Array(47); var mitudo_total = new Array(47);  var density = new Array(47);
var multi = new Array(47); var lastupdate;var multi_n = new Array(47); online_pref = new Array(47);
var yousei = new Array(47); var taiin = new Array(47); var ncurrent = new Array(47); death = new Array(47);
var soku_yousei = new Array(47); var soku_taiin = new Array(47); var soku_ncurrent = new Array(47); soku_death = new Array(47);
var j;

/* 病床数 */
/* 北海道 */ bed[0] = "530";
/* 青森県 */ bed[1] = "59";
/* 岩手県 */ bed[2] = "38";
/* 宮城県 */ bed[3] = "278";
/* 秋田県 */ bed[4] = "48";
/* 山形県 */ bed[5] = "150";
/* 福島県 */ bed[6] = "311";
/* 茨城県 */ bed[7] = "375";
/* 栃木県 */ bed[8] = "241";
/* 群馬県 */ bed[9] = "350";
/* 埼玉県 */ bed[10] = "562";
/* 千葉県 */ bed[11] = "773";
/* 東京都 */ bed[12] = "2865";
/* 神奈川 */ bed[13] = "3294";
/* 新潟県 */ bed[14] = "250";
/* 富山県 */ bed[15] = "200";
/* 石川県 */ bed[16] = "500";
/* 福井県 */ bed[17] = "215";
/* 山梨県 */ bed[18] = "51";
/* 長野県 */ bed[19] = "500";
/* 岐阜県 */ bed[20] = "723";
/* 静岡県 */ bed[21] = "87";
/* 愛知県 */ bed[22] = "1650";
/* 三重県 */ bed[23] = "88";
/* 滋賀県 */ bed[24] = "150";
/* 京都府 */ bed[25] = "590";
/* 大阪府 */ bed[26] = "2639";
/* 兵庫県 */ bed[27] = "950";
/* 奈良県 */ bed[28] = "339";
/* 和歌山 */ bed[29] = "124";
/* 鳥取県 */ bed[30] = "322";
/* 島根県 */ bed[31] = "200";
/* 岡山県 */ bed[32] = "120";
/* 広島県 */ bed[33] = "249";
/* 山口県 */ bed[34] = "320";
/* 徳島県 */ bed[35] = "130";
/* 香川県 */ bed[36] = "125";
/* 愛媛県 */ bed[37] = "137";
/* 高知県 */ bed[38] = "48";
/* 福岡県 */ bed[39] = "1126";
/* 佐賀県 */ bed[40] = "279";
/* 長崎県 */ bed[41] = "38";
/* 熊本県 */ bed[42] = "218";
/* 大分県 */ bed[43] = "183";
/* 宮崎県 */ bed[44] = "81";
/* 鹿児島 */ bed[45] = "233";
/* 沖縄県 */ bed[46] = "286";

function get_kansen(){

	/* 速報 */
	var xhr2 = new XMLHttpRequest();
	var url2 = "https://www.stopcovid19.jp/data/covid19japan-fast.json";
	xhr2.open('GET', url2);
	xhr2.send(null);
	xhr2.onreadystatechange = function(){
		if (xhr2.readyState === 4 && xhr2.status === 200){
			var json_data2 = eval( '('+xhr2.responseText +')');

		}else{}
		
			for ( j = 0;  j < 17;  j++){
				soku_yousei[j] = json_data2[j].npatients;
				soku_taiin[j] = json_data2[j].nexits;
				soku_ncurrent[j] = json_data2[j].ncurrentpatients;
				soku_death[j] = json_data2[j].ndeaths;
			}

	/* 厚労省データ */
	var xhr = new XMLHttpRequest();
	var url = "https://www.stopcovid19.jp/data/covid19japan.json";
	xhr.open('GET', url);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');

			syoki[0] = document.getElementById('ja_hokkaido');
			syoki[1] = document.getElementById('ja_aomori');
			syoki[2] = document.getElementById('ja_iwate');
			syoki[3] = document.getElementById('ja_miyagi');
			syoki[4] = document.getElementById('ja_akita');
			syoki[5] = document.getElementById('ja_yamagata');
			syoki[6] = document.getElementById('ja_fukushima');
			syoki[7] = document.getElementById('ja_ibaraki');
			syoki[8] = document.getElementById('ja_tochigi');
			syoki[9] = document.getElementById('ja_gunma');
			syoki[10] = document.getElementById('ja_saitama');
			syoki[11] = document.getElementById('ja_tiba');
			syoki[12] = document.getElementById('ja_tokyo');
			syoki[13] = document.getElementById('ja_kanagawa');
			syoki[14] = document.getElementById('ja_niigata');
			syoki[15] = document.getElementById('ja_toyama');
			syoki[16] = document.getElementById('ja_ishikawa');
			syoki[17] = document.getElementById('ja_fukui');
			syoki[18] = document.getElementById('ja_yamanashi');
			syoki[19] = document.getElementById('ja_nagano');
			syoki[20] = document.getElementById('ja_gifu');
			syoki[21] = document.getElementById('ja_shizuoka');
			syoki[22] = document.getElementById('ja_aichi');
			syoki[23] = document.getElementById('ja_mie');
			syoki[24] = document.getElementById('ja_shiga');
			syoki[25] = document.getElementById('ja_kyoto');
			syoki[26] = document.getElementById('ja_osaka');
			syoki[27] = document.getElementById('ja_hyogo');
			syoki[28] = document.getElementById("ja_nara");
			syoki[29] = document.getElementById("ja_wakayama");
			syoki[30] = document.getElementById("ja_tottori");
			syoki[31] = document.getElementById("ja_shimane");
			syoki[32] = document.getElementById("ja_okayama");
			syoki[33] = document.getElementById("ja_hiroshima");
			syoki[34] = document.getElementById("ja_yamaguchi");
			syoki[35] = document.getElementById("ja_tokushima");
			syoki[36] = document.getElementById("ja_kagawa");
			syoki[37] = document.getElementById("ja_ehime");
			syoki[38] = document.getElementById("ja_kochi");
			syoki[39] = document.getElementById("ja_fukuoka");
			syoki[40] = document.getElementById("ja_saga");
			syoki[41] = document.getElementById("ja_nagasaki");
			syoki[42] = document.getElementById("ja_kumamoto");
			syoki[43] = document.getElementById("ja_oita");
			syoki[44] = document.getElementById("ja_miyazaki");
			syoki[45] = document.getElementById("ja_kagoshima");
			syoki[46] = document.getElementById("ja_okinawa");

			/* 厚労省データ格納 */
			for (var i = 0;  i < 47;  i++){
				yousei[i] = json_data.area[i].npatients;
				taiin[i] = json_data.area[i].nexits;
				ncurrent[i] = json_data.area[i].ncurrentpatients;
				death[i] = json_data.area[i].ndeaths;
			}

			/* 速報上書き */
			/* 北海道 */
			yousei[0] = soku_yousei[0];
			taiin[0] = soku_taiin[0];
			ncurrent[0] = soku_ncurrent[0];
			death[0] = soku_death[0];
			/* 福島県 */
			yousei[6] = soku_yousei[1];
			taiin[6] = soku_taiin[1];
			ncurrent[6] = soku_ncurrent[1];
			death[6] = soku_death[1];
			/* 群馬県 */
			yousei[9] = soku_yousei[2];
			taiin[9] = soku_taiin[2];
			ncurrent[9] = soku_ncurrent[2];
			death[9] = soku_death[2];
			/* 埼玉県 */
			yousei[10] = soku_yousei[3];
			taiin[10] = soku_taiin[3];
			ncurrent[10] = soku_ncurrent[3];
			death[10] = soku_death[3];
			/* 千葉県 */
			yousei[11] = soku_yousei[4];
			taiin[11] = soku_taiin[4];
			ncurrent[11] = soku_ncurrent[4];
			death[11] = soku_death[4];
			/* 東京都 */
			yousei[12] = soku_yousei[5];
			taiin[12] = soku_taiin[5];
			ncurrent[12] = soku_ncurrent[5];
			death[12] = soku_death[5];
			/* 富山県 */
			yousei[15] = soku_yousei[6];
			taiin[15] = soku_taiin[6];
			ncurrent[15] = soku_ncurrent[6];
			death[15] = soku_death[6];
			/* 福井県 */
			yousei[17] = soku_yousei[7];
			taiin[17] = soku_taiin[7];
			ncurrent[17] = soku_ncurrent[7];
			death[17] = soku_death[7];
			/* 長野県 */
			yousei[19] = soku_yousei[8];
			taiin[19] = soku_taiin[8];
			ncurrent[19] = soku_ncurrent[8];
			death[19] = soku_death[8];
			/* 岐阜県 */
			yousei[20] = soku_yousei[9];
			taiin[20] = soku_taiin[9];
			ncurrent[20] = soku_ncurrent[9];
			death[20] = soku_death[9];
			/* 静岡県 */
			yousei[21] = soku_yousei[10];
			taiin[21] = soku_taiin[10];
			ncurrent[21] = soku_ncurrent[10];
			death[21] = soku_death[10];
			/* 大阪府 */
			yousei[26] = soku_yousei[11];
			taiin[26] = soku_taiin[11];
			ncurrent[26] = soku_ncurrent[11];
			death[26] = soku_death[11];

			/* divに掲載 */
			for (var i = 0;  i < 47;  i++){
			syoki[i].innerHTML = json_data.area[i].name_jp + "<br>陽性者：" + yousei[i] + "<br>退院者：" + taiin[i] + "<br>現患者：" + ncurrent[i] + "<br>死亡者：" + death[i];
			}

			/* 全体 */
			var total_yousei = yousei[0];
			var total_taiin = taiin[0];
			var total_ncurrent = ncurrent[0];
			var total_death = death[0];
			
			for (var i = 1;  i < 47;  i++){
				total_yousei += yousei[i];
				total_taiin += taiin[i];
				total_ncurrent += ncurrent[i];
				total_death += death[i];
			}

			var txt = "日本全国<br>陽性者：" + total_yousei;
			txt += "<br>退院者：" + total_taiin;
			txt += "<br>現患者：" + total_ncurrent;
			txt += "<br>死亡者：" + total_death;
			document.getElementById('ja_ka').innerHTML = txt;
			
			x[0] = document.getElementById('2ja_hokkaido');
			x[1] = document.getElementById('2ja_aomori');
			x[2] = document.getElementById('2ja_iwate');
			x[3] = document.getElementById('2ja_miyagi');
			x[4] = document.getElementById('2ja_akita');
			x[5] = document.getElementById('2ja_yamagata');
			x[6] = document.getElementById('2ja_fukushima');
			x[7] = document.getElementById('2ja_ibaraki');
			x[8] = document.getElementById('2ja_tochigi');
			x[9] = document.getElementById('2ja_gunma');
			x[10] = document.getElementById('2ja_saitama');
			x[11] = document.getElementById('2ja_tiba');
			x[12] = document.getElementById('2ja_tokyo');
			x[13] = document.getElementById('2ja_kanagawa');
			x[14] = document.getElementById('2ja_niigata');
			x[15] = document.getElementById('2ja_toyama');
			x[16] = document.getElementById('2ja_ishikawa');
			x[17] = document.getElementById('2ja_fukui');
			x[18] = document.getElementById('2ja_yamanashi');
			x[19] = document.getElementById('2ja_nagano');
			x[20] = document.getElementById('2ja_gifu');
			x[21] = document.getElementById('2ja_shizuoka');
			x[22] = document.getElementById('2ja_aichi');
			x[23] = document.getElementById('2ja_mie');
			x[24] = document.getElementById('2ja_shiga');
			x[25] = document.getElementById('2ja_kyoto');
			x[26] = document.getElementById('2ja_osaka');
			x[27] = document.getElementById('2ja_hyogo');
			x[28] = document.getElementById("2ja_nara");
			x[29] = document.getElementById("2ja_wakayama");
			x[30] = document.getElementById("2ja_tottori");
			x[31] = document.getElementById("2ja_shimane");
			x[32] = document.getElementById("2ja_okayama");
			x[33] = document.getElementById("2ja_hiroshima");
			x[34] = document.getElementById("2ja_yamaguchi");
			x[35] = document.getElementById("2ja_tokushima");
			x[36] = document.getElementById("2ja_kagawa");
			x[37] = document.getElementById("2ja_ehime");
			x[38] = document.getElementById("2ja_kochi");
			x[39] = document.getElementById("2ja_fukuoka");
			x[40] = document.getElementById("2ja_saga");
			x[41] = document.getElementById("2ja_nagasaki");
			x[42] = document.getElementById("2ja_kumamoto");
			x[43] = document.getElementById("2ja_oita");
			x[44] = document.getElementById("2ja_miyazaki");
			x[45] = document.getElementById("2ja_kagoshima");
			x[46] = document.getElementById("2ja_okinawa");
			
			/* 全国を非表示 */
			document.getElementById('2ja_ka').style.backgroundColor = '#FFFFFF';

			/* divに掲載 */
			for (var i = 0;  i < 47;  i++){
			x[i].innerHTML = json_data.area[i].name_jp +"<br><center>現患者数／病床数<br>" + ncurrent[i] + "／" + bed[i] + "</center>";
			}

			/* 色分け判定 */
			for(var i = 0;  i < 47;  i++){
				if( ncurrent[i] > bed[i]){
					x[i].style.backgroundColor = '#FF0000';
				}
				else if( ncurrent[i] > bed[i]*0.5){
					x[i].style.backgroundColor = '#FF9900';
				}
				else if( ncurrent[i] > bed[i]*0.2){
					x[i].style.backgroundColor = '#FFFF00';
					x[i].style.color = "#000000";
				}
				else if( ncurrent[i] == "0"){
					x[i].style.backgroundColor = '#0000FF';
				}
				else{
					x[i].style.backgroundColor = '#CCFF00';
					x[i].style.color = "#000000";
				}
			}

			/* density */
			
density[0]="5286000";
density[1]="1263000";
density[2]="1241000";
density[3]="2316000";
density[4]="981000";
density[5]="1090000";
density[6]="1864000";
density[7]="2877000";
density[8]="1946000";
density[9]="1952000";
density[10]="7330000";
density[11]="6255000";
density[12]="13822000";
density[13]="9177000";
density[14]="2246000";
density[15]="1050000";
density[16]="1143000";
density[17]="774000";
density[18]="817000";
density[19]="2063000";
density[20]="1997000";
density[21]="3659000";
density[22]="7537000";
density[23]="1791000";
density[24]="1412000";
density[25]="2591000";
density[26]="8813000";
density[27]="5484000";
density[28]="1339000";
density[29]="935000";
density[30]="560000";
density[31]="680000";
density[32]="1898000";
density[33]="2817000";
density[34]="1370000";
density[35]="736000";
density[36]="962000";
density[37]="1352000";
density[38]="706000";
density[39]="5107000";
density[40]="819000";
density[41]="1341000";
density[42]="1757000";
density[43]="1144000";
density[44]="1081000";
density[45]="1614000";
density[46]="1448000";


			y[0] = document.getElementById('3ja_hokkaido');
			y[1] = document.getElementById('3ja_aomori');
			y[2] = document.getElementById('3ja_iwate');
			y[3] = document.getElementById('3ja_miyagi');
			y[4] = document.getElementById('3ja_akita');
			y[5] = document.getElementById('3ja_yamagata');
			y[6] = document.getElementById('3ja_fukushima');
			y[7] = document.getElementById('3ja_ibaraki');
			y[8] = document.getElementById('3ja_tochigi');
			y[9] = document.getElementById('3ja_gunma');
			y[10] = document.getElementById('3ja_saitama');
			y[11] = document.getElementById('3ja_tiba');
			y[12] = document.getElementById('3ja_tokyo');
			y[13] = document.getElementById('3ja_kanagawa');
			y[14] = document.getElementById('3ja_niigata');
			y[15] = document.getElementById('3ja_toyama');
			y[16] = document.getElementById('3ja_ishikawa');
			y[17] = document.getElementById('3ja_fukui');
			y[18] = document.getElementById('3ja_yamanashi');
			y[19] = document.getElementById('3ja_nagano');
			y[20] = document.getElementById('3ja_gifu');
			y[21] = document.getElementById('3ja_shizuoka');
			y[22] = document.getElementById('3ja_aichi');
			y[23] = document.getElementById('3ja_mie');
			y[24] = document.getElementById('3ja_shiga');
			y[25] = document.getElementById('3ja_kyoto');
			y[26] = document.getElementById('3ja_osaka');
			y[27] = document.getElementById('3ja_hyogo');
			y[28] = document.getElementById("3ja_nara");
			y[29] = document.getElementById("3ja_wakayama");
			y[30] = document.getElementById("3ja_tottori");
			y[31] = document.getElementById("3ja_shimane");
			y[32] = document.getElementById("3ja_okayama");
			y[33] = document.getElementById("3ja_hiroshima");
			y[34] = document.getElementById("3ja_yamaguchi");
			y[35] = document.getElementById("3ja_tokushima");
			y[36] = document.getElementById("3ja_kagawa");
			y[37] = document.getElementById("3ja_ehime");
			y[38] = document.getElementById("3ja_kochi");
			y[39] = document.getElementById("3ja_fukuoka");
			y[40] = document.getElementById("3ja_saga");
			y[41] = document.getElementById("3ja_nagasaki");
			y[42] = document.getElementById("3ja_kumamoto");
			y[43] = document.getElementById("3ja_oita");
			y[44] = document.getElementById("3ja_miyazaki");
			y[45] = document.getElementById("3ja_kagoshima");
			y[46] = document.getElementById("3ja_okinawa");

			/* divに掲載 */
			for (var i = 0; i < 47; i++){
				mitudo[i] = Math.round(ncurrent[i] / density[i] * 100000 * 10)/10;
				y[i].innerHTML = json_data.area[i].name_jp + "<br><center>" + mitudo[i] +"</center>";
			}
			
			/* 色分け判定 */
			document.getElementById('3ja_ka').style.backgroundColor = '#FFFFFF';
			for(var i = 0;  i < 47;  i++){
			
				if(mitudo[i] > 10){
					y[i].style.backgroundColor = '#FF0000';
				}
				else if(mitudo[i] > 7){
					y[i].style.backgroundColor = '#FF6600';
				}
				else if(mitudo[i] > 4){
					y[i].style.backgroundColor = '#FFFF00';
					y[i].style.color = "#000000";
				}
				else if(mitudo[i] > 1){
					y[i].style.backgroundColor = '#CCFF00';
					y[i].style.color = "#000000";
				}
				else{
					y[i].style.backgroundColor = '#0000FF';
				}
			
			}
			
			/* 地域分析用 */
			for (var i = 0; i < 47; i++){
				mitudo_total[i] = Math.round(yousei[i] / density[i] * 100000 * 10)/10;
			}


      var day1 = json_data.lastUpdate.split("-");
      document.getElementById('day_s').innerHTML = "最終更新：" + day1[0] + "." + day1[1] + "." + day1[2];
    }
  };/* xhrの末端 */

	};/* xhr2の末端 */

}

function calculate(){
	var select=document.getElementById("demo-category").value;

	if( select == ""){
		alert("都道府県を選択してください。");
		exit;
	}else{}
	
	var input_jinko = document.getElementById("jinko").value;
	
	if( input_jinko == ""){
		alert("市町村の人口を入力してください。");
		exit;
	}else{}
	
	var answer1 = mitudo[select] * input_jinko / 10;
	
	var answer2 = mitudo_total[select] * input_jinko / 10;
	
	answer1 = Math.round(answer1 * 10)/10;
	
	answer2 = Math.round(answer2 * 10)/10;
	
	var vari = document.getElementsByName("vari");
	
	if( vari[0].checked ){

		document.getElementById("answer").innerHTML = answer2;
	}else{

		document.getElementById("answer").innerHTML = answer1;
	}
	
}

function func1(){
	$("#zentai").show();
	$("#beds").hide();
	$("#density").hide();
}

function func2(){
	$("#zentai").hide();
	$("#beds").show();
	$("#density").hide();
}

function func3(){
	$("#zentai").hide();
	$("#beds").hide();
	$("#density").show();
}

/* 自治体のオープンデータ 
function get_Municipalities(){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');

			multi[0] = "北海道<br>陽性者：" + json_data[0].npatients;
			multi[0] += "<br>退院者：" + json_data[0].nexits;
			multi[0] += "<br>現患者：" + json_data[0].ncurrentpatients;
			multi[0] += "<br>死亡者：" + json_data[0].ndeaths;
			multi_n[0] = json_data[0].ncurrentpatients;
			
			multi[17] = "福井県<br>陽性者：" + json_data[1].npatients;
			multi[17] += "<br>退院者：" + json_data[1].nexits;
			multi[17] += "<br>現患者：" + json_data[1].ncurrentpatients;
			multi[17] += "<br>死亡者：" + json_data[1].ndeaths;
			multi_n[17] = json_data[1].ncurrentpatients;
			
			multi[21] = "静岡県<br>陽性者：" + json_data[2].npatients;
			multi[21] += "<br>退院者：" + json_data[2].nexits;
			multi[21] += "<br>現患者：" + json_data[2].ncurrentpatients;
			multi[21] += "<br>死亡者：" + json_data[2].ndeaths;
			multi_n[21] = json_data[2].ncurrentpatients;

			multi[39] = "福岡県<br>陽性者：" + json_data[3].npatients;
			multi[39] += "<br>退院者：" + json_data[3].nexits;
			multi[39] += "<br>現患者：" + json_data[3].ncurrentpatients;
			multi[39] += "<br>死亡者：" + json_data[3].ndeaths;
			multi_n[39] = json_data[3].ncurrentpatients;

			multi[12] = "東京都<br>陽性者：" + json_data[4].npatients;
			multi[12] += "<br>退院者：" + json_data[4].nexits;
			multi[12] += "<br>現患者：" + json_data[4].ncurrentpatients;
			multi[12] += "<br>死亡者：" + json_data[4].ndeaths;
			multi_n[12] = json_data[4].ncurrentpatients;

			lastupdate = "<br>北海道：" + json_data[0].lastUpdate;
			lastupdate += "<br>福井県：" + json_data[1].lastUpdate;
			lastupdate += "<br>福岡県：" + json_data[2].lastUpdate;
			lastupdate += "<br>東京都：" + json_data[3].lastUpdate;
    	}
  };
  var url = "https://www.stopcovid19.jp/data/covid19japan-fast.json";
  xhr.open('GET', url);
  xhr.send(null);

}*/

function online(x){

			online_pref[0] = 'hokkaido';
			online_pref[1] = 'aomori';
			online_pref[2] = 'iwate';
			online_pref[3] = 'miyagi';
			online_pref[4] = 'akita';
			online_pref[5] = 'yamagata';
			online_pref[6] = 'fukushima';
			online_pref[7] = 'ibaraki';
			online_pref[8] = 'tochigi';
			online_pref[9] = 'gunma';
			online_pref[10] = 'saitama';
			online_pref[11] = 'tiba';
			online_pref[12] = 'tokyo';
			online_pref[13] = 'kanagawa';
			online_pref[14] = 'nigata';
			online_pref[15] = 'toyama';
			online_pref[16] = 'ishikawa';
			online_pref[17] = 'fukui';
			online_pref[18] = 'yamanashi';
			online_pref[19] = 'nagano';
			online_pref[20] = 'gifu';
			online_pref[21] = 'shizuoka';
			online_pref[22] = 'aichi';
			online_pref[23] = 'mie';
			online_pref[24] = 'shiga';
			online_pref[25] = 'kyoto';
			online_pref[26] = 'osaka';
			online_pref[27] = 'hyogo';
			online_pref[28] = 'nara';
			online_pref[29] = 'wakayama';
			online_pref[30] = 'tottori';
			online_pref[31] = 'shimane';
			online_pref[32] = 'okayama';
			online_pref[33] = 'hiroshima';
			online_pref[34] = 'yamaguchi';
			online_pref[35] = 'tokushima';
			online_pref[36] = 'kagawa';
			online_pref[37] = 'ehime';
			online_pref[38] = 'kochi';
			online_pref[39] = 'fukuoka';
			online_pref[40] = 'saga';
			online_pref[41] = 'nagasaki';
			online_pref[42] = 'kumamoto';
			online_pref[43] = 'oita';
			online_pref[44] = 'miyazaki';
			online_pref[45] = 'kagoshima';
			online_pref[46] = 'okinawa';

document.getElementById('onlinemap').innerHTML = "<h3 class='ti'>地図から探す</h3><iframe src = 'onlinemap/" + online_pref[x -1] + ".html' width='100%' height='450px'>";

document.getElementById('onlinelist').innerHTML = "<br><h3 class='ti'>リストから探す</h3><iframe src = 'onlinelist/" + online_pref[x -1] + ".html' width='100%' height='450px'>";

}