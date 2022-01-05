var screensArray = [1,1,2,6,1];
var currentPage = 0;
var currentSection = 1;
var isFromBack = false;

// רק למקרה ויש אינטראקציה
var isMove = false;
sessionStorage.setItem("isMove", isMove);

sessionStorage.setItem("screensArray", JSON.stringify(screensArray));
sessionStorage.setItem("currentPage", currentPage);
sessionStorage.setItem("currentScreen", currentSection);
sessionStorage.setItem("isFromBack", isFromBack);

$(window).on('load', function () { //makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});