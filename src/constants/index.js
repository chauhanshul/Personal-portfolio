import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate Full-Stack Developer with a strong foundation in the MERN stack. I have hands-on experience in developing dynamic, user-friendly web applications, from frontend interfaces to backend infrastructure. My expertise includes working with technologies like React, Node.js, Express, and MongoDB, allowing me to create scalable and efficient solutions.`;

export const ABOUT_TEXT = `I specialize in building seamless user experiences and robust server-side architectures. My journey as a developer has allowed me to work on diverse projects, from real-time weather apps to budget management systems, each designed to solve real-world problems in creative ways.

I enjoy taking ideas from concept to completion, whether it’s crafting responsive front-end designs or optimizing database performance with MongoDB. My focus is on delivering clean, maintainable code and intuitive user interfaces, ensuring that the technology I create is both functional and user-friendly.

Collaboration and continuous learning are at the heart of my development process. 

Feel free to browse through my projects and get in touch if you’d like to collaborate!`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Web Developer Intern",
    company: "Exposys Data Labs",
    description: `During my internship at Exposys Data Lab, I worked as a Web Developer, focusing on designing, developing, and maintaining 
                  web applications. I collaborated with a team to implement modern web technologies, optimize performance, and enhance 
                  user experience. `,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Javascript", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Transaction Management App",
    image: project2,
    description:
      "Developed a Project Budget Management System using the MERN stack to track and manage incomes and expenses. Enables users to monitor, visualize finances with graphs, and maintain budget control with real-time balance updates. ",
    technologies: ["HTML", "Javascript", "React", "MongoDb", "Express"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Real Time Weather Dashboard",
    image: project4,
    description:
      "Developed a Real-Time Weather Application providing up-to-date conditions, 7-day forecasts via leading APIs. The app features interactive maps and a user-friendly interface, delivering accurate weather information worldwide for both daily planning and professional use",
    technologies: ["HTML", "CSS", "Javascript", "Open Weather API", "Geo Location"],
  },
];

export const CONTACT = {
  email: "anshulchauhan6678@gmail.com",
};
