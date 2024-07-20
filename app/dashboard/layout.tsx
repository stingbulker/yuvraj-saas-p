import { ReactNode } from "react";
import { DashboardNav } from "../components/dashboard-nav";

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sapce-y-6 mt-10">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
