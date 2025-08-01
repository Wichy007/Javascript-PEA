// Type Aliases

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 100, y: 100});

type ID = number | string;

function printId(id: ID) {
    console.log("Your ID is: " + id);
}

printId(101);
printId("202");
