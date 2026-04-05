import { forwardRef, type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    const ariaLabel = props["aria-label"] ?? label;

    return (
      <div className="flex flex-col gap-p2">
        <div className="relative">
          {props.required && (
            <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-red-500" />
          )}
          <textarea
            ref={ref}
            aria-label={ariaLabel}
            className={`px-p6 py-p4 bg-black-5 rounded-r2 focus:rounded-l-r2 focus:rounded-r-none focus:outline-none focus:ring-0 focus:border-r-1 focus:border-black-80 resize-none ${
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

Textarea.displayName = "Textarea";

export default Textarea;
