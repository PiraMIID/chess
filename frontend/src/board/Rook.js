
class Rook extends Figure {

    constructor(player, x, y) {
        super(player, x, y);
    }


    isMoveCorrect(matrix_board, x_target, y_target) {
        super.isMoveCorrect(matrix_board, x_target, y_target);
        if (this.x === x_target) {
            for (let i = this.y; i < y_target; i++) {
                if (matrix_board[this.x][i] !== null) return false;
            }
        }

        if (this.y === y_target) {
            for (let i = this.x; i < x_target; i++) {
                if (matrix_board[i][this.y] !== null) return false;
            }
        }
        return true;
    }

    move(matrix_board, x_target, y_target) {
        super.move(matrix_board, x_target, y_target);
    }
}