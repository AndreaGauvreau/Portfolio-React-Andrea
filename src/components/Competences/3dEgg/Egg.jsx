import {useTexture, useGLTF, Float} from '@react-three/drei'

export default function Egg() {
  const {nodes} = useGLTF('./model/egg-egg.glb')
  const bakedTexture = useTexture('./model/egg-skin.jpg')
  bakedTexture.flipY = false
  return (
    <>
      <Float speed={5}>
        <mesh geometry={nodes.egg.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
