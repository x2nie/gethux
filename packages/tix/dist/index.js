"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tux_1 = __importDefault(require("tux"));
class Tix extends tux_1.default {
    //
    lox(msg) {
        console.log('weee!', msg);
    }
}
exports.default = Tix;
