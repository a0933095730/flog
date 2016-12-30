//phone
if( $(window).width() <= 480){
    $('.alertMenu').on('click',function(){
        if($(this).hasClass('open')){
            $('body').removeClass('modal-open');
        }
        else{
            $('body').addClass('modal-open');
        }
    });
}
else{}