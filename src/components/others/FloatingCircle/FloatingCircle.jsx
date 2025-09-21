import { motion } from "framer-motion";

export default function FloatingCircle({
  size,
  color,
  top,
  left,
  opacity,
  delay,
}) {
  return (
    <>
      <motion.div
        animate={{ y: [-5,5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        }}
        className={`absolute rounded-full`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          top: top,
          left: left,
          opacity: opacity,
        }}
      />
    </>
  );
}
