import { create } from 'jss'
// @ts-ignore
import jss_preset from 'jss-preset-default'; const preset = jss_preset.default 
const jss = create(preset())

const css =  {
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
}

console.log(jss.createStyleSheet(({'@global': css})).toString())