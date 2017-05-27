	/************************************************************************************************************
	(C) www.dhtmlgoodies.com, September 2005
	
	This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	
	
	Terms of use:
	You are free to use this script as long as the copyright message is kept intact. However, you may not
	redistribute, sell or repost it without our permission.
	
	Thank you!
	
	www.dhtmlgoodies.com
	Alf Magne Kalleland
	
	************************************************************************************************************/	    
    var charIndex1 = -1;
    var stringLength1 = 0;
    var inputText1;
    function writeContent1(init){

    	if(init){
    		inputText1 = document.getElementById('contentToWrite1').innerHTML;
    	}
        if(charIndex1==-1){
            charIndex1 = 0;
            stringLength1 = inputText1.length;
        }
        var initString1 = document.getElementById('myContent1').innerHTML;
		initString1 = initString1.replace(/<SPAN.*$/gi,"");
        
        var theChar1 = inputText1.charAt(charIndex1);
       	var nextFourChars1 = inputText1.substr(charIndex1,4);
       	if(nextFourChars1=='<BR>' || nextFourChars1=='<br>'){
       		theChar1  = '<BR>';
       		charIndex1+=3;
       	}
        initString1 = initString1 + theChar1 + "<SPAN id='blink1'>_</SPAN>";
        document.getElementById('myContent1').innerHTML = initString1;

        charIndex1 = charIndex1/1 +1;
		if(charIndex1%2==1){
             document.getElementById('blink1').style.display='none';
        }else{
             document.getElementById('blink1').style.display='inline';
        }
                
        if(charIndex1<=stringLength1){
            setTimeout('writeContent1(false)',150);
        }else{
        	blinkSpan1();
        }  
    }
    
    var currentStyle1 = 'inline';
    function blinkSpan1(){
    	if(currentStyle1=='inline'){
    		currentStyle1='none';
    	}else{
    		currentStyle1='inline';
    	}
    	document.getElementById('blink1').style.display = currentStyle1;
    	setTimeout('blinkSpan1()',500);
    	
    }

function start1(){
	writeContent1(true);
}

    var charIndex2 = -1;
    var stringLength2 = 0;
    var inputText2;
    function writeContent2(init){
    	if(init){
    		inputText2 = document.getElementById('contentToWrite2').innerHTML;
    	}
        if(charIndex2==-1){
            charIndex2 = 0;
            stringLength2 = inputText2.length;
        }
        var initString2 = document.getElementById('myContent2').innerHTML;
		initString2 = initString2.replace(/<SPAN.*$/gi,"");
        
        var theChar2 = inputText2.charAt(charIndex2);
       	var nextFourChars2 = inputText2.substr(charIndex2,4);
       	if(nextFourChars2=='<BR>' || nextFourChars2=='<br>'){
       		theChar2  = '<BR>';
       		charIndex2+=3;
       	}
        initString2 = initString2 + theChar2 + "<SPAN id='blink2'>_</SPAN>";
        document.getElementById('myContent2').innerHTML = initString2;

        charIndex2 = charIndex2/1 +1;
		if(charIndex2%2==1){
             document.getElementById('blink2').style.display='none';
        }else{
             document.getElementById('blink2').style.display='inline';
        }
                
        if(charIndex2<=stringLength2){
            setTimeout('writeContent2(false)',150);
        }else{
        	blinkSpan2();
        }  
    }
    
    var currentStyle2 = 'inline';
    function blinkSpan2(){
    	if(currentStyle2=='inline'){
    		currentStyle2='none';
    	}else{
    		currentStyle2='inline';
    	}
    	document.getElementById('blink2').style.display = currentStyle2;
    	setTimeout('blinkSpan2()',500);
    	
    }

function start2(){
	writeContent2(true);
}

    var charIndex3 = -1;
    var stringLength3 = 0;
    var inputText3;
    function writeContent3(init){
    	if(init){
    		inputText3 = document.getElementById('contentToWrite3').innerHTML;
    	}
        if(charIndex3==-1){
            charIndex3 = 0;
            stringLength3 = inputText3.length;
        }
        var initString3 = document.getElementById('myContent3').innerHTML;
		initString3 = initString3.replace(/<SPAN.*$/gi,"");
        
        var theChar3 = inputText3.charAt(charIndex3);
       	var nextFourChars3 = inputText3.substr(charIndex3,4);
       	if(nextFourChars3=='<BR>' || nextFourChars3=='<br>'){
       		theChar3  = '<BR>';
       		charIndex3+=3;
       	}
        initString3 = initString3 + theChar3 + "<SPAN id='blink3'>_</SPAN>";
        document.getElementById('myContent3').innerHTML = initString3;

        charIndex3 = charIndex3/1 +1;
		if(charIndex3%2==1){
             document.getElementById('blink3').style.display='none';
        }else{
             document.getElementById('blink3').style.display='inline';
        }
                
        if(charIndex3<=stringLength3){
            setTimeout('writeContent3(false)',150);
        }else{
        	blinkSpan3();
        }  
    }
    
    var currentStyle3 = 'inline';
    function blinkSpan3(){
    	if(currentStyle3=='inline'){
    		currentStyle3='none';
    	}else{
    		currentStyle3='inline';
    	}
    	document.getElementById('blink3').style.display = currentStyle3;
    	setTimeout('blinkSpan3()',500);
    	
    }

function start3(){
	writeContent3(true);
}

    var charIndex4 = -1;
    var stringLength4 = 0;
    var inputText4;
    function writeContent4(init){
    	if(init){
    		inputText4 = document.getElementById('contentToWrite4').innerHTML;
    	}
        if(charIndex4==-1){
            charIndex4 = 0;
            stringLength4 = inputText4.length;
        }
        var initString4 = document.getElementById('myContent4').innerHTML;
		initString4 = initString4.replace(/<SPAN.*$/gi,"");
        
        var theChar4 = inputText4.charAt(charIndex4);
       	var nextFourChars4 = inputText4.substr(charIndex4,4);
       	if(nextFourChars4=='<BR>' || nextFourChars4=='<br>'){
       		theChar4  = '<BR>';
       		charIndex4+=3;
       	}
        initString4 = initString4 + theChar4 + "<SPAN id='blink4'>_</SPAN>";
        document.getElementById('myContent4').innerHTML = initString4;

        charIndex4 = charIndex4/1 +1;
		if(charIndex4%2==1){
             document.getElementById('blink4').style.display='none';
        }else{
             document.getElementById('blink4').style.display='inline';
        }
                
        if(charIndex4<=stringLength4){
            setTimeout('writeContent4(false)',150);
        }else{
        	blinkSpan4();
        }  
    }
    
    var currentStyle4 = 'inline';
    function blinkSpan4(){
    	if(currentStyle4=='inline'){
    		currentStyle4='none';
    	}else{
    		currentStyle4='inline';
    	}
    	document.getElementById('blink4').style.display = currentStyle4;
    	setTimeout('blinkSpan4()',500);
    	
    }

function start4(){
	writeContent4(true);
}