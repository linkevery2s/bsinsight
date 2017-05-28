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

    var charIndex5 = -1;
    var stringLength5 = 0;
    var inputText5;
    function writeContent5(init){
    	if(init){
    		inputText5 = document.getElementById('contentToWrite5').innerHTML;
    	}
        if(charIndex5==-1){
            charIndex5 = 0;
            stringLength5 = inputText5.length;
        }
        var initString5 = document.getElementById('myContent5').innerHTML;
		initString5 = initString5.replace(/<SPAN.*$/gi,"");
        
        var theChar5 = inputText5.charAt(charIndex5);
       	var nextFourChars5 = inputText5.substr(charIndex5,4);
       	if(nextFourChars5=='<BR>' || nextFourChars5=='<br>'){
       		theChar5  = '<BR>';
       		charIndex5+=3;
       	}
        initString5 = initString5 + theChar5 + "<SPAN id='blink5'>_</SPAN>";
        document.getElementById('myContent5').innerHTML = initString5;

        charIndex5 = charIndex5/1 +1;
		if(charIndex5%2==1){
             document.getElementById('blink5').style.display='none';
        }else{
             document.getElementById('blink5').style.display='inline';
        }
                
        if(charIndex5<=stringLength5){
            setTimeout('writeContent5(false)',150);
        }else{
        	blinkSpan5();
        }  
    }
    
    var currentStyle5 = 'inline';
    function blinkSpan5(){
    	if(currentStyle5=='inline'){
    		currentStyle5='none';
    	}else{
    		currentStyle5='inline';
    	}
    	document.getElementById('blink5').style.display = currentStyle5;
    	setTimeout('blinkSpan5()',500);
    	
    }

function start5(){
	writeContent5(true);
}

    var charIndex6 = -1;
    var stringLength6 = 0;
    var inputText6;
    function writeContent6(init){
    	if(init){
    		inputText6 = document.getElementById('contentToWrite6').innerHTML;
    	}
        if(charIndex6==-1){
            charIndex6 = 0;
            stringLength6 = inputText6.length;
        }
        var initString6 = document.getElementById('myContent6').innerHTML;
		initString6 = initString6.replace(/<SPAN.*$/gi,"");
        
        var theChar6 = inputText6.charAt(charIndex6);
       	var nextFourChars6 = inputText6.substr(charIndex6,4);
       	if(nextFourChars6=='<BR>' || nextFourChars6=='<br>'){
       		theChar6  = '<BR>';
       		charIndex6+=3;
       	}
        initString6 = initString6 + theChar6 + "<SPAN id='blink6'>_</SPAN>";
        document.getElementById('myContent6').innerHTML = initString6;

        charIndex6 = charIndex6/1 +1;
		if(charIndex6%2==1){
             document.getElementById('blink6').style.display='none';
        }else{
             document.getElementById('blink6').style.display='inline';
        }
                
        if(charIndex6<=stringLength6){
            setTimeout('writeContent6(false)',150);
        }else{
        	blinkSpan6();
        }  
    }
    
    var currentStyle6 = 'inline';
    function blinkSpan6(){
    	if(currentStyle6=='inline'){
    		currentStyle6='none';
    	}else{
    		currentStyle6='inline';
    	}
    	document.getElementById('blink6').style.display = currentStyle6;
    	setTimeout('blinkSpan6()',500);
    	
    }

function start6(){
	writeContent6(true);
}

    var charIndex7 = -1;
    var stringLength7 = 0;
    var inputText7;
    function writeContent7(init){
    	if(init){
    		inputText7 = document.getElementById('contentToWrite7').innerHTML;
    	}
        if(charIndex7==-1){
            charIndex7 = 0;
            stringLength7 = inputText7.length;
        }
        var initString7 = document.getElementById('myContent7').innerHTML;
		initString7 = initString7.replace(/<SPAN.*$/gi,"");
        
        var theChar7 = inputText7.charAt(charIndex7);
       	var nextFourChars7 = inputText7.substr(charIndex7,4);
       	if(nextFourChars7=='<BR>' || nextFourChars7=='<br>'){
       		theChar7  = '<BR>';
       		charIndex7+=3;
       	}
        initString7 = initString7 + theChar7 + "<SPAN id='blink7'>_</SPAN>";
        document.getElementById('myContent7').innerHTML = initString7;

        charIndex7 = charIndex7/1 +1;
		if(charIndex7%2==1){
             document.getElementById('blink7').style.display='none';
        }else{
             document.getElementById('blink7').style.display='inline';
        }
                
        if(charIndex7<=stringLength7){
            setTimeout('writeContent7(false)',150);
        }else{
        	blinkSpan7();
        }  
    }
    
    var currentStyle7 = 'inline';
    function blinkSpan7(){
    	if(currentStyle7=='inline'){
    		currentStyle7='none';
    	}else{
    		currentStyle7='inline';
    	}
    	document.getElementById('blink7').style.display = currentStyle7;
    	setTimeout('blinkSpan7()',500);
    	
    }

function start7(){
	writeContent7(true);
}


    var charIndex8 = -1;
    var stringLength8 = 0;
    var inputText8;
    function writeContent8(init){
    	if(init){
    		inputText8 = document.getElementById('contentToWrite8').innerHTML;
    	}
        if(charIndex8==-1){
            charIndex8 = 0;
            stringLength8 = inputText8.length;
        }
        var initString8 = document.getElementById('myContent8').innerHTML;
		initString8 = initString8.replace(/<SPAN.*$/gi,"");
        
        var theChar8 = inputText8.charAt(charIndex8);
       	var nextFourChars8 = inputText8.substr(charIndex8,4);
       	if(nextFourChars8=='<BR>' || nextFourChars8=='<br>'){
       		theChar8  = '<BR>';
       		charIndex8+=3;
       	}
        initString8 = initString8 + theChar8 + "<SPAN id='blink8'>_</SPAN>";
        document.getElementById('myContent8').innerHTML = initString8;

        charIndex8 = charIndex8/1 +1;
		if(charIndex8%2==1){
             document.getElementById('blink8').style.display='none';
        }else{
             document.getElementById('blink8').style.display='inline';
        }
                
        if(charIndex8<=stringLength8){
            setTimeout('writeContent8(false)',150);
        }else{
        	blinkSpan8();
        }  
    }
    
    var currentStyle8 = 'inline';
    function blinkSpan8(){
    	if(currentStyle8=='inline'){
    		currentStyle8='none';
    	}else{
    		currentStyle8='inline';
    	}
    	document.getElementById('blink8').style.display = currentStyle8;
    	setTimeout('blinkSpan8()',500);
    	
    }

function start8(){
	writeContent8(true);
}

    var charIndex9 = -1;
    var stringLength9 = 0;
    var inputText9;
    function writeContent9(init){
    	if(init){
    		inputText9 = document.getElementById('contentToWrite9').innerHTML;
    	}
        if(charIndex9==-1){
            charIndex9 = 0;
            stringLength9 = inputText9.length;
        }
        var initString9 = document.getElementById('myContent9').innerHTML;
		initString9 = initString9.replace(/<SPAN.*$/gi,"");
        
        var theChar9 = inputText9.charAt(charIndex9);
       	var nextFourChars9 = inputText9.substr(charIndex9,4);
       	if(nextFourChars9=='<BR>' || nextFourChars9=='<br>'){
       		theChar9  = '<BR>';
       		charIndex9+=3;
       	}
        initString9 = initString9 + theChar9 + "<SPAN id='blink9'>_</SPAN>";
        document.getElementById('myContent9').innerHTML = initString9;

        charIndex9 = charIndex9/1 +1;
		if(charIndex9%2==1){
             document.getElementById('blink9').style.display='none';
        }else{
             document.getElementById('blink9').style.display='inline';
        }
                
        if(charIndex9<=stringLength9){
            setTimeout('writeContent9(false)',150);
        }else{
        	blinkSpan9();
        }  
    }
    
    var currentStyle9 = 'inline';
    function blinkSpan9(){
    	if(currentStyle9=='inline'){
    		currentStyle9='none';
    	}else{
    		currentStyle9='inline';
    	}
    	document.getElementById('blink9').style.display = currentStyle9;
    	setTimeout('blinkSpan9()',500);
    	
    }

