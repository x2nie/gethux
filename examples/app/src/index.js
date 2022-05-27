"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tux_1 = __importDefault(require("tux"));
var tix_1 = __importDefault(require("tix"));
var pet = new tux_1.default();
pet.lox('foobar!');
var pet2 = new tix_1.default();
pet2.lox('zoobr!');
