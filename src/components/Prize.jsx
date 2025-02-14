'use client'
import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Prize = (props) => {
  const group = useRef()
  const spingroup = useRef()
  const leftMeshRef = useRef()
  const rightMeshRef = useRef()
  const centerMeshRef = useRef()
  const { nodes, materials } = useGLTF('/3D/prize.glb')
  console.log(nodes)
  console.log(materials)
  const initialposition = [0, -5, 0]

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
        pin: true
      }
    })

    timeline
      .to(group.current.position, { x: 0, y: -1, z: 0, duration: 1 })
      .to(centerMeshRef.current.position, { x: 0, y: 0, z: 0, duration: 1 }, 0)
      .to(leftMeshRef.current.position, { x: 0, y: 0, z: 0, duration: 1 }, 0)
      .to(rightMeshRef.current.position, { x: 0, y: 0, z: 0, duration: 1 }, 0)

      .to(group.current.rotation, { y: Math.PI, duration: 2 }, 0)

      .to(leftMeshRef.current.position, { x: -3, y: 0, z: 0, duration: 1 })
      .to(leftMeshRef.current.rotation, { y: 2 * Math.PI, duration: 1 }, '-=1')
      .to(rightMeshRef.current.position, { x: 3, y: 0, z: 0, duration: 1 })
      .to(rightMeshRef.current.rotation, { y: 2 * Math.PI, duration: 1 }, '-=1')
  }, [])

  useEffect(() => {
    centerMeshRef.current.position.set(0, -5, 0)
    leftMeshRef.current.position.set(0, -5, 0)
    rightMeshRef.current.position.set(0, -5, 0)
  }, [])

  return (
    <>
      <PerspectiveCamera makeDefault focalLength={50} position={[0, 0, 10]} />
      <group
        ref={group}
        {...props}
        position={initialposition}
        scale={[2, 2, 2]}
        dispose={null}
      >
        <ambientLight />
        <group ref={spingroup}>
          <mesh
            ref={centerMeshRef}
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.001']}
          />
          <mesh
            ref={leftMeshRef}
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.001']}
          />
          <mesh
            ref={rightMeshRef}
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/3D/prize.glb')

export default Prize
