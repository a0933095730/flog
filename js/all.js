//phone
// if( $(window).width() <= 480){
//     $('.alertMenu').on('click',function(){
//         if($(this).hasClass('open')){
//             $('body').removeClass('modal-open');
//         }
//         else{
//             $('body').addClass('modal-open');
//         }
//     });
// }
// else{}


//text-exposed
$('.text-exposed-hide').on('click',function(){
    $('.text-exposed-hide').hide();
    $('.text-exposed-show').show();
});


$('li.dropdown.alertMenu a').on('click', function (event) {
    $(this).parent().toggleClass("open");
});

$('body').on('click', function (e) {
    if (!$('li.dropdown.alertMenu').is(e.target) && $('li.dropdown.alertMenu').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
        $('li.dropdown.alertMenu').removeClass('open');
    }
});