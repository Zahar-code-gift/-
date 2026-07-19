import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { COLORS } from "../theme";

interface SectionTitleProps {
  number: string;
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  number,
  title,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Red line grows from center
  const lineWidth = interpolate(frame, [0, 0.6 * fps], [0, 300], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Number fades in
  const numberOpacity = interpolate(frame, [0.2 * fps, 0.7 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Title slides up and fades in
  const titleOpacity = interpolate(frame, [0.5 * fps, 1.0 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const titleSlide = interpolate(frame, [0.5 * fps, 1.0 * fps], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Fade out at the end
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.5 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bgDark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut,
      }}
    >
      {/* Red line */}
      <div
        style={{
          width: lineWidth,
          height: 2,
          backgroundColor: COLORS.redGlow,
          marginBottom: 30,
          boxShadow: `0 0 20px ${COLORS.redGlow}80`,
        }}
      />

      {/* Section number */}
      <div
        style={{
          fontSize: 32,
          fontFamily: "Oswald, Arial, sans-serif",
          fontWeight: 300,
          color: COLORS.redGlow,
          letterSpacing: 12,
          textTransform: "uppercase",
          opacity: numberOpacity,
          marginBottom: 16,
        }}
      >
        {number}
      </div>

      {/* Section title */}
      <div
        style={{
          fontSize: 72,
          fontFamily: "Oswald, Arial, sans-serif",
          fontWeight: 700,
          color: COLORS.white,
          letterSpacing: 6,
          textTransform: "uppercase",
          opacity: titleOpacity,
          transform: `translateY(${titleSlide}px)`,
          textShadow: `0 0 40px ${COLORS.redGlow}40`,
        }}
      >
        {title}
      </div>

      {/* Red line below */}
      <div
        style={{
          width: lineWidth,
          height: 2,
          backgroundColor: COLORS.redGlow,
          marginTop: 30,
          boxShadow: `0 0 20px ${COLORS.redGlow}80`,
        }}
      />
    </AbsoluteFill>
  );
};
