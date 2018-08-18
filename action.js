var about_text = $("#about_text").html();
var works_text = $("#works_text").html();
$("#info1").html(about_text);
function changeText(textnow){
    $("#info1").fadeOut(function(){
        if(textnow){
            $("#info1").html(about_text);
        }
        else{
            $("#info1").html(works_text);
        }
    });
    $("#info1").fadeIn();
}
