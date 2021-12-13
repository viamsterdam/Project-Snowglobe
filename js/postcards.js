import $  from 'jquery';
import jQuery  from 'jquery';

function postcardsInit(){
    let steps = $('.landing-postcard__step');

    let image = '';
    let index = '';
    
    //functions
    function updateHeader(step){

        $('.js-step-element.active').removeClass('active');
        $('.js-step-element[data-step="'+step+'"]').addClass('active');

        $('.landing-postcard__numbers-list__item').removeClass('active');
        $('.landing-postcard__numbers-list__item[data-index="'+step+'"]').addClass('active');

    }

    $('*[data-postcard]').click(function(){
        index = $(this).data('postcard');
        image = $(this).data('image');
        let imageID = $(this).data('imageid');
        $('input[name="postcard-image"]').val(imageID);
        steps.removeClass('active');
        $('.landing-postcard__step-2').addClass('active');
        $(".landing-content--scroll").animate({ scrollTop: "0" });
        console.log(index);
        $(".landing-postcard").attr('data-selected',index);
        updateHeader(2);
    });
    $('*[data-nav]').click(function(){
        let step  = $(this).data('nav');
        steps.removeClass('active');
        $('.landing-postcard__step-'+step).addClass('active');
        $(".landing-content--scroll").animate({ scrollTop: "0" });
        updateHeader(step);
    });

    //add unique token
    $('#postcard-form').each(function(){
        let token = $(this).data('token');
        let field = $(this).find('input[name="postcard-id"]');
        field.val(token);
    });

    var wpcf7Elm = document.querySelector( '.wpcf7' );

    wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
        $('#postcard-image').attr('src',image);
        $('#postcard-name').text($('input[name="postcard-name"]').val());
        $('#postcard-surname').text($('input[name="postcard-surname"]').val());
        $('#postcard-email').text($('input[name="postcard-email"]').val());
        $('#postcard-message').text($('textarea[name="postcard-message"]').val());


        steps.removeClass('active');
        $('.landing-postcard__step-3').addClass('active');
        $(".landing-content--scroll").animate({ scrollTop: "0" });
        updateHeader(3);
    }, false );

}


export { postcardsInit };