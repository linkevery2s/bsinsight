var kensaku; var i;

function search2(){
	document.getElementById("output").style.display = "block";
	kensaku = document.getElementById("text").value;
	$("#output").empty();
	if(kensaku == ""){
		}else{
    			todou();
    }
}

function todou(){
	$(document).ready(function () {
   		$.getJSON("https://linkevery2s.github.io/bsinsight/index.json", function(data){
        	for(var i in data){
        		if(data[i].content.indexOf(kensaku) != -1) {
        		$("#output").append("<li class='lin'><a href='" + data[i].url + "'>" + data[i].title + "</a><div class='setu'>" + data[i].content.replaceAll(kensaku, "<b>" + kensaku + "</b>")  + "</div></li>");
        		}
        	}
    	});
	});
}