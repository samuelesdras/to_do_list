import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: "primary" | "danger";
}

export default function Button({
  children,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`rounded px-4 h-8 transition-colors duration-500 ${
        variant === "primary"
          ? "bg-cyan-700 hover:bg-cyan-600"
          : "bg-rose-700 hover:bg-rose-600"
      }`}
    >
      {children}
    </button>
  );
}
