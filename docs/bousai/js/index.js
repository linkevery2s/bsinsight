

function init() {
    // リサイズ適用
    $("#targetImgDiv1").resizable();

    // 移動適用
$('#targetImgDiv1').draggable();

}
 
window.onload = init();

function notice(){

    // リサイズ適用
    $("#targetImgDiv2").resizable();
 
    // 移動適用
    $('#targetImgDiv2').draggable();

}

function notice2(){

    // リサイズ適用
    $("#targetImgDiv3").resizable();
 
    // 移動適用
    $('#targetImgDiv3').draggable();

}


function kaijo(){

    // リサイズ適用
    $("#targetImgDiv2").resizable('disable');
 
    // 移動適用
    $('#targetImgDiv2').draggable('disable');

}
