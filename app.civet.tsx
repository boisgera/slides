// @ts-nocheck
import React, { useEffect, useRef, useState, StrictMode } from "react"
import ReactDOM from 'react-dom/client';
import { motion, MotionStyle } from 'motion/react'
import { createUseStyles } from 'react-jss'
import Markdown from 'react-markdown'
import remarkMath from 'remark-math'
// import rehypeMathjax from 'rehype-mathjax'  
import { MathJaxContext, MathJax } from 'better-react-mathjax'
import { Canvas, useFrame } from '@react-three/fiber';

import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import gitHubDark from '@shikijs/themes/github-dark'
import js from '@shikijs/langs/javascript'

const r = String.raw

const useStyles = createUseStyles({
    "slide": {
        // overflow: "hidden"
        margin: "0rem",
        padding: "3rem",
        height: "100vh",
        width: "100vw",
        background: "white",
    },
})

const Hero1 = () => { 
    const classes = useStyles()
    const style = {
        fontSize: "96px",
        fontWeight: "700",
        lineHeight: "1", 
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }
        // textAlign: "center"
    return <motion.div 
        style={style} 
        initial={{scale:0.2}} 
        animate={{scale:1}}>
        <h1>{"The Inter Typeface"}</h1>
    </motion.div>
}

const Hero2 = () => { 
    const classes = useStyles()
    const style = {
        fontSize: "72px",
        fontWeight: "700",
        lineHeight: "1", 
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    return <div style={style}>
        <motion.h1 
            whileHover={ {scale: 0.9} } 
            style={ {
                textAlign: "center", 
                display: "block"
        }
            }>
            <span>{"Don't just read it;"}</span>
            <br></br> 
            <span>{"Fight it!"}</span>
        </motion.h1>
    </div>
}

const Zlide = () => { 
    const classes = useStyles()
    const style = {
        fontSize: "96px",
        fontWeight: "700",
        lineHeight: "1", 
        marginBottom: "0.5em",
    }
    return <div className={(classes.slide) || ""} >
        <h1 style={style}>{"The Inter Typeface"}</h1>
        <p>{`Inter is one of the world's most used typefaces 
with applications ranging from computer interfaces, 
advertising & airports, 
to NASA instrumentation & medical equipment`}
        </p>
    </div>
}

type NumberStateHook = [number, React.Dispatch<React.SetStateAction<number>>]

const useFragmentState = (initialIndex = 0) : NumberStateHook => {
    // Parse the current URL fragment to get the initial index
    const getIndexFromFragment = () => {
        const fragment = window.location.hash.replace("#", "");
        if (fragment) return parseInt(fragment, 10); else return initialIndex
    }

    const [index, setIndex] = useState(getIndexFromFragment())

    // Update the URL fragment whenever the index changes
    useEffect(
        () => { window.location.hash = index.toString(); },
        [index])

    // Listen for changes to the URL fragment (e.g., back/forward navigation)
    useEffect(
        () => { 
            const handleHashChange = () => {
                const newIndex = getIndexFromFragment()
                if (newIndex !== index) {
                    setIndex(newIndex);
                };return
            }
            window.addEventListener("hashchange", handleHashChange)
            return () => { window.removeEventListener("hashchange", handleHashChange); }
        },
        [index])

    return [index, setIndex]
}


const Deck = ({children}) => {
    const [index, setIndex] = useFragmentState(0)

    useEffect(
        () => {
            const onKeyDown = (event) => {
                if (event.key === "ArrowRight") {
                    setIndex((index) => { 
                        return Math.min(index + 1, children.length - 1)
                    })
                }
                if (event.key === "ArrowLeft") {
                    return setIndex((index) => { 
                        return Math.max(index - 1, 0)
                    })
                };return
            }
            document.addEventListener("keydown", onKeyDown)
            // onClick := (event) => 
            //     setIndex (index) => (index + 1) % children.length // TODO: deal with length dependency
            // onClick |> document.addEventListener "click", .
            // register cleanup function
            return () => { 
                return document.removeEventListener("keydown", onKeyDown)
            }
        },
                // onClick |> document.removeEventListener "click", . 

        []) // runs only once on mount

    return children[index]
}


const useTCStyles = createUseStyles({
    text:  {
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
    },
})

const TwoColumnExample = () => {
    const classes = useTCStyles()
    return <div>
        <header>
            <h2 style={{textAlign: "center", fontSize: "72px"}}>
                Two Column
                <span className={(classes.text) || ""} style={ {
                    color: "transparent",
                    background: "linear-gradient(90deg, #ff7e5f, #feb47b, #ff6a00)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text"
                }
                    }> Layout </span>
                Example
            </h2>
        </header>
        <div style={{display: "flex"}}>
            <div style={{flex: 1, margin: "2em"}}>
                <h2 style={{fontSize: "60px"}}>Lorem Ipsum
                </h2>
                <p style={{"fontSize": "24px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div style={{flex: 1, margin: "2em"}}>
                <h2 style={{fontSize: "60px"}}>TODO List 
                </h2>
                <ul style={{listStylePosition: "inside"}}>
                    <p style={{fontSize: "36px"}}>
                        <li>Bread
                        </li>
                        <li>Milk
                        </li>
                        <li>Butter
                        </li>
                        <li>Cheese
                        </li>
                    </p>
                </ul>
            </div>
        </div>
    </div>
}

const MdMathSlide = () => {
    const md = r`\`\`\`math
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
\`\`\``
    return <p>
        <Markdown remarkPlugins={[remarkMath]}>
            {md}
        </Markdown>
    </p>
}


const MdSlide = () => { // TODO: solve the double \ issue in Math?
    const markdown = `# Hi, Math!
\`\`\`math
I := \\int_0^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
\`\`\`
`
    return <div style={{fontSize: "72px"}}>
        <Markdown 
            remarkPlugins={[remarkMath]}> 
            {/* rehypePlugins={[rehypeMathjax]} */}
            {markdown}
        </Markdown>
    </div>
}

const Unsplash = ({id="Y19hE9fAOG4", width=1920, children}) => { 
    return <div 
        style={ {
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(https://unsplash.com/photos/${id}/download?force=true&w=${width})`,
            backgroundSize: "cover",
    }
        }>
        {children}
    </div>
}

const MathSlide1 = () => {
    return <MathJax>
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p style={{display: "inline-block", fontSize: "96px"}}>
                {r`$$\int_0^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$`}
            </p>
        </div>
    </MathJax>
}

const MathSlide2 = () => {
    return <MathJax>
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p style={{display: "inline-block", fontSize: "96px"}}>
                {r`$$\mathbb{E}[X] = \mathbb{E}\left[\mathbb{E}[X | Y]\right]$$`}
            </p>
        </div>
    </MathJax>
}



const CodeExample = () => {
    const code = `function hello__() {
    console.log('Hello, world!');
}
const doIt = () => {
    hello__(); // Or don't !!!
}`
    const html = highlighter.codeToHtml(code, {lang: "js", theme: "github-dark"})
    return <div 
        style={             {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
    }
        }>
        <div 
            style={ {
                fontSize: "36px",
                padding: "1em",
                borderRadius: "0.25em",
                width: "fit-content",
                background: highlighter.getTheme("github-dark").bg
        }
            }>
            <div dangerouslySetInnerHTML={ {__html: html} } />
        </div>
    </div>
}

const Box = (props) => {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => mesh.current.rotation.x += delta)
    return <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
}

const ThreeBox = () => {
    return <div style={{width: '100vw', height: '100vh'}}>
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight 
                position={[10, 10, 10]} 
                angle={0.15} 
                penumbra={1} 
                decay={0} 
                intensity={Math.PI} />
            <pointLight 
                position={[-10, -10, -10]} 
                decay={0} 
                intensity={Math.PI} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
}

const TextSubmit = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        return setInputValue(event.target.value)
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(inputValue)
        return setInputValue("")
    }

    return <form onSubmit={handleSubmit}>
      <label htmlFor="textInput">
        Enter Text:
      </label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
       />
      <button type="submit">
        Submit
      </button>
    </form>
}

const PythonExample = () => {
    const [value, setValue] = useState("")

    return <>
    <TextSubmit onSubmit={(code) => { return setValue(pyodide.runPython(code)) }} />
    <pre>
        {value}
    </pre>
    </>
}
        

const root = ReactDOM.createRoot(document.body)

let highlighter = null
let pyodide = null

async function init() {
    // Shiki Async
    highlighter = await createHighlighterCore({
        themes: [gitHubDark],
        langs: [js],
        engine: createJavaScriptRegexEngine(),
    })
    // Pyodide Async
    pyodide = await loadPyodide()

    // Render
    return root.render(
        <StrictMode> 
            <MathJaxContext>
                <Deck>
                    <PythonExample />
                    <CodeExample />
                    <ThreeBox />
                    <MathSlide1 />
                    <MathSlide2 />
                    <Unsplash id="EvKXANO8MGw" />
                    <Unsplash>
                        <div style={ {
                            width: "100%", 
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <h1 style={ {
                                fontSize: "96px",
                                fontWeight: "700",
                                lineHeight: "1",
                                color: "white",
                                textShadow: "0 0 10px rgba(0,0,0,0.5)"
                            }
                            }>{"Le Mont Saint-Michel"}
                            </h1>
                        </div>
                    </Unsplash>
                    <Unsplash id="sk3BZ5HsYTI" />
                    <TwoColumnExample />
                    <Hero1 />
                    <Hero2 />
                    <Zlide />
                </Deck>
            </MathJaxContext>
        </StrictMode>)
}

init()