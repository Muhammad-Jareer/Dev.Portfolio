import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine';

// Define allowed directions explicitly
type MoveDirection =
  | "none"
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "top-left";

interface ParticlesBackgroundProps {
  direction?: MoveDirection;
  backgroundColor?: string;
  particleColors?: string[];
  speed?: number;
  number?: number;
  opacity?: number;
  shape?: string
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  direction = "none",
  backgroundColor = "",
  particleColors = ["#1080b0", "#F472B6", "#FBEB5B"],
  speed = 0.7,
  number = 40,
  opacity = 0.2,
  shape = "circle"
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        background: {
          color: {
            value: backgroundColor,
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: particleColors,
          },
          move: {
            direction: direction,
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: speed,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: number,
          },
          opacity: {
            value: opacity,
          },
          shape: {
            type: shape,
          },
          size: {
            value: { min: 2, max: 6 },
          },
        },
        detectRetina: true,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
