class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.matrix = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];

    }

    getCurrentPlayerSymbol() {

        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            } 
        }
    }

    isFinished() {
       // if (this.isDraw() == true || this.getWinner() !== null)

    }

    getWinner() {
        if (this.isDraw() == true) {

            return null;
        } 
        else
        {

        }

    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.matrix[i][j] == null) {

                    return false;
                }

            }
        }
         
        return true;
    }

    isDraw() {

        return this.noMoreTurns() && this.getWinner() == null;
     }

    getFieldValue(rowIndex, colIndex) {

        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
