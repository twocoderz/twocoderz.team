import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
};

export default function Button(props: ButtonProps) {
  const { children, className, variant = "primary", type = "button" } = props;

  const baseClasses =
    "px-p2 py-p1 text-m16 rounded-3xl tracking-wider transition-all duration-400";
  const variantClasses = clsx({
    // primary button
    "text-white bg-black-80 hover:bg-white hover:text-black-80":
      variant === "primary",
    // outline button
    "text-black-80 bg-transparent border-2 border-black-80 hover:bg-black-80 hover:text-white":
      variant === "outline",
  });

  const buttonClasses = twMerge(baseClasses, variantClasses, className);

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.button>
  );
}
