// user interface
jQuery(document).ready(function($) {
  $("#lad").click(function(event) {
    $("#cmon").hide()
    $(".one").append('<img class="d-block img-fluid" src="img/5858.jpg" alt="first slide">');
    $(".mbili").append('<img class="d-block img-fluid" src="img/8526.jpg" alt="second slide">');
    $(".tatu").append('<img class="d-block img-fluid" src="img/9083.jpg" alt="second slide">');
    $(".nne").append('<img class="d-block img-fluid" src="img/9316.jpg" alt="second slide">');
    /* Act on the event */
  });
  $("#cmon").click(function(event) {
    $("#lad").hide();
    /* Act on the event */
    $(".one").append('<img class="d-block img-fluid" src="img2/abs1.jpg" alt="first slide">');
    $(".mbili").append('<img class="d-block img-fluid" src="img2/bat1.jpg" alt="first slide">');
    $(".tatu").append('<img class="d-block img-fluid" src="img2/crew1.jpg" alt="first slide">');
    $(".nne").append('<img class="d-block img-fluid" src="img2/fall1.jpg" alt="first slide">');
  });

});
