/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:		'(max-width: 1680px)',
		large:		'(max-width: 1280px)',
		medium:		'(max-width: 980px)',
		small:		'(max-width: 736px)',
		xsmall:		'(max-width: 480px)',
		xxsmall:	'(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main'),
			$main_articles = $main.children('article');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Fix: Flexbox min-height bug on IE.
			if (skel.vars.IEVersion < 12) {

				var flexboxFixTimeoutId;

				$window.on('resize.flexbox-fix', function() {

					clearTimeout(flexboxFixTimeoutId);

					flexboxFixTimeoutId = setTimeout(function() {

						if ($wrapper.prop('scrollHeight') > $window.height())
							$wrapper.css('height', 'auto');
						else
							$wrapper.css('height', '100vh');

					}, 250);

				}).triggerHandler('resize.flexbox-fix');

			}

		// Nav.
			var $nav = $header.children('nav'),
				$nav_li = $nav.find('li');

			// Add "middle" alignment classes if we're dealing with an even number of items.
				if ($nav_li.length % 2 == 0) {

					$nav.addClass('use-middle');
					$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

				}

		// Main.
			var	delay = 325,
				locked = false;

			// Methods.
				$main._show = function(id, initial) {

					var $article = $main_articles.filter('#' + id);

					// No such article? Bail.
						if ($article.length == 0)
							return;

					// Handle lock.

						// Already locked? Speed through "show" steps w/o delays.
							if (locked || (typeof initial != 'undefined' && initial === true)) {

								// Mark as switching.
									$body.addClass('is-switching');

								// Mark as visible.
									$body.addClass('is-article-visible');

								// Deactivate all articles (just in case one's already active).
									$main_articles.removeClass('active');

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									$article.addClass('active');

								// Unlock.
									locked = false;

								// Unmark as switching.
									setTimeout(function() {
										$body.removeClass('is-switching');
									}, (initial ? 1000 : 0));

								return;

							}

						// Lock.
							locked = true;

					// Article already visible? Just swap articles.
						if ($body.hasClass('is-article-visible')) {

							// Deactivate current article.
								var $currentArticle = $main_articles.filter('.active');

								$currentArticle.removeClass('active');

							// Show article.
								setTimeout(function() {

									// Hide current article.
										$currentArticle.hide();

									// Show article.
										$article.show();

									// Activate article.
										setTimeout(function() {

											$article.addClass('active');

											// Window stuff.
												$window
													.scrollTop(0)
													.triggerHandler('resize.flexbox-fix');

											// Unlock.
												setTimeout(function() {
													locked = false;
												}, delay);

										}, 25);

								}, delay);

						}

					// Otherwise, handle as normal.
						else {

							// Mark as visible.
								$body
									.addClass('is-article-visible');

							// Show article.
								setTimeout(function() {

									// Hide header, footer.
										$header.hide();
										$footer.hide();

									// Show main, article.
										$main.show();
										$article.show();

									// Activate article.
										setTimeout(function() {

											$article.addClass('active');

											// Window stuff.
												$window
													.scrollTop(0)
													.triggerHandler('resize.flexbox-fix');

											// Unlock.
												setTimeout(function() {
													locked = false;
												}, delay);

										}, 25);

								}, delay);

						}

				};

				$main._hide = function(addState) {

					var $article = $main_articles.filter('.active');

					// Article not visible? Bail.
						if (!$body.hasClass('is-article-visible'))
							return;

					// Add state?
						if (typeof addState != 'undefined'
						&&	addState === true)
							history.pushState(null, null, '#');

					// Handle lock.

						// Already locked? Speed through "hide" steps w/o delays.
							if (locked) {

								// Mark as switching.
									$body.addClass('is-switching');

								// Deactivate article.
									$article.removeClass('active');

								// Hide article, main.
									$article.hide();
									$main.hide();

								// Show footer, header.
									$footer.show();
									$header.show();

								// Unmark as visible.
									$body.removeClass('is-article-visible');

								// Unlock.
									locked = false;

								// Unmark as switching.
									$body.removeClass('is-switching');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								return;

							}

						// Lock.
							locked = true;

					// Deactivate article.
						$article.removeClass('active');

					// Hide article.
						setTimeout(function() {

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								setTimeout(function() {

									$body.removeClass('is-article-visible');

									// Window stuff.
										$window
											.scrollTop(0)
											.triggerHandler('resize.flexbox-fix');

									// Unlock.
										setTimeout(function() {
											locked = false;
										}, delay);

								}, 25);

						}, delay);


				};

			// Articles.
				$main_articles.each(function() {

					var $this = $(this);

					// Close.
						$('<div class="close">Close</div>')
							.appendTo($this)
							.on('click', function() {
								location.hash = '';
							});

					// Prevent clicks from inside article from bubbling.
						$this.on('click', function(event) {
							event.stopPropagation();
						});

				});

			// Events.
				$body.on('click', function(event) {

					// Article visible? Hide.
						if ($body.hasClass('is-article-visible'))
							$main._hide(true);

				});

				$window.on('keyup', function(event) {

					switch (event.keyCode) {

						case 27:

							// Article visible? Hide.
								if ($body.hasClass('is-article-visible'))
									$main._hide(true);

							break;

						default:
							break;

					}

				});

				$window.on('hashchange', function(event) {

					// Empty hash?
						if (location.hash == ''
						||	location.hash == '#') {

							// Prevent default.
								event.preventDefault();
								event.stopPropagation();

							// Hide.
								$main._hide();

						}

					// Otherwise, check for a matching article.
						else if ($main_articles.filter(location.hash).length > 0) {

							// Prevent default.
								event.preventDefault();
								event.stopPropagation();

							// Show article.
								$main._show(location.hash.substr(1));

						}

				});

			// Scroll restoration.
			// This prevents the page from scrolling back to the top on a hashchange.
				if ('scrollRestoration' in history)
					history.scrollRestoration = 'manual';
				else {

					var	oldScrollPos = 0,
						scrollPos = 0,
						$htmlbody = $('html,body');

					$window
						.on('scroll', function() {

							oldScrollPos = scrollPos;
							scrollPos = $htmlbody.scrollTop();

						})
						.on('hashchange', function() {
							$window.scrollTop(oldScrollPos);
						});

				}

			// Initialize.

				// Hide main, articles.
					$main.hide();
					$main_articles.hide();

				// Initial article.
					if (location.hash != ''
					&&	location.hash != '#')
						$window.on('load', function() {
							$main._show(location.hash.substr(1), true);
						});

	});

})(jQuery);

