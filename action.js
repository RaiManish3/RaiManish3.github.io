var about_text = $("#about_text").html();
var blog = $("#blog").html();
$("#info1").html(about_text);
function changeText(textnow){
    $("#info1").fadeOut(function(){
        if(textnow){
            $("#info1").html(about_text);
        }
        else{
            $("#info1").html(blog);
        }
    });
    $("#info1").fadeIn();
}
