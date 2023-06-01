import $ from "jquery";
document.addEventListener("DOMContentLoaded", function() { 
  

    var size = "20px;";
    var border_radius = "50%;";
    var margin_top = "-10px;";
    var margin_left = "-10px;";
    var cursor = document.getElementsByClassName("cursor");
    
    document.addEventListener("mousemove", function (event) {
      cursor[0].setAttribute(
        "style",
        "top:" +
          event.pageY +
          "px ;" +
          "left:" +
          event.pageX +
          "px ;" +
          "height:" +
          size +
          "width:" +
          size +
          "border-radius:" +
          border_radius +
          "margin-top:" +
          margin_top +
          "margin-left:" +
          margin_left
      );
    });
    
    $(document).on(
      {
        mouseenter: function (event) {
  
          size = "50px;";
          border_radius = "25px;";
          
          margin_top = "-25px;";
          margin_left = "-25px;";
        },
        mouseleave: function (event) {
          size = "20px;";
          border_radius = "50%;";
          margin_top = "-10px;";
          margin_left = "-10px;";
        },
      },
      ".hoverarea, a , .router-button, .title-hover, i"
    );
    //layer magic
    // function layerMagic    
    })