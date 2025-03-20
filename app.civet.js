"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var react_2 = require("motion/react");
var react_jss_1 = require("react-jss");
var react_markdown_1 = __importDefault(require("react-markdown"));
var remark_math_1 = __importDefault(require("remark-math"));
// import rehypeMathjax from 'rehype-mathjax'  
var better_react_mathjax_1 = require("better-react-mathjax");
var shiki_1 = require("shiki");
var r = String.raw;
var useStyles = (0, react_jss_1.createUseStyles)({
    "slide": {
        // overflow: "hidden"
        margin: "0rem",
        padding: "3rem",
        height: "100vh",
        width: "100vw",
        background: "white",
    },
});
var Hero1 = function () {
    var classes = useStyles();
    var style = {
        fontSize: "96px",
        fontWeight: "700",
        lineHeight: "1",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
    };
    return react_1.default.createElement(react_2.motion.div, { style: style, initial: { scale: 0.2 }, animate: { scale: 1 } },
        react_1.default.createElement("h1", null, "The Inter Typeface"));
};
var Hero2 = function () {
    var classes = useStyles();
    var style = {
        fontSize: "72px",
        fontWeight: "700",
        lineHeight: "1",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return react_1.default.createElement("div", { style: style },
        react_1.default.createElement(react_2.motion.h1, { whileHover: { scale: 0.9 }, style: {
                textAlign: "center",
                display: "block"
            } },
            react_1.default.createElement("span", null, "Don't just read it;"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("span", null, "Fight it!")));
};
var Zlide = function () {
    var classes = useStyles();
    var style = {
        fontSize: "96px",
        fontWeight: "700",
        lineHeight: "1",
        marginBottom: "0.5em",
    };
    return react_1.default.createElement("div", { className: (classes.slide) || "" },
        react_1.default.createElement("h1", { style: style }, "The Inter Typeface"),
        react_1.default.createElement("p", null, "Inter is one of the world's most used typefaces \nwith applications ranging from computer interfaces, \nadvertising & airports, \nto NASA instrumentation & medical equipment"));
};
var Deck = function (_a) {
    var children = _a.children;
    var _b = react_1.default.useState(0), index = _b[0], setIndex = _b[1];
    var _c = react_1.default.useState(true), state = _c[0], setState = _c[1];
    // compute the number of children
    (0, react_1.useEffect)(function () {
        var onKeyDown = function (event) {
            if (event.key === "ArrowRight") {
                setIndex(function (index) {
                    return Math.min(index + 1, children.length - 1);
                });
            }
            if (event.key === "ArrowLeft") {
                return setIndex(function (index) {
                    return Math.max(index - 1, 0);
                });
            }
            ;
            return;
        };
        var onClick = function (event) {
            return setIndex(function (index) { return (index + 1) % children.length; });
        }; // TODO: deal with length dependency
        document.addEventListener("click", onClick);
        document.addEventListener("keydown", onKeyDown);
        // register cleanup function
        return function () {
            document.removeEventListener("click", onClick);
            return document.removeEventListener("keydown", onKeyDown);
        };
    }, []); // runs only once on mount
    return children[index];
};
var useTCStyles = (0, react_jss_1.createUseStyles)({
    text: {
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
    },
});
var TwoColumnExample = function () {
    var classes = useTCStyles();
    return react_1.default.createElement("div", null,
        react_1.default.createElement("header", null,
            react_1.default.createElement("h2", { style: { textAlign: "center", fontSize: "72px" } },
                "Two Column",
                react_1.default.createElement("span", { className: (classes.text) || "", style: {
                        color: "transparent",
                        background: "linear-gradient(90deg, #ff7e5f, #feb47b, #ff6a00)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text"
                    } }, " Layout "),
                "Example")),
        react_1.default.createElement("div", { style: { display: "flex" } },
            react_1.default.createElement("div", { style: { flex: 1, margin: "2em" } },
                react_1.default.createElement("h2", { style: { fontSize: "60px" } }, "Lorem Ipsum"),
                react_1.default.createElement("p", { style: { "fontSize": "24px" } }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
            react_1.default.createElement("div", { style: { flex: 1, margin: "2em" } },
                react_1.default.createElement("h2", { style: { fontSize: "60px" } }, "TODO List"),
                react_1.default.createElement("ul", { style: { listStylePosition: "inside" } },
                    react_1.default.createElement("p", { style: { fontSize: "36px" } },
                        react_1.default.createElement("li", null, "Bread"),
                        react_1.default.createElement("li", null, "Milk"),
                        react_1.default.createElement("li", null, "Butter"),
                        react_1.default.createElement("li", null, "Cheese"))))));
};
var MdMathSlide = function () {
    var md = r(templateObject_1 || (templateObject_1 = __makeTemplateObject(["```math\nint_0^infty e^{-x^2} dx = \frac{sqrt{pi}}{2}\n```"], ["\\`\\`\\`math\n\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\n\\`\\`\\`"])));
    return react_1.default.createElement("p", null,
        react_1.default.createElement(react_markdown_1.default, { remarkPlugins: [remark_math_1.default] }, md));
};
var MdSlide = function () {
    var markdown = "# Hi, Math!\n```math\nI := \\int_0^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\n```\n";
    return react_1.default.createElement("div", { style: { fontSize: "72px" } },
        react_1.default.createElement(react_markdown_1.default, { remarkPlugins: [remark_math_1.default] }, markdown));
};
var Unsplash = function (_a) {
    var _b = _a.id, id = _b === void 0 ? "Y19hE9fAOG4" : _b, _c = _a.width, width = _c === void 0 ? 1920 : _c, children = _a.children;
    return react_1.default.createElement("div", { style: {
            width: "100vw",
            height: "100vh",
            backgroundImage: "url(https://unsplash.com/photos/".concat(id, "/download?force=true&w=").concat(width, ")"),
            backgroundSize: "cover",
        } }, children);
};
var MathSlide1 = function () {
    return react_1.default.createElement(better_react_mathjax_1.MathJax, null,
        react_1.default.createElement("div", { style: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" } },
            react_1.default.createElement("p", { style: { display: "inline-block", fontSize: "96px" } }, r(templateObject_2 || (templateObject_2 = __makeTemplateObject(["$$int_0^{infty} e^{-x^2} dx = \frac{sqrt{pi}}{2}$$"], ["$$\\int_0^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$"]))))));
};
var MathSlide2 = function () {
    return react_1.default.createElement(better_react_mathjax_1.MathJax, null,
        react_1.default.createElement("div", { style: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" } },
            react_1.default.createElement("p", { style: { display: "inline-block", fontSize: "96px" } }, r(templateObject_3 || (templateObject_3 = __makeTemplateObject(["$$mathbb{E}[X] = mathbb{E}left[mathbb{E}[X | Y]\right]$$"], ["$$\\mathbb{E}[X] = \\mathbb{E}\\left[\\mathbb{E}[X | Y]\\right]$$"]))))));
};
var CodeExample = function () {
    var code = "function hello() {\n    console.log('Hello, world!');\n}\nconst doIt = () => {\n    hello();\n}";
    var html = highlighter.codeToHtml(code, { lang: "js", theme: "github-dark" });
    return react_1.default.createElement("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        } },
        react_1.default.createElement("div", { style: {
                fontSize: "36px",
                padding: "1em",
                borderRadius: "0.25em",
                width: "fit-content",
                background: highlighter.getTheme("github-dark").bg
            } },
            react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } })));
};
var root = client_1.default.createRoot(document.body);
var highlighter = undefined;
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, shiki_1.createHighlighter)({ themes: ["nord", "github-dark"], langs: ["js"] })];
                case 1:
                    highlighter = _a.sent();
                    console.log(highlighter);
                    console.log((highlighter.getTheme("github-dark")));
                    return [2 /*return*/, root.render(react_1.default.createElement(react_1.StrictMode, null,
                            react_1.default.createElement(better_react_mathjax_1.MathJaxContext, null,
                                react_1.default.createElement(Deck, null,
                                    react_1.default.createElement(CodeExample, null),
                                    react_1.default.createElement(MathSlide1, null),
                                    react_1.default.createElement(Unsplash, { id: "EvKXANO8MGw" }),
                                    react_1.default.createElement(MathSlide2, null),
                                    react_1.default.createElement(Unsplash, null,
                                        react_1.default.createElement("div", { style: {
                                                width: "100%",
                                                height: "100vh",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            } },
                                            react_1.default.createElement("h1", { style: {
                                                    fontSize: "96px",
                                                    fontWeight: "700",
                                                    lineHeight: "1",
                                                    color: "white",
                                                    textShadow: "0 0 10px rgba(0,0,0,0.5)"
                                                } }, "Le Mont Saint-Michel"))),
                                    react_1.default.createElement(Unsplash, { id: "sk3BZ5HsYTI" }),
                                    react_1.default.createElement(MdSlide, null),
                                    react_1.default.createElement(TwoColumnExample, null),
                                    react_1.default.createElement(Hero1, null),
                                    react_1.default.createElement(Hero2, null),
                                    react_1.default.createElement(Zlide, null)))))];
            }
        });
    });
}
init();
var templateObject_1, templateObject_2, templateObject_3;
