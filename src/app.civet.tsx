// @ts-nocheck

import React from "react"
import {StrictMode, useContext, useEffect, useRef, useState} from "react" 
import ReactDOM from "react-dom/client"
import {motion, MotionStyle} from "motion/react"
import {createUseStyles} from "react-jss"

import Markdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

// <style> HTML Element
import { style } from './styles.civet.jsx'

// import { math, MathJaxContext } from './math.civet'
import {ThreeBox} from "./threebox.civet.jsx"
import {CodeContext, Code, CodeExample} from "./code.civet.jsx"
import {UnsplashExample} from "./unsplash.civet.jsx"

const r = String.raw

const useStyles = createUseStyles({
  "slide": {
    margin: "0rem",
    padding: "3rem",
    height: "100vh",
    width: "100vw",
    background: "white",
  },
})

const InterHero = () => { 
  const style = {
    fontSize: "96px",
    fontWeight: "700",
    lineHeight: "1", 
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  }
  return <motion.div 
    style={style} 
    initial={{scale:0.2}} 
    animate={{scale:1}}>
    <h1>
      {"The Inter Typeface"}
    </h1>
  </motion.div>
}

const DontJustReadItFightIt = () => { 
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
      whileHover={{scale: 0.9}} 
      style={{
        textAlign: "center", 
        display: "block",
    }}
    >
      <span>
        {"Don't just read it;"}
      </span>
      <br /> 
      <span>
        {"Fight it!"}
      </span>
    </motion.h1>
  </div>
}

const AboutInter = () => { 
  const classes = useStyles()
  const style = {
    fontSize: "96px",
    fontWeight: "700",
    lineHeight: "1", 
    marginBottom: "0.5em",
  }
  return <div className={(classes.slide) || ""} >
    <h1 style={style}>
      {"The Inter Typeface"}
    </h1>
    <p>
      {`Inter is one of the world's most used typefaces 
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
    () => { 
        window.location.hash = index.toString()
        return
    },
    [index])

  // Listen for changes to the URL fragment (e.g., back/forward navigation)
  useEffect(
    () => { 
      const handleHashChange = () => {
        const newIndex = getIndexFromFragment()
        if (newIndex !== index) {
          return setIndex(newIndex)
        };return
      }
      window.addEventListener("hashchange", handleHashChange)
      return () => window.removeEventListener("hashchange", handleHashChange)
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
      return () => document.removeEventListener("keydown", onKeyDown)
    },
    [])

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
      <h2 style = {{textAlign: "center", fontSize: "72px"}}>
        {"Two Column"}
        <span className={(classes.text) || ""} 
          style ={{
            color: "transparent",
            background: "linear-gradient(90deg, #ff7e5f, #feb47b, #ff6a00)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
        }}
        > 
          {" Layout "}
        </span>
        {"Example"}
      </h2>
      <div style={{display: "flex"}}>
        <div style={{flex: 1, margin: "2em"}}>
          <h2 style={{fontSize: "60px"}}>{"Lorem Ipsum"}
          </h2>
          <p style={{"fontSize": "24px"}}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </p>
        </div>
        <div style={{flex: 1, margin: "2em"}}>
          <h2 style={{fontSize: "60px"}}>{"TODO List"}
          </h2> 
          <p style={{fontSize: "36px"}}>
            <ul style={{listStylePosition: "inside"}}>
              <li>{"Bread"}
              </li>
              <li>{"Milk"}
              </li>
              <li>{"Butter"}
              </li>
              <li>{"Cheese"}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </header>
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
        {"Enter Text:"}
      </label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..." />
      <button type="submit">
        {"Submit"}
      </button>
    </form>
}

// // Nota: clearly need some Markdown support here ... with or without MathJax?
// Slide1 := => 
//     <div 
//         style={
//             display: "flex"
//             flexDirection: "column"
//             alignItems: "center"
//             justifyContent: "center"
//             width: "100%"
//             height: "100vh"
//             padding: "1.5rem calc((100% - 45ch) / 2)"            
//         }
//         >
//         <h3>Equilibrium
//         <p>
//             <math.span>
//                 {r```
//                 An equilibrium of system \(\dot{x} = f(x)\) is a state
//                 \(x_e\)
//                 for which the maximal solution 
//                 \(x(t)\)
//                 such that
//                 \(x(0) = x_e\)
//                 ```}
//         <ul>
//             <li> is global and
//             <li> 
//                 <math.span>
//                     {r```
//                     is \(x(t) = x_e\)
//                     for any \(t \geq 0\)
//                     ```}

const s1 = r`### 🏷️ Equilibrium

An **equilibrium** of system $\dot{x} = f(x)$ is a state $x_e$
for which the maximal solution $x(t)$ such that $x(0) = x_e$

- is global and

- $x(t) = x_e$ for any $t > 0$.`

const s2 = r`### 💎 Equilibrium

The state $x_e$ is an equilibrium of $\dot{x} = f(x)$

$$\Longleftrightarrow$$

$$f(x_e) = 0.$$`

const Page = ({children}) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    padding: "1.5rem calc((100% - 45ch) / 2)",
  }
  return <div style={style}>
    {children}
  </div>
}


document.head.appendChild(style)
ReactDOM.createRoot(document.body).render(
  <StrictMode> 
    <CodeContext>
      <Deck>
        <Page>
          <Markdown 
            remarkPlugins={[remarkMath]} 
            rehypePlugins={[rehypeMathjax]}>
            {s1}
          </Markdown>
        </Page>
        <Page>
          <Markdown 
            remarkPlugins={[remarkMath]} 
            rehypePlugins={[rehypeMathjax]}>
            {s2}
          </Markdown>
        </Page>
        <Page>
          <Markdown 
            remarkPlugins={[remarkMath]} 
            rehypePlugins={[rehypeMathjax]}>
            {`### 🐍 Streamplot Helper

(need to apply Shiki to this)

    def Q(f, xs, ys):
        X, Y = meshgrid(xs, ys)
        v = vectorize
        fx = v(lambda x, y: f([x, y])[0])
        fy = v(lambda x, y: f([x, y])[1])
        return X, Y, fx(X, Y), fy(X, Y)`}
          </Markdown>
        </Page>

        <Page>
          <h3>{"🐍 Streamplot Helper"}
          </h3>
          <Code>
            {`def Q(f, xs, ys):
    X, Y = meshgrid(xs, ys)
    v = vectorize
    fx = v(lambda x, y: f([x, y])[0])
    fy = v(lambda x, y: f([x, y])[1])
    return X, Y, fx(X, Y), fy(X, Y)`}
          </Code>
        </Page>
        <CodeExample />
        <ThreeBox />
        {/* <PythonExample /> */}
        <UnsplashExample />
        <TwoColumnExample />
        <InterHero />
        <DontJustReadItFightIt />{ // Issue here
        <AboutInter />}
      </Deck>
    </CodeContext>
  </StrictMode>)
