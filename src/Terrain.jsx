import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Terrain(props) {
  const { nodes, materials } = useGLTF("/terraim.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody colliders={"trimesh"} type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          scale={15}
        >
          <meshStandardMaterial />
        </mesh>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/terraim.glb");
