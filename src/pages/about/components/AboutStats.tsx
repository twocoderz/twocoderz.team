import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const statsEase = [0.22, 1, 0.36, 1] as const;

type AnimatedStatNumberProps = {
  target: number;
  start: number;
  suffix?: string;
  delay?: number;
};

function AnimatedStatNumber(props: AnimatedStatNumberProps) {
  const { target, start, suffix = "", delay = 0 } = props;
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(start, target, {
      duration: 1.1,
      delay,
      ease: statsEase,
      onUpdate: (latest) => {
        setValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [delay, isInView, start, target]);

  return (
    <motion.h1
      ref={ref}
      className="text-6xl text-black-80 font-bold"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.42, delay, ease: statsEase }}
    >
      {value}
      {suffix}
    </motion.h1>
  );
}

export default function AboutStats() {
  return (
    <motion.div
      className="flex items-center justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.52,
            ease: statsEase,
            staggerChildren: 0.08,
          },
        },
      }}
    >
      <motion.div
        className="flex flex-col items-start gap-p4 border-b border-black-10 pb-p8"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h4 className="text-md font-bold text-black-80">Team experts</h4>
        <AnimatedStatNumber target={11} start={0} />
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-p4 border-b border-black-10 pb-p8"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h4 className="text-md font-bold text-black-80">
          In the industry since
        </h4>
        <AnimatedStatNumber target={2023} start={2016} delay={0.05} />
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-p4 border-b border-black-10 pb-p8"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h4 className="text-md font-bold text-black-80">Projects completed</h4>
        <AnimatedStatNumber target={26} start={0} suffix="+" delay={0.1} />
      </motion.div>
    </motion.div>
  );
}
