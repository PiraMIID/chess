
class Figure {
    player = Player;
    /**
     * will be binding with fiddle at board
     */
    html;


    constructor(player) {
        this.player = player;
    }


    /**
     * function is call when player have active some figure
     * and click point where want to move
     * @param matrix_board - the board as matrix
     * @param x_target
     * @param y_target
     */

    isMoveCorrect(matrix_board,  x_target, y_target) {
        if (this.x === x_target && this.y === y_target) return false;
        if (matrix_board[y_target][y_target].player === this.player) return false;
    }

    move(matrix_board, x_target, y_target) {
        if (this.isMoveCorrect(matrix_board, x_target, y_target)) {
            this.x = x_target;
            this.y = y_target;
        }
    }

}