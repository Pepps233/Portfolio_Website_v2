export const studies = [
  {
    title: "Computer Science B.S.",
    institution: "Purdue University",
    date: "Graduating: June 2029",
    description:
      "Machine Intelligence track with a minor in Biological Sciences.",
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
    institution: "California Crosspoint High School, Grade: 3.95",
    date: "Graduated: June 2025",
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

