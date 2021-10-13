// todo: Player what create game and make config when click on start button
/**
 * Init game method
 * @param admin_player - player what create room and invite Host_game to game
 * @param host_player - invited player what don't have access to config
 * @param time_game - time from timer gui with time set by admin_player
 */
const startGame = (admin_player, host_player, time_game) => {

}

const setFigureToPosition = (figure) => {
    return figure
}

const {html,position,style} = figure;


// todo: change concept example
// todo: May better will be create full ready set to players in new class


const player = {
    color: '',
    figures: {
        pawn_figures: [],
        rook_figures: [],
        bishop_figures: [],
        knight_figures: [],
        queen_figures: [],
        king_figure: {}
    },
    timeToEnd: new Data(),  //todo: learn how this use

    setKing: (king) => this.figures.king_figure = king,

//    todo: here will are all possible changes on board of player
    getFigureByName: (name)
}


const pawn = {
    name: 'pawn',
    //will be loaded to target point on board when player make move
    html: '',
    //css moving (is not necessary but fan)
    animation: '',
    position: {
        x: 0,
        y: 0
    },
    updatePosition: (x, y) => {
        this.position.y = y;
        this.position.x = x;
    }

}

// const figure = {
//     ...name,  todo: It is use full here?
//     //will be loaded to target point on board when player make move
//     html: '',
//     //css moving (is not necessary but fan)
//     animation: '',
//     position: {
//         x: 0,
//         y: 0
//     },
//     updatePosition: (x, y) => {
//         this.position.y = y;
//         this.position.x = x;
//     }
// }

//todo this class is best way
class Figure {
    /**
     player = Player;
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

    isMoveCorrect(matrix_board, x_target, y_target) {
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

/*
New plan:
figure = new Bishop(some data);
 */
// todo : https://stackoverflow.com/questions/57066231/css-rotate-a-div-180-degrees-in-place/57068149
// this link is answer how to relate board to second player

