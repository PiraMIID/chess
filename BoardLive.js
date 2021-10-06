class BoardLive {
    type;
    chessBoard = Position;

    changePosition(Figure ,actual_position, new_position) {
        this.Figure = Figure;

    }

    constructor(type, chessBoard) {
        this._type = type;
        this._chessBoard = chessBoard;
    }
    
    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get chessBoard() {
        return this._chessBoard;
    }

    set chessBoard(value) {
        this._chessBoard = value;
    }
}

// stany pola : zajęty, pusty, przeciwnik
