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
$("#ks").hide();

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
	
}

sindosokuhou();

rader();

default_dosya_map();

default_kozui_tsunamimap();

}

function eq(){
$("#tn").hide();
$("#th").hide();
$("#ds").hide();
$("#ks").hide();
$("#eq").show();
}

function tn(){
$("#eq").hide();
$("#th").hide();
$("#ds").hide();
$("#ks").hide();
$("#tn").show();
}

function th(){
$("#tn").hide();
$("#eq").hide();
$("#ds").hide();
$("#ks").hide();
$("#th").show();
}

function ds(){
$("#tn").hide();
$("#eq").hide();
$("#th").hide();
$("#ks").hide();
$("#ds").show();
}

function ks(){
$("#tn").hide();
$("#eq").hide();
$("#th").hide();
$("#ds").hide();
$("#ks").show();
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
		
		var name1=""; var name2=""; var name3=""; var name4=""; var name45=""; var name5=""; var name55=""; var name6=""; var name7="";

		for (j = 0; j < p_count; j++){
		
		var max_p = json_data[0].points[j].scale;
		

      	if( max_p == 10){name1 = name1 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 20){name2 = name2 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 30){name3 = name3 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 40){name4 = name4 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 45){name45 = name45 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 50){name5 = name5 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 55){name55 = name55 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 60){name6 = name6 + json_data[0].points[j].addr + "　";}
      	else if( max_p == 70){name7 = name7 + json_data[0].points[j].addr + "　";}
		else{exit;}

		}
			if( name7 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度７</h3><br>" + name7 + "<br><br>"; }
			if( name6 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度６強</h3><br>" + name6 + "<br><br>"; }
			if( name55 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度６弱</h3><br>" + name55 + "<br><br>"; }
			if( name5 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度５強</h3><br>" + name50 + "<br><br>"; }
			if( name45 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度５弱</h3><br>" + name45 + "<br><br>"; }
			if( name4 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度４</h3><br>" + name4 + "<br><br>"; }
			if( name3 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度３</h3><br>" + name3 + "<br><br>"; }
			if( name2 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度２</h3><br>" + name2 + "<br><br>"; }
			if( name1 !== ""){p_result.innerHTML += "<h3 class = 'soku'>震度１</h3><br>" + name1; }
			

		}
		else{
		document.getElementById('data_result').innerHTML = "調査中です。" ;
		document.getElementById('points_data').innerHTML = "";
		exit;
		}

    }
  };
  var url = "https://api.p2pquake.net/v1/human-readable";
  xhr.open('GET', url);
  xhr.send(null);
}
