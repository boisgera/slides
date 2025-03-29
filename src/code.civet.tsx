// @ts-nocheck
import React from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import gitHubDark from '@shikijs/themes/github-dark'
import js from '@shikijs/langs/javascript'

const CodeBaseContext = createContext({highlighter: null})

export const CodeContext = ({children}) => {
    const [highlighter, setHighlighter] = useState(null)
    useEffect(
        () => {
            (async ()=>{{
                if (highlighter === null) {
                    return setHighlighter(await createHighlighterCore({
                        themes: [gitHubDark],
                        langs: [js],
                        engine: createJavaScriptRegexEngine(),
                    }))
                };return
            }})()
            return
        },
        [])
    return <CodeBaseContext.Provider value={{highlighter}}>
        {children}
    </CodeBaseContext.Provider>
}

export const Code = ({children}) => {
    const { highlighter } = useContext(CodeBaseContext)

    const code = children
    console.log("highlighter", highlighter)

    let html = "" // TODO: improve this
    let background = "black"

    if (highlighter) {
        html = highlighter.codeToHtml(code, {lang: "js", theme: "github-dark"})
        background = highlighter.getTheme("github-dark").bg
    }

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
                background: background
        }
            }>
            {
                (html?
                    <div dangerouslySetInnerHTML={ {__html: html} } />:void 0)
            }
        </div>
    </div>
}

export const CodeExample = () => {
    const code = `function hello__() {
    console.log('Hello, world!');
}
const doIt = () => {
    hello__(); // Or don't !!!
}`
    return <Code>
        {code}
    </Code>
}