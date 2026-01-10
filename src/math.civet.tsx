import React from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

declare global {
    interface Window {
        MathJax: {
            [key: string]: any
        }
    }
}

const MathJaxBaseContext = createContext({isMathJaxLoaded: false})

export const MathJaxContext = ({children}) => {
    const [isMathJaxLoaded, setIsMathJaxLoaded] = useState(false)
    const scriptRef = useRef(null)
    useEffect(
        () => {  
            if (!scriptRef.current) {
                if (window.MathJax) {
                    setIsMathJaxLoaded(true)
                    return
                }
                const script = document.createElement("script")
                script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
                script.id = "MathJax-script"
                script.async = true
                script.onload = () => setIsMathJaxLoaded(true)
                document.head.appendChild(script)
                scriptRef.current = script
            }
            return
        },
        [])

    return <MathJaxBaseContext.Provider value={{isMathJaxLoaded: isMathJaxLoaded}}>
      {children}
    </MathJaxBaseContext.Provider>
}


const Math = ({ tag="div", children,...props}) => {
    const mathJaxRef = useRef(null)
    const { isMathJaxLoaded } = useContext(MathJaxBaseContext) 
    useEffect(
        () => { 
            (async ()=>{{
                if (isMathJaxLoaded && window.MathJax) {
                    try {
                        await window.MathJax.typesetPromise([mathJaxRef.current])
                        console.log("MathJax fragment rendering complete");
                    }
                    catch (err) { 
                        console.error("MathJax rendering error:", err);
                    }
                };return
            }})()
            return
        },
        [children, isMathJaxLoaded])
    if (tag == "span") {
        return <span {...props} ref={mathJaxRef}> 
            {children}
        </span>
    }
    else {
        return <div {...props} ref={mathJaxRef}> 
            {children}
        </div>
    }
}

export var math = {
    span : ({ children,...props}) => <Math {...props} tag="span">{children}
    </Math>,
    div : ({ children,...props}) => <Math {...props} tag="div">{children}
    </Math>,
}

const r = String.raw

export const MathExample = () => {
    const style = {
        width: "100%",
        height: "100vh",
        display: "flex",
        fontSize: "96px",
        justifyContent: "center",
        alignItems: "center",
    }
    return <MathJaxContext>
        <math.div style={style}>
            {r`\[ \int_0^1 f(x) \,dx \]`}
        </math.div>
    </MathJaxContext>
}