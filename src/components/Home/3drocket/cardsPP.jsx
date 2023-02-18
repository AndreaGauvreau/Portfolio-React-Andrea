import {Center, useTexture, useGLTF, Sparkles, Float} from '@react-three/drei'

export default function CardsPP() {
  const {nodes} = useGLTF('./model/cardBaked.glb')
  const bakedTexture = useTexture('./model/baked-andrea-cards.jpg')
  bakedTexture.flipY = false
  console.log('testk', nodes)

  return (
    <>
      <Center>
        <Float>
          <mesh geometry={nodes.ailes003.geometry} rotation={[6, 1, 0]}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </Float>
        <Sparkles
          size={6}
          scale={[4, 10, 10]}
          position-y={1}
          speed={0.32}
          count={70}
        />
      </Center>
    </>
  )
}
