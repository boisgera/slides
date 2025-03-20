// @ts-nocheck
import React, {useRef, useState} from "react"
import { Canvas, useFrame } from "@react-three/fiber";

export const Box = (props) => {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((_state, delta) => mesh.current.rotation.x += delta)
    return <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1.0}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
            color={(hovered? "hotpink" : "orange")} />
    </mesh>
}

export const ThreeBox = () => {
    return <div style={{width: "100vw", height: "100vh"}}> 
        <Canvas>
            <ambientLight intensity={Math.PI/2} />
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