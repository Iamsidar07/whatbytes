import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-blue-900 text-white focus:ring-blue-500",
      secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500",
      outline: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-500",
      ghost: "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500",
    };

    const sizes = {
      sm: "text-sm px-3 py-1.5 gap-1.5",
      md: "text-base px-4 py-2 gap-2",
      lg: "text-lg px-6 py-3 gap-3",
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
