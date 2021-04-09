

function init() {
    // リサイズ適用
    $("#targetImgDiv1").resizable();

    // 移動適用
$('#targetImgDiv1').draggable();

// リサイズ適用
    $("#targetImgDiv2").resizable();
 
    // 移動適用
    $('#targetImgDiv2').draggable();

    $("#targetImgDiv3").resizable();
 
    // 移動適用
    $('#targetImgDiv3').draggable();

alert('aaa');

}
 

function kaijo(){

    // リサイズ適用
    $("#targetImgDiv2").resizable('disable');
 
    // 移動適用
    $('#targetImgDiv2').draggable('disable');

}
