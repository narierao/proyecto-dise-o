$(document).ready(function(){

    $( ".paloma" ).mouseover(function() {
        $(".paloma").fadeTo(1, 0.33);
        $(".cls-1").css("fill","#93278F");
        $(".cls-8").css("fill","#000033")
    });
    
    $( ".paloma" ).mouseout(function() {
        $(".paloma").fadeTo(1, 1);
        $(".cls-1").css("fill","#FFEEEB");
        $(".cls-8").css("fill","#998675")
      });
     
  });