var title = document.getElementById('title');
var Title = /** @class */ (function () {
    // eslint-disable-next-line no-useless-constructor
    function Title(title) {
        this.title = title;
    }
    return Title;
}());
var msg = new Title('Welcome to TypeScript');
title.textContent = "" + msg.title;
