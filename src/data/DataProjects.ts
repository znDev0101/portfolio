import imageTokpedProject from "../assets/projectTokped.png";
import teamManagement from "../assets/teamManagement.png";
import sistemPakar from "../assets/sistemPakar.jpeg";

export const dataProjects = [
  {
    imageProject: imageTokpedProject,
    nameProject: "Tokped Clone",
    techStack: ["React Js", "React Router", "Tailwind Css", "Redux"],
    description:
      "Project ini di buat untuk menerapkan hasil belajar dan cara kerja redux",
  },
  {
    imageProject: teamManagement,
    nameProject: "Management Team",
    techStack: [
      "React Js",
      "React Router",
      "Tailwind Css",
      "ExpressJs",
      "MongoDB",
    ],
    description:
      "Project freelance ini di buat untuk mengatasi sebuah masalah management tim yang kurang efektif",
  },
  {
    imageProject: sistemPakar,
    nameProject: "Sistem pakar diagnosa kerusakan komputer",
    techStack: ["Java", "Jasper Report", "MySQL"],
    description:
      "Project freelance ini di buat untuk mengatasi sebuah masalah saat proses diagnosa kerusakan komputer yang kurang tepat dan akurat",
  },
];
