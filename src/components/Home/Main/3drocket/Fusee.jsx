import {Center, useTexture, useGLTF, Sparkles, Float} from '@react-three/drei'

export default function Fusee() {
  const {nodes} = useGLTF('./model/fusee.glb')
  const bakedTexture = useTexture('./model/fusee-baked.png')
  bakedTexture.flipY = false
  console.log('testk', nodes)

  return (
    <>
      <Float>
        <mesh geometry={nodes.fusee.geometry} roation={[(0, 0, 0)]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
