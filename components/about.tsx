"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm Shubham Sisodia, a web developer dedicated to creating
        dynamic and user-friendly websites.My journey began with a background in
        Business Economics from Delhi University, but my fascination with
        technology led me into the world of coding.
      </p>
      <p>
        I'm enthusiastic about learning and proficient in technologies like
        React.js, Next.js, Node.js, and MongoDB, which I've been learning
        through self-study and projects.
      </p>
      <p className="mt-2">
        This portfolio showcases my projects and journey in web development. I'm
        excited to learn and grow in this field, so let's connect and create
        something amazing together!
      </p>
    </motion.section>
  );
}