function ini(){

$("#tn").hide();
$("#th").hide();
$("#ds").hide();
$("#eq").hide();

$("#skb").hide();
$("#hins").hide();
$("#aed").hide();
$("#hmark").hide();
$("#krs").hide();

def();

var os, ua = navigator.userAgent;

if (ua.match(/iPhone|iPad/)) {
	$("#pc").hide();
}
else if (ua.match(/Android ([\.\d]+)/)) {
	$("#pc").hide();
}
else {
	$("#keitai").hide();
}

sindosokuhou();

kisyou_ame();

}

function eq(){
$("#tn").hide();
$("#th").hide();
$("#ds").hide();
$("#eq").show();
}

function tn(){
$("#eq").hide();
$("#th").hide();
$("#ds").hide();
$("#tn").show();
}

function th(){
$("#tn").hide();
$("#eq").hide();
$("#ds").hide();
$("#th").show();
}

function ds(){
$("#tn").hide();
$("#eq").hide();
$("#th").hide();
$("#ds").show();
}

function sk(){
$("#skb").show();
$("#hins").hide();
$("#aed").hide();
$("#hmark").hide();
$("#krs").hide();
}

function hs(){
$("#skb").hide();
$("#hins").show();
$("#aed").hide();
$("#hmark").hide();
$("#krs").hide();
}

function at(){
$("#skb").hide();
$("#hins").hide();
$("#aed").show();
$("#hmark").hide();
$("#krs").hide();
}

function hm(){
$("#skb").hide();
$("#hins").hide();
$("#aed").hide();
$("#hmark").show();
$("#krs").hide();
}

function krs(){
$("#skb").hide();
$("#hins").hide();
$("#aed").hide();
$("#hmark").hide();
$("#krs").show();
}

