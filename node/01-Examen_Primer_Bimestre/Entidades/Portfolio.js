"use strict";
exports.__esModule = true;
exports.Porfolio = void 0;
var Porfolio = /** @class */ (function () {
    function Porfolio(categoria) {
        this.category = categoria;
        this.images = [];
    }
    Porfolio.prototype.array_Images = function () {
        return this.images;
    };
    Porfolio.prototype.setArray_Images = function (value) {
        this.images = value;
    };
    Porfolio.prototype.array_newImage = function (newImage) {
        this.images.unshift(newImage);
    };
    return Porfolio;
}());
exports.Porfolio = Porfolio;
