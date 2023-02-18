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
          <mesh
            geometry={nodes.ailes003.geometry}
            rotation={[0.1, 5.3, 0.4]}
            position={nodes.ailes003.position}
          >
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </Float>
      </Center>
    </>
  )
}
