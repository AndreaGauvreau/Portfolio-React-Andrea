import React from 'react'
import {useTexture, useGLTF} from '@react-three/drei'

export default function Hand3d() {
  const {nodes} = useGLTF('./model/roomcoffee2.glb')
  const bakedTexture = useTexture('./model/room.jpg')
  console.log('room', nodes)
  bakedTexture.flipY = false

  return (
    <group>
      <mesh geometry={nodes.room001.geometry} rotation={[0.3, -0.8, 0]}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  )
}
