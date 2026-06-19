import { useRef, type ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg" | "sp";

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-4 text-sm",
  lg: "px-16 py-6 text-base",
  sp: "px-16 py-4 text-base",
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    ...rest
  } = props;

  const variantClasses =
    variant === "secondary"
      ? "border border-black-80 text-black-80 bg-transparent"
      : "bg-black-80 text-white border-2 border-white/25";

  const ref = useRef<HTMLButtonElement>(null);
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, {
    stiffness: 90,
    damping: 13,
    mass: 0.6,
  });

  const fillScaleX = useTransform(progress, [0, 1], [0, 1]);
  const textColor = useTransform(
    progress,
    [0, 1],
    ["rgb(255, 255,255)", "rgb(0,0,0)"],
  );

  // const buttonScale = useTransform(progress, [0, 1], [1, 1.045]);

  function handleHoverStart() {
    rawProgress.set(1);
  }

  function handleHoverEnd() {
    rawProgress.set(0);
  }

  if (variant === "secondary") {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative flex items-center gap-p2 overflow-hidden rounded-full font-normal tracking-wider",
          "border-2 border-black-70 text-black-80 bg-transparent",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-80",
          "cursor-pointer select-none",
          sizeMap[size],
          className,
        )}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      ref={ref}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative overflow-hidden rounded-full font-normal tracking-wider",
        variantClasses,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
        "cursor-pointer select-none",
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      <motion.span
        aria-hidden
        style={{ scaleX: fillScaleX }}
        className="pointer-events-none absolute inset-0 origin-left bg-white"
      />
      <motion.span
        style={{ color: textColor }}
        className="relative z-10 flex items-center justify-center gap-p0-5 whitespace-nowrap"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
