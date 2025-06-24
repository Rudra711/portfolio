import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

  {
    id: 1,
    title: "Vibesphere",
    img: "./vibesphere.png",
    desc: "Vibesphere is a social media application built with React and Appwrite, aimed at providing a platform for users to share posts, connect with others, and explore content.",
    link: "https://vibesphere.netlify.app/",
  },

  {
    id: 2,
    title: "POKO-search",
    img: "./poko-search.png",
    desc: "This Pokedex app features a sleek interface built with ReactJs, Redux, and Tailwind CSS. It fetches detailed Pokémon data via PokeAPI with responsive pagination. The backend uses Firebase for secure user authentication, real-time database, and token-based sessions, enabling users to manage their favorite Pokémon seamlessly.",
    link: "https://poko-search.onrender.com/",
  },

  {
    id: 3,
    title: "Storify",
    img: "./storify.png",
    desc: "This Google Drive clone enables users to upload, organize, and share files seamlessly. Built with Next.js 15, React 19, Tailwind CSS, TypeScript, and ShadCN-UI, it leverages Appwrite for OTP-based user authentication and secure file storage. Zod ensures robust type validation and error-free form handling. Key features include file renaming, categorization by type, and sharing capabilities, offering a smooth and secure file management experience.",
    link: "https://storifyy.vercel.app/sign-in",
  },

  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-190, 190]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img style ={{objectFit:"contain"}}src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel = "noreferrer"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar "></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;