function start9(){
	writeContent9(true);
}

    var charIndex10 = -1;
    var stringLength10 = 0;
    var inputText10;
    function writeContent10(init){
    	if(init){
    		inputText10 = document.getElementById('contentToWrite10').innerHTML;
    	}
        if(charIndex10==-1){
            charIndex10 = 0;
            stringLength10 = inputText10.length;
        }
        var initString10 = document.getElementById('myContent10').innerHTML;
		initString10 = initString10.replace(/<SPAN.*$/gi,"");
        
        var theChar10 = inputText10.charAt(charIndex10);
       	var nextFourChars10 = inputText10.substr(charIndex10,4);
       	if(nextFourChars10=='<BR>' || nextFourChars10=='<br>'){
       		theChar10  = '<BR>';
       		charIndex10+=3;
       	}
        initString10 = initString10 + theChar10 + "<SPAN id='blink10'>_</SPAN>";
        document.getElementById('myContent10').innerHTML = initString10;

        charIndex10 = charIndex10/1 +1;
		if(charIndex10%2==1){
             document.getElementById('blink10').style.display='none';
        }else{
             document.getElementById('blink10').style.display='inline';
        }
                
        if(charIndex10<=stringLength10){
            setTimeout('writeContent10(false)',150);
        }else{
        	blinkSpan10();
        }  
    }
    
    var currentStyle10 = 'inline';
    function blinkSpan10(){
    	if(currentStyle10=='inline'){
    		currentStyle10='none';
    	}else{
    		currentStyle10='inline';
    	}
    	document.getElementById('blink10').style.display = currentStyle10;
    	setTimeout('blinkSpan10()',500);
    	
    }

function start10(){
	writeContent10(true);
}

    var charIndex11 = -1;
    var stringLength11 = 0;
    var inputText11;
    function writeContent11(init){
    	if(init){
    		inputText11 = document.getElementById('contentToWrite11').innerHTML;
    	}
        if(charIndex11==-1){
            charIndex11 = 0;
            stringLength11 = inputText11.length;
        }
        var initString11 = document.getElementById('myContent11').innerHTML;
		initString11 = initString11.replace(/<SPAN.*$/gi,"");
        
        var theChar11 = inputText11.charAt(charIndex11);
       	var nextFourChars11 = inputText11.substr(charIndex11,4);
       	if(nextFourChars11=='<BR>' || nextFourChars11=='<br>'){
       		theChar11  = '<BR>';
       		charIndex11+=3;
       	}
        initString11 = initString11 + theChar11 + "<SPAN id='blink11'>_</SPAN>";
        document.getElementById('myContent11').innerHTML = initString11;

        charIndex11 = charIndex11/1 +1;
		if(charIndex11%2==1){
             document.getElementById('blink11').style.display='none';
        }else{
             document.getElementById('blink11').style.display='inline';
        }
                
        if(charIndex11<=stringLength11){
            setTimeout('writeContent11(false)',150);
        }else{
        	blinkSpan11();
        }  
    }
    
    var currentStyle11 = 'inline';
    function blinkSpan11(){
    	if(currentStyle11=='inline'){
    		currentStyle11='none';
    	}else{
    		currentStyle11='inline';
    	}
    	document.getElementById('blink11').style.display = currentStyle11;
    	setTimeout('blinkSpan11()',500);
    	
    }

function start11(){
	writeContent11(true);
}

    var charIndex12 = -1;
    var stringLength12 = 0;
    var inputText12;
    function writeContent12(init){
    	if(init){
    		inputText12 = document.getElementById('contentToWrite12').innerHTML;
    	}
        if(charIndex12==-1){
            charIndex12 = 0;
            stringLength12 = inputText12.length;
        }
        var initString12 = document.getElementById('myContent12').innerHTML;
		initString12 = initString12.replace(/<SPAN.*$/gi,"");
        
        var theChar12 = inputText12.charAt(charIndex12);
       	var nextFourChars12 = inputText12.substr(charIndex12,4);
       	if(nextFourChars12=='<BR>' || nextFourChars12=='<br>'){
       		theChar12  = '<BR>';
       		charIndex12+=3;
       	}
        initString12 = initString12 + theChar12 + "<SPAN id='blink12'>_</SPAN>";
        document.getElementById('myContent12').innerHTML = initString12;

        charIndex12 = charIndex12/1 +1;
		if(charIndex12%2==1){
             document.getElementById('blink12').style.display='none';
        }else{
             document.getElementById('blink12').style.display='inline';
        }
                
        if(charIndex12<=stringLength12){
            setTimeout('writeContent12(false)',150);
        }else{
        	blinkSpan12();
        }  
    }
    
    var currentStyle12 = 'inline';
    function blinkSpan12(){
    	if(currentStyle12=='inline'){
    		currentStyle12='none';
    	}else{
    		currentStyle12='inline';
    	}
    	document.getElementById('blink12').style.display = currentStyle12;
    	setTimeout('blinkSpan12()',500);
    	
    }

function start12(){
	writeContent12(true);
}

    var charIndex13 = -1;
    var stringLength13 = 0;
    var inputText13;
    function writeContent13(init){
    	if(init){
    		inputText13 = document.getElementById('contentToWrite13').innerHTML;
    	}
        if(charIndex13==-1){
            charIndex13 = 0;
            stringLength13 = inputText13.length;
        }
        var initString13 = document.getElementById('myContent13').innerHTML;
		initString13 = initString13.replace(/<SPAN.*$/gi,"");
        
        var theChar13 = inputText13.charAt(charIndex13);
       	var nextFourChars13 = inputText13.substr(charIndex13,4);
       	if(nextFourChars13=='<BR>' || nextFourChars13=='<br>'){
       		theChar13  = '<BR>';
       		charIndex13+=3;
       	}
        initString13 = initString13 + theChar13 + "<SPAN id='blink13'>_</SPAN>";
        document.getElementById('myContent13').innerHTML = initString13;

        charIndex13 = charIndex13/1 +1;
		if(charIndex13%2==1){
             document.getElementById('blink13').style.display='none';
        }else{
             document.getElementById('blink13').style.display='inline';
        }
                
        if(charIndex13<=stringLength13){
            setTimeout('writeContent13(false)',150);
        }else{
        	blinkSpan13();
        }  
    }
    
    var currentStyle13 = 'inline';
    function blinkSpan13(){
    	if(currentStyle13=='inline'){
    		currentStyle13='none';
    	}else{
    		currentStyle13='inline';
    	}
    	document.getElementById('blink13').style.display = currentStyle13;
    	setTimeout('blinkSpan13()',500);
    	
    }

function start13(){
	writeContent13(true);
}

    var charIndex14 = -1;
    var stringLength14 = 0;
    var inputText14;
    function writeContent14(init){
    	if(init){
    		inputText14 = document.getElementById('contentToWrite14').innerHTML;
    	}
        if(charIndex14==-1){
            charIndex14 = 0;
            stringLength14 = inputText14.length;
        }
        var initString14 = document.getElementById('myContent14').innerHTML;
		initString14 = initString14.replace(/<SPAN.*$/gi,"");
        
        var theChar14 = inputText14.charAt(charIndex14);
       	var nextFourChars14 = inputText14.substr(charIndex14,4);
       	if(nextFourChars14=='<BR>' || nextFourChars14=='<br>'){
       		theChar14  = '<BR>';
       		charIndex14+=3;
       	}
        initString14 = initString14 + theChar14 + "<SPAN id='blink14'>_</SPAN>";
        document.getElementById('myContent14').innerHTML = initString14;

        charIndex14 = charIndex14/1 +1;
		if(charIndex14%2==1){
             document.getElementById('blink14').style.display='none';
        }else{
             document.getElementById('blink14').style.display='inline';
        }
                
        if(charIndex14<=stringLength14){
            setTimeout('writeContent14(false)',150);
        }else{
        	blinkSpan14();
        }  
    }
    
    var currentStyle14 = 'inline';
    function blinkSpan14(){
    	if(currentStyle14=='inline'){
    		currentStyle14='none';
    	}else{
    		currentStyle14='inline';
    	}
    	document.getElementById('blink14').style.display = currentStyle14;
    	setTimeout('blinkSpan14()',500);
    	
    }

function start14(){
	writeContent14(true);
}

    var charIndex15 = -1;
    var stringLength15 = 0;
    var inputText15;
    function writeContent15(init){
    	if(init){
    		inputText15 = document.getElementById('contentToWrite15').innerHTML;
    	}
        if(charIndex15==-1){
            charIndex15 = 0;
            stringLength15 = inputText15.length;
        }
        var initString15 = document.getElementById('myContent15').innerHTML;
		initString15 = initString15.replace(/<SPAN.*$/gi,"");
        
        var theChar15 = inputText15.charAt(charIndex15);
       	var nextFourChars15 = inputText15.substr(charIndex15,4);
       	if(nextFourChars15=='<BR>' || nextFourChars15=='<br>'){
       		theChar15  = '<BR>';
       		charIndex15+=3;
       	}
        initString15 = initString15 + theChar15 + "<SPAN id='blink15'>_</SPAN>";
        document.getElementById('myContent15').innerHTML = initString15;

        charIndex15 = charIndex15/1 +1;
		if(charIndex15%2==1){
             document.getElementById('blink15').style.display='none';
        }else{
             document.getElementById('blink15').style.display='inline';
        }
                
        if(charIndex15<=stringLength15){
            setTimeout('writeContent15(false)',150);
        }else{
        	blinkSpan15();
        }  
    }
    
    var currentStyle15 = 'inline';
    function blinkSpan15(){
    	if(currentStyle15=='inline'){
    		currentStyle15='none';
    	}else{
    		currentStyle15='inline';
    	}
    	document.getElementById('blink15').style.display = currentStyle15;
    	setTimeout('blinkSpan15()',500);
    	
    }

