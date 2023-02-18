import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Perf} from 'r3f-perf'
import CardsPP from './cardsPP'

export default function Canvas3d() {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [1, 2, 6],
        }}
      >
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <CardsPP />
      </Canvas>
    </>
  )
}
