export const studies = [
  {
    title: "Computer Science B.S.",
    institution: "Purdue University, 2029",
    description:
      "Focus on Machine Intelligence with a minor in Biological Sciences.",
    tags: [
      "Algorithms",
      "Data Structures",
      "Databases",
      "Java OOP",
      "Programming in C"
    ],
  },
  {
    title: "High School",
    institution: "California Crosspoint High School, 2025",
    description:
      "Relevant Coursework: Calculus I, Structured Programming in C++",
    tags: [
      "C++",
      "Programming",
      "Problem Solving",
      "Written Communication"
    ],
  },
];

export type StudyItem = (typeof studies)[number];

