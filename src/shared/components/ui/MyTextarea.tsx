import { forwardRef, type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-p2">
        {label && (
          <label className="text-sm font-medium text-black-80">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`px-p6 py-p4 bg-black-5 rounded-r2 focus:outline-none focus:ring-1 focus:ring-black-80 resize-none ${
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

Textarea.displayName = "Textarea";

export default Textarea;
