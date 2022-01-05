

function hideDefinition()
{
    for (var i = 1; i <= 6; i++) {
        $("#definition" + i).hide();
        $("#term" + i).on("click", showDefinition);
    }
}

function showDefinition()
{
    var name = ($(this).attr("id").charAt(4));

    for (var i = 1; i <= 6; i++) {
        $("#definition" + i).hide();
        $("#term" + i).removeClass("selected");
    }

    $("#definition" + name).show();
    $("#term" + name).addClass("selected");
}


function addListenersAmerican()
{
    $(".correctAns").on("click", showCorrect);
    $(".wrongAns").on("click", showWrong);
    $(".FBcorrect").addClass("hide");
    $(".FBwrong").addClass("hide");
    $(".wrongAns").removeClass("wrong");
    $(".correctAns").removeClass("correct");
    
    if(curSection != 1)
    {
        $(".next").addClass("hide");   
    }
}



function showCorrect() {
    $(".correctAns").addClass("correct");
    $(".FBcorrect").removeClass("hide");

    $(".correctAns").off("click", showCorrect);
    $(".wrongAns").off("click", showWrong);


    $(".next").removeClass("hide");

}

function showWrong() {
    $(".wrongAns").addClass("wrong");
    $(".FBwrong").removeClass("hide");

    $(".correctAns").off("click", showCorrect);
    $(".wrongAns").off("click", showWrong);

    $(".next").removeClass("hide");
}