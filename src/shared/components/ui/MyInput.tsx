import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-p2">
        {label && (
          <label className="text-sm font-medium text-black-80">{label}</label>
        )}
        <input
          ref={ref}
          className={`px-p4 py-p2 bg-black-5 rounded-r2 focus:outline-none focus:ring-2 focus:ring-black-80 ${
            error ? "border-red-500 focus:ring-red-500" : ""
          } ${className || ""}`}
          {...props}
        />
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
