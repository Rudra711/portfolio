import "./hero.scss";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const textVariants = {
	lineHeight: 1 ,
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="khush-name">Rudra Raval</motion.h2>
          <motion.h1 variants={textVariants}>
           Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">

            <a href="#Portfolio">
            
            </a>
            
            <a href="#Contact">
            <motion.button
              variants={textVariants}
            >
              Contact Me
            </motion.button>
            </a>

						<a href="https://drive.google.com/file/d/1v0lIzpSLelZ7Uvuo1u1uNyITGuioPTPg/view?usp=sharing" target = "_blank" rel = "noreferrer">
            <motion.button
              variants={textVariants} className="resume"
            >
              My Resume <FaExternalLinkAlt />
            </motion.button>
						
            </a>

						
            



          </motion.div>
					
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web developer 
      </motion.div>
      <div className="imageContainer">
        <img src="/my-image.jpg" alt="" />
				
      </div>
    </div>
  );
};

export default Hero;