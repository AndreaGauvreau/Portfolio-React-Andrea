import {Center, OrbitControls, PresentationControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Perf} from 'r3f-perf'
import ChargeStation from './ChargeStation'
import Egg from './Egg'
import LeftLight from './LightLeft'
import MiddleLight from './LightMiddle'
import RightLight from './LightRight'

export default function CanvasEgg() {
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
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 5]} // Vertical limits
          azimuth={[0, Math.PI / 5]} // Horizontal limits
          config={{mass: 1, tension: 170, friction: 26}} // Spring config
        >
          <Center>
            <Egg />
            <ChargeStation />
            <LeftLight />
            <RightLight />
            <MiddleLight />
          </Center>
        </PresentationControls>
      </Canvas>
    </>
  )
}
