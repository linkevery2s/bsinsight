function ini(){
document.getElementById("button2").style.display = "none";
}


function notice(){

    // リサイズ適用
    $("#targetImgDiv1").resizable();

    // 移動適用
$('#targetImgDiv1').draggable();

// リサイズ適用
    $("#targetImgDiv2").resizable();
 
    // 移動適用
    $('#targetImgDiv2').draggable();

    $(".targetImgDiv3").resizable();
 
    // 移動適用
    $('.targetImgDiv3').draggable();

    // リサイズ適用
    $("#targetImgDiv1").resizable('enable');

    // 移動適用
$('#targetImgDiv1').draggable('enable');

// リサイズ適用
    $("#targetImgDiv2").resizable('enable');
 
    // 移動適用
    $('#targetImgDiv2').draggable('enable');

    $(".targetImgDiv3").resizable('enable');
 
    // 移動適用
    $('.targetImgDiv3').draggable('enable');

document.getElementById("button1").style.display = "none";
document.getElementById("button2").style.display = "block";

}

 

function kaijo(){

    // リサイズ適用
    $("#targetImgDiv1").resizable('disable');

    // 移動適用
$('#targetImgDiv1').draggable('disable');

    // リサイズ適用
    $("#targetImgDiv2").resizable('disable');
 
    // 移動適用
    $('#targetImgDiv2').draggable('disable');


    $(".targetImgDiv3").resizable('disable');
 
    // 移動適用
    $('.targetImgDiv3').draggable('disable');

document.getElementById("button1").style.display = "block";
document.getElementById("button2").style.display = "none";

}