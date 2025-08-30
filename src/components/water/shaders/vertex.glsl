varying vec2 csm_vUv;

uniform float uTime;
uniform float uWaveSpeed;
uniform float uWaveAmplitude;

void main() {
  csm_vUv = uv;

  // Create waves that vary across the surface
  float wave1 = sin(position.x * 0.1 + uTime * uWaveSpeed) * uWaveAmplitude;
  float wave2 = sin(position.y * 0.15 + uTime * uWaveSpeed * 0.8) * uWaveAmplitude * 0.5;
  
  vec3 modifiedPosition = position;
  modifiedPosition.z += wave1 + wave2;
  
  csm_Position = modifiedPosition;
}