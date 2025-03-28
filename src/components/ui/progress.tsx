import { HTMLAttributes } from "react";
import clsx from "clsx";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  active?: boolean;
  color?: string;
  bgColor?: string;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  valuePosition?: "right" | "center";
  valueColor?: string;
}

export function Progress({
  value,
  max = 100,
  active = false,
  color = "bg-primary-dark",
  bgColor = "bg-gray-100",
  size = "md",
  showValue = false,
  valuePosition = "right",
  valueColor = "text-neutral-500",
  className,
  ...props
}: ProgressProps) {
  const normalizedValue = Math.min(Math.max(0, value), max);
  const percentage = (normalizedValue / max) * 100;

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className="w-full flex items-center gap-3" {...props}>
      <div
        className={clsx(
          "w-full overflow-hidden rounded-full",
          sizes[size],
          bgColor,
          className
        )}
      >
        <div
          className={clsx(
            "h-full transition-all duration-300 ease-in-out rounded-full",
            color,
            active && "animate-pulse",
            valuePosition === "center" && "relative"
          )}
          style={{ width: `${percentage}%` }}
        >
          {showValue && valuePosition === "center" && (
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
              {value}%
            </span>
          )}
        </div>
      </div>
      {showValue && valuePosition === "right" && (
        <span
          className={clsx("text-sm font-medium", valueColor)}
        >
          {value}%
        </span>
      )}
    </div>
  );
}
