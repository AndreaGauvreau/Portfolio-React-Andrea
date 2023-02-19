import {useTexture, useGLTF} from '@react-three/drei'

export default function LeftLight() {
  const {nodes} = useGLTF('./model/egg-light-left.glb')
  const bakedTexture = useTexture('./model/baked-andrea-cards.jpg')
  bakedTexture.flipY = false
  console.log('testk', nodes)
  return (
    <>
      <mesh
        geometry={nodes.light_left.geometry}
        position={[3, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <meshBasicMaterial color={'purple'} />
      </mesh>
    </>
  )
}
