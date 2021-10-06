class Position {
    position_x;
    position_y;

    constructor(position_x, position_y) {
        this._position_x = position_x;
        this._position_y = position_y;
    }

    get position_x() {
        return this._position_x;
    }

    set position_x(value) {
        this._position_x = value;
    }

    get position_y() {
        return this._position_y;
    }

    set position_y(value) {
        this._position_y = value;
    }
}
