$(function(){
    //地域を選択
    $('.area_btn1').click(function(){
        $('.area_overlay1').show();
        $('.pref_area1').show();
        var area = $(this).data('area');
        $('[data-list]').hide();
        $('[data-list="' + area + '"]').show();
    });
    
    //レイヤーをタップ
    $('.area_overlay1').click(function(){
        prefReset();
    });
    
    //都道府県をクリック
    $('.pref_list1 [data-id]').click(function(){
        if($(this).data('id')){
            var id = $(this).data('id');

            location.href = 'doseki/' + id + '.html';
            
            prefReset();
        }
    });
    
    //表示リセット
    function prefReset(){
        $('[data-list]').hide();
        $('.pref_area1').hide();
        $('.area_overlay1').hide();
    }
});