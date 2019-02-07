$("document").ready(function(){
    $("header .menu li a").hover(
        function() {
            var color = $(this).attr("data-color");
            $(this).css("background", color);
        }, function() {
            $(this).css("background", "");
        }
    );

    $(".arrDown").on("click", function(){
        where = $("article").offset().top;
        $('body,html').animate({scrollTop:where},600);
    })
})