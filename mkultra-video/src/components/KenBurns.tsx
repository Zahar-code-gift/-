import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { COLORS } from "../theme";

interface KenBurnsProps {
  imageSrc: string;
  effect: "zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "pan-up";
}

export const KenBurns: React.FC<KenBurnsProps> = ({ imageSrc, effect }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  let transform = "";

  switch (effect) {
    case "zoom-in": {
      const scale = interpolate(frame, [0, durationInFrames], [1, 1.15], {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.45, 0, 0.55, 1),
      });
      transform = `scale(${scale})`;
      break;
    }
    case "zoom-out": {
      const scale = interpolate(frame, [0, durationInFrames], [1.15, 1], {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.45, 0, 0.55, 1),
      });
      transform = `scale(${scale})`;
      break;
    }
    case "pan-left": {
      const x = interpolate(frame, [0, durationInFrames], [0, -50], {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.45, 0, 0.55, 1),
      });
      transform = `scale(1.15) translateX(${x}px)`;
      break;
    }
    case "pan-right": {
      const x = interpolate(frame, [0, durationInFrames], [0, 50], {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.45, 0, 0.55, 1),
      });
      transform = `scale(1.15) translateX(${x}px)`;
      break;
    }
    case "pan-up": {
      const y = interpolate(frame, [0, durationInFrames], [0, -40], {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.45, 0, 0.55, 1),
      });
      transform = `scale(1.15) translateY(${y}px)`;
      break;
    }
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* Dark overlay gradient for text readability */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />
      {/* Bottom gradient for subtitle area */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: `linear-gradient(transparent, ${COLORS.bgDark}ee)`,
        }}
      />
      {/* Top vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "20%",
          background: `linear-gradient(${COLORS.bgDark}aa, transparent)`,
        }}
      />
    </AbsoluteFill>
  );
};
