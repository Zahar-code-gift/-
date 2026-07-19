import "./index.css";
import { Composition } from "remotion";
import { MKUltraDoc } from "./MKUltraDoc";
import { MKUltraDocPreview } from "./MKUltraDocPreview";
import { SCENES } from "./data/scenes";
import { VIDEO } from "./theme";

const INTRO_SECONDS = 4;
const OUTRO_SECONDS = 6;
const TITLE_CARD_SECONDS = 2.5;
const NUM_TITLE_CARDS = 6;
const sceneDuration = SCENES.reduce((sum, s) => sum + s.durationInSeconds, 0);
const totalSeconds =
  INTRO_SECONDS +
  OUTRO_SECONDS +
  NUM_TITLE_CARDS * TITLE_CARD_SECONDS +
  sceneDuration;

const estimatedOverlap = 47;
const adjustedSeconds = totalSeconds - estimatedOverlap;
const totalFrames = Math.ceil(adjustedSeconds * VIDEO.fps);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Preview without audio — use in Remotion Studio */}
      <Composition
        id="MKUltraDocPreview"
        component={MKUltraDocPreview}
        durationInFrames={totalFrames}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
      {/* Full render with audio — requires voiceover.mp3 in public/audio/ */}
      <Composition
        id="MKUltraDoc"
        component={MKUltraDoc}
        durationInFrames={totalFrames}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};
