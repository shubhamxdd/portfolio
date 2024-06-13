import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecom.png";
import airbnb_cloneImg from "@/public/airbnb.png";
import event_managementImg from "@/public/event.png";
import issueTracker from "@/public/issuetracker.png";
import gameFinder from "@/public/gamefinder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
/*
export const experiencesData = [
  {
    title: "1",
    location: "",
    description: "I ",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "2",
    location: "",
    description: "I",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  {
    title: "3",
    location: "",
    description: "",
    icon: React.createElement(FaReact),
    date: "",
  },
] as const;
*/
export const projectsData = [
  {
    title: "E-commerce",
    live_link: "https://e-commerce-gamma-six-62.vercel.app",
    github_link: "https://github.com/shubhamxdd/e-commerce",
    description:
      "Developed an e-commerce platform using Next.js, with admin dashboard, where users can buy and sell products.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "MongoDB",
      "Tailwind",
      "ShadCn UI",
      "Prisma",
      "NextAuth",
      "Stripe",
    ],
    imageUrl: ecommerceImg,
  },
  {
    title: "Airbnb Clone",
    live_link: "https://next-airbnb-clone-theta.vercel.app/",
    github_link: "https://github.com/shubhamxdd/next_airbnb_clone",
    description:
      "Developed an Airbnb clone using Next.js, TypeScript, and MongoDB, featuring property listings with search and filters, and a booking system.",
    tags: ["React", "Next.js", "Typescript", "MongoDB", "Tailwind", "NextAuth"],
    imageUrl: airbnb_cloneImg,
  },
  {
    title: "Event Management",
    live_link: "https://event-management-fawn.vercel.app/",
    github_link: "https://github.com/shubhamxdd/event-management",
    description:
      "Developed an event management app using Next.js, TypeScript, and MongoDB, enabling users to create, update, and manage events.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "MongoDB",
      "Tailwind",
      "ShadCn UI",
      "Clerk",
      "Stripe",
    ],
    imageUrl: event_managementImg,
  },
  {
    title: "Issue Tracker",
    live_link: "https://nextracker.vercel.app/",
    github_link: "https://github.com/shubhamxdd/nextracker",
    description:
      "Developed an issue tracker app using Next.js, TypeScript, and Prisma, featuring efficient issue management.",
    tags: ["React", "Next.js", "Typescript", "MongoDB", "Tailwind", "NextAuth"],
    imageUrl: issueTracker,
  },
  {
    title: "Game Finder",
    live_link: "https://game-finder-three.vercel.app/",
    github_link: "https://github.com/shubhamxdd/game-finder",
    description:
      "Developed a game finder app using React, TypeScript, and Chakra UI, enabling users to search and discover games.",
    tags: ["React", "Typescript", "Tailwind", "Chakra UI"],
    imageUrl: gameFinder,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "NextAuth",
  "Node.js",
  "Git",
  "Zod",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "Framer Motion",
] as const;
