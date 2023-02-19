import {Center, useTexture, useGLTF, Sparkles, Float} from '@react-three/drei'

export default function LightLeft() {
  const {nodes} = useGLTF('./model/egg-egg.glb')
  const bakedTexture = useTexture('./model/baked-andrea-cards.jpg')
  bakedTexture.flipY = false
  console.log('testk', nodes)

  return (
    <>
      <Float>
        <mesh geometry={nodes.egg.geometry} rotation={[6, 1, 0]}>
          <meshBasicMaterial color={'white'} />
        </mesh>
      </Float>
    </>
  )
}
