import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";

const SPEED = 0.03;

const Car = () => {
  const bodyRef = useRef();

  // store pressed keys
  const keys = useRef({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      keys.current[e.code] = true;
    };
    const handleKeyUp = (e) => {
      keys.current[e.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // update each frame
  useFrame(() => {
    if (!bodyRef.current) return;

    const impulse = { x: 0, y: 0, z: 0 };

    if (keys.current["ArrowUp"] || keys.current["KeyW"]) {
      impulse.z -= SPEED;
    }
    if (keys.current["ArrowDown"] || keys.current["KeyS"]) {
      impulse.z += SPEED;
    }
    if (keys.current["ArrowLeft"] || keys.current["KeyA"]) {
      impulse.x -= SPEED;
    }
    if (keys.current["ArrowRight"] || keys.current["KeyD"]) {
      impulse.x += SPEED;
    }

    if (impulse.x !== 0 || impulse.z !== 0) {
      bodyRef.current.applyImpulse(impulse, true);
    }
  });

  return (
    <RigidBody
      ref={bodyRef}
      colliders="cuboid"
      mass={5}
      linearDamping={0.5}
      angularDamping={5}
      rotation={[0, degToRad(120), 0]}
      position={[0, 3, 0]}
    >
      {/* Chassis */}
      <Box scale={[0.5, 0.2, 0.2]} />
    </RigidBody>
  );
};

export default Car;
