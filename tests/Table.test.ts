import { Table } from "../src/Table"
import "./toAlmostEqual"

test("Zeilen- und Spalten -- extern vs. intern", () => {
    const table = new Table();
    table.setCell(3, 2, "x");
    expect(table._rows).toAlmostEqual([
        // .      1  2   3 
        /* 1 */[],
        /* 2 */[, , "x"]])
})

test("Erstelle ein 3x3-Spielfeld", () => {
    const game = new Table();
    expect(game._rows).toEqual([]);
});

test("Setze ein Feld", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    expect(game._rows).toEqual([["X"]]);
});

test("Setze ein Feld 2", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "O");
    expect(game._rows).toEqual([["X", "O"]]);
});

test("Setze ein Feld 6", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "O");
    game.setCell(3, 1, "X");
    game.setCell(1, 2, "O");
    game.setCell(2, 2, "X");
    game.setCell(3, 2, "O");
    expect(game._rows).toEqual([["X", "O", "X"], ["O", "X", "O"]]);
});

test("Setze ein Feld 7", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "O");
    game.setCell(3, 1, "X");
    game.setCell(1, 2, "O");
    game.setCell(2, 2, "X");
    game.setCell(3, 2, "O");
    game.setCell(1, 3, "X");
    expect(game._rows).toEqual([["X", "O", "X"], ["O", "X", "O"], ["X"]]);
});

test("Gewinnbedingung", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "X");
    game.setCell(3, 1, "X");
    expect(game._rows).toEqual([["X", "X", "X"]]);
});

test("Gewinnbedingung 2", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(1, 2, "X");
    game.setCell(1, 3, "X");
    expect(game._rows).toEqual([["X"], ["X"], ["X"]]);
});

test("Gewinnbedingung 3", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "X");
    game.setCell(3, 1, "X");
    game.setCell(1, 2, "O");
    game.setCell(2, 2, "O");
    game.setCell(3, 2, "O");
    game.setCell(1, 3, "X");
    game.setCell(2, 3, "X");
    game.setCell(3, 3, "X");
    expect(game._rows).toEqual([["X", "X", "X"], ["O", "O", "O"], ["X", "X", "X"]]);
});

test("getCell", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    expect(game.getCell(1, 1)).toEqual("X");
});

test("getCell 2", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    expect(game.getCell(2, 1)).toEqual("");
});

test("setCell", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    expect(game.setCell(1, 1, "O")).toEqual("X");
});

test("deleteRow", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(1, 2, "X");
    game.setCell(1, 3, "X");
    game.deleteRow(2);
    expect(game._rows).toEqual([["X"], ["X"]]);
});

test("insertRowBefore", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(1, 2, "X");
    game.setCell(1, 3, "X");
    game.insertRowBefore(2);
    expect(game._rows).toEqual([["X"], [], ["X"], ["X"]]);
});

test("deleteColumn", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "X");
    game.setCell(3, 1, "X");
    game.deleteColumn(2);
    expect(game._rows).toEqual([["X", "X"]]);
});

test("insertColumnLeft", () => {
    const game = new Table();
    game.setCell(1, 1, "X");
    game.setCell(2, 1, "X");
    game.setCell(3, 1, "X");
    game.insertColumnLeft(2);
    expect(game._rows).toEqual([["X", "", "X", "X"]]);
});

test("constructor with values", () => {
    const values = [
        ["A", "B", "C"],
        ["D", "E", "F"],
        ["G", "H", "I"],
    ];

    const table = new Table(values);

    expect(table._rows).toEqual(values);
});

test("constructor without values", () => {
    const table = new Table();

    expect(table._rows).toEqual([]);
});

test("setCell throws error for invalid column", () => {
    const table = new Table();

    expect(() => table.setCell(0, 1, "X")).toThrowError(
        "Invalid column or row index"
    );
});

test("getCell with existing cell", () => {
    const values = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ];
  
    const table = new Table(values);
  
    expect(table.getCell(2, 2)).toBe("E");
  });
  
  test("getCell with non-existing cell", () => {
    const values = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ];
  
    const table = new Table(values);
  
    expect(table.getCell(4, 2)).toBe("");
  });
  
  test("getCell with invalid indices", () => {
    const table = new Table();
  
    expect(() => table.getCell(0, 2)).toThrowError("Invalid column or row index");
    expect(() => table.getCell(2, 0)).toThrowError("Invalid column or row index");
  });
  
  test("getCell row > rows.length", () => {
    const table = new Table();
  
    expect(table.getCell(1, 1)).toBe("");
  });

  test("insertRowBefore throws error for invalid row", () => {
    const table = new Table();
  
    expect(() => table.insertRowBefore(0)).toThrowError("Invalid row index");
  });

  test("insertRow > rows.length", () => {
    const table = new Table();
    table.insertRowBefore(1);
  
    expect(table._rows).toEqual([]);
  });

  test("deleteRow > rows.length", () => {	
    const table = new Table();	
    table.deleteRow(1);	
  
    expect(table._rows).toEqual([]);	
  });
  
  test("insertRowBefore when row index is out of range", () => {
    const table = new Table();
    table.setCell(1, 1, "X");
  
    expect(table.insertRowBefore(2)).toBe(false);
    expect(table._rows).toEqual([["X"]]);
  });
  
  
  test("insertColumnLeft when column index is out of range", () => {
    const table = new Table();
    table.setCell(1, 1, "X");
  
    expect(table.insertColumnLeft(2)).toBe(false);
    expect(table._rows).toEqual([["X"]]);
  });
  
  
  test("deleteColumn when column index is out of range", () => {
    const values = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ];
  
    const table = new Table(values);
  
    expect(table.deleteColumn(4)).toBe(false);
    expect(table._rows).toEqual(values);
  });

  test("deleteRow throws error for invalid row", () => {
    const table = new Table();
  
    expect(() => table.deleteRow(0)).toThrowError("Invalid row index");
  });

  test("insertColumnLeft throws error for invalid column", () => {
    const table = new Table();
  
    expect(() => table.insertColumnLeft(0)).toThrowError("Invalid column index");
  });

  test("deleteColumn throws error for invalid column", () => {
    const table = new Table();
  
    expect(() => table.deleteColumn(0)).toThrowError("Invalid column index");
  });

  test("getColumnCount with empty table", () => {
    const table = new Table();
  
    expect(table.getColumnCount()).toBe(0);
  });
  