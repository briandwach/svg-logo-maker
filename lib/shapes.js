const shapesArray = ['Circle', 'Triangle', 'Square'];

class Shape {
    constructor(setColor) {
      this.setColor = setColor;
    }
}

class Circle extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
    return `<circle cx='150' cy='100' r='80' fill='${this.setColor}'/>`;
    }
}

class Triangle extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
    return `<polygon points='150 20, 70 180, 230 180' fill='${this.setColor}'/>`;
    }
}

class Square extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
    return `<rect x='70' y='20' width='160' height='160' fill='${this.setColor}'/>`;
    }
}

module.exports = { shapesArray, Circle, Triangle, Square };