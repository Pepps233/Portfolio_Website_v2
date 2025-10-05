import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Software Engineer Intern",
    company: "Crcle AI",
    date: "2025 Sep. - Present",
    region: "West Lafayette, Indiana",
    description:["Focusing on improving user context with generative pretrained transformer models, refining transformer architectures, and building desktop backends with Node.js and Electron.",],
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Supabase",
      "Python",
      "Electron",
      "Git",
    ],
  },
  {
    title: "Team Captain & Software Lead",
    company: "FIRST Robotics Team 2204",
    date: "2024-2025 June",
    region: "Hayward, California",
      description: [
          "Documented programming concepts (encapsulation, abstraction, polymorphism) and Kotlin fundamentals for new team members, designing robotics and software lesson plans for a 3-month training equivalent to a first-semester university course.",
          "Coordinated workflow with ~6 programmers using Git and task management to align with the mechanical subteam, designing vision-based robot localization running at 50Hz with a noise-reducing filter for AprilTag detection.",
          "Programmed robot autonomous sequences and path planning with 85% accuracy, contributing to winning the East Bay Regional against 52 teams."
      ],
    technologies: [
      "Java",
      "Kotlin",
      "Python",
      "WPILib",
      "Git",
    ],
  },
  {
    title: "Math / Mandarin / Programming Teaching Assistant",
    company: "The Salvation Army",
    date: "2023 Jan. - Mar.",
    region: "Oakland, California",
    description: [
      "Assisted teacher by explaining Mandarin, Math, and Python concepts to ~8 students of various ages.",
      "Organized and shared lesson plans with 6 teachers and teaching assistants.",
      "Liaised between the organization director and ~50 student families regarding school events and classwork."
    ],
    technologies: [
        "Excel"
    ]
  }
];

export type WorkItem = (typeof work)[number];

