"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jss_1 = require("jss");
// @ts-ignore
var jss_preset_default_1 = __importDefault(require("jss-preset-default"));
var preset = jss_preset_default_1.default.default;
var jss = (0, jss_1.create)(preset());
var css = {
    "*": {
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
    },
    html: {
        fontFamily: ["Inter", "sans-serif"],
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "black",
        backgroundColor: "white",
    },
    code: {
        fontFamily: ["Jetbrains Mono", "monospace"],
        fontSize: "inherit",
        lineHeight: "inherit",
        fontWeight: 400,
    },
};
console.log(jss.createStyleSheet(({ '@global': css })).toString());
