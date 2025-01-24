import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return <div className={`bg-white ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }: CardProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
