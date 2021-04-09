
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

}