import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(15px)",
    rotateX: "6deg",
    transformPerspective: 3000,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    rotateX: "0deg",
    transformPerspective: 3000,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    filter: "blur(15px)",
    rotateX: "-6deg",
    transformPerspective: 3000,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    transformPerspective: 3000,
    rotateX: "4deg",
    filter: "brightness(0.9)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transformPerspective: 3000,
    rotateX: "0deg",
    filter: "brightness(1)",
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.96,
    transformPerspective: 3000,
    rotateX: "-4deg",
    filter: "brightness(0.9)",
  },
};

const overlayVariants = {
  initial: {
    opacity: 0,
    scaleY: 1.4,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 0.12,
    scaleY: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scaleY: 1.4,
    filter: "blur(20px)",
  },
};

const pageTransition = {
  type: "spring",
  mass: 0.35,
  damping: 20,
  stiffness: 450,
  velocity: 3.5,
  restDelta: 0.000001,
  restSpeed: 0.000001,
};

const contentTransition = {
  type: "spring",
  mass: 0.25,
  damping: 18,
  stiffness: 380,
  restDelta: 0.000001,
  restSpeed: 0.000001,
  delay: 0.08,
};

const overlayTransition = {
  type: "tween",
  ease: [0.6, 0, 0.2, 1],
  duration: 0.8,
};

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  return (
    <div className="relative w-full">
      {/* Background overlay effect */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={overlayTransition}
        className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none"
        style={{
          willChange: "opacity, transform, filter",
          zIndex: -1,
          transformOrigin: "center top",
          mixBlendMode: "soft-light",
          backdropFilter: "blur(30px)",
        }}
      />

      {/* Main page content wrapper */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="w-full relative rounded-2xl overflow-hidden"
        style={{
          transformOrigin: "center top",
          willChange: "transform, opacity, filter",
          transformStyle: "preserve-3d",
          perspective: "3000px",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {/* Inner content wrapper */}
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={contentTransition}
          className="w-full"
          style={{
            willChange: "transform, opacity, filter",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformOrigin: "center top",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageTransitionWrapper;
