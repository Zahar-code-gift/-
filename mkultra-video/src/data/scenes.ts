// Scene data for MKUltra documentary
// Each scene has narration text (for subtitles), duration, and image reference
// Replace imageSrc with your actual Nano Banana generated images in public/images/

export interface Scene {
  id: number;
  section: string;
  sectionTitle: string;
  narration: string;
  durationInSeconds: number;
  imageSrc: string; // path relative to public/
  kenBurns: "zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "pan-up";
}

export const SCENES: Scene[] = [
  // ═══════════════════════════════════════
  // SECTION 1: THE HOOK (0:00 – 1:00)
  // ═══════════════════════════════════════
  {
    id: 1,
    section: "hook",
    sectionTitle: "THE HOOK",
    narration:
      "In nineteen seventy-three, CIA Director Richard Helms gave an order that would bury one of the darkest chapters in American history. Destroy everything.",
    durationInSeconds: 10,
    imageSrc: "images/01-archive-room.png",
    kenBurns: "zoom-in",
  },
  {
    id: 2,
    section: "hook",
    sectionTitle: "THE HOOK",
    narration:
      "Thousands of pages were fed into shredders. Experiment logs. Financial records. The names of victims. All of it was meant to vanish forever.",
    durationInSeconds: 10,
    imageSrc: "images/02-shredder.png",
    kenBurns: "pan-left",
  },
  {
    id: 3,
    section: "hook",
    sectionTitle: "THE HOOK",
    narration:
      "But they missed something. One box of billing documents survived in a basement storage room. And when those documents were discovered years later, they cracked open a nightmare.",
    durationInSeconds: 12,
    imageSrc: "images/03-forgotten-box.png",
    kenBurns: "zoom-in",
  },
  {
    id: 4,
    section: "hook",
    sectionTitle: "THE HOOK",
    narration:
      "This is the story of Project MKUltra. The CIA program that turned American citizens into lab rats. The program they were ordered to destroy.",
    durationInSeconds: 10,
    imageSrc: "images/03-forgotten-box.png",
    kenBurns: "zoom-out",
  },

  // ═══════════════════════════════════════
  // SECTION 2: THE FEAR (1:00 – 3:00)
  // ═══════════════════════════════════════
  {
    id: 5,
    section: "fear",
    sectionTitle: "THE FEAR THAT STARTED IT ALL",
    narration:
      "It was nineteen fifty. American soldiers captured in Korea were coming home — and something was terribly wrong.",
    durationInSeconds: 7,
    imageSrc: "images/04-propaganda-poster.png",
    kenBurns: "zoom-in",
  },
  {
    id: 6,
    section: "fear",
    sectionTitle: "THE FEAR THAT STARTED IT ALL",
    narration:
      "They appeared on camera denouncing their own country, praising communism, confessing to crimes they never committed. They spoke in flat, robotic voices, as if their minds had been rewritten.",
    durationInSeconds: 12,
    imageSrc: "images/05-pows-returning.png",
    kenBurns: "pan-right",
  },
  {
    id: 7,
    section: "fear",
    sectionTitle: "THE FEAR THAT STARTED IT ALL",
    narration:
      'The American press called it "brainwashing." The CIA panicked. If the Soviets had found a way to reprogram the human mind, the United States was facing a weapon more dangerous than any nuclear bomb.',
    durationInSeconds: 12,
    imageSrc: "images/05-pows-returning.png",
    kenBurns: "zoom-out",
  },
  {
    id: 8,
    section: "fear",
    sectionTitle: "THE FEAR THAT STARTED IT ALL",
    narration:
      "In April nineteen fifty-three, CIA Director Allen Dulles approved a new covert program. Code name: MKUltra. Mission: discover and master techniques of mind control — before the enemy did.",
    durationInSeconds: 12,
    imageSrc: "images/06-classified-document.png",
    kenBurns: "zoom-in",
  },
  {
    id: 9,
    section: "fear",
    sectionTitle: "THE FEAR THAT STARTED IT ALL",
    narration:
      "And to accomplish this, the Agency would cross lines that should never have been crossed.",
    durationInSeconds: 6,
    imageSrc: "images/06-classified-document.png",
    kenBurns: "pan-up",
  },

  // ═══════════════════════════════════════
  // SECTION 3: THE EXPERIMENTS (3:00 – 6:30)
  // ═══════════════════════════════════════
  {
    id: 10,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      'MKUltra was not one experiment. It was a hundred and forty-nine separate sub-projects spread across eighty institutions — universities, hospitals, prisons, pharmaceutical companies.',
    durationInSeconds: 12,
    imageSrc: "images/07-laboratory.png",
    kenBurns: "zoom-in",
  },
  {
    id: 11,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      'The man in charge was Sidney Gottlieb, a CIA chemist they called the "Black Sorcerer." He had a blank check and zero oversight.',
    durationInSeconds: 9,
    imageSrc: "images/08-gottlieb-silhouette.png",
    kenBurns: "zoom-in",
  },
  {
    id: 12,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      "Gottlieb became obsessed with LSD. At first, they tested it on volunteers — agents and soldiers. But the results were unpredictable. Some subjects became euphoric. Others became violent or catatonic.",
    durationInSeconds: 13,
    imageSrc: "images/08-gottlieb-silhouette.png",
    kenBurns: "pan-left",
  },
  {
    id: 13,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      "So Gottlieb made a decision that changed everything. They would test LSD on people who did not know they were being drugged.",
    durationInSeconds: 9,
    imageSrc: "images/09-diner-drugging.png",
    kenBurns: "zoom-in",
  },
  {
    id: 14,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      "CIA agents slipped LSD into colleagues' drinks at office parties. They dosed military personnel during briefings.",
    durationInSeconds: 8,
    imageSrc: "images/09-diner-drugging.png",
    kenBurns: "pan-right",
  },
  {
    id: 15,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      "They set up safe houses in San Francisco and New York — decorated like lounges, fitted with two-way mirrors and hidden microphones — and hired women to lure men back, where they were secretly drugged and observed.",
    durationInSeconds: 14,
    imageSrc: "images/10-safe-house.png",
    kenBurns: "zoom-in",
  },
  {
    id: 16,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      "This sub-project was called Operation Midnight Climax. It ran for nearly a decade.",
    durationInSeconds: 7,
    imageSrc: "images/10-safe-house.png",
    kenBurns: "zoom-out",
  },
  {
    id: 17,
    section: "experiments",
    sectionTitle: "THE EXPERIMENTS",
    narration:
      "But the experiments went far beyond LSD. Subjects were placed in isolation for weeks. They were deprived of sleep for days. They were given massive doses of electroshock — not to treat illness, but to see if the shock could erase their memories.",
    durationInSeconds: 15,
    imageSrc: "images/11-electroshock.png",
    kenBurns: "zoom-in",
  },

  // ═══════════════════════════════════════
  // SECTION 4: FRANK OLSON (6:30 – 9:30)
  // ═══════════════════════════════════════
  {
    id: 18,
    section: "olson",
    sectionTitle: "THE DEATH OF FRANK OLSON",
    narration:
      "Among the victims of MKUltra, one name stands out. Frank Olson — a forty-three-year-old Army biochemist, a father of three, described by everyone who knew him as quiet, thoughtful, and deeply patriotic.",
    durationInSeconds: 13,
    imageSrc: "images/12-frank-olson.png",
    kenBurns: "zoom-in",
  },
  {
    id: 19,
    section: "olson",
    sectionTitle: "THE DEATH OF FRANK OLSON",
    narration:
      "On November nineteenth, nineteen fifty-three, Olson attended a retreat at a cabin in Maryland with a group of Army and CIA scientists. That evening, Sidney Gottlieb himself spiked the after-dinner drinks with LSD.",
    durationInSeconds: 13,
    imageSrc: "images/13-cabin.png",
    kenBurns: "pan-right",
  },
  {
    id: 20,
    section: "olson",
    sectionTitle: "THE DEATH OF FRANK OLSON",
    narration:
      "Over the next nine days, Olson unraveled. He told his wife he had made a terrible mistake. He wanted to quit. He could not sleep.",
    durationInSeconds: 10,
    imageSrc: "images/13-cabin.png",
    kenBurns: "zoom-out",
  },
  {
    id: 21,
    section: "olson",
    sectionTitle: "THE DEATH OF FRANK OLSON",
    narration:
      "On November twenty-eighth, Frank Olson was found dead on the sidewalk below his room at the Statler Hotel in New York. He had fallen from the thirteenth floor. The CIA called it a suicide.",
    durationInSeconds: 13,
    imageSrc: "images/14-hotel-room.png",
    kenBurns: "zoom-in",
  },
  {
    id: 22,
    section: "olson",
    sectionTitle: "THE DEATH OF FRANK OLSON",
    narration:
      "For twenty-two years, his family believed that story. Then in nineteen seventy-five, the Church Committee investigation revealed the truth.",
    durationInSeconds: 9,
    imageSrc: "images/14-hotel-room.png",
    kenBurns: "pan-left",
  },
  {
    id: 23,
    section: "olson",
    sectionTitle: "THE DEATH OF FRANK OLSON",
    narration:
      "In nineteen ninety-four, the family had his body exhumed. A forensic examination found a wound on his skull — a blow to the head that occurred before the fall. The case remains open to this day.",
    durationInSeconds: 14,
    imageSrc: "images/15-case-file.png",
    kenBurns: "zoom-in",
  },

  // ═══════════════════════════════════════
  // SECTION 5: THE FORGOTTEN VICTIMS (9:30 – 11:30)
  // ═══════════════════════════════════════
  {
    id: 24,
    section: "victims",
    sectionTitle: "THE FORGOTTEN VICTIMS",
    narration:
      "Frank Olson is the name we know. But the full number of MKUltra victims will never be known — Helms made sure of that when he ordered the files destroyed.",
    durationInSeconds: 10,
    imageSrc: "images/16-blurred-faces.png",
    kenBurns: "zoom-in",
  },
  {
    id: 25,
    section: "victims",
    sectionTitle: "THE FORGOTTEN VICTIMS",
    narration:
      "Prisoners in federal institutions were given LSD for seventy-seven consecutive days without being told what it was. Patients at mental hospitals were experimented on because they could not refuse.",
    durationInSeconds: 12,
    imageSrc: "images/17-prison-cell.png",
    kenBurns: "pan-right",
  },
  {
    id: 26,
    section: "victims",
    sectionTitle: "THE FORGOTTEN VICTIMS",
    narration:
      'In Montreal, a CIA-funded psychiatrist named Ewen Cameron subjected patients to what he called "psychic driving." His patients came in seeking help for mild depression. Many left unable to recognize their own families.',
    durationInSeconds: 14,
    imageSrc: "images/18-hospital-corridor.png",
    kenBurns: "zoom-in",
  },

  // ═══════════════════════════════════════
  // SECTION 6: THE AFTERMATH (11:30 – 14:00)
  // ═══════════════════════════════════════
  {
    id: 27,
    section: "aftermath",
    sectionTitle: "THE AFTERMATH",
    narration:
      "In nineteen seventy-five, the Church Committee exposed MKUltra to the world. President Ford personally apologized to the Olson family. Congress passed new oversight laws.",
    durationInSeconds: 11,
    imageSrc: "images/19-senate-hearing.png",
    kenBurns: "pan-left",
  },
  {
    id: 28,
    section: "aftermath",
    sectionTitle: "THE AFTERMATH",
    narration:
      "And Sidney Gottlieb — the Black Sorcerer — retired to a farm in Virginia. He spent his final years raising goats. He was never charged with a crime. No one was.",
    durationInSeconds: 12,
    imageSrc: "images/20-farm.png",
    kenBurns: "zoom-out",
  },
  {
    id: 29,
    section: "aftermath",
    sectionTitle: "THE AFTERMATH",
    narration:
      "We do not know how many people were subjected to MKUltra. We do not know how many died. And we do not know what the CIA actually learned.",
    durationInSeconds: 10,
    imageSrc: "images/21-filing-cabinets.png",
    kenBurns: "zoom-in",
  },
  {
    id: 30,
    section: "aftermath",
    sectionTitle: "THE AFTERMATH",
    narration:
      "MKUltra was not a conspiracy theory. It was a conspiracy — confirmed by Congress, acknowledged by the President.",
    durationInSeconds: 8,
    imageSrc: "images/21-filing-cabinets.png",
    kenBurns: "pan-up",
  },
  {
    id: 31,
    section: "aftermath",
    sectionTitle: "THE AFTERMATH",
    narration:
      "But they did not count on that one forgotten box. And they did not count on people like you — asking questions about the things they tried to erase.",
    durationInSeconds: 10,
    imageSrc: "images/21-filing-cabinets.png",
    kenBurns: "zoom-in",
  },
  {
    id: 32,
    section: "outro",
    sectionTitle: "",
    narration:
      "Because some things, no matter how deeply they are buried, refuse to stay hidden. This has been What They Erased. Subscribe.",
    durationInSeconds: 10,
    imageSrc: "images/22-logo.png",
    kenBurns: "zoom-in",
  },
];

// Sections for title cards
export const SECTIONS = [
  { id: "hook", title: "I", subtitle: "THE HOOK" },
  { id: "fear", title: "II", subtitle: "THE FEAR" },
  { id: "experiments", title: "III", subtitle: "THE EXPERIMENTS" },
  { id: "olson", title: "IV", subtitle: "FRANK OLSON" },
  { id: "victims", title: "V", subtitle: "THE FORGOTTEN VICTIMS" },
  { id: "aftermath", title: "VI", subtitle: "THE AFTERMATH" },
];
