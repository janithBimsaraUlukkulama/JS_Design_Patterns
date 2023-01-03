/* Any class should be substitutable for its parent class without unexpected consequences.
    In others words, if the classes Cat and Dog extend the class Animal,
    then we would expect all of the functionality held within the Animal class to behave normally for a Cat and Dog object.
 */
// https://www.udemy.com/course/design-patterns-javascript/learn/lecture/14401054
// https://duncan-mcardle.medium.com/solid-principle-3-liskov-substitution-javascript-fdb6af8ee1ea

class Rectangle
{
    constructor(width, height)
    {
        this._width = width;
        this._height = height;
    }

    get width() { return this._width; }
    get height() { return this._height; }

    set width(value) { this._width = value; }
    set height(value) { this._height = value; }

    get area()
    {
        return this._width * this._height;
    }

    toString()
    {
        return `${this._width}×${this._height}`;
    }
}

class Square extends Rectangle
{
    constructor(size)
    {
        super(size, size);
    }

    set width(value)
    {
        this._width = this._height = value;
    }

    set height(value)
    {
        this._width = this._height = value;
    }
}

let useIt = function(rc)
{
    let width = rc._width;
    rc.height = 10;
    console.log(
        `Expected area of ${10*width}, ` +
        `got ${rc.area}`
    );
};

let rc = new Rectangle(2,3);
useIt(rc);

let sq = new Square(5);
useIt(sq);