function start15(){
	writeContent15(true);
}

    var charIndex16 = -1;
    var stringLength16 = 0;
    var inputText16;
    function writeContent16(init){
    	if(init){
    		inputText16 = document.getElementById('contentToWrite16').innerHTML;
    	}
        if(charIndex16==-1){
            charIndex16 = 0;
            stringLength16 = inputText16.length;
        }
        var initString16 = document.getElementById('myContent16').innerHTML;
		initString16 = initString16.replace(/<SPAN.*$/gi,"");
        
        var theChar16 = inputText16.charAt(charIndex16);
       	var nextFourChars16 = inputText16.substr(charIndex16,4);
       	if(nextFourChars16=='<BR>' || nextFourChars16=='<br>'){
       		theChar16  = '<BR>';
       		charIndex16+=3;
       	}
        initString16 = initString16 + theChar16 + "<SPAN id='blink16'>_</SPAN>";
        document.getElementById('myContent16').innerHTML = initString16;

        charIndex16 = charIndex16/1 +1;
		if(charIndex16%2==1){
             document.getElementById('blink16').style.display='none';
        }else{
             document.getElementById('blink16').style.display='inline';
        }
                
        if(charIndex16<=stringLength16){
            setTimeout('writeContent16(false)',150);
        }else{
        	blinkSpan16();
        }  
    }
    
    var currentStyle16 = 'inline';
    function blinkSpan16(){
    	if(currentStyle16=='inline'){
    		currentStyle16='none';
    	}else{
    		currentStyle16='inline';
    	}
    	document.getElementById('blink16').style.display = currentStyle16;
    	setTimeout('blinkSpan16()',500);
    	
    }

function start16(){
	writeContent16(true);
}

    var charIndex17 = -1;
    var stringLength17 = 0;
    var inputText17;
    function writeContent17(init){
    	if(init){
    		inputText17 = document.getElementById('contentToWrite17').innerHTML;
    	}
        if(charIndex17==-1){
            charIndex17 = 0;
            stringLength17 = inputText17.length;
        }
        var initString17 = document.getElementById('myContent17').innerHTML;
		initString17 = initString17.replace(/<SPAN.*$/gi,"");
        
        var theChar17 = inputText17.charAt(charIndex17);
       	var nextFourChars17 = inputText17.substr(charIndex17,4);
       	if(nextFourChars17=='<BR>' || nextFourChars17=='<br>'){
       		theChar17  = '<BR>';
       		charIndex17+=3;
       	}
        initString17 = initString17 + theChar17 + "<SPAN id='blink17'>_</SPAN>";
        document.getElementById('myContent17').innerHTML = initString17;

        charIndex17 = charIndex17/1 +1;
		if(charIndex17%2==1){
             document.getElementById('blink17').style.display='none';
        }else{
             document.getElementById('blink17').style.display='inline';
        }
                
        if(charIndex17<=stringLength17){
            setTimeout('writeContent17(false)',150);
        }else{
        	blinkSpan17();
        }  
    }
    
    var currentStyle17 = 'inline';
    function blinkSpan17(){
    	if(currentStyle17=='inline'){
    		currentStyle17='none';
    	}else{
    		currentStyle17='inline';
    	}
    	document.getElementById('blink17').style.display = currentStyle17;
    	setTimeout('blinkSpan17()',500);
    	
    }

function start17(){
	writeContent17(true);
}

    var charIndex18 = -1;
    var stringLength18 = 0;
    var inputText18;
    function writeContent18(init){
    	if(init){
    		inputText18 = document.getElementById('contentToWrite18').innerHTML;
    	}
        if(charIndex18==-1){
            charIndex18 = 0;
            stringLength18 = inputText18.length;
        }
        var initString18 = document.getElementById('myContent18').innerHTML;
		initString18 = initString18.replace(/<SPAN.*$/gi,"");
        
        var theChar18 = inputText18.charAt(charIndex18);
       	var nextFourChars18 = inputText18.substr(charIndex18,4);
       	if(nextFourChars18=='<BR>' || nextFourChars18=='<br>'){
       		theChar18  = '<BR>';
       		charIndex18+=3;
       	}
        initString18 = initString18 + theChar18 + "<SPAN id='blink18'>_</SPAN>";
        document.getElementById('myContent18').innerHTML = initString18;

        charIndex18 = charIndex18/1 +1;
		if(charIndex18%2==1){
             document.getElementById('blink18').style.display='none';
        }else{
             document.getElementById('blink18').style.display='inline';
        }
                
        if(charIndex18<=stringLength18){
            setTimeout('writeContent18(false)',150);
        }else{
        	blinkSpan18();
        }  
    }
    
    var currentStyle18 = 'inline';
    function blinkSpan18(){
    	if(currentStyle18=='inline'){
    		currentStyle18='none';
    	}else{
    		currentStyle18='inline';
    	}
    	document.getElementById('blink18').style.display = currentStyle18;
    	setTimeout('blinkSpan18()',500);
    	
    }

function start18(){
	writeContent18(true);
}

    var charIndex19 = -1;
    var stringLength19 = 0;
    var inputText19;
    function writeContent19(init){
    	if(init){
    		inputText19 = document.getElementById('contentToWrite19').innerHTML;
    	}
        if(charIndex19==-1){
            charIndex19 = 0;
            stringLength19 = inputText19.length;
        }
        var initString19 = document.getElementById('myContent19').innerHTML;
		initString19 = initString19.replace(/<SPAN.*$/gi,"");
        
        var theChar19 = inputText19.charAt(charIndex19);
       	var nextFourChars19 = inputText19.substr(charIndex19,4);
       	if(nextFourChars19=='<BR>' || nextFourChars19=='<br>'){
       		theChar19  = '<BR>';
       		charIndex19+=3;
       	}
        initString19 = initString19 + theChar19 + "<SPAN id='blink19'>_</SPAN>";
        document.getElementById('myContent19').innerHTML = initString19;

        charIndex19 = charIndex19/1 +1;
		if(charIndex19%2==1){
             document.getElementById('blink19').style.display='none';
        }else{
             document.getElementById('blink19').style.display='inline';
        }
                
        if(charIndex19<=stringLength19){
            setTimeout('writeContent19(false)',150);
        }else{
        	blinkSpan19();
        }  
    }
    
    var currentStyle19 = 'inline';
    function blinkSpan19(){
    	if(currentStyle19=='inline'){
    		currentStyle19='none';
    	}else{
    		currentStyle19='inline';
    	}
    	document.getElementById('blink19').style.display = currentStyle19;
    	setTimeout('blinkSpan19()',500);
    	
    }

function start19(){
	writeContent19(true);
}

    var charIndex20 = -1;
    var stringLength20 = 0;
    var inputText20;
    function writeContent20(init){
    	if(init){
    		inputText20 = document.getElementById('contentToWrite20').innerHTML;
    	}
        if(charIndex20==-1){
            charIndex20 = 0;
            stringLength20 = inputText20.length;
        }
        var initString20 = document.getElementById('myContent20').innerHTML;
		initString20 = initString20.replace(/<SPAN.*$/gi,"");
        
        var theChar20 = inputText20.charAt(charIndex20);
       	var nextFourChars20 = inputText20.substr(charIndex20,4);
       	if(nextFourChars20=='<BR>' || nextFourChars20=='<br>'){
       		theChar20  = '<BR>';
       		charIndex20+=3;
       	}
        initString20 = initString20 + theChar20 + "<SPAN id='blink20'>_</SPAN>";
        document.getElementById('myContent20').innerHTML = initString20;

        charIndex20 = charIndex20/1 +1;
		if(charIndex20%2==1){
             document.getElementById('blink20').style.display='none';
        }else{
             document.getElementById('blink20').style.display='inline';
        }
                
        if(charIndex20<=stringLength20){
            setTimeout('writeContent20(false)',150);
        }else{
        	blinkSpan20();
        }  
    }
    
    var currentStyle20 = 'inline';
    function blinkSpan20(){
    	if(currentStyle20=='inline'){
    		currentStyle20='none';
    	}else{
    		currentStyle20='inline';
    	}
    	document.getElementById('blink20').style.display = currentStyle20;
    	setTimeout('blinkSpan20()',500);
    	
    }

