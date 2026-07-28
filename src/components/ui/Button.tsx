import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "magenta";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  icon: Icon,
}: ButtonProps) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    magenta: "btn-magenta",
  };

  const baseClass = cn(variants[variant], className);

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {Icon && <Icon size={18} />}
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}
