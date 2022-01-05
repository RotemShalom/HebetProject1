/*===================================
            preloader
===================================*/
$(window).on('load', function () { //makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');

});


/*===================================
                הרחבות
===================================*/
var nSlide;


$(function () {
    new WOW().init();
    console.log('sessionStorage.getItem("isBack"): ' + sessionStorage.getItem("isBack"));;

    if (sessionStorage.getItem("isBack") == "true") {
        console.log("in if");
        $(".section0").hide();
        $(".section1").show();
        nSlide = 1;
    } else {
        $(".section1").hide();
        nSlide = 0;
        //$(".back-btn").show();
    }
    /*sessionStorage.setItem("slideNum", nSlide);
    
    for(var i = 1; i<=1; i++)
    {
        $(".section" + i).hide();
    }*/
    sessionStorage.setItem("isBack", false);
    $(".next-btn").on("click", nextSlide);
    $(".back-btn").on("click", prevSlide);

});


function nextSlide() {
    if (Number(sessionStorage.getItem("slideNum", nSlide)) == 0) {
        //$(".back-btn").show();
        //$(".back-btn").on("click", prevSlide);
    }
    $(".section" + nSlide).hide();
    nSlide++;
    sessionStorage.setItem("slideNum", nSlide);
    showSlide();
}

function prevSlide() {
    console.log("in prev slide");
    $(".section" + nSlide).hide();
    nSlide--;
    sessionStorage.setItem("slideNum", nSlide);
    showSlide();
}

function showSlide() {

    console.log("in show slide: " + nSlide);
    if (Number(sessionStorage.getItem("slideNum", nSlide)) == -1) {
        //$(".back-btn").hide();
        window.location.href = "index2.html";
    } else if(Number(sessionStorage.getItem("slideNum", nSlide)) == 2){
        window.location.href = "index4.html";
    }

    $(".section" + Number(sessionStorage.getItem("slideNum", nSlide))).show();

}