function start20(){
	writeContent20(true);
}

   var charIndex21 = -1;
    var stringLength21 = 0;
    var inputText21;
    function writeContent21(init){
    	if(init){
    		inputText21 = document.getElementById('contentToWrite21').innerHTML;
    	}
        if(charIndex21==-1){
            charIndex21 = 0;
            stringLength21 = inputText21.length;
        }
        var initString21 = document.getElementById('myContent21').innerHTML;
		initString21 = initString21.replace(/<SPAN.*$/gi,"");
        
        var theChar21 = inputText21.charAt(charIndex21);
       	var nextFourChars21 = inputText21.substr(charIndex21,4);
       	if(nextFourChars21=='<BR>' || nextFourChars21=='<br>'){
       		theChar21  = '<BR>';
       		charIndex21+=3;
       	}
        initString21 = initString21 + theChar21 + "<SPAN id='blink21'>_</SPAN>";
        document.getElementById('myContent21').innerHTML = initString21;

        charIndex21 = charIndex21/1 +1;
		if(charIndex21%2==1){
             document.getElementById('blink21').style.display='none';
        }else{
             document.getElementById('blink21').style.display='inline';
        }
                
        if(charIndex21<=stringLength21){
            setTimeout('writeContent21(false)',150);
        }else{
        	blinkSpan21();
        }  
    }
    
    var currentStyle21 = 'inline';
    function blinkSpan21(){
    	if(currentStyle21=='inline'){
    		currentStyle21='none';
    	}else{
    		currentStyle21='inline';
    	}
    	document.getElementById('blink21').style.display = currentStyle21;
    	setTimeout('blinkSpan21()',500);
    	
    }

function start21(){
	writeContent21(true);
}

   var charIndex22 = -1;
    var stringLength22 = 0;
    var inputText22;
    function writeContent22(init){
    	if(init){
    		inputText22 = document.getElementById('contentToWrite22').innerHTML;
    	}
        if(charIndex22==-1){
            charIndex22 = 0;
            stringLength22 = inputText22.length;
        }
        var initString22 = document.getElementById('myContent22').innerHTML;
		initString22 = initString22.replace(/<SPAN.*$/gi,"");
        
        var theChar22 = inputText22.charAt(charIndex22);
       	var nextFourChars22 = inputText22.substr(charIndex22,4);
       	if(nextFourChars22=='<BR>' || nextFourChars22=='<br>'){
       		theChar22  = '<BR>';
       		charIndex22+=3;
       	}
        initString22 = initString22 + theChar22 + "<SPAN id='blink22'>_</SPAN>";
        document.getElementById('myContent22').innerHTML = initString22;

        charIndex22 = charIndex22/1 +1;
		if(charIndex22%2==1){
             document.getElementById('blink22').style.display='none';
        }else{
             document.getElementById('blink22').style.display='inline';
        }
                
        if(charIndex22<=stringLength22){
            setTimeout('writeContent22(false)',150);
        }else{
        	blinkSpan22();
        }  
    }
    
    var currentStyle22 = 'inline';
    function blinkSpan22(){
    	if(currentStyle22=='inline'){
    		currentStyle22='none';
    	}else{
    		currentStyle22='inline';
    	}
    	document.getElementById('blink22').style.display = currentStyle22;
    	setTimeout('blinkSpan22()',500);
    	
    }

function start22(){
	writeContent22(true);
}

   var charIndex23 = -1;
    var stringLength23 = 0;
    var inputText23;
    function writeContent23(init){
    	if(init){
    		inputText23 = document.getElementById('contentToWrite23').innerHTML;
    	}
        if(charIndex23==-1){
            charIndex23 = 0;
            stringLength23 = inputText23.length;
        }
        var initString23 = document.getElementById('myContent23').innerHTML;
		initString23 = initString23.replace(/<SPAN.*$/gi,"");
        
        var theChar23 = inputText23.charAt(charIndex23);
       	var nextFourChars23 = inputText23.substr(charIndex23,4);
       	if(nextFourChars23=='<BR>' || nextFourChars23=='<br>'){
       		theChar23  = '<BR>';
       		charIndex23+=3;
       	}
        initString23 = initString23 + theChar23 + "<SPAN id='blink23'>_</SPAN>";
        document.getElementById('myContent23').innerHTML = initString23;

        charIndex23 = charIndex23/1 +1;
		if(charIndex23%2==1){
             document.getElementById('blink23').style.display='none';
        }else{
             document.getElementById('blink23').style.display='inline';
        }
                
        if(charIndex23<=stringLength23){
            setTimeout('writeContent23(false)',150);
        }else{
        	blinkSpan23();
        }  
    }
    
    var currentStyle23 = 'inline';
    function blinkSpan23(){
    	if(currentStyle23=='inline'){
    		currentStyle23='none';
    	}else{
    		currentStyle23='inline';
    	}
    	document.getElementById('blink23').style.display = currentStyle23;
    	setTimeout('blinkSpan23()',500);
    	
    }

function start23(){
	writeContent23(true);
}

   var charIndex24 = -1;
    var stringLength24 = 0;
    var inputText24;
    function writeContent24(init){
    	if(init){
    		inputText24 = document.getElementById('contentToWrite24').innerHTML;
    	}
        if(charIndex24==-1){
            charIndex24 = 0;
            stringLength24 = inputText24.length;
        }
        var initString24 = document.getElementById('myContent24').innerHTML;
		initString24 = initString24.replace(/<SPAN.*$/gi,"");
        
        var theChar24 = inputText24.charAt(charIndex24);
       	var nextFourChars24 = inputText24.substr(charIndex24,4);
       	if(nextFourChars24=='<BR>' || nextFourChars24=='<br>'){
       		theChar24  = '<BR>';
       		charIndex24+=3;
       	}
        initString24 = initString24 + theChar24 + "<SPAN id='blink24'>_</SPAN>";
        document.getElementById('myContent24').innerHTML = initString24;

        charIndex24 = charIndex24/1 +1;
		if(charIndex24%2==1){
             document.getElementById('blink24').style.display='none';
        }else{
             document.getElementById('blink24').style.display='inline';
        }
                
        if(charIndex24<=stringLength24){
            setTimeout('writeContent24(false)',150);
        }else{
        	blinkSpan24();
        }  
    }
    
    var currentStyle24 = 'inline';
    function blinkSpan24(){
    	if(currentStyle24=='inline'){
    		currentStyle24='none';
    	}else{
    		currentStyle24='inline';
    	}
    	document.getElementById('blink24').style.display = currentStyle24;
    	setTimeout('blinkSpan24()',500);
    	
    }

function start24(){
	writeContent24(true);
}

   var charIndex25 = -1;
    var stringLength25 = 0;
    var inputText25;
    function writeContent25(init){
    	if(init){
    		inputText25 = document.getElementById('contentToWrite25').innerHTML;
    	}
        if(charIndex25==-1){
            charIndex25 = 0;
            stringLength25 = inputText25.length;
        }
        var initString25 = document.getElementById('myContent25').innerHTML;
		initString25 = initString25.replace(/<SPAN.*$/gi,"");
        
        var theChar25 = inputText25.charAt(charIndex25);
       	var nextFourChars25 = inputText25.substr(charIndex25,4);
       	if(nextFourChars25=='<BR>' || nextFourChars25=='<br>'){
       		theChar25  = '<BR>';
       		charIndex25+=3;
       	}
        initString25 = initString25 + theChar25 + "<SPAN id='blink25'>_</SPAN>";
        document.getElementById('myContent25').innerHTML = initString25;

        charIndex25 = charIndex25/1 +1;
		if(charIndex25%2==1){
             document.getElementById('blink25').style.display='none';
        }else{
             document.getElementById('blink25').style.display='inline';
        }
                
        if(charIndex25<=stringLength25){
            setTimeout('writeContent25(false)',150);
        }else{
        	blinkSpan25();
        }  
    }
    
    var currentStyle25 = 'inline';
    function blinkSpan25(){
    	if(currentStyle25=='inline'){
    		currentStyle25='none';
    	}else{
    		currentStyle25='inline';
    	}
    	document.getElementById('blink25').style.display = currentStyle25;
    	setTimeout('blinkSpan25()',500);
    	
    }

function start25(){
	writeContent25(true);
}

   var charIndex26 = -1;
    var stringLength26 = 0;
    var inputText26;
    function writeContent26(init){
    	if(init){
    		inputText26 = document.getElementById('contentToWrite26').innerHTML;
    	}
        if(charIndex26==-1){
            charIndex26 = 0;
            stringLength26 = inputText26.length;
        }
        var initString26 = document.getElementById('myContent26').innerHTML;
		initString26 = initString26.replace(/<SPAN.*$/gi,"");
        
        var theChar26 = inputText26.charAt(charIndex26);
       	var nextFourChars26 = inputText26.substr(charIndex26,4);
       	if(nextFourChars26=='<BR>' || nextFourChars26=='<br>'){
       		theChar26  = '<BR>';
       		charIndex26+=3;
       	}
        initString26 = initString26 + theChar26 + "<SPAN id='blink26'>_</SPAN>";
        document.getElementById('myContent26').innerHTML = initString26;

        charIndex26 = charIndex26/1 +1;
		if(charIndex26%2==1){
             document.getElementById('blink26').style.display='none';
        }else{
             document.getElementById('blink26').style.display='inline';
        }
                
        if(charIndex26<=stringLength26){
            setTimeout('writeContent26(false)',150);
        }else{
        	blinkSpan26();
        }  
    }
    
    var currentStyle26 = 'inline';
    function blinkSpan26(){
    	if(currentStyle26=='inline'){
    		currentStyle26='none';
    	}else{
    		currentStyle26='inline';
    	}
    	document.getElementById('blink26').style.display = currentStyle26;
    	setTimeout('blinkSpan26()',500);
    	
    }

