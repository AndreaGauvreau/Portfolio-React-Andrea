import {useTexture, useGLTF} from '@react-three/drei'

export default function RightLight() {
  const {nodes} = useGLTF('./model/egg-light-right.glb')
  const bakedTexture = useTexture('./model/baked-andrea-cards.jpg')
  bakedTexture.flipY = false
  console.log('testk', nodes)

  return (
    <>
      <mesh geometry={nodes.light_right.geometry}>
        <meshBasicMaterial color={'purple'} />
      </mesh>
    </>
  )
}
