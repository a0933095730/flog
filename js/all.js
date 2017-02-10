//text-exposed
$('.text-exposed-hide').on('click',function(){
    $('.text-exposed-hide').hide();
    $('.text-exposed-show').show();
});

//goTop
$(window).on('scroll' , function(){
    // console.log($(window).scrollTop())
    if ( $(window).scrollTop() > 300){
        if( $('#goTop').length == 0){
            $('body').append('<a href="javascript:void(0);" id="goTop" style="display: none;"></a>');
            $("#goTop").on('click', function() {
                $('body').animate({ scrollTop: 0} , 500);
            });
        }
        $('#goTop').fadeIn(300);
    }
    else{
        $('#goTop').fadeOut(300);
    }
});