function start26(){
	writeContent26(true);
}

   var charIndex27 = -1;
    var stringLength27 = 0;
    var inputText27;
    function writeContent27(init){
    	if(init){
    		inputText27 = document.getElementById('contentToWrite27').innerHTML;
    	}
        if(charIndex27==-1){
            charIndex27 = 0;
            stringLength27 = inputText27.length;
        }
        var initString27 = document.getElementById('myContent27').innerHTML;
		initString27 = initString27.replace(/<SPAN.*$/gi,"");
        
        var theChar27 = inputText27.charAt(charIndex27);
       	var nextFourChars27 = inputText27.substr(charIndex27,4);
       	if(nextFourChars27=='<BR>' || nextFourChars27=='<br>'){
       		theChar27  = '<BR>';
       		charIndex27+=3;
       	}
        initString27 = initString27 + theChar27 + "<SPAN id='blink27'>_</SPAN>";
        document.getElementById('myContent27').innerHTML = initString27;

        charIndex27 = charIndex27/1 +1;
		if(charIndex27%2==1){
             document.getElementById('blink27').style.display='none';
        }else{
             document.getElementById('blink27').style.display='inline';
        }
                
        if(charIndex27<=stringLength27){
            setTimeout('writeContent27(false)',150);
        }else{
        	blinkSpan27();
        }  
    }
    
    var currentStyle27 = 'inline';
    function blinkSpan27(){
    	if(currentStyle27=='inline'){
    		currentStyle27='none';
    	}else{
    		currentStyle27='inline';
    	}
    	document.getElementById('blink27').style.display = currentStyle27;
    	setTimeout('blinkSpan27()',500);
    	
    }

function start27(){
	writeContent27(true);
}

   var charIndex28 = -1;
    var stringLength28 = 0;
    var inputText28;
    function writeContent28(init){
    	if(init){
    		inputText28 = document.getElementById('contentToWrite28').innerHTML;
    	}
        if(charIndex28==-1){
            charIndex28 = 0;
            stringLength28 = inputText28.length;
        }
        var initString28 = document.getElementById('myContent28').innerHTML;
		initString28 = initString28.replace(/<SPAN.*$/gi,"");
        
        var theChar28 = inputText28.charAt(charIndex28);
       	var nextFourChars28 = inputText28.substr(charIndex28,4);
       	if(nextFourChars28=='<BR>' || nextFourChars28=='<br>'){
       		theChar28  = '<BR>';
       		charIndex28+=3;
       	}
        initString28 = initString28 + theChar28 + "<SPAN id='blink28'>_</SPAN>";
        document.getElementById('myContent28').innerHTML = initString28;

        charIndex28 = charIndex28/1 +1;
		if(charIndex28%2==1){
             document.getElementById('blink28').style.display='none';
        }else{
             document.getElementById('blink28').style.display='inline';
        }
                
        if(charIndex28<=stringLength28){
            setTimeout('writeContent28(false)',150);
        }else{
        	blinkSpan28();
        }  
    }
    
    var currentStyle28 = 'inline';
    function blinkSpan28(){
    	if(currentStyle28=='inline'){
    		currentStyle28='none';
    	}else{
    		currentStyle28='inline';
    	}
    	document.getElementById('blink28').style.display = currentStyle28;
    	setTimeout('blinkSpan28()',500);
    	
    }

function start28(){
	writeContent28(true);
}

   var charIndex29 = -1;
    var stringLength29 = 0;
    var inputText29;
    function writeContent29(init){
    	if(init){
    		inputText29 = document.getElementById('contentToWrite29').innerHTML;
    	}
        if(charIndex29==-1){
            charIndex29 = 0;
            stringLength29 = inputText29.length;
        }
        var initString29 = document.getElementById('myContent29').innerHTML;
		initString29 = initString29.replace(/<SPAN.*$/gi,"");
        
        var theChar29 = inputText29.charAt(charIndex29);
       	var nextFourChars29 = inputText29.substr(charIndex29,4);
       	if(nextFourChars29=='<BR>' || nextFourChars29=='<br>'){
       		theChar29  = '<BR>';
       		charIndex29+=3;
       	}
        initString29 = initString29 + theChar29 + "<SPAN id='blink29'>_</SPAN>";
        document.getElementById('myContent29').innerHTML = initString29;

        charIndex29 = charIndex29/1 +1;
		if(charIndex29%2==1){
             document.getElementById('blink29').style.display='none';
        }else{
             document.getElementById('blink29').style.display='inline';
        }
                
        if(charIndex29<=stringLength29){
            setTimeout('writeContent29(false)',150);
        }else{
        	blinkSpan29();
        }  
    }
    
    var currentStyle29 = 'inline';
    function blinkSpan29(){
    	if(currentStyle29=='inline'){
    		currentStyle29='none';
    	}else{
    		currentStyle29='inline';
    	}
    	document.getElementById('blink29').style.display = currentStyle29;
    	setTimeout('blinkSpan29()',500);
    	
    }

function start29(){
	writeContent29(true);
}

   var charIndex30 = -1;
    var stringLength30 = 0;
    var inputText30;
    function writeContent30(init){
    	if(init){
    		inputText30 = document.getElementById('contentToWrite30').innerHTML;
    	}
        if(charIndex30==-1){
            charIndex30 = 0;
            stringLength30 = inputText30.length;
        }
        var initString30 = document.getElementById('myContent30').innerHTML;
		initString30 = initString30.replace(/<SPAN.*$/gi,"");
        
        var theChar30 = inputText30.charAt(charIndex30);
       	var nextFourChars30 = inputText30.substr(charIndex30,4);
       	if(nextFourChars30=='<BR>' || nextFourChars30=='<br>'){
       		theChar30  = '<BR>';
       		charIndex30+=3;
       	}
        initString30 = initString30 + theChar30 + "<SPAN id='blink30'>_</SPAN>";
        document.getElementById('myContent30').innerHTML = initString30;

        charIndex30 = charIndex30/1 +1;
		if(charIndex30%2==1){
             document.getElementById('blink30').style.display='none';
        }else{
             document.getElementById('blink30').style.display='inline';
        }
                
        if(charIndex30<=stringLength30){
            setTimeout('writeContent30(false)',150);
        }else{
        	blinkSpan30();
        }  
    }
    
    var currentStyle30 = 'inline';
    function blinkSpan30(){
    	if(currentStyle30=='inline'){
    		currentStyle30='none';
    	}else{
    		currentStyle30='inline';
    	}
    	document.getElementById('blink30').style.display = currentStyle30;
    	setTimeout('blinkSpan30()',500);
    	
    }

function start30(){
	writeContent30(true);
}

   var charIndex31 = -1;
    var stringLength31 = 0;
    var inputText31;
    function writeContent31(init){
    	if(init){
    		inputText31 = document.getElementById('contentToWrite31').innerHTML;
    	}
        if(charIndex31==-1){
            charIndex31 = 0;
            stringLength31 = inputText31.length;
        }
        var initString31 = document.getElementById('myContent31').innerHTML;
		initString31 = initString31.replace(/<SPAN.*$/gi,"");
        
        var theChar31 = inputText31.charAt(charIndex31);
       	var nextFourChars31 = inputText31.substr(charIndex31,4);
       	if(nextFourChars31=='<BR>' || nextFourChars31=='<br>'){
       		theChar31  = '<BR>';
       		charIndex31+=3;
       	}
        initString31 = initString31 + theChar31 + "<SPAN id='blink31'>_</SPAN>";
        document.getElementById('myContent31').innerHTML = initString31;

        charIndex31 = charIndex31/1 +1;
		if(charIndex31%2==1){
             document.getElementById('blink31').style.display='none';
        }else{
             document.getElementById('blink31').style.display='inline';
        }
                
        if(charIndex31<=stringLength31){
            setTimeout('writeContent31(false)',150);
        }else{
        	blinkSpan31();
        }  
    }
    
    var currentStyle31 = 'inline';
    function blinkSpan31(){
    	if(currentStyle31=='inline'){
    		currentStyle31='none';
    	}else{
    		currentStyle31='inline';
    	}
    	document.getElementById('blink31').style.display = currentStyle31;
    	setTimeout('blinkSpan31()',500);
    	
    }

