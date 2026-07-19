import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { COLORS } from "../theme";

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.4 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  const slideUp = interpolate(frame, [0, 0.5 * fps], [15, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 80,
        left: 120,
        right: 120,
        display: "flex",
        justifyContent: "center",
        opacity,
        transform: `translateY(${slideUp}px)`,
      }}
    >
      <div
        style={{
          backgroundColor: `${COLORS.bgDark}cc`,
          padding: "16px 32px",
          borderRadius: 8,
          borderLeft: `3px solid ${COLORS.redGlow}`,
          maxWidth: 1400,
        }}
      >
        <p
          style={{
            color: COLORS.white,
            fontSize: 38,
            lineHeight: 1.5,
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: 400,
            textAlign: "center",
            margin: 0,
            textShadow: `0 2px 8px ${COLORS.bgDark}`,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
