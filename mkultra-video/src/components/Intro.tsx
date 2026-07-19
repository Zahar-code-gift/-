import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { COLORS } from "../theme";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Glowing eye pulse
  const eyeGlow = interpolate(
    frame,
    [0, 0.8 * fps, 1.6 * fps, 2.4 * fps],
    [0, 1, 0.6, 1],
    { extrapolateRight: "clamp" }
  );

  const eyeScale = interpolate(frame, [0, 1.0 * fps], [0.5, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Title appears
  const titleOpacity = interpolate(frame, [1.2 * fps, 2.0 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const titleSpacing = interpolate(frame, [1.2 * fps, 2.0 * fps], [30, 10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Subtitle appears
  const subOpacity = interpolate(frame, [2.0 * fps, 2.8 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.8 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Scanlines effect
  const scanlineOffset = (frame * 2) % 4;

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
      {/* Subtle red vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 40%, ${COLORS.red}15 100%)`,
        }}
      />

      {/* Glowing red eye */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${eyeScale})`,
          marginBottom: 40,
        }}
      >
        {/* Outer glow */}
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: "50%",
            boxShadow: `0 0 ${60 * eyeGlow}px ${30 * eyeGlow}px ${COLORS.redGlow}`,
            opacity: eyeGlow * 0.7,
          }}
        />
        {/* Eye shape */}
        <svg width="120" height="120" viewBox="0 0 120 120">
          {/* Eye outline */}
          <ellipse
            cx="60"
            cy="60"
            rx="50"
            ry="30"
            fill="none"
            stroke={COLORS.redGlow}
            strokeWidth="2"
            opacity={eyeGlow}
          />
          {/* Iris */}
          <circle
            cx="60"
            cy="60"
            r="18"
            fill={COLORS.redGlow}
            opacity={eyeGlow}
          />
          {/* Pupil */}
          <circle cx="60" cy="60" r="8" fill={COLORS.bgDark} opacity={eyeGlow} />
          {/* Highlight */}
          <circle
            cx="54"
            cy="54"
            r="4"
            fill={COLORS.redBright}
            opacity={eyeGlow * 0.8}
          />
        </svg>
      </div>

      {/* Channel title */}
      <div
        style={{
          fontSize: 84,
          fontFamily: "Oswald, Arial, sans-serif",
          fontWeight: 700,
          color: COLORS.white,
          letterSpacing: titleSpacing,
          textTransform: "uppercase",
          opacity: titleOpacity,
          textShadow: `0 0 30px ${COLORS.redGlow}60`,
        }}
      >
        WHAT THEY ERASED
      </div>

      {/* Episode title */}
      <div
        style={{
          fontSize: 32,
          fontFamily: "Roboto, Arial, sans-serif",
          fontWeight: 300,
          color: COLORS.redGlow,
          letterSpacing: 8,
          textTransform: "uppercase",
          opacity: subOpacity,
          marginTop: 20,
        }}
      >
        PROJECT MKULTRA — DECLASSIFIED
      </div>

      {/* Scanlines overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent ${scanlineOffset}px,
            rgba(0,0,0,0.03) ${scanlineOffset}px,
            rgba(0,0,0,0.03) ${scanlineOffset + 2}px
          )`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
