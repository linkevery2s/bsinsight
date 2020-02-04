function list(){

	var num = document.getElementById("number").value;
	
	document.getElementById("hinanlist").innerHTML = '<iframe width="100%" height="700" scrolling="yes" frameborder="no" src="hinanlist/' + num + '.html"></iframe>';

}