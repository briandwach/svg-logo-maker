class Text {
    constructor(userText, setColor) {
        this.userText = userText;
        this.setColor = setColor;
    }

    render() {
     return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.setColor}">${this.userText}</text>`;
    }
}

module.exports = Text;