function start31(){
	writeContent31(true);
}

   var charIndex32 = -1;
    var stringLength32 = 0;
    var inputText32;
    function writeContent32(init){
    	if(init){
    		inputText32 = document.getElementById('contentToWrite32').innerHTML;
    	}
        if(charIndex32==-1){
            charIndex32 = 0;
            stringLength32 = inputText32.length;
        }
        var initString32 = document.getElementById('myContent32').innerHTML;
		initString32 = initString32.replace(/<SPAN.*$/gi,"");
        
        var theChar32 = inputText32.charAt(charIndex32);
       	var nextFourChars32 = inputText32.substr(charIndex32,4);
       	if(nextFourChars32=='<BR>' || nextFourChars32=='<br>'){
       		theChar32  = '<BR>';
       		charIndex32+=3;
       	}
        initString32 = initString32 + theChar32 + "<SPAN id='blink32'>_</SPAN>";
        document.getElementById('myContent32').innerHTML = initString32;

        charIndex32 = charIndex32/1 +1;
		if(charIndex32%2==1){
             document.getElementById('blink32').style.display='none';
        }else{
             document.getElementById('blink32').style.display='inline';
        }
                
        if(charIndex32<=stringLength32){
            setTimeout('writeContent32(false)',150);
        }else{
        	blinkSpan32();
        }  
    }
    
    var currentStyle32 = 'inline';
    function blinkSpan32(){
    	if(currentStyle32=='inline'){
    		currentStyle32='none';
    	}else{
    		currentStyle32='inline';
    	}
    	document.getElementById('blink32').style.display = currentStyle32;
    	setTimeout('blinkSpan32()',500);
    	
    }

function start32(){
	writeContent32(true);
}

   var charIndex33 = -1;
    var stringLength33 = 0;
    var inputText33;
    function writeContent33(init){
    	if(init){
    		inputText33 = document.getElementById('contentToWrite33').innerHTML;
    	}
        if(charIndex33==-1){
            charIndex33 = 0;
            stringLength33 = inputText33.length;
        }
        var initString33 = document.getElementById('myContent33').innerHTML;
		initString33 = initString33.replace(/<SPAN.*$/gi,"");
        
        var theChar33 = inputText33.charAt(charIndex33);
       	var nextFourChars33 = inputText33.substr(charIndex33,4);
       	if(nextFourChars33=='<BR>' || nextFourChars33=='<br>'){
       		theChar33  = '<BR>';
       		charIndex33+=3;
       	}
        initString33 = initString33 + theChar33 + "<SPAN id='blink33'>_</SPAN>";
        document.getElementById('myContent33').innerHTML = initString33;

        charIndex33 = charIndex33/1 +1;
		if(charIndex33%2==1){
             document.getElementById('blink33').style.display='none';
        }else{
             document.getElementById('blink33').style.display='inline';
        }
                
        if(charIndex33<=stringLength33){
            setTimeout('writeContent33(false)',150);
        }else{
        	blinkSpan33();
        }  
    }
    
    var currentStyle33 = 'inline';
    function blinkSpan33(){
    	if(currentStyle33=='inline'){
    		currentStyle33='none';
    	}else{
    		currentStyle33='inline';
    	}
    	document.getElementById('blink33').style.display = currentStyle33;
    	setTimeout('blinkSpan33()',500);
    	
    }

function start33(){
	writeContent33(true);
}

   var charIndex34 = -1;
    var stringLength34 = 0;
    var inputText34;
    function writeContent34(init){
    	if(init){
    		inputText34 = document.getElementById('contentToWrite34').innerHTML;
    	}
        if(charIndex34==-1){
            charIndex34 = 0;
            stringLength34 = inputText34.length;
        }
        var initString34 = document.getElementById('myContent34').innerHTML;
		initString34 = initString34.replace(/<SPAN.*$/gi,"");
        
        var theChar34 = inputText34.charAt(charIndex34);
       	var nextFourChars34 = inputText34.substr(charIndex34,4);
       	if(nextFourChars34=='<BR>' || nextFourChars34=='<br>'){
       		theChar34  = '<BR>';
       		charIndex34+=3;
       	}
        initString34 = initString34 + theChar34 + "<SPAN id='blink34'>_</SPAN>";
        document.getElementById('myContent34').innerHTML = initString34;

        charIndex34 = charIndex34/1 +1;
		if(charIndex34%2==1){
             document.getElementById('blink34').style.display='none';
        }else{
             document.getElementById('blink34').style.display='inline';
        }
                
        if(charIndex34<=stringLength34){
            setTimeout('writeContent34(false)',150);
        }else{
        	blinkSpan34();
        }  
    }
    
    var currentStyle34 = 'inline';
    function blinkSpan34(){
    	if(currentStyle34=='inline'){
    		currentStyle34='none';
    	}else{
    		currentStyle34='inline';
    	}
    	document.getElementById('blink34').style.display = currentStyle34;
    	setTimeout('blinkSpan34()',500);
    	
    }

function start34(){
	writeContent34(true);
}

   var charIndex35 = -1;
    var stringLength35 = 0;
    var inputText35;
    function writeContent35(init){
    	if(init){
    		inputText35 = document.getElementById('contentToWrite35').innerHTML;
    	}
        if(charIndex35==-1){
            charIndex35 = 0;
            stringLength35 = inputText35.length;
        }
        var initString35 = document.getElementById('myContent35').innerHTML;
		initString35 = initString35.replace(/<SPAN.*$/gi,"");
        
        var theChar35 = inputText35.charAt(charIndex35);
       	var nextFourChars35 = inputText35.substr(charIndex35,4);
       	if(nextFourChars35=='<BR>' || nextFourChars35=='<br>'){
       		theChar35  = '<BR>';
       		charIndex35+=3;
       	}
        initString35 = initString35 + theChar35 + "<SPAN id='blink35'>_</SPAN>";
        document.getElementById('myContent35').innerHTML = initString35;

        charIndex35 = charIndex35/1 +1;
		if(charIndex35%2==1){
             document.getElementById('blink35').style.display='none';
        }else{
             document.getElementById('blink35').style.display='inline';
        }
                
        if(charIndex35<=stringLength35){
            setTimeout('writeContent35(false)',150);
        }else{
        	blinkSpan35();
        }  
    }
    
    var currentStyle35 = 'inline';
    function blinkSpan35(){
    	if(currentStyle35=='inline'){
    		currentStyle35='none';
    	}else{
    		currentStyle35='inline';
    	}
    	document.getElementById('blink35').style.display = currentStyle35;
    	setTimeout('blinkSpan35()',500);
    	
    }

function start35(){
	writeContent35(true);
}

   var charIndex36 = -1;
    var stringLength36 = 0;
    var inputText36;
    function writeContent36(init){
    	if(init){
    		inputText36 = document.getElementById('contentToWrite36').innerHTML;
    	}
        if(charIndex36==-1){
            charIndex36 = 0;
            stringLength36 = inputText36.length;
        }
        var initString36 = document.getElementById('myContent36').innerHTML;
		initString36 = initString36.replace(/<SPAN.*$/gi,"");
        
        var theChar36 = inputText36.charAt(charIndex36);
       	var nextFourChars36 = inputText36.substr(charIndex36,4);
       	if(nextFourChars36=='<BR>' || nextFourChars36=='<br>'){
       		theChar36  = '<BR>';
       		charIndex36+=3;
       	}
        initString36 = initString36 + theChar36 + "<SPAN id='blink36'>_</SPAN>";
        document.getElementById('myContent36').innerHTML = initString36;

        charIndex36 = charIndex36/1 +1;
		if(charIndex36%2==1){
             document.getElementById('blink36').style.display='none';
        }else{
             document.getElementById('blink36').style.display='inline';
        }
                
        if(charIndex36<=stringLength36){
            setTimeout('writeContent36(false)',150);
        }else{
        	blinkSpan36();
        }  
    }
    
    var currentStyle36 = 'inline';
    function blinkSpan36(){
    	if(currentStyle36=='inline'){
    		currentStyle36='none';
    	}else{
    		currentStyle36='inline';
    	}
    	document.getElementById('blink36').style.display = currentStyle36;
    	setTimeout('blinkSpan36()',500);
    	
    }

