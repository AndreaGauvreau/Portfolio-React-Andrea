import {
  Center,
  OrbitControls,
  PresentationControls,
  Sparkles,
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Perf} from 'r3f-perf'
import Boite from './Boite'
import CardsPP from './Boite'
import Fusee from './Fusee'

export default function Canvas3d() {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 1, 5],
        }}
      >
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 7]} // Vertical limits
          azimuth={[0, Math.PI / 2]} // Horizontal limits
          config={{mass: 1, tension: 170, friction: 26}} // Spring config
        >
          <Center>
            <Boite />
            <Fusee />
          </Center>
        </PresentationControls>
        <Sparkles
          size={3}
          scale={[4, 4, 4]}
          position-y={1}
          speed={0.32}
          count={70}
        />
      </Canvas>
    </>
  )
}
