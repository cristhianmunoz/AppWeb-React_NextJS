"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Photographer_1 = require("./Entidades/Photographer");
var Portfolio_1 = require("./Entidades/Portfolio");
var CRUD_file_js_1 = require("./CRUD_file.js");
var inquirer = require('inquirer');
var path_photographers = "./Sources/photographers.txt";
var arrayPhotographers = [];
//tsc main.ts
//--------------------------------Functions---------------------------------------
function welcome() {
    console.log('\x1b[1m \x1b[31m Welcome to PholapSC \x1b[0m');
}
function goodBye() {
    console.clear();
    console.log('\x1b[1m \x1b[32m Goodbye, see you next time! \x1b[0m');
}
function toPause() {
    var answer = inquirer.prompt([
        {
            type: 'list',
            name: 'enter',
            message: 'Press ENTER to continue.',
            choices: ['Come back 😄', '¡Exit! 😭']
        }
    ]).then(function (answer) {
        if (answer.enter == 'Come back 😄') {
            inquirerMenu();
        }
        else {
            //nothing
            goodBye();
        }
    });
}
//---------------------------------READ FILE--------------------------------------------
//Preparation of Files
function readFiles() {
    return __awaiter(this, void 0, void 0, function () {
        var contenido, arrayPhotographersJSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, CRUD_file_js_1.leerArchivos)(path_photographers)];
                case 1:
                    contenido = _a.sent();
                    if (contenido != "") {
                        arrayPhotographersJSON = JSON.parse(contenido + "");
                        arrayPhotographers = arrayPhotographersJSON.map(getPhotographers);
                    }
                    else {
                        //nothing
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//Destructores del contenido guardado
function getPhotographers(item) {
    var photographer = new Photographer_1.Photographer(item.name, item.last_name, new Date(item.date_birth), item.id);
    var portfolios = item._portfolio.map(getPortfolios);
    photographer.Setportfolio(portfolios);
    return photographer;
}
function getPortfolios(item) {
    var portfolio = new Portfolio_1.Porfolio(item.category);
    var arrayImages = item.images.map(getImagesbyPortfolio);
    portfolio.setArray_Images(arrayImages);
    return portfolio;
}
function getImagesbyPortfolio(item) {
    return item;
}
//---------------------------------WRITE FILE--------------------------------------------
function writeFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(arrayPhotographers.length != 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, CRUD_file_js_1.escribirArchivos)(path_photographers, JSON.stringify(arrayPhotographers))];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
//------------------------------------MENU-----------------------------------------------
function inquirerMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var comprobador, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    welcome();
                    comprobador = 0;
                    //Una vez ejecutado recupero mis datos guardados en mi arreglo
                    return [4 /*yield*/, readFiles()];
                case 1:
                    //Una vez ejecutado recupero mis datos guardados en mi arreglo
                    _a.sent();
                    return [4 /*yield*/, inquirer
                            .prompt({
                            type: 'list',
                            name: 'action1',
                            message: 'What do you do?',
                            choices: ['Visualize portfolio', 'Know about Photographers', 'Are you new Photographer?', 'Edit profile', 'Delete profile', 'Close']
                        })
                            .then(function (answer) {
                            console.clear();
                            if (answer.action1 == 'Are you new Photographer?') {
                                createPhotographer();
                            }
                            else if (answer.action1 == 'Know about Photographers') {
                                showPhotographers();
                                setTimeout(function () { }, 3000);
                                console.clear();
                            }
                            else if (answer.action1 == 'Visualize portfolio') {
                                searchPhotographerbyID('Visualize portfolio');
                            }
                            else if (answer.action1 == 'Edit profile') {
                                searchPhotographerbyID('edit');
                            }
                            else if (answer.action1 == 'Delete profile') {
                                searchPhotographerbyID('delete');
                            }
                            else if (answer.action1 == 'Close') {
                                comprobador = -1;
                                goodBye();
                            }
                        })];
                case 2:
                    answer = _a.sent();
                    setTimeout(function () { }, 3000);
                    return [2 /*return*/];
            }
        });
    });
}
//--------------------FUNCTIONS CRUD-----ALTO NIVEL-----------------------
function createPhotographer() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, newPerson, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, inquirer
                            .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is your name?'
                            },
                            {
                                type: 'input',
                                name: 'last_name',
                                message: 'What is your last_name?'
                            },
                            {
                                type: 'input',
                                name: 'date_birth',
                                message: 'Which is your date birth?',
                                "default": '01-01-2000'
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'Which is your ID?',
                                "default": '17000000**'
                            },
                            {
                                type: 'confirm',
                                name: 'confirm_Portfolio',
                                message: 'Wish you have a new Portfolio?',
                                "default": true
                            }
                        ])];
                case 1:
                    respuesta = _a.sent();
                    newPerson = new Photographer_1.Photographer(respuesta.name, respuesta.last_name, new Date(respuesta.date_birth), respuesta.id);
                    arrayPhotographers.unshift(newPerson);
                    writeFile();
                    if (!respuesta.confirm_Portfolio) return [3 /*break*/, 3];
                    return [4 /*yield*/, setImages(0)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function editPhotographer(index_found) {
    return __awaiter(this, void 0, void 0, function () {
        var update_Info, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, inquirer
                            .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Name:',
                                "default": arrayPhotographers[index_found].name
                            },
                            {
                                type: 'input',
                                name: 'last_name',
                                message: 'Last Name:',
                                "default": arrayPhotographers[index_found].last_name
                            },
                            {
                                type: 'input',
                                name: 'date_birth',
                                message: 'Date Birth',
                                "default": '01-01-2000'
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'Which is your ID?',
                                "default": arrayPhotographers[index_found].id.toString()
                            },
                            {
                                type: 'confirm',
                                name: 'confirm_Portfolio',
                                message: 'Wish you have a new Portfolio?',
                                "default": true
                            }
                        ])];
                case 1:
                    update_Info = _a.sent();
                    arrayPhotographers[index_found].name = update_Info.name;
                    arrayPhotographers[index_found].last_name = update_Info.last_name;
                    arrayPhotographers[index_found].date_birth = new Date(update_Info.date_birth);
                    arrayPhotographers[index_found].id = update_Info.id;
                    if (!update_Info.confirm_Portfolio) return [3 /*break*/, 3];
                    return [4 /*yield*/, setImages(index_found)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, writeFile()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 6];
                case 6:
                    setTimeout(function () { }, 3000);
                    return [4 /*yield*/, toPause()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deletePhotographer(id) {
    return __awaiter(this, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, readFiles()];
                case 1:
                    _a.sent();
                    //Use .splice to identify the value to delete into array
                    //and indicate only an element of array with '1'
                    arrayPhotographers.splice(id, 1);
                    return [4 /*yield*/, writeFile()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    console.error(e_3);
                    return [3 /*break*/, 4];
                case 4:
                    setTimeout(function () { }, 3000);
                    return [4 /*yield*/, toPause()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function showPhotographers() {
    return __awaiter(this, void 0, void 0, function () {
        var e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readFiles()];
                case 1:
                    _a.sent();
                    console.log(arrayPhotographers);
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    console.error(e_4);
                    return [3 /*break*/, 3];
                case 3:
                    setTimeout(function () { }, 5000);
                    return [2 /*return*/];
            }
        });
    });
}
function showPortfolio(indexFound) {
    return __awaiter(this, void 0, void 0, function () {
        var e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readFiles()];
                case 1:
                    _a.sent();
                    console.log(arrayPhotographers[indexFound].portfolio());
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _a.sent();
                    console.error(e_5);
                    return [3 /*break*/, 3];
                case 3:
                    setTimeout(function () { }, 5000);
                    return [2 /*return*/];
            }
        });
    });
}
function searchPhotographerbyID(action) {
    return __awaiter(this, void 0, void 0, function () {
        var find_param_1, index_found, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    return [4 /*yield*/, inquirer
                            .prompt({
                            type: 'input',
                            name: 'id_search',
                            message: 'Write your ID: '
                        })];
                case 1:
                    find_param_1 = _a.sent();
                    return [4 /*yield*/, readFiles()];
                case 2:
                    _a.sent();
                    index_found = arrayPhotographers.findIndex(function (the_most_search) { return the_most_search.id == find_param_1.id_search; });
                    if (!(index_found >= 0)) return [3 /*break*/, 9];
                    if (!(action == 'edit')) return [3 /*break*/, 4];
                    return [4 /*yield*/, editPhotographer(index_found)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 4:
                    if (!(action == 'delete')) return [3 /*break*/, 6];
                    return [4 /*yield*/, deletePhotographer(index_found)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    if (!(action == 'Visualize portfolio')) return [3 /*break*/, 8];
                    return [4 /*yield*/, showPortfolio(index_found)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    console.log('Photographer does not Found');
                    _a.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    e_6 = _a.sent();
                    console.error(e_6);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
function setImages(index_photographer) {
    return __awaiter(this, void 0, void 0, function () {
        var setImages_1, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.clear();
                    return [4 /*yield*/, inquirer
                            .prompt([
                            {
                                type: 'input',
                                name: 'category',
                                message: 'Name of category: '
                            }, {
                                type: 'input',
                                name: 'image1',
                                message: 'Image 1: '
                            }, {
                                type: 'input',
                                name: 'image2',
                                message: 'Image 2: '
                            }, {
                                type: 'input',
                                name: 'image3',
                                message: 'Image 3: '
                            }, {
                                type: 'input',
                                name: 'image4',
                                message: 'Image 4: '
                            }, {
                                type: 'input',
                                name: 'image5',
                                message: 'Image 5: '
                            }
                        ])];
                case 1:
                    setImages_1 = _a.sent();
                    arrayPhotographers[index_photographer].newPortfolio(setImages_1.category);
                    arrayPhotographers[index_photographer]._portfolio[0].array_newImage(setImages_1.image1);
                    arrayPhotographers[index_photographer]._portfolio[0].array_newImage(setImages_1.image2);
                    arrayPhotographers[index_photographer]._portfolio[0].array_newImage(setImages_1.image3);
                    arrayPhotographers[index_photographer]._portfolio[0].array_newImage(setImages_1.image4);
                    arrayPhotographers[index_photographer]._portfolio[0].array_newImage(setImages_1.image5);
                    return [4 /*yield*/, writeFile()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_7 = _a.sent();
                    console.error(e_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
inquirerMenu();
