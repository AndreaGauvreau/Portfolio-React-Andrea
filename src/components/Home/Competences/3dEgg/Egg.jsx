import {useTexture, useGLTF, Float} from '@react-three/drei'

export default function Egg() {
  const {nodes} = useGLTF('./model/egg-2.glb')
  const bakedTexture = useTexture('./model/egg-skin-2.jpg')
  bakedTexture.flipY = false
  return (
    <>
      <Float speed={5} rotationIntensity={2}>
        <mesh geometry={nodes.egg.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
