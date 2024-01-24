import { Button } from "@/components/ui/button";
import macbook from "../../assets/macbook-exposed 1.png";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
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
  const laptop = {
    initial: {
      y: 0,
      scale: 1.4,
      rotate: 31,
    },
    animate: {
      y: 20,
      rotate: 0,
      scale: 1,

      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <Container>
      <div className="flex pt-16  flex-col lg:flex-row justify-around items-center h-screen">
        <motion.div
          className="space-y-4 "
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={introChild}
            className="text-6xl lg:text-8xl text-nowrap  text-[#9A9A9A] font-bold"
          >
            Don't worry.
          </motion.h1>
          <motion.h1
            variants={introChild}
            className="text-5xl md:text-7xl font-bold text-nowrap "
          >
            We'll fix it.
          </motion.h1>
          <motion.p
            variants={introChild}
            className="text-[#9A9A9A] max-w-[50ch]"
          >
            Welcome to <span className="text-black font-semibold">iRepair</span>
            , your one-stop place for all kinds of{" "}
            <span className="text-black font-semibold">Macbook repairs</span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChild}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:w-full w-3/4 mx-auto mt-10"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className=" object-contain" src={macbook} alt="" />
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
