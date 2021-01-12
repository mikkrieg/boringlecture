$(document).ready(function() {
  $("#p1").click(function() {
    $("p").removeClass("highlight box");
    $("#p1").addClass("highlight");
    $("#p1").addClass("box");
  });

  $("#p2").click(function() {
    $("p").removeClass("highlight box");
    $("#p2").addClass("highlight");
    $("#p2").addClass("box");
  });

  $("#p3").click(function() {
    $("p").removeClass("highlight box");
    $("#p3").addClass("highlight");
    $("#p3").addClass("box");
  });


});