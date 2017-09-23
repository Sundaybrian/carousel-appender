// back-end
games = []
actionCipher = []
racingCipher = []
openCipher = []
sportsCipher = []

// constructor for each game
function Game(name, genre, img, screenS) {
  this.name = name;
  this.genre = genre;
  this.img = img;
  this.screenS = screenS;

}

var datbass = function() {
  cod = new Game("Call of Duty", "Action", "img/cod1.jpg", ["img/codsc1.jpg", "img/codsc1.jpg", "img/codsc3.jpg", "img/codsc4.jpg"])
  games.push(cod)
  crew = new Game("Crew", "Racing", "img/crew1.jpg", ["img/crewsc1.jpg", "img/crewsc2.jpg", "img/crewsc3.jpg", "img/crewsc4.jpg"])
  games.push(crew)
  gta = new Game("Grand Theft Auto", "Open World", "img/gta1.jpg", ["img/gtasc1.jpg", "img/gtasc2.jpg", "img/gtasc3.jpg", "img/gtasc4.jpg"])
  games.push(gta)
  fifa = new Game("Fifa 16", "Sports", "img/fifa1.jpg", ["img/fifasc1.jpg", "img/fifasc2.jpg", "img/fifasc3.jpg", "img/fifasc4.jpg"])
  games.push(fifa)

}

// genre sorter sorts games per genre
var genreCipher = function() {
  for (var i = 0; i < games.length; i++) {
    if (games[i].genre === "Action") {
      actionCipher.push(games[i])
      console.log(actionCipher);

    } else if (games[i].genre === "Racing") {
      racingCipher.push(games[i])
      console.log(racingCipher);

    } else if (games[i].genre === "Open World") {
      openCipher.push(games[i])
      console.log(openCipher);

    } else if (games[i].genre === "Sports") {
      sportsCipher.push(games[i])
      console.log(sportsCipher);

    }
  }

}

// appends to the games section
function appender1() {
  for (var i = 0; i < 2; i++) {
    $(".card-group").append('<div class="card"><img class="card-img-top" id="' + i + '" src="' + games[i].img + '" width="243" alt="Card image cap"><div class="card-block"><h4 class="card-title" id="' + i + '">' + games[i].name + '</h4></div></div>');
  }

}






// user interface
jQuery(document).ready(function($) {
  datbass()
  genreCipher()
  appender1()


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
