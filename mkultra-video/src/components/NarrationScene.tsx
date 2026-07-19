import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { KenBurns } from "./KenBurns";
import { Subtitle } from "./Subtitle";
import type { Scene } from "../data/scenes";

interface NarrationSceneProps {
  scene: Scene;
}

export const NarrationScene: React.FC<NarrationSceneProps> = ({ scene }) => {
  // Try to use the image from public/, fall back to a dark placeholder
  const imagePath = staticFile(scene.imageSrc);

  return (
    <AbsoluteFill>
      <KenBurns imageSrc={imagePath} effect={scene.kenBurns} />
      <Subtitle text={scene.narration} />
    </AbsoluteFill>
  );
};
