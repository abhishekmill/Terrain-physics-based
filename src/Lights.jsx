import React, { useRef, useEffect } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const Lights = () => {
  const dirLightRef = useRef();

  // attach helper
  useHelper(dirLightRef, DirectionalLightHelper, 5, "red");

  return (
    <directionalLight
      position={[13, 5, 5]}
      castShadow
      intensity={2.5}
      shadow-mapSize={[1024, 1024]}
    >
      <orthographicCamera
        attach="shadow-camera"
        left={-30}
        right={30}
        top={30}
        bottom={-30}
      />
    </directionalLight>
  );
};

export default Lights;
