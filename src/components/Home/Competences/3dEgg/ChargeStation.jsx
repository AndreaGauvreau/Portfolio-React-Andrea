import {useTexture, useGLTF} from '@react-three/drei'

export default function LightLeft() {
  const {nodes} = useGLTF('./model/egg-charge.glb')
  const bakedTexture = useTexture('./model/torus.jpg')
  bakedTexture.flipY = false
  console.log('testk', nodes)

  return (
    <>
      <mesh geometry={nodes.chargebase.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}
