$(function(){
    // Fixed Header
    let header = $("#header")
    
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize",function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);

    });
    function checkScroll(scrollPos, introH){
        if(scrollPos > introH-70){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let blockOffset =$(blockID).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset - 70
        },700);
        nav.removeClass("show")

    });


    // NavToggle

    navToggle.on("click",function(event){
        event.preventDefault();
        nav.toggleClass("show")

    });

    // Reviews https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots:true
    });
});