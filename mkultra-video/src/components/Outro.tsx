import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { COLORS } from "../theme";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 1.0 * fps], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const buttonPulse =
    1 + 0.03 * Math.sin((frame / fps) * Math.PI * 2);

  const eyeGlow = interpolate(
    frame,
    [0, fps, 2 * fps, 3 * fps],
    [0, 1, 0.5, 1],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bgDark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeIn,
      }}
    >
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 30%, ${COLORS.red}20 100%)`,
        }}
      />

      {/* Eye */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 120 120"
        style={{ marginBottom: 30, opacity: eyeGlow }}
      >
        <ellipse
          cx="60"
          cy="60"
          rx="50"
          ry="30"
          fill="none"
          stroke={COLORS.redGlow}
          strokeWidth="2"
        />
        <circle cx="60" cy="60" r="18" fill={COLORS.redGlow} />
        <circle cx="60" cy="60" r="8" fill={COLORS.bgDark} />
      </svg>

      {/* Title */}
      <div
        style={{
          fontSize: 64,
          fontFamily: "Oswald, Arial, sans-serif",
          fontWeight: 700,
          color: COLORS.white,
          letterSpacing: 8,
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        WHAT THEY ERASED
      </div>

      {/* Subscribe button */}
      <div
        style={{
          backgroundColor: COLORS.redGlow,
          padding: "16px 60px",
          borderRadius: 4,
          marginTop: 20,
          transform: `scale(${buttonPulse})`,
          boxShadow: `0 0 30px ${COLORS.redGlow}60`,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontFamily: "Oswald, Arial, sans-serif",
            fontWeight: 700,
            color: COLORS.white,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          SUBSCRIBE
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 22,
          fontFamily: "Roboto, Arial, sans-serif",
          fontWeight: 300,
          color: COLORS.whiteSubtle,
          letterSpacing: 4,
          marginTop: 30,
          textTransform: "uppercase",
        }}
      >
        The truth refuses to stay hidden
      </div>
    </AbsoluteFill>
  );
};
