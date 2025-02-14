import { Canvas, useThree, extend, useFrame } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import * as THREE from 'three'
import gsap from 'gsap'
import { Plane } from '@react-three/drei'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
// import homevideo from "../assets/font-jsons/Home Video_Regular.json"
import ppneuebit from '../assets/font-jsons/PP NeueBit_Bold.json'
import React, { useRef, useEffect } from 'react'
import AnimatedText from './text'
import { Element, Link as LinkScroll } from 'react-scroll'
gsap.registerPlugin(ScrollTrigger)
extend({ TextGeometry })

const cubePositions = [
  [0, 0, 0],
  [5, 0, -5],
  [-5, 1, -10],
  [5, -1, -15],
  [-5, 2, -20]
]
const height = 0.08
const speed = 0.75
const timeSpent = 100

const textContent = [
  'Registration',
  'Speakers',
  'Jeopardy',
  'Attack & Defense',
  'More CTF stuff'
]

function Text({ text }) {
  const font = new FontLoader().parse(ppneuebit)
  return (
    <mesh>
      <textGeometry
        args={[
          text,
          {
            font: font,
            size: 2,
            depth: 0,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
          }
        ]}
      />
      <meshStandardMaterial attach="material" color="#22EC08" />
    </mesh>
  )
}

import { createNoise4D } from 'simplex-noise'

const noise4D = createNoise4D()

function AnimatedPlane() {
  const ref = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    const vertices = ref.current.geometry.attributes.position.array
    timeRef.current += delta
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i]
      const y = vertices[i + 1]
      const z =
        noise4D(x * height, y * height, 0, timeRef.current * speed) + 1.5
      vertices[i + 2] = z
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Plane
      ref={ref}
      args={[50, 100, 200, 200]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[3, 3, 3]}
    >
      <meshBasicMaterial attach="material" color="green" wireframe />
    </Plane>
  )
}

function Fog() {
  const { scene, gl } = useThree()

  useEffect(() => {
    scene.fog = new THREE.FogExp2('#111111', 0.02) // fog
    gl.setClearColor('#000000', 0)
  }, [scene, gl])

  return null
}

function CameraController({ triggerRef }) {
  const { camera } = useThree()
  const target = new THREE.Vector3()
  const smoothTarget = new THREE.Vector3()

  useGSAP(() => {
    if (!triggerRef.current) return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 0%',
        end: '+=' + window.innerHeight * 3,
        scrub: 1,
        pin: true
      }
    })

    cubePositions.forEach((pos, index) => {
      const nextPos =
        cubePositions[Math.min(index + 1, cubePositions.length - 1)]
      timeline.to(camera.position, {
        x: pos[0],
        y: pos[1] + 2,
        z: pos[2],
        duration: timeSpent,
        ease: 'power2.inOut',
        onUpdate: () => {
          target.set(...nextPos)
          smoothTarget.lerp(target, 0.05) // damping value
          camera.lookAt(smoothTarget)
        }
      })
    })

    return () => ScrollTrigger.getAll().forEach((st) => st.kill())
  }, [camera])

  return null
}

export default function Scene() {
  const sceneRef = useRef(null)

  return (
    <div>
      <div className="relative z-20 px-10 py-7 text-left">
        <AnimatedText
          text="TIMELINE"
          className="lg:9xl z-50 w-screen cursor-pointer text-left font-neuebit text-6xl uppercase md:text-8xl"
          customText="グミヸ✨"
          time={2}
          preStyle="font-neuebit uppercase text-6xl md:text-8xl lg:9xl text-yellow-500 z-50 cursor-pointer text-left"
        />
      </div>

      <Element name="timeline">
        <div ref={sceneRef} className="h-screen w-full">
          <Canvas>
            <Fog />
            <CameraController triggerRef={sceneRef} />
            <ambientLight intensity={1} />
            {cubePositions.map((pos, index) => (
              <mesh key={index} position={pos}>
                <Text text={textContent[index]} />
              </mesh>
            ))}
            <AnimatedPlane />
          </Canvas>
        </div>
      </Element>
    </div>
  )
}
