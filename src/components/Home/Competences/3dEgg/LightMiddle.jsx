import {useTexture, useGLTF} from '@react-three/drei'

export default function MiddleLight() {
  const {nodes} = useGLTF('./model/egg-light-middle.glb')
  const bakedTexture = useTexture('./model/baked-andrea-cards.jpg')
  bakedTexture.flipY = false
  console.log('testk', nodes)

  return (
    <>
      <mesh geometry={nodes.light_middle.geometry}>
        <meshBasicMaterial color={'purple'} />
      </mesh>
    </>
  )
}
