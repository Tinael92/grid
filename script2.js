$("document").ready(function(){
    $(".slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        draggable: true,
        arrow: false,
        dots: true,
    });

    $("#topBtn").on("click", function(){
        $('body,html').animate({scrollTop:0},600);
    })
})