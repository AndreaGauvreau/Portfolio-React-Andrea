import {Center, useTexture, useGLTF, Sparkles, Float} from '@react-three/drei'

export default function Boite() {
  const {nodes} = useGLTF('./model/box.glb')
  const bakedTexture = useTexture('./model/baked-box.jpg')
  bakedTexture.flipY = false
  console.log('boite', nodes)

  return (
    <>
      <Float>
        <mesh geometry={nodes.box.geometry} position={nodes.box.position}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
