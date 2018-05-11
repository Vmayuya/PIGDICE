var gamer1 = "";
var gamer2 = "";

function Gamer(player) {
  this.player = player;
  this.result = 0;
  this.cube = 0;
  this.goal = 0;
}

function start() {
  return Math.floor(6 * Math.random()) + 1;
}

Gamer.prototype.throw = function() {
  if (this.cube === 1) {
    this.goal = 0;
    $('#roll').toggle();
    $('#roll2').toggle();
  } else {
    this.goal += this.cube;
  }
}

Gamer.prototype.stop = function() {
  this.result += this.goal;
  this.goal = 0;
}

Gamer.prototype.best = function() {
  if (this.result > 25) {
    alert(this.player + "Wins");
  }
}
$(document).ready(function() {
  $('form#newEntry').submit(function(event) {
    event.preventDefault();
    var Gamer1 = $('input#gamer1').val()
    var Gamer2 = $('input#gamer2').val()

    gamer1 = new Gamer(Gamer1);
    gamer2 = new Gamer(Gamer2);

    console.log(gamer1.player + " vs " + gamer2.player);
  });
  $('#roll').click(function(event) {
    event.preventDefault();
    gamer1.cube = start();
    $('#goal1').empty()
    $('#gamer1goal').empty();
    $('#goal1').append("Your score is: " + player1.cube);
    player1.throw();
    $('#gamer1goal').append("You scored a: " + player1.goal);
  });
  $('#roll2').click(function(event) {
    event.preventDefault();
    gamer2.cube = start();
    $('#goal2').empty()
    $('#gamer2goal').empty();
    $('#goal2').append("Your score is: " + player2.cube);
    player2.throw();
    $('#gamer2goal').append("You scored a: " + player2.goal);
  });
  /**$("#stop").click(function(event) {
    event.preventDefault();
    if ($('#roll').is(':visible')) {
      player1.hold();
      $('#player1Score').empty();
      $('#player1Final').empty();
      $('#player1Final').append("Score for "+player1.name+" is: " + player1.result);
      $(".roll1Total").empty();
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
      player1.winner();
    } else {
      player2.hold();
      $('#player2Score').empty();
      $('#player2Final').empty();
      $('#player2Final').append("Score for "+player2.name+" is: " + player2.result);
      $(".roll1Total").empty();
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
      player2.winner();
    }
  });
});
