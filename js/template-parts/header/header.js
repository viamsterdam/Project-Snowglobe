import $  from 'jquery';

function header(){
    $('#nav-toggle').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('header-active');     
    });
}


export { header };