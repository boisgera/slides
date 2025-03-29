// @ts-nocheck
import { create } from 'jss'
import jss_preset from 'jss-preset-default'
const jss = create(jss_preset())

const css =  {
    "*": {
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
    },
    html: {
        fontFamily: ["Inter", "sans-serif"],
        fontSize: "36px",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "black",
        backgroundColor: "white",
    },
    h3: {
        fontSize: "60px",
        textAlign: "center",
        fontWeight: 600,
        lineHeight: 1.0,
        marginBottom: "0.75rem",
    },
    p:  {
        marginBottom: "calc(0.75rem/2)",
    },
    "li > p": {
        display: "inline-block",
        marginBottom: "0rem",
    },
    ul: {
        display: "inline-block",
    },
    li: {
        listStylePosition: "inside",
        paddingLeft: 0,
        marginBottom: "calc(0.75rem / 2)",
    },
    code: {
        fontFamily: ["Jetbrains Mono", "monospace"],   
        fontSize: "inherit",
        lineHeight: "inherit",
        fontWeight: 400,
    },
}

const cssText = jss.createStyleSheet(({'@global': css})).toString()

export var style = document.createElement("style")
style.id = "stylish"
style.textContent = cssText
