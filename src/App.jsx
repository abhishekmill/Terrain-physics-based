import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

import React from "react";
import { Terrain } from "./Terrain";
import {
  AdaptiveDpr,
  Box,
  CameraControls,
  CameraShake,
  Environment,
  OrbitControls,
  Plane,
  Stats,
} from "@react-three/drei";
import Car from "./car";
import Lights from "./Lights";
import StylizedWater from "./WaterShader";
import { Water } from "./components/water/water";

const App = () => {
  const BACKGROUND = "red";
  return (
    <div
      style={{
        background: "red",
        height: "100vh",
      }}
    >
      <Canvas
        camera={{
          position: [1, 5, 0],
        }}
      >
        <AdaptiveDpr pixelated />
        {/* <Environment preset="city" /> */}
        <Lights />
        <Physics>
          <Car />
          <Terrain />
        </Physics>
        <OrbitControls />
        <StylizedWater />
        {/* <Plane scale={5} rotation={[-Math.PI / 2, 0, 0]} /> */}
        <Water />
        <Stats />
        <CameraControls
          maxPolarAngle={Math.PI / 2.2}
          maxDistance={40}
          minDistance={5}
        />
        <color attach="background" args={[BACKGROUND]} />
        <fog attach="fog" args={[BACKGROUND, 120, 150]} />
      </Canvas>
    </div>
  );
};

export default App;
