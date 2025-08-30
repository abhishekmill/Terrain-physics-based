import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

import React from "react";
import { Terrain } from "./Terrain";
import { Environment, OrbitControls } from "@react-three/drei";

const App = () => {
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
        <Environment preset="city" />
        <Physics debug>
          <RigidBody position={[0, 3, 0]}>
            <mesh>
              <boxGeometry />
            </mesh>
          </RigidBody>

          <Terrain />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
