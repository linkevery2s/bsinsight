var map;var zoom;var url;var todou; var ido; var keido;
var bed = new Array(47); var syoki = new Array(47); var z = new Array(47); var x = new Array(47); var y = new Array(47); var mitudo = Array(47); var mitudo_total = Array(47);  var density = Array(47);
var multi = new Array(47); var lastupdate;var multi_n = new Array(47); 


/*function get_beds(){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');
			
				for(var i = 0;  i < 47;  i++){
					bed[i] = json_data.area[i].sum;
				}
    	}
  };
  var url = "https://www.stopcovid19.jp/data/bedforinfection_summary.json";
  xhr.open('GET', url);
  xhr.send(null);

}*/


function get_kansen(){

	/*get_Municipalities();
	
	if( multi[0] == "undefined"){
		get_Municipalities();
	}else{}
	
	if( multi[17] == "undefined"){
		get_Municipalities();
	}else{}

	if( multi[21] == "undefined"){
		get_Municipalities();
	}else{}*/

	var xhr = new XMLHttpRequest();
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

			for (var i = 0;  i < 47;  i++){
			z[i] = json_data.area[i].name_jp +"<br>陽性者：" + json_data.area[i].npatients;
			z[i] += "<br>退院者：" + json_data.area[i].nexits;
			z[i] += "<br>現患者：" + json_data.area[i].ncurrentpatients;
			z[i] += "<br>死亡者：" + json_data.area[i].ndeaths;
			syoki[i].innerHTML = z[i];
			}

			/* 全体 */
			var txt = "日本全国<br>陽性者：" + json_data.npatients;
			txt += "<br>退院者：" + json_data.nexits;
			txt += "<br>現患者：" + json_data.ncurrentpatients;
			txt += "<br>死亡者：" + json_data.ndeaths;
			document.getElementById('ja_ka').innerHTML = txt;
			
/* 病床数との比較 */
/* 北海道 */ bed[0] = "530";
/* 青森県 */ bed[1] = "29";
/* 岩手県 */ bed[2] = "38";
/* 宮城県 */ bed[3] = "278";
/* 秋田県 */ bed[4] = "36";
/* 山形県 */ bed[5] = "150";
/* 福島県 */ bed[6] = "111";
/* 茨城県 */ bed[7] = "200";
/* 栃木県 */ bed[8] = "130";
/* 群馬県 */ bed[9] = "200";
/* 埼玉県 */ bed[10] = "562";
/* 千葉県 */ bed[11] = "773";
/* 東京都 */ bed[12] = "3307";
/* 神奈川 */ bed[13] = "3400";
/* 新潟県 */ bed[14] = "200";
/* 富山県 */ bed[15] = "100";
/* 石川県 */ bed[16] = "500";
/* 福井県 */ bed[17] = "84";
/* 山梨県 */ bed[18] = "30";
/* 長野県 */ bed[19] = "500";
/* 岐阜県 */ bed[20] = "723";
/* 静岡県 */ bed[21] = "87";
/* 愛知県 */ bed[22] = "1650";
/* 三重県 */ bed[23] = "124";
/* 滋賀県 */ bed[24] = "150";
/* 京都府 */ bed[25] = "590";
/* 大阪府 */ bed[26] = "2239";
/* 兵庫県 */ bed[27] = "372";
/* 奈良県 */ bed[28] = "64";
/* 和歌山 */ bed[29] = "124";
/* 鳥取県 */ bed[30] = "322";
/* 島根県 */ bed[31] = "200";
/* 岡山県 */ bed[32] = "120";
/* 広島県 */ bed[33] = "200";
/* 山口県 */ bed[34] = "320";
/* 徳島県 */ bed[35] = "130";
/* 香川県 */ bed[36] = "131";
/* 愛媛県 */ bed[37] = "29";
/* 高知県 */ bed[38] = "23";
/* 福岡県 */ bed[39] = "974";
/* 佐賀県 */ bed[40] = "70";
/* 長崎県 */ bed[41] = "38";
/* 熊本県 */ bed[42] = "218";
/* 大分県 */ bed[43] = "118";
/* 宮崎県 */ bed[44] = "31";
/* 鹿児島 */ bed[45] = "53";
/* 沖縄県 */ bed[46] = "74";

			document.getElementById('2ja_ka').style.backgroundColor = '#FFFFFF';
			document.getElementById('2ja_hokkaido').innerHTML = "北海道<br><center>現患者数／病床数<br>" + json_data.area[0].ncurrentpatients + "／" + bed[0] + "</center>";
			document.getElementById('2ja_aomori').innerHTML = "青森県<br><center>現患者数／病床数<br>" + json_data.area[1].ncurrentpatients + "／" + bed[1] + "</center>";
			document.getElementById('2ja_iwate').innerHTML = "岩手県<br><center>現患者数／病床数<br>" + json_data.area[2].ncurrentpatients + "／" + bed[2] + "</center>";
			document.getElementById('2ja_miyagi').innerHTML = "宮城県<br><center>現患者数／病床数<br>" + json_data.area[3].ncurrentpatients + "／" + bed[3] + "</center>";
			document.getElementById('2ja_akita').innerHTML = "秋田県<br><center>現患者数／病床数<br>" + json_data.area[4].ncurrentpatients + "／" + bed[4] + "</center>";
			document.getElementById('2ja_yamagata').innerHTML = "山形県<br><center>現患者数／病床数<br>" + json_data.area[5].ncurrentpatients + "／" + bed[5] + "</center>";
			document.getElementById('2ja_fukushima').innerHTML = "福島県<br><center>現患者数／病床数<br>" + json_data.area[6].ncurrentpatients + "／" + bed[6] + "</center>";
			document.getElementById('2ja_ibaraki').innerHTML = "茨城県<br><center>現患者数／病床数<br>" + json_data.area[7].ncurrentpatients + "／" + bed[7] + "</center>";
			document.getElementById('2ja_tochigi').innerHTML = "栃木県<br><center>現患者数／病床数<br>" + json_data.area[8].ncurrentpatients + "／" + bed[8] + "</center>";
			document.getElementById('2ja_gunma').innerHTML = "群馬県<br><center>現患者数／病床数<br>" + json_data.area[9].ncurrentpatients + "／" + bed[9] + "</center>";
			document.getElementById('2ja_saitama').innerHTML = "埼玉県<br><center>現患者数／病床数<br>" + json_data.area[10].ncurrentpatients + "／" + bed[10] + "</center>";
			document.getElementById('2ja_tiba').innerHTML = "千葉県<br><center>現患者数／病床数<br>" + json_data.area[11].ncurrentpatients + "／" + bed[11] + "</center>";
			document.getElementById('2ja_tokyo').innerHTML = "東京都<br><center>現患者数／病床数<br>" + json_data.area[12].ncurrentpatients + "／" + bed[12] + "</center>";
			document.getElementById('2ja_kanagawa').innerHTML = "神奈川県<br><center>現患者数／病床数<br>" + json_data.area[13].ncurrentpatients + "／" + bed[13] + "</center>";
			document.getElementById('2ja_niigata').innerHTML = "新潟県<br><center>現患者数／病床数<br>" + json_data.area[14].ncurrentpatients + "／" + bed[14] + "</center>";
			document.getElementById('2ja_toyama').innerHTML = "富山県<br><center>現患者数／病床数<br>" + json_data.area[15].ncurrentpatients + "／" + bed[15] + "</center>";
			document.getElementById('2ja_ishikawa').innerHTML = "石川県<br><center>現患者数／病床数<br>" + json_data.area[16].ncurrentpatients + "／" + bed[16] + "</center>";
			document.getElementById('2ja_fukui').innerHTML = "福井県<br><center>現患者数／病床数<br>" + json_data.area[17].ncurrentpatients + "／" + bed[17] + "</center>";
			document.getElementById('2ja_yamanashi').innerHTML = "山梨県<br><center>現患者数／病床数<br>" + json_data.area[18].ncurrentpatients + "／" + bed[18] + "</center>";
			document.getElementById('2ja_nagano').innerHTML = "長野県<br><center>現患者数／病床数<br>" + json_data.area[19].ncurrentpatients + "／" + bed[19] + "</center>";
			document.getElementById('2ja_gifu').innerHTML = "岐阜県<br><center>現患者数／病床数<br>" + json_data.area[20].ncurrentpatients + "／" + bed[20] + "</center>";
			document.getElementById('2ja_shizuoka').innerHTML = "静岡県<br><center>現患者数／病床数<br>" + json_data.area[21].ncurrentpatients + "／" + bed[21] + "</center>";
			document.getElementById('2ja_aichi').innerHTML = "愛知県<br><center>現患者数／病床数<br>" + json_data.area[22].ncurrentpatients + "／" + bed[22] + "</center>";
			document.getElementById('2ja_mie').innerHTML = "三重県<br><center>現患者数／病床数<br>" + json_data.area[23].ncurrentpatients + "／" + bed[23] + "</center>";
			document.getElementById('2ja_shiga').innerHTML = "滋賀県<br><center>現患者数／病床数<br>" + json_data.area[24].ncurrentpatients + "／" + bed[24] + "</center>";
			document.getElementById('2ja_kyoto').innerHTML = "京都府<br><center>現患者数／病床数<br>" + json_data.area[25].ncurrentpatients + "／" + bed[25] + "</center>";
			document.getElementById('2ja_osaka').innerHTML = "大阪府<br><center>現患者数／病床数<br>" + json_data.area[26].ncurrentpatients + "／" + bed[26] + "</center>";
			document.getElementById('2ja_hyogo').innerHTML = "兵庫県<br><center>現患者数／病床数<br>" + json_data.area[27].ncurrentpatients + "／" + bed[27] + "</center>";
			document.getElementById("2ja_nara").innerHTML = "奈良県<br><center>現患者数／病床数<br>" + json_data.area[28].ncurrentpatients + "／" + bed[28] + "</center>";
			document.getElementById("2ja_wakayama").innerHTML = "和歌山県<br><center>現患者数／病床数<br>" + json_data.area[29].ncurrentpatients + "／" + bed[29] + "</center>";
			document.getElementById("2ja_tottori").innerHTML = "鳥取県<br><center>現患者数／病床数<br>" + json_data.area[30].ncurrentpatients + "／" + bed[30] + "</center>";
			document.getElementById("2ja_shimane").innerHTML = "島根県<br><center>現患者数／病床数<br>" + json_data.area[31].ncurrentpatients + "／" + bed[31] + "</center>";
			document.getElementById("2ja_okayama").innerHTML = "岡山県<br><center>現患者数／病床数<br>" + json_data.area[32].ncurrentpatients + "／" + bed[32] + "</center>";
			document.getElementById("2ja_hiroshima").innerHTML = "広島県<br><center>現患者数／病床数<br>" + json_data.area[33].ncurrentpatients + "／" + bed[33] + "</center>";
			document.getElementById("2ja_yamaguchi").innerHTML = "山口県<br><center>現患者数／病床数<br>" + json_data.area[34].ncurrentpatients + "／" + bed[34] + "</center>";
			document.getElementById("2ja_tokushima").innerHTML = "徳島県<br><center>現患者数／病床数<br>" + json_data.area[35].ncurrentpatients + "／" + bed[35] + "</center>";
			document.getElementById("2ja_kagawa").innerHTML = "香川県<br><center>現患者数／病床数<br>" + json_data.area[36].ncurrentpatients + "／" + bed[36] + "</center>";
			document.getElementById("2ja_ehime").innerHTML = "愛媛県<br><center>現患者数／病床数<br>" + json_data.area[37].ncurrentpatients + "／" + bed[37] + "</center>";
			document.getElementById("2ja_kochi").innerHTML = "高知県<br><center>現患者数／病床数<br>" + json_data.area[38].ncurrentpatients + "／" + bed[38] + "</center>";
			document.getElementById("2ja_fukuoka").innerHTML = "福岡県<br><center>現患者数／病床数<br>" + json_data.area[39].ncurrentpatients + "／" + bed[39] + "</center>";
			document.getElementById("2ja_saga").innerHTML = "佐賀県<br><center>現患者数／病床数<br>" + json_data.area[40].ncurrentpatients + "／" + bed[40] + "</center>";
			document.getElementById("2ja_nagasaki").innerHTML = "長崎県<br><center>現患者数／病床数<br>" + json_data.area[41].ncurrentpatients + "／" + bed[41] + "</center>";
			document.getElementById("2ja_kumamoto").innerHTML = "熊本県<br><center>現患者数／病床数<br>" + json_data.area[42].ncurrentpatients + "／" + bed[42] + "</center>";
			document.getElementById("2ja_oita").innerHTML = "大分県<br><center>現患者数／病床数<br>" + json_data.area[43].ncurrentpatients + "／" + bed[43] + "</center>";
			document.getElementById("2ja_miyazaki").innerHTML ="宮崎県<br><center>現患者数／病床数<br>" + json_data.area[44].ncurrentpatients + "／" + bed[44] + "</center>";
			document.getElementById("2ja_kagoshima").innerHTML = "鹿児島県<br><center>現患者数／病床数<br>" + json_data.area[45].ncurrentpatients + "／" + bed[45] + "</center>";
			document.getElementById("2ja_okinawa").innerHTML = "沖縄県<br><center>現患者数／病床数<br>" + json_data.area[46].ncurrentpatients + "／" + bed[46] + "</center>";

			/* 色分け判定 */
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

			for(var i = 0;  i < 47;  i++){
				if(json_data.area[i].ncurrentpatients > bed[i]){
					x[i].style.backgroundColor = '#FF0000';
				}
				else if(json_data.area[i].ncurrentpatients > bed[i]*0.5){
					x[i].style.backgroundColor = '#FF9900';
				}
				else if(json_data.area[i].ncurrentpatients > bed[i]*0.2){
					x[i].style.backgroundColor = '#FFFF00';
					x[i].style.color = "#000000";
				}
				else if(json_data.area[i].ncurrentpatients == "0"){
					x[i].style.backgroundColor = '#0000FF';
				}
				else{
					x[i].style.backgroundColor = '#CCFF00';
					x[i].style.color = "#000000";
				}
			}

			/* 速報上書き 
				if(multi_n[0] > bed[0]){
					x[0].style.backgroundColor = '#FF0000';
				}
				else if(multi_n[0] > bed[0]*0.5){
					x[0].style.backgroundColor = '#FF9900';
				}
				else if(multi_n[0] > bed[0]*0.2){
					x[0].style.backgroundColor = '#FFFF00';
					x[0].style.color = "#000000";
				}
				else if(multi_n[0] == "0"){
					x[0].style.backgroundColor = '#0000FF';
				}
				else{
					x[0].style.backgroundColor = '#CCFF00';
					x[0].style.color = "#000000";
				}
				
				if(multi_n[17] > bed[17]){
					x[17].style.backgroundColor = '#FF0000';
				}
				else if(multi_n[17] > bed[17]*0.5){
					x[17].style.backgroundColor = '#FF9900';
				}
				else if(multi_n[17] > bed[17]*0.2){
					x[17].style.backgroundColor = '#FFFF00';
					x[17].style.color = "#000000";
				}
				else if(multi_n[17] == "0"){
					x[17].style.backgroundColor = '#0000FF';
				}
				else{
					x[17].style.backgroundColor = '#CCFF00';
					x[17].style.color = "#000000";
				}

				if(multi_n[21] > bed[21]){
					x[21].style.backgroundColor = '#FF0000';
				}
				else if(multi_n[21] > bed[21]*0.5){
					x[21].style.backgroundColor = '#FF9900';
				}
				else if(multi_n[21] > bed[21]*0.2){
					x[21].style.backgroundColor = '#FFFF00';
					x[21].style.color = "#000000";
				}
				else if(multi_n[21] == "0"){
					x[21].style.backgroundColor = '#0000FF';
				}
				else{
					x[21].style.backgroundColor = '#CCFF00';
					x[21].style.color = "#000000";
				}

				if(multi_n[39] > bed[39]){
					x[39].style.backgroundColor = '#FF0000';
				}
				else if(multi_n[39] > bed[39]*0.5){
					x[39].style.backgroundColor = '#FF9900';
				}
				else if(multi_n[39] > bed[39]*0.2){
					x[39].style.backgroundColor = '#FFFF00';
					x[39].style.color = "#000000";
				}
				else if(multi_n[39] == "0"){
					x[39].style.backgroundColor = '#0000FF';
				}
				else{
					x[39].style.backgroundColor = '#CCFF00';
					x[39].style.color = "#000000";
				}

				if(multi_n[12] > bed[12]){
					x[12].style.backgroundColor = '#FF0000';
				}
				else if(multi_n[12] > bed[12]*0.5){
					x[12].style.backgroundColor = '#FF9900';
				}
				else if(multi_n[12] > bed[12]*0.2){
					x[12].style.backgroundColor = '#FFFF00';
					x[12].style.color = "#000000";
				}
				else if(multi_n[12] == "0"){
					x[12].style.backgroundColor = '#0000FF';
				}
				else{
					x[12].style.backgroundColor = '#CCFF00';
					x[12].style.color = "#000000";
				}*/

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


			
			for (var i = 0; i < 47; i++){
				mitudo[i] = Math.round(json_data.area[i].ncurrentpatients / density[i] * 100000 * 10)/10;
				y[i].innerHTML = json_data.area[i].name_jp + "<br><center>" + mitudo[i] +"</center>";
			}
			
			/* 速報上書き 
				mitudo[0] = Math.round(multi_n[0] / density[0] * 100000 * 10)/10;
				y[0].innerHTML = json_data.area[0].name_jp + "<br><center>" + mitudo[0] +"</center>";
				mitudo[17] = Math.round(multi_n[17] / density[17] * 100000 * 10)/10;
				y[17].innerHTML = json_data.area[17].name_jp + "<br><center>" + mitudo[17] +"</center>";
				mitudo[21] = Math.round(multi_n[21] / density[21] * 100000 * 10)/10;
				y[21].innerHTML = json_data.area[21].name_jp + "<br><center>" + mitudo[21] +"</center>";
				mitudo[39] = Math.round(multi_n[39] / density[39] * 100000 * 10)/10;
				y[39].innerHTML = json_data.area[39].name_jp + "<br><center>" + mitudo[39] +"</center>";
				mitudo[12] = Math.round(multi_n[12] / density[12] * 100000 * 10)/10;
				y[12].innerHTML = json_data.area[12].name_jp + "<br><center>" + mitudo[12] +"</center>";*/

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
				mitudo_total[i] = Math.round(json_data.area[i].npatients / density[i] * 100000 * 10)/10;
			}


      var day1 = json_data.lastUpdate.split("-");
      document.getElementById('day_s').innerHTML = "最終更新：" + day1[0] + "." + day1[1] + "." + day1[2];
    }
  };
  var url = "https://www.stopcovid19.jp/data/covid19japan.json";
  xhr.open('GET', url);
  xhr.send(null);
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