var url = "https://linkevery2s.github.io/bsinsight/";

function mailt(){
	location.href =  "mailto:?body=%e9%98%b2%e7%81%bdINSIGHT%20%22%e3%81%9d%e3%81%ae%e6%99%82%22%e3%81%a9%e3%81%86%e3%81%99%e3%82%8b%ef%bc%9f%0d%0ahttps%3a%2f%2flinkevery2s%2egithub%2eio%2fbsinsight%2f%0d%0a%0d%0a%e3%81%84%e3%81%96%e3%81%a8%e3%81%84%e3%81%86%e6%99%82%e3%81%ae%e9%98%b2%e7%81%bd%e3%82%a2%e3%83%97%e3%83%aa%e3%81%a7%e3%81%99%e3%80%82%0d%0a%0d%0a%e7%81%bd%e5%ae%b3%e3%81%ab%e8%a6%8b%e8%88%9e%e3%82%8f%e3%82%8c%e3%81%9f%e6%99%82%e3%80%81%e3%81%a9%e3%81%86%e8%a1%8c%e5%8b%95%e3%81%99%e3%82%8c%e3%81%b0%e8%89%af%e3%81%84%e3%81%ae%e3%81%8b%ef%bc%9f%0d%0a%0d%0a%e5%ad%a6%e7%bf%92%e3%82%b3%e3%83%b3%e3%83%86%e3%83%b3%e3%83%84%e3%80%81%e9%81%bf%e9%9b%a3%e6%83%85%e5%a0%b1%e3%80%81%e6%b0%97%e8%b1%a1%e6%83%85%e5%a0%b1%e3%81%aa%e3%81%a9%e3%80%81%e9%98%b2%e7%81%bd%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e3%81%82%e3%82%89%e3%82%86%e3%82%8b%e6%83%85%e5%a0%b1%e3%81%8c%e6%8e%b2%e8%bc%89%e3%81%95%e3%82%8c%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%80%82%0d%0a%0d%0a%e3%81%9c%e3%81%b2%e3%80%81%e4%b8%80%e5%ba%a6%e3%80%81%e4%bd%bf%e3%81%a3%e3%81%a6%e3%81%bf%e3%81%a6%e3%81%8f%e3%81%a0%e3%81%95%e3%81%84%ef%bc%81%e4%bb%81%e5%bf%97%2e";
}

function linet(){
	location.href = "line://msg/text/%e9%98%b2%e7%81%bdINSIGHT%20%22%e3%81%9d%e3%81%ae%e6%99%82%22%e3%81%a9%e3%81%86%e3%81%99%e3%82%8b%ef%bc%9f%0d%0ahttps%3a%2f%2flinkevery2s%2egithub%2eio%2fbsinsight%2f%0d%0a%0d%0a%e3%81%84%e3%81%96%e3%81%a8%e3%81%84%e3%81%86%e6%99%82%e3%81%ae%e9%98%b2%e7%81%bd%e3%82%a2%e3%83%97%e3%83%aa%e3%81%a7%e3%81%99%e3%80%82%0d%0a%0d%0a%e7%81%bd%e5%ae%b3%e3%81%ab%e8%a6%8b%e8%88%9e%e3%82%8f%e3%82%8c%e3%81%9f%e6%99%82%e3%80%81%e3%81%a9%e3%81%86%e8%a1%8c%e5%8b%95%e3%81%99%e3%82%8c%e3%81%b0%e8%89%af%e3%81%84%e3%81%ae%e3%81%8b%ef%bc%9f%0d%0a%0d%0a%e5%ad%a6%e7%bf%92%e3%82%b3%e3%83%b3%e3%83%86%e3%83%b3%e3%83%84%e3%80%81%e9%81%bf%e9%9b%a3%e6%83%85%e5%a0%b1%e3%80%81%e6%b0%97%e8%b1%a1%e6%83%85%e5%a0%b1%e3%81%aa%e3%81%a9%e3%80%81%e9%98%b2%e7%81%bd%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e3%81%82%e3%82%89%e3%82%86%e3%82%8b%e6%83%85%e5%a0%b1%e3%81%8c%e6%8e%b2%e8%bc%89%e3%81%95%e3%82%8c%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%80%82%0d%0a%0d%0a%e3%81%9c%e3%81%b2%e3%80%81%e4%b8%80%e5%ba%a6%e3%80%81%e4%bd%bf%e3%81%a3%e3%81%a6%e3%81%bf%e3%81%a6%e3%81%8f%e3%81%a0%e3%81%95%e3%81%84%ef%bc%81%e4%bb%81%e5%bf%97%2e";
}

