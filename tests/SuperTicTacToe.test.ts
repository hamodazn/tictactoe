import { SuperTicTacToe } from "../src/SuperTicTacToe";

// Ergänze hier die Tests für SuperTicTacToe
test("Erstelle ein 3x3-Spielfeld", () => {
    const game = new SuperTicTacToe(3);
    expect(game.spielfeld).toEqual([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]);
}
);
test ("Setze ein Feld", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    expect(game.spielfeld).toEqual([
        ["X", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]);
});
test("Winning condition", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    game.spielfeld[0][1] = "X";
    game.spielfeld[0][2] = "X";
    expect(game.spielfeld).toEqual([
        ["X", "X", "X"],
        [" ", " ", " "],
        [" ", " ", " "]
    ]);
});
test("Winning condition 2", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    game.spielfeld[1][0] = "X";
    game.spielfeld[2][0] = "X";
    expect(game.spielfeld).toEqual([
        ["X", " ", " "],
        ["X", " ", " "],
        ["X", " ", " "]
    ]);
});
test("loosing + Winning condition", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    game.spielfeld[0][1] = "X";
    game.spielfeld[1][0] = "X";
    game.spielfeld[2][0] = "O";
    game.spielfeld[1][1] = "O";
    game.spielfeld[0][2] = "O";
    expect(game.spielfeld).toEqual([
        ["X", "X", "O"],
        ["X", "O", " "],
        ["O", " ", " "]
    ]);
});

test("loosing + Winning condition 2", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    game.spielfeld[0][1] = "X";
    game.spielfeld[1][0] = "X";
    game.spielfeld[2][0] = "O";
    game.spielfeld[1][1] = "O";
    game.spielfeld[0][2] = "O";
    game.spielfeld[1][2] = "X";
    game.spielfeld[2][2] = "X";
    expect(game.spielfeld).toEqual([
        ["X", "X", "O"],
        ["X", "O", "X"],
        ["O", " ", "X"]
    ]);
});

test("loosing + Winning condition 3", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    game.spielfeld[0][1] = "X";
    game.spielfeld[1][0] = "X";
    game.spielfeld[2][0] = "O";
    game.spielfeld[1][1] = "O";
    game.spielfeld[0][2] = "O";
    game.spielfeld[1][2] = "X";
    game.spielfeld[2][2] = "X";
    game.spielfeld[2][1] = "O";
    expect(game.spielfeld).toEqual([
        ["X", "X", "O"],
        ["X", "O", "X"],
        ["O", "O", "X"]
    ]);
});

test("set if == LEER", () => {
    const game = new SuperTicTacToe(3);
    game.spielfeld[0][0] = "X";
    game.spielfeld[0][1] = "X";
    game.spielfeld[1][0] = "X";
    game.spielfeld[2][0] = "O";
    game.spielfeld[1][1] = "O";
    game.spielfeld[0][2] = "O";
    game.spielfeld[1][2] = "X";
    game.spielfeld[2][2] = "X";
    game.spielfeld[2][1] = "O";
    game.spielfeld[0][0] = " ";
    expect(game.spielfeld).toEqual([
        [" ", "X", "O"],
        ["X", "O", "X"],
        ["O", "O", "X"]
    ]);
});



test("set method sets stone on an empty field", () => {
  const game = new SuperTicTacToe(3);

  const result = game.set(0, 0, "X");

  expect(result).toBeTruthy();
  expect(game.spielfeld).toEqual([
    ["X", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ]);
});

test("set method returns false for setting stone on non-empty field", () => {
  const game = new SuperTicTacToe(3);
  game.set(0, 0, "X");

  const result = game.set(0, 0, "O");

  expect(result).toBeFalsy();
  expect(game.spielfeld).toEqual([
    ["X", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ]);
});


test("set method sets stone in a different position", () => {
  const game = new SuperTicTacToe(3);

  const result = game.set(1, 1, "O");

  expect(result).toBeTruthy();
  expect(game.spielfeld).toEqual([
    [" ", " ", " "],
    [" ", "O", " "],
    [" ", " ", " "]
  ]);
});

test ("get method returns the stone on the field", () => {
    const game = new SuperTicTacToe(3);
    game.set(1, 1, "O");

    const result = game.get(1, 1);

    expect(result).toBe("O");
});



test("gewinner method returns correct winner for a row", () => {
  const game = new SuperTicTacToe(3);
  game.set(0, 0, "X");
  game.set(0, 1, "X");
  game.set(0, 2, "X");

  const winner = game.gewinner();

  expect(winner).toEqual("X");
});

test("gewinner method returns correct winner for a column", () => {
    const game = new SuperTicTacToe(3);
    game.set(0, 1, "O");
    game.set(1, 1, "O");
    game.set(2, 1, "O");
  
    const winner = game.gewinner();
  
    expect(winner).toBe("O");});
  

test("gewinner method returns correct winner for a diagonal from top-left to bottom-right", () => {
  const game = new SuperTicTacToe(3);
  game.set(0, 0, "X");
  game.set(1, 1, "X");
  game.set(2, 2, "X");

  const winner = game.gewinner();

  expect(winner).toEqual("X");
});


test("gewinner method returns null when there is no winner", () => {
  const game = new SuperTicTacToe(3);
  game.set(0, 0, "X");
  game.set(0, 1, "O");
  game.set(0, 2, "X");
  game.set(1, 0, "O");
  game.set(1, 1, "X");
  game.set(1, 2, "O");
  game.set(2, 0, "O");
  game.set(2, 1, "X");
  game.set(2, 2, "O");

  const winner = game.gewinner();

  expect(winner).toBeNull();
});
