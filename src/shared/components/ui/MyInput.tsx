import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    const ariaLabel = props["aria-label"] ?? label;

    return (
      <div className="flex flex-col gap-p2">
        <div className="relative">
          {props.required && (
            <span className="absolute top-0 group-focus:-top-1 left-0 group-focus:-left-1 transition-all duration-500 h-2 w-2 rounded-full bg-red-500" />
          )}
          <input
            ref={ref}
            aria-label={ariaLabel}
            className={`group px-p6 py-p4 bg-black-5 rounded-r2 focus:outline-none focus:ring-1 focus:ring-black-80 ${
              error ? "border-red-500 focus:ring-red-500" : ""
            } ${className || ""}`}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-black-60">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
