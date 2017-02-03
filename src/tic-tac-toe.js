class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.winner = null;
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

            var winnerFounded = false;

            // Check rows
            for (var i = 0; i < 3; i++) {
                var count = 0;
                for (var j = 0; j < 3; j++) {
                    if (this.matrix[i][j] == this.currentPlayer)
                        count++;
                }
                if (count == 3) {
                    winnerFounded = true;
                    break;
                }
            }

            // Check columns
            for (var i = 0; i < 3; i++) {
                var count = 0;
                for (var j = 0; j < 3; j++) {
                    if (this.matrix[j][i] == this.currentPlayer)
                        count++;
                }
                if (count == 3) {
                    winnerFounded = true;
                    break;
                }
            }
            
            // Check diagonals
            var count1 = 0;
            var count2 = 0;
            for (var i = 0; i < 3; i++) {
                
                if (this.matrix[i][i] == this.currentPlayer) {
                    count1++;
                }
                if (this.matrix[i][2 - i] == this.currentPlayer) {
                    count2++;
                }
            }
            if (count1 == 3 || count2 == 3) {
                winnerFounded = true;
            }

            if (winnerFounded) {
                this.winner = this.currentPlayer;
            }

            if (this.currentPlayer == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            } 
        }
    }

    isFinished() {

       return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {

        return this.winner;
    }

    noMoreTurns() {
        var result = true;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.matrix[i][j] == null) {

                    result = false;
                }

            }
        }
         
        return result;
    }

    isDraw() {

        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {

        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
