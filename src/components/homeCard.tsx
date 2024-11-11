import { ReactNode } from "react";

interface homeCardProps {
  icon: ReactNode;
  title: string;
  total: number;
  className: string;
}
export function HomeCard({ icon, title, total, className }: homeCardProps) {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div
          className={`rounded-full p-2 border-2 border-blue-500 ${className}`}
        >
          {icon}
        </div>
        <h1>{title}</h1>
      </div>
      <p className="text-center font-semibold text-xl pl-12">{total}</p>
    </div>
  );
}
