function Player(mark) {
  this.mark = mark;
}


function Space(x, y){
  this.x = x;
  this.y = y;
  this.player = {};
  this.markedBy = function(player) {
    if (player) {
      this.player = player;
    }

    return this.player;
  }

}


function Board() {
  this.spaces = [];
  this.spaces.push(new Space(1,1));
  this.spaces.push(new Space(1,2));
  this.spaces.push(new Space(1,3));
  this.spaces.push(new Space(2,1));
  this.spaces.push(new Space(2,2));
  this.spaces.push(new Space(2,3));
  this.spaces.push(new Space(3,1));
  this.spaces.push(new Space(3,2));
  this.spaces.push(new Space(3,3));
}
Board.prototype.find = function(x, y) {
  for (var index in this.spaces) {
    if (this.spaces[index].x == x && this.spaces[index].y == y) {
      return this.spaces[index];
    }
  }
};
function Game() {
  var playerX = new Player('X');
  var playerO = new Player('O');
  var board = new Board();
  var turn = 1;
  var whoTurn = function() {
    if (turn === 1 ) {
      return playerX;
    }
    else {
      return playerO;
    }
  };
  var turnToggle = function() {
    turn *= -1
  };

  return { playerX  : playerX,
            playerO : playerO,
            board   : board,
            whoTurn : whoTurn,
            turnToggle : turnToggle }
}


$(document).ready(function() {
  var game = new Game();
  $('#one-one').click(function() {
    game.board.spaces[0].markedBy(game.playerX);
    player = game.board.spaces[0].markedBy();
    alert(player.mark);
  });
});
