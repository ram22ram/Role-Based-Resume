import netflix from "../assets/Project/netflix.png";
import editor from "../assets/Project/codeEditor.png";
import chatify from "../assets/Project/chatify.png";
import admin from "../assets/Project/admin_dashboard.png";
import bitsOfCode from "../assets/Project/blog.png";

const projectsData = [
  {
    title: "SHEYBUS-UDEMY",
    description:
      "Sheybus is a bus ticket management app that lets users view and book available seats or cancel tickets. Admins can add, edit, or delete bus schedules and timings.",
    image: chatify,
    github: "https://github.com/ram22ram/SHEYBUS-UDEMY.git",
  },
  {
    title: "UI-Design",
    description:
      "A collection of thoughtfully crafted user interfaces emphasizing intuitive navigation, clean aesthetics, and user-centric functionality.",
    image: bitsOfCode,
    github: "https://github.com/ram22ram/UIDesign.git",
  },
  {
    title: "ToDo App",
    description:
      "Dynamic task management app built with React. Add, edit, delete tasks with persistent storage and clean UX.",
    image: editor,
    github: "https://github.com/ram22ram/react-project-todo.git",
  },
  {
    title: "Netflix Clone",
    description:
      "Netflix-inspired streaming app with dynamic movie browsing, responsive UI, and real-time data fetching.",
    image: netflix,
    github: "https://github.com/ram22ram/react_netflix_project.git",
  },
  {
    title: "Admin Dashboard",
    description:
      "Comprehensive admin panel with real-time metrics, user management, reports, and clean dashboard UI.",
    image: admin,
    github: "https://github.com/ram22ram/Admin_dashboard.github.io.git",
    demo: "https://ram22ram.github.io/Admin_dashboard.github.io/",
  },
];

export default projectsData;
