import $  from 'jquery';

function buttons(){
    
    $('.language-bar').each(function(){
        let bar = $(this);
        let btn = $(this).find('.language-bar__btn');
        let list = $(this).find('.language-bar__list');

        btn.click(function(){
            bar.toggleClass('active');
        });
    });

}


export { buttons };