$(document).ready(function(){

  $("li")
  .width("200px").height("50px")
  .on("click", function() {
    $(this).css("background", "green").append(" Clicked");
  })
  .mouseover(function(){
    $(this).fadeTo("slow", 0.25);
  })
  .mouseout(function(){
    $(this).fadeTo("slow", 1);
  })

  $(".p")
  .on("click", function(){
    $(this).css({"float": "right", "border": "solid 5px black"});
  })

});
