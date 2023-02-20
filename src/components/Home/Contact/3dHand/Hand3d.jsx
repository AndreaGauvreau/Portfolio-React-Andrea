import {useTexture, useGLTF, Float} from '@react-three/drei'

export default function Hand3d() {
  const {nodes} = useGLTF('./model/boxHand.glb')
  const bakedTexture = useTexture('./model/boxHand.jpg')
  bakedTexture.flipY = false
  console.log('hand', nodes)
  return (
    <>
      <Float speed={2} rotationIntensity={1}>
        <mesh geometry={nodes.Plane.geometry} rotation={[0, -2, 0]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