function start36(){
	writeContent36(true);
}

   var charIndex37 = -1;
    var stringLength37 = 0;
    var inputText37;
    function writeContent37(init){
    	if(init){
    		inputText37 = document.getElementById('contentToWrite37').innerHTML;
    	}
        if(charIndex37==-1){
            charIndex37 = 0;
            stringLength37 = inputText37.length;
        }
        var initString37 = document.getElementById('myContent37').innerHTML;
		initString37 = initString37.replace(/<SPAN.*$/gi,"");
        
        var theChar37 = inputText37.charAt(charIndex37);
       	var nextFourChars37 = inputText37.substr(charIndex37,4);
       	if(nextFourChars37=='<BR>' || nextFourChars37=='<br>'){
       		theChar37  = '<BR>';
       		charIndex37+=3;
       	}
        initString37 = initString37 + theChar37 + "<SPAN id='blink37'>_</SPAN>";
        document.getElementById('myContent37').innerHTML = initString37;

        charIndex37 = charIndex37/1 +1;
		if(charIndex37%2==1){
             document.getElementById('blink37').style.display='none';
        }else{
             document.getElementById('blink37').style.display='inline';
        }
                
        if(charIndex37<=stringLength37){
            setTimeout('writeContent37(false)',150);
        }else{
        	blinkSpan37();
        }  
    }
    
    var currentStyle37 = 'inline';
    function blinkSpan37(){
    	if(currentStyle37=='inline'){
    		currentStyle37='none';
    	}else{
    		currentStyle37='inline';
    	}
    	document.getElementById('blink37').style.display = currentStyle37;
    	setTimeout('blinkSpan37()',500);
    	
    }

function start37(){
	writeContent37(true);
}

   var charIndex38 = -1;
    var stringLength38 = 0;
    var inputText38;
    function writeContent38(init){
    	if(init){
    		inputText38 = document.getElementById('contentToWrite38').innerHTML;
    	}
        if(charIndex38==-1){
            charIndex38 = 0;
            stringLength38 = inputText38.length;
        }
        var initString38 = document.getElementById('myContent38').innerHTML;
		initString38 = initString38.replace(/<SPAN.*$/gi,"");
        
        var theChar38 = inputText38.charAt(charIndex38);
       	var nextFourChars38 = inputText38.substr(charIndex38,4);
       	if(nextFourChars38=='<BR>' || nextFourChars38=='<br>'){
       		theChar38  = '<BR>';
       		charIndex38+=3;
       	}
        initString38 = initString38 + theChar38 + "<SPAN id='blink38'>_</SPAN>";
        document.getElementById('myContent38').innerHTML = initString38;

        charIndex38 = charIndex38/1 +1;
		if(charIndex38%2==1){
             document.getElementById('blink38').style.display='none';
        }else{
             document.getElementById('blink38').style.display='inline';
        }
                
        if(charIndex38<=stringLength38){
            setTimeout('writeContent38(false)',150);
        }else{
        	blinkSpan38();
        }  
    }
    
    var currentStyle38 = 'inline';
    function blinkSpan38(){
    	if(currentStyle38=='inline'){
    		currentStyle38='none';
    	}else{
    		currentStyle38='inline';
    	}
    	document.getElementById('blink38').style.display = currentStyle38;
    	setTimeout('blinkSpan38()',500);
    	
    }

function start38(){
	writeContent38(true);
}

   var charIndex39 = -1;
    var stringLength39 = 0;
    var inputText39;
    function writeContent39(init){
    	if(init){
    		inputText39 = document.getElementById('contentToWrite39').innerHTML;
    	}
        if(charIndex39==-1){
            charIndex39 = 0;
            stringLength39 = inputText39.length;
        }
        var initString39 = document.getElementById('myContent39').innerHTML;
		initString39 = initString39.replace(/<SPAN.*$/gi,"");
        
        var theChar39 = inputText39.charAt(charIndex39);
       	var nextFourChars39 = inputText39.substr(charIndex39,4);
       	if(nextFourChars39=='<BR>' || nextFourChars39=='<br>'){
       		theChar39  = '<BR>';
       		charIndex39+=3;
       	}
        initString39 = initString39 + theChar39 + "<SPAN id='blink39'>_</SPAN>";
        document.getElementById('myContent39').innerHTML = initString39;

        charIndex39 = charIndex39/1 +1;
		if(charIndex39%2==1){
             document.getElementById('blink39').style.display='none';
        }else{
             document.getElementById('blink39').style.display='inline';
        }
                
        if(charIndex39<=stringLength39){
            setTimeout('writeContent39(false)',150);
        }else{
        	blinkSpan39();
        }  
    }
    
    var currentStyle39 = 'inline';
    function blinkSpan39(){
    	if(currentStyle39=='inline'){
    		currentStyle39='none';
    	}else{
    		currentStyle39='inline';
    	}
    	document.getElementById('blink39').style.display = currentStyle39;
    	setTimeout('blinkSpan39()',500);
    	
    }

function start39(){
	writeContent39(true);
}

   var charIndex40 = -1;
    var stringLength40 = 0;
    var inputText40;
    function writeContent40(init){
    	if(init){
    		inputText40 = document.getElementById('contentToWrite40').innerHTML;
    	}
        if(charIndex40==-1){
            charIndex40 = 0;
            stringLength40 = inputText40.length;
        }
        var initString40 = document.getElementById('myContent40').innerHTML;
		initString40 = initString40.replace(/<SPAN.*$/gi,"");
        
        var theChar40 = inputText40.charAt(charIndex40);
       	var nextFourChars40 = inputText40.substr(charIndex40,4);
       	if(nextFourChars40=='<BR>' || nextFourChars40=='<br>'){
       		theChar40  = '<BR>';
       		charIndex40+=3;
       	}
        initString40 = initString40 + theChar40 + "<SPAN id='blink40'>_</SPAN>";
        document.getElementById('myContent40').innerHTML = initString40;

        charIndex40 = charIndex40/1 +1;
		if(charIndex40%2==1){
             document.getElementById('blink40').style.display='none';
        }else{
             document.getElementById('blink40').style.display='inline';
        }
                
        if(charIndex40<=stringLength40){
            setTimeout('writeContent40(false)',150);
        }else{
        	blinkSpan40();
        }  
    }
    
    var currentStyle40 = 'inline';
    function blinkSpan40(){
    	if(currentStyle40=='inline'){
    		currentStyle40='none';
    	}else{
    		currentStyle40='inline';
    	}
    	document.getElementById('blink40').style.display = currentStyle40;
    	setTimeout('blinkSpan40()',500);
    	
    }

function start40(){
	writeContent40(true);
}

   var charIndex41 = -1;
    var stringLength41 = 0;
    var inputText41;
    function writeContent41(init){
    	if(init){
    		inputText41 = document.getElementById('contentToWrite41').innerHTML;
    	}
        if(charIndex41==-1){
            charIndex41 = 0;
            stringLength41 = inputText41.length;
        }
        var initString41 = document.getElementById('myContent41').innerHTML;
		initString41 = initString41.replace(/<SPAN.*$/gi,"");
        
        var theChar41 = inputText41.charAt(charIndex41);
       	var nextFourChars41 = inputText41.substr(charIndex41,4);
       	if(nextFourChars41=='<BR>' || nextFourChars41=='<br>'){
       		theChar41  = '<BR>';
       		charIndex41+=3;
       	}
        initString41 = initString41 + theChar41 + "<SPAN id='blink41'>_</SPAN>";
        document.getElementById('myContent41').innerHTML = initString41;

        charIndex41 = charIndex41/1 +1;
		if(charIndex41%2==1){
             document.getElementById('blink41').style.display='none';
        }else{
             document.getElementById('blink41').style.display='inline';
        }
                
        if(charIndex41<=stringLength41){
            setTimeout('writeContent41(false)',150);
        }else{
        	blinkSpan41();
        }  
    }
    
    var currentStyle41 = 'inline';
    function blinkSpan41(){
    	if(currentStyle41=='inline'){
    		currentStyle41='none';
    	}else{
    		currentStyle41='inline';
    	}
    	document.getElementById('blink41').style.display = currentStyle41;
    	setTimeout('blinkSpan41()',500);
    	
    }

function start41(){
	writeContent41(true);
}

   var charIndex42 = -1;
    var stringLength42 = 0;
    var inputText42;
    function writeContent42(init){
    	if(init){
    		inputText42 = document.getElementById('contentToWrite42').innerHTML;
    	}
        if(charIndex42==-1){
            charIndex42 = 0;
            stringLength42 = inputText42.length;
        }
        var initString42 = document.getElementById('myContent42').innerHTML;
		initString42 = initString42.replace(/<SPAN.*$/gi,"");
        
        var theChar42 = inputText42.charAt(charIndex42);
       	var nextFourChars42 = inputText42.substr(charIndex42,4);
       	if(nextFourChars42=='<BR>' || nextFourChars42=='<br>'){
       		theChar42  = '<BR>';
       		charIndex42+=3;
       	}
        initString42 = initString42 + theChar42 + "<SPAN id='blink42'>_</SPAN>";
        document.getElementById('myContent42').innerHTML = initString42;

        charIndex42 = charIndex42/1 +1;
		if(charIndex42%2==1){
             document.getElementById('blink42').style.display='none';
        }else{
             document.getElementById('blink42').style.display='inline';
        }
                
        if(charIndex42<=stringLength42){
            setTimeout('writeContent42(false)',150);
        }else{
        	blinkSpan42();
        }  
    }
    
    var currentStyle42 = 'inline';
    function blinkSpan42(){
    	if(currentStyle42=='inline'){
    		currentStyle42='none';
    	}else{
    		currentStyle42='inline';
    	}
    	document.getElementById('blink42').style.display = currentStyle42;
    	setTimeout('blinkSpan42()',500);
    	
    }

