import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from 'react-icons/si';
import { SiCplusplus } from "react-icons/si";
import { SiEjs } from "react-icons/si";
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{duration:duration,ease:"linear",repeat:Infinity,repeatType:"reverse"}
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1.5,delay:0.2}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-react" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNodedotjs className="text-7xl text-nodejs" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-mongodb" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-javascript" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiEjs className="text-7xl text-ejs" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-cpp" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies
