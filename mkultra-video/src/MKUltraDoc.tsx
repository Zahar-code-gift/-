import React from "react";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useVideoConfig,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Intro } from "./components/Intro";
import { Outro } from "./components/Outro";
import { SectionTitle } from "./components/SectionTitle";
import { NarrationScene } from "./components/NarrationScene";
import { SCENES, SECTIONS } from "./data/scenes";
import { COLORS } from "./theme";

export const MKUltraDoc: React.FC = () => {
  const { fps } = useVideoConfig();

  const elements: React.ReactNode[] = [];
  let elementKey = 0;

  // --- INTRO (4 seconds) ---
  elements.push(
    <TransitionSeries.Sequence key={elementKey++} durationInFrames={4 * fps}>
      <Intro />
    </TransitionSeries.Sequence>,
  );
  elements.push(
    <TransitionSeries.Transition
      key={elementKey++}
      presentation={fade()}
      timing={linearTiming({ durationInFrames: Math.round(0.8 * fps) })}
    />,
  );

  let lastSection = "";

  for (const scene of SCENES) {
    if (scene.section !== lastSection && scene.section !== "outro") {
      const sectionInfo = SECTIONS.find((s) => s.id === scene.section);
      if (sectionInfo) {
        elements.push(
          <TransitionSeries.Sequence
            key={elementKey++}
            durationInFrames={Math.round(2.5 * fps)}
          >
            <SectionTitle
              number={sectionInfo.title}
              title={sectionInfo.subtitle}
            />
          </TransitionSeries.Sequence>,
        );
        elements.push(
          <TransitionSeries.Transition
            key={elementKey++}
            presentation={fade()}
            timing={linearTiming({
              durationInFrames: Math.round(0.6 * fps),
            })}
          />,
        );
      }
      lastSection = scene.section;
    }

    elements.push(
      <TransitionSeries.Sequence
        key={elementKey++}
        durationInFrames={scene.durationInSeconds * fps}
      >
        <NarrationScene scene={scene} />
      </TransitionSeries.Sequence>,
    );

    elements.push(
      <TransitionSeries.Transition
        key={elementKey++}
        presentation={fade()}
        timing={linearTiming({ durationInFrames: Math.round(0.5 * fps) })}
      />,
    );
  }

  // --- OUTRO (6 seconds) ---
  elements.push(
    <TransitionSeries.Sequence key={elementKey++} durationInFrames={6 * fps}>
      <Outro />
    </TransitionSeries.Sequence>,
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bgDark }}>
      <TransitionSeries>{elements}</TransitionSeries>

      {/* Voiceover narration */}
      <Audio src={staticFile("audio/voiceover.mp3")} volume={1} />
    </AbsoluteFill>
  );
};