function start42(){
	writeContent42(true);
}

   var charIndex43 = -1;
    var stringLength43 = 0;
    var inputText43;
    function writeContent43(init){
    	if(init){
    		inputText43 = document.getElementById('contentToWrite43').innerHTML;
    	}
        if(charIndex43==-1){
            charIndex43 = 0;
            stringLength43 = inputText43.length;
        }
        var initString43 = document.getElementById('myContent43').innerHTML;
		initString43 = initString43.replace(/<SPAN.*$/gi,"");
        
        var theChar43 = inputText43.charAt(charIndex43);
       	var nextFourChars43 = inputText43.substr(charIndex43,4);
       	if(nextFourChars43=='<BR>' || nextFourChars43=='<br>'){
       		theChar43  = '<BR>';
       		charIndex43+=3;
       	}
        initString43 = initString43 + theChar43 + "<SPAN id='blink43'>_</SPAN>";
        document.getElementById('myContent43').innerHTML = initString43;

        charIndex43 = charIndex43/1 +1;
		if(charIndex43%2==1){
             document.getElementById('blink43').style.display='none';
        }else{
             document.getElementById('blink43').style.display='inline';
        }
                
        if(charIndex43<=stringLength43){
            setTimeout('writeContent43(false)',150);
        }else{
        	blinkSpan43();
        }  
    }
    
    var currentStyle43 = 'inline';
    function blinkSpan43(){
    	if(currentStyle43=='inline'){
    		currentStyle43='none';
    	}else{
    		currentStyle43='inline';
    	}
    	document.getElementById('blink43').style.display = currentStyle43;
    	setTimeout('blinkSpan43()',500);
    	
    }

function start43(){
	writeContent43(true);
}

   var charIndex44 = -1;
    var stringLength44 = 0;
    var inputText44;
    function writeContent44(init){
    	if(init){
    		inputText44 = document.getElementById('contentToWrite44').innerHTML;
    	}
        if(charIndex44==-1){
            charIndex44 = 0;
            stringLength44 = inputText44.length;
        }
        var initString44 = document.getElementById('myContent44').innerHTML;
		initString44 = initString44.replace(/<SPAN.*$/gi,"");
        
        var theChar44 = inputText44.charAt(charIndex44);
       	var nextFourChars44 = inputText44.substr(charIndex44,4);
       	if(nextFourChars44=='<BR>' || nextFourChars44=='<br>'){
       		theChar44  = '<BR>';
       		charIndex44+=3;
       	}
        initString44 = initString44 + theChar44 + "<SPAN id='blink44'>_</SPAN>";
        document.getElementById('myContent44').innerHTML = initString44;

        charIndex44 = charIndex44/1 +1;
		if(charIndex44%2==1){
             document.getElementById('blink44').style.display='none';
        }else{
             document.getElementById('blink44').style.display='inline';
        }
                
        if(charIndex44<=stringLength44){
            setTimeout('writeContent44(false)',150);
        }else{
        	blinkSpan44();
        }  
    }
    
    var currentStyle44 = 'inline';
    function blinkSpan44(){
    	if(currentStyle44=='inline'){
    		currentStyle44='none';
    	}else{
    		currentStyle44='inline';
    	}
    	document.getElementById('blink44').style.display = currentStyle44;
    	setTimeout('blinkSpan44()',500);
    	
    }

function start44(){
	writeContent44(true);
}

   var charIndex45 = -1;
    var stringLength45 = 0;
    var inputText45;
    function writeContent45(init){
    	if(init){
    		inputText45 = document.getElementById('contentToWrite45').innerHTML;
    	}
        if(charIndex45==-1){
            charIndex45 = 0;
            stringLength45 = inputText45.length;
        }
        var initString45 = document.getElementById('myContent45').innerHTML;
		initString45 = initString45.replace(/<SPAN.*$/gi,"");
        
        var theChar45 = inputText45.charAt(charIndex45);
       	var nextFourChars45 = inputText45.substr(charIndex45,4);
       	if(nextFourChars45=='<BR>' || nextFourChars45=='<br>'){
       		theChar45  = '<BR>';
       		charIndex45+=3;
       	}
        initString45 = initString45 + theChar45 + "<SPAN id='blink45'>_</SPAN>";
        document.getElementById('myContent45').innerHTML = initString45;

        charIndex45 = charIndex45/1 +1;
		if(charIndex45%2==1){
             document.getElementById('blink45').style.display='none';
        }else{
             document.getElementById('blink45').style.display='inline';
        }
                
        if(charIndex45<=stringLength45){
            setTimeout('writeContent45(false)',150);
        }else{
        	blinkSpan45();
        }  
    }
    
    var currentStyle45 = 'inline';
    function blinkSpan45(){
    	if(currentStyle45=='inline'){
    		currentStyle45='none';
    	}else{
    		currentStyle45='inline';
    	}
    	document.getElementById('blink45').style.display = currentStyle45;
    	setTimeout('blinkSpan45()',500);
    	
    }

function start45(){
	writeContent45(true);
}

   var charIndex46 = -1;
    var stringLength46 = 0;
    var inputText46;
    function writeContent46(init){
    	if(init){
    		inputText46 = document.getElementById('contentToWrite46').innerHTML;
    	}
        if(charIndex46==-1){
            charIndex46 = 0;
            stringLength46 = inputText46.length;
        }
        var initString46 = document.getElementById('myContent46').innerHTML;
		initString46 = initString46.replace(/<SPAN.*$/gi,"");
        
        var theChar46 = inputText46.charAt(charIndex46);
       	var nextFourChars46 = inputText46.substr(charIndex46,4);
       	if(nextFourChars46=='<BR>' || nextFourChars46=='<br>'){
       		theChar46  = '<BR>';
       		charIndex46+=3;
       	}
        initString46 = initString46 + theChar46 + "<SPAN id='blink46'>_</SPAN>";
        document.getElementById('myContent46').innerHTML = initString46;

        charIndex46 = charIndex46/1 +1;
		if(charIndex46%2==1){
             document.getElementById('blink46').style.display='none';
        }else{
             document.getElementById('blink46').style.display='inline';
        }
                
        if(charIndex46<=stringLength46){
            setTimeout('writeContent46(false)',150);
        }else{
        	blinkSpan46();
        }  
    }
    
    var currentStyle46 = 'inline';
    function blinkSpan46(){
    	if(currentStyle46=='inline'){
    		currentStyle46='none';
    	}else{
    		currentStyle46='inline';
    	}
    	document.getElementById('blink46').style.display = currentStyle46;
    	setTimeout('blinkSpan46()',500);
    	
    }

function start46(){
	writeContent46(true);
}

   var charIndex47 = -1;
    var stringLength47 = 0;
    var inputText47;
    function writeContent47(init){
    	if(init){
    		inputText47 = document.getElementById('contentToWrite47').innerHTML;
    	}
        if(charIndex47==-1){
            charIndex47 = 0;
            stringLength47 = inputText47.length;
        }
        var initString47 = document.getElementById('myContent47').innerHTML;
		initString47 = initString47.replace(/<SPAN.*$/gi,"");
        
        var theChar47 = inputText47.charAt(charIndex47);
       	var nextFourChars47 = inputText47.substr(charIndex47,4);
       	if(nextFourChars47=='<BR>' || nextFourChars47=='<br>'){
       		theChar47  = '<BR>';
       		charIndex47+=3;
       	}
        initString47 = initString47 + theChar47 + "<SPAN id='blink47'>_</SPAN>";
        document.getElementById('myContent47').innerHTML = initString47;

        charIndex47 = charIndex47/1 +1;
		if(charIndex47%2==1){
             document.getElementById('blink47').style.display='none';
        }else{
             document.getElementById('blink47').style.display='inline';
        }
                
        if(charIndex47<=stringLength47){
            setTimeout('writeContent47(false)',150);
        }else{
        	blinkSpan47();
        }  
    }
    
    var currentStyle47 = 'inline';
    function blinkSpan47(){
    	if(currentStyle47=='inline'){
    		currentStyle47='none';
    	}else{
    		currentStyle47='inline';
    	}
    	document.getElementById('blink47').style.display = currentStyle47;
    	setTimeout('blinkSpan47()',500);
    	
    }

function start47(){
	writeContent47(true);
}