

$(function(){
    // MENU MOBILE
    $('.burger-menu').click(function(e){
        // peut ajouter de vitesse  
        $('.menu-mobile').slideDown();
        e.preventDefault();
    });
    $('.close-menu').click(function(e){
        // peut ajouter de vitesse  
        $('.menu-mobile').slideUp();
        e.preventDefault();
    });
    $('.menu-mobile ul').onePageNav(
        {
            //femer le menu quand le section se trouve
            end : function(){
                $('.menu-mobile').slideUp();
            }
        }
    );

    // ONE PAGE NAV
    $('#menu').onePageNav();

    // BOUTON DIRECTON VERS SKILLS
    $('.go').click(function(e){
        // SCROLL VERS UN SECTION SKILLS
        var elem = $('#skills');
        $('html,body').animate({scrollTop : elem.offset().top} , 750);
        // ANNULER LE LIEN VERS APROPOS
        e.preventDefault();
    });

    // AFFICHER LE MENU AU CENTRE SI LA POSITIOIN DE SCROLL À 120
    $(window).scroll(function(){
        var scrollH = $(this).scrollTop();
        if(scrollH > 120){
            $('header').addClass('fix-white');
        }else{
            $('header').removeClass('fix-white');
        }

        //  AJOUTER UN OPACITE DANS LE LOGO 
        var opScroll = scrollH / 300;
        $('.logo').css({ opacity : 1 - opScroll });
    });   

    // AJOUTER UN EFFET 3D TILT
    if($(window).innerWidth() > 750){
        $('.card').tilt({
            // effet de zoom sur l'image
            scale:1.1,
            // ajouter un effet de glare
            glare : true,
            maxGlare : 0.5
    
        });
    }

    // SLIDER FOLIO
   $('.slider').slick({
    slidesToShow : 3,
    slidesToScroll : 1,
    autoplay : true,
    pauseOnHover : true,
    dots : true,
    infinite : false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        }],
        responsive: [
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 1,
                }
            }]

   });
});