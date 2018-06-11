$(document).ready(function(){
    let menu = $('.nav__humberger');
    let span = (menu).find('span');
    
    (menu).click( ()=> {
        $('.inav').toggle('show');
    })
    console.log(span);

});