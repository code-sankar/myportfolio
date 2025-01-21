// import elitceler from "../assets/elitceler.svg";
// import ivoyant from "../assets/ivoyant-logo.png";
// //import nfc from "../assets/nfclogo.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import password from "../assets/password.png";
// import tailwind from "../assets/tailwindcss.svg";
//import jwt from "../assets/jwt.svg";
// import socketio from "../assets/socketio.svg";
// import oauth from "../assets/oauth.svg";
import chat from "../assets/chat.svg";
import blogging from "../assets/blogging.svg";
import javascript from "../assets/javascript.png";
import git from "../assets/git.png";
import youtube from "../assets/youtube.svg";
// import rapid from "../assets/rapidapi.svg";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";

import typescript from "../assets/typescript.png";

// import aws from "../assets/aws.svg";
import postman from "../assets/postman.svg";

import docker from "../assets/docker.png";
import github from "../assets/github.png";

import nextjs from "../assets/nextjs.svg";
// import redis from "../assets/redis.svg";
// import graphql from "../assets/graphql.svg";
import zustand from "../assets/zustand.png";
import python from "../assets/python.png";
import kubernetes from "./../assets/kubernetes.svg";

//import nest from "../assets/nest.svg";

import postgres from "../assets/postgres.png";
import vscode from "../assets/vscode.svg";
//import notion from "../assets/notion.svg";
import tailwind from "../assets/tailwindcss.svg";

export const nfcInfo = [
  {
    key: 1,
    text: "Lencho Solutions is Noida based software development and multimedia startup.",
  },
  {
    key: 2,
    text: "They provide services like website development, mobile app development, SEO, and Digital Marketing as well.",
  },
  {
    key: 4,
    text: "Collaborated closely with team members to ensure project delivery within expected timelines.",
  },
  {
    key: 5,
    text: "Contributed to the development of new features and functionalities.",
  },
  {
    key: 6,
    text: "My core job role was to deal with the clients and provide them the best solutions.",
  },
  {
    key: 7,

    text: "I also searched clients for the company through calls and emails, where I was able to pull many clients for the company.",
  },
  {
    key: 8,

    text: "I gained invaluable experience in effectively communicating with both teams and clients, fostering strong relationships and driving successful project outcomes.",
  },
];
export const ivoyantInfo = [
  {
    key: 1,
    text: "Played a key role in developing Frontend of a school's website.",
  },
  {
    key: 2,
    text: "I and my fellow teammates were creating the frontend in React.js.",
  },
  {
    key: 3,
    text: "Contributed to the design and implementation of a react components, making the websire interactive and functional.",
  },
  {
    key: 4,

    text: "Worked closely with a senior developers, gaining valuable insights and guidance in the intricacies of software development.",
  },
  {
    key: 5,

    text: "Utilized languages and frameworks such as Javascript, React.js, Tailwind, Redux Toolkit and Unit Testing  for the development of software applications.",
  },
  {
    key: 6,

    text: "Collaborated in the design and documentation of software architectures, ensuring clarity and maintainability of codebases.",
  },
];
export const elitcelerInfo = [
  {
    key: 0,
    text: "As a seasoned freelance web developer, I bring extensive experience in delivering over 5+ successful projects with a proven track record of 100% client satisfaction.",
  },
  {
    key: 1,
    text: "My expertise spans both front-end and back-end development, ensuring seamless design and implementation of robust web architectures.",
  },
  {
    key: 2,
    text: "I excel in modern database design and management, staying current with the latest practices and technologies.",
  },
  {
    key: 3,
    text: "To ensure my clients' peace of mind, I provide complimentary support and maintenance for three months following project delivery.",
  },
  {
    key: 4,
    text: "Whether you need a dynamic website, a complex application, or a complete web solution, my commitment to quality and attention to detail guarantee results that exceed expectations.",
  },
];

export const experiences = [
  {
    id: "1",
    company: "Freelancing",
    //logo: elitceler,
    location: "Remote",
    role: "Freelancer",
    duration: "Sept 2024 - Present",
    description: elitcelerInfo,
  },
  {
    id: "2",
    company: "Lencho Solutions",
    //logo: ivoyant,
    location: "Guwahati, Assam, India",
    role: "Frontend Developer Intern ",
    duration: "MAY 2024 - JULY 2024",
    description: ivoyantInfo,
  },
  {
    id: "3",
    company: "Nityam Plus",
    // logo: nfc,
    location: "Remote",
    role: "Telecaller",
    duration: "JUNE 2023 - AUG 2023",
    description: nfcInfo,
  },
];

