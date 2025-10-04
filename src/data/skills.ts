export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Backend Development",
    description: "Building RESTful services with Spring Boot and Python; CRUD APIs, authentication, and data pipelines.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "Model Fine-Tuning",
    description: "Refining open-source LLMs like Mistral with LoRA/QLoRA; optimizing adapters, memory efficiency, and task-specific performance.",
  },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2zm0 2.18L5 7.09v9.82l7 3.91 7-3.91V7.09l-7-2.91z"/></svg>`,
      title: "Machine Learning & CV",
      description: "Building ASL recognition models with TensorFlow and MediaPipe; dataset curation, preprocessing, and model deployment.",
  },
  {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12l1.41-1.41L11 18.17V2h2v16.17l7.59-7.58L22 12l-10 10L2 12z"/></svg>`,
      title: "Robotics & Control",
      description: "Programming robot autonomy with path planning and vision-based localization.",
  },
];

export type Skill = (typeof skills)[number];

