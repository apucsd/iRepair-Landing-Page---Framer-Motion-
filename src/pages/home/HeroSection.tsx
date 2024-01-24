import { Button } from "@/components/ui/button";
import macbook from "../../assets/macbook-exposed 1.png";
import { motion } from "framer-motion";
const HeroSection = () => {
  const intro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const introChild = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.3,
      },
    },
  };
  return (
    <div className="grid lg:grid-cols-2 place-items-center h-screen">
      <motion.div
        className="space-y-2 "
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={introChild}
          className="text-5xl lg:text-7xl text-nowrap  text-[#9A9A9A] font-bold"
        >
          Don't worry.
        </motion.h1>
        <motion.h1
          variants={introChild}
          className="text-4xl md:text-6xl font-bold text-nowrap "
        >
          We'll fix it.
        </motion.h1>
        <motion.p variants={introChild} className="text-[#9A9A9A] max-w-[50ch]">
          Welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-stop place for all kinds of{" "}
          <span className="text-black font-semibold">Macbook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChild}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <div className="">
        <img className="w-full h-full object-contain" src={macbook} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
