# Quick Setup Guide

## 1. Install dependencies
```bash
cd mkultra-video
npm install
```

## 2. Add your media files

### Images (optional — atmospheric placeholders are included)
Replace any image in `public/images/` with your own 1920x1080 PNG files.
Keep the same filenames.

### Audio (required for final render)
Place these files in `public/audio/`:
- `voiceover.mp3` — your narration audio (ElevenLabs TTS or other)
- `music.mp3` — background ambient music

## 3. Preview (no audio needed)
```bash
npx remotion studio
```
Select **MKUltraDocPreview** composition in the studio — this works without audio files.

## 4. Final render (requires audio files)
```bash
npx remotion render MKUltraDoc output.mp4 --codec h264
```

## 5. Upload to YouTube
See `YOUTUBE_METADATA.md` for optimized titles, description, tags, and timestamps.

## Project structure
```
public/
  images/     ← 22 scene images (1920x1080 PNG)
  audio/
    voiceover.mp3  ← your narration
    music.mp3      ← background music
src/
  data/scenes.ts   ← edit narration text, timings, Ken Burns effects
  theme.ts         ← edit colors, fonts
  components/      ← visual components
  MKUltraDoc.tsx       ← full composition (with audio)
  MKUltraDocPreview.tsx ← preview composition (no audio)
```
