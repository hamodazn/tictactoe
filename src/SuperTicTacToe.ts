type Spieler = "X" | "O";

type Leer = " "

const LEER: Leer = " ";


export class SuperTicTacToe {

  // Felddeklarationen nach Bedarf 
  public spielfeld: (Spieler | Leer)[][];



  constructor(size: number) {
    this.spielfeld = [];
    for (let i = 0; i < size; i++) {
      this.spielfeld[i] = [];
      for (let j = 0; j < size; j++) {
        this.spielfeld[i][j] = LEER;
      }
    }
  }

  public set(x: number, y: number, stein: Spieler): boolean {
    if (this.spielfeld[x][y] === LEER) {
      this.spielfeld[x][y] = stein;
      return true;
    }
    return false;
  }

  public get(x: number, y: number): Spieler | Leer {
    return this.spielfeld[x][y];
  }


  public gewinner(): Spieler | null {
    const size = this.spielfeld.length;

    // Check rows
    for (let i = 0; i < size; i++) {
      const row = this.spielfeld[i];
      if (row.every((field) => field === row[0]) && row[0] !== LEER) {
        return row[0] as Spieler;
      }
    }

    // Check columns
    for (let j = 0; j < size; j++) {
      const column = this.spielfeld.map((row) => row[j]);
      if (column.every((field) => field === column[0]) && column[0] !== LEER) {
        return column[0] as Spieler;
      }
    }

    // Check diagonals
    let diagonal1Win = true;
    let diagonal2Win = true;
    for (let i = 0; i < size; i++) {
      if (this.spielfeld[i][i] !== this.spielfeld[0][0]) {
        diagonal1Win = false;
      }
      if (this.spielfeld[i][size - 1 - i] !== this.spielfeld[0][size - 1]) {
        diagonal2Win = false;
      }
    }
    if ((diagonal1Win || diagonal2Win) && this.spielfeld[0][0] !== LEER) {
      return this.spielfeld[0][0] as Spieler;
    }


    return null;
  }
}      