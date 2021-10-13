import {Button, Col, Container,Dropdown, DropdownButton, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Board.css';

import '@fortawesome/react-fontawesome'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import math from "mathjs";


// import '../../images'

//todo: bollen variable to use when player click figure to move

/*
    I want to add soccer table to player like :  1-0 in matches
 */

/*
    important about react:
    - is create to using mostly function so every action ,ust be function
 */

const figs = [
    {rook: "<div style= background-image: rel='../../images/br.png'>"},
    {queen: "<div style= background-image: rel='../../images/bq.png'>"},
    {pawn: "<div style= background-image: rel='../../images/bp.png'>"},
    {knight: "<div style= background-image: rel='../../images/bn.png'>"},
    {king: "<div style= background-image: rel='../../images/bk.png'>"},
    {bishop: "<div style= background-image: rel='../../images/bb.png'>"},
];

// this is the copy of fig
const [...fig] = figs;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

class BoardItems {
    board_matrix = createFidlesBoardTags(8);
}

function initFirstRow(whitePlayer) {
    // const first_row_white = [new Rook(whitePlayer,0,0) , new Knight(whitePlayer))]
    // let list = math.matrix();
    // for (let i = 0; i < 8; i++) {
    //
    // }
}

function createGameMatrix(whitePlayer = "white", blackPlayer = "black") {
    let matrix= [];
    initFirstRow(whitePlayer);
    matrix.push()
    initFirstCol(whitePlayer);
    return matrix;
}
function Board() {


    let main_game_matrix =createGameMatrix();
    let board_matrix = createFidlesBoardTags(8);
    return (
        <div className="Board">
            <Container>
                <input id={"x"} type={"number"}/>
                <input id={"y"} type={"number"}/>
                <Button onClick={update}>Ustaw</Button>
                {/*<Dropdown id={"figure"}>*/}
                    <DropdownButton id={"figure"} title={"Select figure"}>
                        {figs.map((value, index) => {
                            return <Dropdown.Item id={"dropItem"} onClick={update}>{value.rook}</Dropdown.Item>
                        })}
                        {/*    <Dropdown.Item> { .rook }</Dropdown.Item>*/}
                        {/*    <Dropdown.Item> { figs().queen }</Dropdown.Item>*/}
                        {/*    <Dropdown.Item> { figs().bishop }</Dropdown.Item>*/}
                        {/*    <Dropdown.Item> { figs().king }</Dropdown.Item>*/}
                        {/*    <Dropdown.Item> { figs().pawn }</Dropdown.Item>*/}
                        {/*    <Dropdown.Item> { figs().knight}</Dropdown.Item>*/}
                    </DropdownButton>
                {/*</Dropdown>*/}

                {
                    board_matrix
                }
            </Container>

        </div>
    );
}

export default Board;

// let board_matrix = createFidlesBoardTags(8);
// delay(10000).then(r => {
//     let elementsByClassNameElement = document.getElementsByClassName("container");
//     console.log(elementsByClassNameElement.item(0).children);
//     elementsByClassNameElement.item(0).children[3].innerHTML = "<h2>essa</h2>";
// });
// todo is working but just when board is complete
// let board_matrix = createFidlesBoardTags(8);
function update() {
    let detailedReactHTMLElement = document.createElement("div");
    detailedReactHTMLElement.style.width = "100px";
    // detailedReactHTMLElement.innerHTML = "<i class=\"fas fa-chess-rook\" style='height: 100px; width: 100px'></i>";
    detailedReactHTMLElement.innerHTML = document.getElementById("dropItem").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    console.log(x);
    console.log(y);
    if( x > 0 && x < 9 && y > 0 && y < 9) {
        document.getElementsByClassName("container")[0].getElementsByClassName("row")[x]
            .getElementsByClassName("col")[y].appendChild(detailedReactHTMLElement);
    }
}



// document.getElementsByClassName("container")[0].getElementsByClassName("row")[0].getElementsByClassName("col")[0].appendChild(detailedReactHTMLElement);

// todo: This can be better. Best way is create matrix just with object figure.
function createFidlesBoardTags(size) {
    let white_first = [];
    let black_first = [];
    let matrix = [];
    for (let i = 1; i < (size / 2) + 1; i++) {
        white_first.push(
            <Col className="white" children={i*2}/>
        );
        black_first.push(
            <Col className="black" children={new Figure("White",null , i*2+1)}/>
        );
        black_first.push(
            <Col className="white"/>
        );
        white_first.push(
            <Col className="black"/>
        );
    }
    for (let i = 1; i < size + 1; i++) {
        matrix.push(<Row>{white_first}</Row>);
        matrix.push(<Row>{black_first}</Row>);
    }
    return matrix;
}
