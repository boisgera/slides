import React from 'react'

export const Unsplash = ({id="Y19hE9fAOG4", width=1920, children=[]}) => { 
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

export const UnsplashExample = () => <Unsplash id="sk3BZ5HsYTI" />