import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`py-3 px-4 rounded-full focus:outline-none transition ${className}`}>
      {children}
    </button>
  );
};
