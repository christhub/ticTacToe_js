
describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });
});

describe('Space', function() {
    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.x).to.equal(1);
   });
});

describe('Space', function() {
    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.y).to.equal(2);
   });

   it("lets a player mark a space", function() {
      var testPlayer = new Player("X")
      var testSpace = new Space(1,2);
      testSpace.markedBy(testPlayer)
      expect(testSpace.markedBy()).to.equal(testPlayer);
   });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var board = new Board();
    var space = new Space(1,1);
    expect(board.spaces[0].x).to.eq(space.x);
    expect(board.spaces[0].y).to.eq(space.y);
  });

  it("finds the player's marked space based on coordinates", function() {
    var board = new Board();
    var space = new Space(1,1);
    var foundSpace = board.find(1, 1);
    expect(foundSpace.x).to.eql(space.x);
    expect(foundSpace.y).to.eql(space.y);
  });
});

describe('Game', function() {

  it('creates players, spaces, and board', function() {
    var game = new Game();
    expect(game.playerX.mark).to.eq('X');
    expect(game.board.spaces[0].x).to.eq(1);
    expect(game.board.spaces[0].y).to.eq(1);
  });
  it('should start with playerX as first player and toggle players', function() {
    var game = new Game();
    expect(game.whoTurn()).to.eq(game.playerX);
    game.turnToggle()
    expect(game.whoTurn()).to.eq(game.playerO);
  });
});