function twt(){
	location.href = "https://twitter.com/share?url=" + url;
}

function fbt(){
	location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
}

var $window = $(window);
var $year = $('#js-year');
var $month = $('#js-month');
var $tbody = $('#js-calendar-body');

var today = new Date();
var currentYear = today.getFullYear(),
    currentMonth = today.getMonth();

$window.on('load',function(){
  calendarHeading(currentYear, currentMonth);
  calendarBody(currentYear, currentMonth, today);
});

function calendarBody(year, month, today){
  var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
  var startDate = new Date(year, month, 1); // その月の最初の日の情報
  var endDate  = new Date(year, month + 1 , 0); // その月の最後の日の情報
  var startDay = startDate.getDay();// その月の最初の日の曜日を取得
  var endDay = endDate.getDate();// その月の最後の日の曜日を取得
  var textSkip = true; // 日にちを埋める用のフラグ
  var textDate = 1; // 日付(これがカウントアップされます)
  var tableBody =''; // テーブルのHTMLを格納する変数
  
  for (var row = 0; row < 6; row++){
    var tr = '<tr>';
    
    for (var col = 0; col < 7; col++) {
      if (row === 0 && startDay === col){
        textSkip = false;
      }
      if (textDate > endDay) {
        textSkip = true;
      }
      var addClass = todayYMFlag && textDate === today.getDate() ? 'is-today' : '';
      var textTd = textSkip ? '&nbsp;' : textDate++;
      var td = '<td class="'+addClass+'">'+textTd+'</td>';
      tr += td;
    }
    tr += '</tr>';
    tableBody += tr;
  }
  $tbody.html(tableBody);
}

function calendarHeading(year, month){
  $year.text(year);
  $month.text(month + 1);
}

			var ido, keido;

				function em() {

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

					//位置情報取得後、地図へ飛ぶ
    				location.href = "map/hinanmap.html#17/" +ido + "/" + keido;
				}

$(function(){
  var seiza = [
    "避難場所が知りたい",
    "雨雲レーダーを見たい",
    "ハザードマップを見たい",
    "明日の天気は？",
    "災害情報を知りたい",
    "災害の種類について学びたい",
    "何が必要なの？",
    "非常時の持ち出しリストを見たい",
    "子供たちの学習ツールについて知りたい",
    "医療情報について知りたい",
    //"防災用語を学びたい",
    "安否確認について知りたい",
    "気象情報を見たい"
  ];
  $("#kens").autocomplete({
    source: seiza,
    minLength: 0
  });
});


function explorer(){
	
	var ktext = document.forms.form1.kens.value;
	
	if( ktext == "避難場所が知りたい" ){location.href = "./#refuge";ktext = null;}
	else if( ktext == "雨雲レーダーを見たい" ){location.href = "./#weather";ktext = null;}
	else if( ktext == "ハザードマップを見たい" ){location.href = "./#soutei";ktext = null;}
	else if( ktext == "明日の天気は？" ){location.href = "./#weather";ktext = null;}
	else if( ktext == "災害情報を知りたい" ){location.href = "./#refuge";ktext = null;}
	else if( ktext == "災害の種類について学びたい" ){location.href = "./#type";ktext = null;}
	else if( ktext == "何が必要なの？" ){location.href = "./#need";ktext = null;}
	else if( ktext == "非常時の持ち出しリストを見たい" ){location.href = "./#mochidashi";ktext = null;}
	else if( ktext == "子供たちの学習ツールについて知りたい" ){location.href = "./#manabu";ktext = null;}
	else if( ktext == "医療情報について知りたい" ){location.href = "./#medical";ktext = null;}
	else if( ktext == "防災用語を学びたい" ){location.href = "./#bsword";ktext = null;}
	else if( ktext == "安否確認について知りたい" ){location.href = "./#anpi";ktext = null;}
	else if( ktext == "気象情報を見たい" ){location.href = "./#weather";ktext = null;}
	else{
	
	}
	
}

