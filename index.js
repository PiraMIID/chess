
const figs = () => [
    {rook: "<i class=\"fas fa-chess-rook\"></i>"},
    {queen: "<i class=\"fas fa-chess-queen\"></i>"},
    {pawn: "<i class=\"fas fa-chess-pawn\"></i>"},
    {knight: "<i class=\"fas fa-chess-knight\"></i>"},
    {king: "<i class=\"fas fa-chess-king\"></i>"},
    {bishop: "<i class=\"fas fa-chess-bishop\"></i>"},
];

for (let row = 0; i < document.getElementsByClassName("container").length; i++) {
    for (let col = 0; j < document.getElementsByClassName("container")[i].children.length; j++) {
        document.getElementsByClassName("container").item(i).children.item(j).innerHTML
    }
}

/**
 * This function check then move is correct and remove opponent figure if they
 * is on this position
 */
function checkTargetPosition(x,y) {

}
