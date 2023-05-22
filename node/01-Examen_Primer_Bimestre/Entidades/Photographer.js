"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Photographer = void 0;
var Portfolio_1 = require("./Portfolio");
var Person = /** @class */ (function () {
    function Person(name_param, last_name_param, date_birth_param, id_param) {
        this.name = name_param;
        this.last_name = last_name_param;
        this.date_birth = date_birth_param;
        this.age = this.getAge_years();
        this.id = id_param;
    }
    //Get Age in Number -> Integer
    //How to do?
    //Calculate the years getting date_birth
    Person.prototype.getAge_years = function () {
        var today = new Date();
        var age_param = today.getFullYear() - this.date_birth.getFullYear();
        var months_param = today.getMonth() - this.date_birth.getMonth();
        if (months_param < 0 || (months_param === 0 && today.getDate() < this.date_birth.getDate())) {
            age_param--;
        }
        return age_param;
    };
    return Person;
}());
//----------------------------------------------------------------------
var Photographer = /** @class */ (function (_super) {
    __extends(Photographer, _super);
    function Photographer(name_param, last_name_param, date_birth_param, id_param) {
        var _this = _super.call(this, name_param, last_name_param, date_birth_param, id_param) || this;
        //Atributos propios de un photographer
        _this._portfolio = [];
        return _this;
    }
    Photographer.prototype.portfolio = function () {
        return this._portfolio;
    };
    Photographer.prototype.Setportfolio = function (value) {
        this._portfolio = value;
    };
    Photographer.prototype.newPortfolio = function (category) {
        this._portfolio.unshift(new Portfolio_1.Porfolio(category));
    };
    return Photographer;
}(Person));
exports.Photographer = Photographer;