function ktsearch(){

	var ido = document.forms.kt.ido.value;
	var keido = document.forms.kt.keido.value;
	
	if(ido ==""){
	alert("緯度を入力してください。");
	exit;
	}
	
	if(keido ==""){
	alert("経度を入力してください。");
	exit;
	}
	
	document.getElementById("katudanso").innerHTML = '<iframe src="kt/map.html#6/' + ido + '/' + keido + '" width="100%" height="500px" frameborder="yes" scrolling="yes"></iframe>';

}

 function sindosokuhou(){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      var json_data = eval( '('+xhr.responseText +')');
      
      if(json_data[0].code == 551 ){
      	var maxs = json_data[0].earthquake.maxScale;
      	
      	if( maxs == 10){var max = "１";}
      	else if( maxs == 20){var max = "２";}
      	else if( maxs == 30){var max = "３";}
      	else if( maxs == 40){var max = "４";}
      	else if( maxs == 45){var max = "５弱";}
      	else if( maxs == 50){var max = "５強";}
      	else if( maxs == 55){var max = "６弱";}
      	else if( maxs == 60){var max = "６強";}
      	else if( maxs == 70){var max = "７";}
		else{exit;}
      	
      txt = json_data[0].earthquake.time + "　震度：" + max + "　" +json_data[0].earthquake.hypocenter.name + "<br><br>";
      
      txt += "緯度：" + json_data[0].earthquake.hypocenter.latitude + "　経度：" + json_data[0].earthquake.hypocenter.longitude + "　震源の深さ：" + json_data[0].earthquake.hypocenter.depth + "<br><br>";

	  txt += "マグニチュード：" + json_data[0].earthquake.hypocenter.magnitude + "<br><br>";

      var result = document.getElementById('data_result');
      result.innerHTML = txt;
		
		var ido = json_data[0].earthquake.hypocenter.latitude.replace(/[^0-9^.]/g, "");
		var keido = json_data[0].earthquake.hypocenter.longitude.replace(/[^0-9^.]/g, "");

		document.getElementById('smap').innerHTML = '<iframe src="kt/smap.html#6/' + ido + '/' + keido + '" width="100%" height="400px" frameborder="yes" scrolling="yes"></iframe>';

		var p_count = json_data[0].points.length;
		
		if(p_count == 0){exit;}
		
		var p_result = document.getElementById('points_data');

		p_result.innerHTML = "各地の震度は以下のとおりです。<br><br>";

		for (j = 0; j < p_count; j++){
		
		var max_p = json_data[0].points[j].scale;

      	if( max_p == 10){var max_p = "１";}
      	else if( max_p == 20){var max_p = "２";}
      	else if( max_p == 30){var max_p = "３";}
      	else if( max_p == 40){var max_p = "４";}
      	else if( max_p == 45){var max_p = "５弱";}
      	else if( max_p == 50){var max_p = "５強";}
      	else if( max_p == 55){var max_p = "６弱";}
      	else if( max_p == 60){var max_p = "６強";}
      	else if( max_p == 70){var max_p = "７";}
		else{exit;}

		p_result.innerHTML += "震度：" + max_p + "　" + json_data[0].points[j].addr + "　";

		}

		}
		else{
		document.getElementById('data_result').innerHTML = "速報はありません。" ;
		document.getElementById('points_data').innerHTML = "";
		exit;
		}

    }
  };
  var url = "https://api.p2pquake.net/v1/human-readable";
  xhr.open('GET', url);
  xhr.send(null);
}

function kisyou_ame(){

	document.getElementById('amerader').innerHTML = '<iframe width="555" height="500" src="https://embed.windy.com/embed2.html?lat=37.003&lon=136.978&zoom=5&level=surface&overlay=rain&menu=&message=true&marker=&calendar=&pressure=true&type=map&location=coordinates&detail=&detailLat=37.003&detailLon=136.978&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0" id="yout"></iframe>';

}