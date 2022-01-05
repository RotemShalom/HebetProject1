/*===================================
            preloader
===================================*/
$(window).on('load', function () { //makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});

var page = 0;
var numOfSections;
var curSection = 1;
var screenArr;

initializePage();

function initializePage() {
    new WOW().init();
    page = ($('body').attr("id")).charAt(4);

    $(".back").on("click", Back);
    $(".next").on("click", Next);
    $(".next").show();

    checkCurrentScreen();
}

function checkCurrentScreen() {
    screenArr = JSON.parse(sessionStorage.getItem("screensArray"));
    numOfSections = screenArr[Number(page - 1)];

    if (sessionStorage.getItem("isFromBack") == "true") {
        sessionStorage.setItem("isFromBack", false);
        curSection = numOfSections;
    }

    for (var i = 1; i <= numOfSections; i++) {
        $(".section" + i).hide();
    }

    $(".section" + curSection).show();


    switch (page) {
        case ("1"):
            break;
        case ("2"):
             hideDefinition();
            break;
        case ("3"):
            break;
        case ("4"):
            addListenersAmerican();
            break;
    }
}

function Next() {
    sessionStorage.setItem("isMove", true);
    if (curSection != numOfSections) {
        for (var i = 1; i < numOfSections; i++) {
            $(".section" + i).hide();
        }

        curSection++;
        $(".section" + curSection).show();
        
        // בשביל השאלות האמריקאיות
        if(page == 4)
        {
            addListenersAmerican();
        }
        
    } else {
        page++;
        window.location = "index" + page + ".html";
    }
}


function Back() {
    sessionStorage.setItem("isMove", true);
    if (curSection != 1) {
        for (var i = 1; i <= numOfSections; i++) {
            $(".section" + i).hide();
        }

        curSection--;
        $(".section" + curSection).show();
        
        // בשביל השאלות האמריקאיות
        if(page == 4)
        {
            addListenersAmerican();
        }
        
    } else {
        page--;
        window.location = "index" + page + ".html";
        sessionStorage.setItem("isFromBack", true);
    }
}