export const projects = [
  {
    id: "1",
    name: "VideoTube",
    description: [
      "Welcome to VideoTube! This is a Youtube-like platform where users can view, upload and share videos. The frontend is built using react and backend is powered by Node.js. It's a complete MERN application.",
      "Users can sign up, log in, and log out using JWT",
      "VideoTube includes a robust search functionality, allowing users Share your videos with the world, Enjoy videos uploaded by others, Make announcements for everyone, Leave a thumbs up to videos, comments and tweets you like, Share your thoughts about the video, Get videos from channels you subscribe to, Revisit the videos you have watced, Find videos by keywords, Manage all your content in one place, Manage your channel and videos, Update your personal and channel information and password.",
      "Tailwind CSS is utilized to create a responsive and visually appealing design, ensuring the application is optimized for various screen sizes and devices.",
    ],
    coverImage: youtube,
    workedOn: ["Website"],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React.js",
      },
      {
        logo: redux,
        name: "Redux",
      },
      {
        logo: node,
        name: "Nodejs",
      },
      {
        logo: express,
        name: "Expressjs",
      },
      {
        logo: mongodb,
        name: "MongoDB",
      },
      {
        logo: tailwind,
        name: "Tailwind CSS",
      },
      {
        logo: git,
        name: "Git",
      },
      {
       // logo: jwt,
        name: "JWT",
      },
      {
        //logo: git,
        name: "Multer",
      },
      {
        //logo: rapid,
        name: "React Hook Form",
      },
      {
        //logo: rapid,
        name: "Cloudinary",
      },
    ],
    link: "https://video-tube-ficd.vercel.app/",
  },
  {
    id: "2",
    name: "Blogging Website",
    coverImage: blogging,
    description: [
      "The website offers an intuitive and user-friendly interface for easy navigation and interaction.",
      "Users can sign up, log in, and log out using JWT",
      "Users can like, bookmark, follow, and unfollow posts and other users to personalize their experience and engage with content.",
      "The website is designed to be responsive across various devices and screen sizes, ensuring a seamless browsing experience for users.",
      "Integrated social sharing functionality allows users to share blog posts and other content across various social media platforms, increasing visibility and reach.",
      "Profile page where users can update their avatar and display name.",
    ],
    workedOn: ["Website"],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: nextjs,
        name: "Nextjs",
      },
      {
        logo: node,
        name: "Node.js",
      },
      {
        //logo: express,
        name: "Express.js",
      },
      {
        logo: mongodb,
        name: "MongoDB",
      },
      {
       // logo: jwt,
        name: "JWT",
      },
      {
        //logo: git,
        name: "Git",
      },
    ],
    link: "#",
    githublink: "https://github.com/code-sankar/VideoTube",
  },
  {
    id: "1",
    name: "RealTime Chat",
    coverImage: chat,
    workedOn: ["Website"],
    description: [
      "Real-time chat: users can send and receive messages in real-time",
      "User authentication: users can sign up, log in, and log out using JWT and Google Auth",
      "Group creation: users can create chat rooms and invite others to join",
      "Notifications: users can receive notifications on new messages",
      "Emojis: users can send and receive emojis in messages",
      " Profile page where users can update their avatar and display name.",
      "Users can create a room to chat with others.",
      " Search functionality.",
      "Responsive design: the website is optimized for different screen sizes and devices",
    ],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React.js",
      },
      {
        //logo: redux,
        name: "Redux",
      },
      {
        logo: tailwind,
        name: "Tailwind CSS",
      },

      {
        // logo: node,
        name: "Node.js",
      },
      {
        //logo: express,
        name: "Express.js",
      },
      {
        //logo: mongodb,
        name: "MongoDB",
      },
      {
        //logo: socketio,
        name: "Socket.io",
      },
      {
        //logo: jwt,
        name: "JWT",
      },
      {
        //logo: oauth,
        name: "Google OAuth",
      },
      {
        //logo: git,
        name: "Git",
      },
    ],
    link: "#",
    githublink: "https://github.com/code-sankar/VideoTube",
  },
  {
    id: "4",
    name: "Password Generator",
    coverImage: password,
    workedOn: ["Website"],
    description: [
      "Real-time chat: users can send and receive messages in real-time",
      "User authentication: users can sign up, log in, and log out using JWT and Google Auth",
      "Group creation: users can create chat rooms and invite others to join",
      "Notifications: users can receive notifications on new messages",
      "Emojis: users can send and receive emojis in messages",
      " Profile page where users can update their avatar and display name.",
      "Users can create a room to chat with others.",
      " Search functionality.",
      "Responsive design: the website is optimized for different screen sizes and devices",
    ],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React.js",
      },
      {
        logo: tailwind,
        name: "Tailwind CSS",
      },
      {
        //logo: git,
        name: "Git",
      },
    ],
    link: "#",
    githublink: "https://github.com/code-sankar/VideoTube",
  },
];

export const frontend = [
  {
    logo: html,
    name: "HTML",
  },
  {
    logo: css,
    name: "CSS",
  },
  {
    logo: javascript,
    name: "Javascript",
  },
  {
    logo: tailwind,
    name: "Tailwind CSS",
  },
  {
    logo: typescript,
    name: "Typescript",
  },
  {
    logo: react,
    name: "React.js",
  },
  {
    logo: nextjs,
    name: "Next.js",
  },
  {
    logo: redux,
    name: "Redux",
  },
  {
    logo: zustand,
    name: "Zustand",
  },
];
export const backend = [
  {
    logo: node,
    name: "Node.js",
  },
  {
    logo: express,
    name: "Express.js",
  },
  // {
  //   logo: nest,
  //   name: "Nest.js",
  // },
  {
    logo: mongodb,
    name: "MongoDB",
  },
  {
    logo: postgres,
    name: "PostgreSQL",
  },
  {
    logo: docker,
    name: "Docker",
  },
  {
    logo: kubernetes,
    name: "Kubernetes",
  },
];
export const other = [
  {
    logo: java,
    name: "Java",
  },
  {
    logo: python,
    name: "Python",
  },
  {
    logo: git,
    name: "Git",
  },
  {
    logo: github,
    name: "Github",
  },
  {
    logo: postman,
    name: "Postman",
  },
  {
    logo: vscode,
    name: "VS Code",
  },
  // {
  //   logo: notion,
  //   name: "Notion",
  // },
];
