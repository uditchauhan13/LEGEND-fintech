"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function CameraController() {

  const mouse = useRef({x:0,y:0})

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove",(e)=>{
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    })
  }

  useFrame(({camera})=>{

    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.05
    camera.position.y += (-mouse.current.y * 1.5 - camera.position.y) * 0.05

    camera.lookAt(0,0,0)

  })

  return null
}

function GraphBars(){

  return(

    <group position={[0,-1,0]}>

      {[1,1.6,2.3,3,3.8].map((h,i)=>(
        <mesh key={i} position={[i*0.8-2,h/2,0]}>
          <boxGeometry args={[0.5,h,0.5]}/>
          <meshStandardMaterial color="#D4A017"/>
        </mesh>
      ))}

    </group>

  )

}

function NeuralNetwork(){

  const nodes = [
    [-2,1,0],
    [-1,2,0],
    [0,1.5,0],
    [1,2.2,0],
    [2,1,0]
  ]

  return(

    <group>

      {nodes.map((pos,i)=>(
        <mesh key={i} position={pos as any}>
          <sphereGeometry args={[0.1,16,16]}/>
          <meshStandardMaterial color="#7A1E2C"/>
        </mesh>
      ))}

      {nodes.map((a,i)=>
        nodes.map((b,j)=>{

          if(i>=j) return null

          const points = [
            new THREE.Vector3(...a),
            new THREE.Vector3(...b)
          ]

          const geometry = new THREE.BufferGeometry().setFromPoints(points)

          return(
            <line key={`${i}-${j}`} geometry={geometry}>
              <lineBasicMaterial color="#7A1E2C"/>
            </line>
          )

        })
      )}

    </group>

  )

}

export default function HeroScene(){

  return(

    <Canvas camera={{position:[0,2,6]}}>

      <ambientLight intensity={1.2}/>
      <directionalLight position={[5,5,5]}/>

      <Stars radius={60} depth={40} count={2000} factor={4}/>

      <CameraController/>

      <GraphBars/>

      <NeuralNetwork/>

    </Canvas>

  )

}