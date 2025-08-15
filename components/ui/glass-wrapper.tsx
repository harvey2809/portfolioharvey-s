import { ReactNode } from "react";

export function GlassWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-8">
      {children}
    </div>
  );
}

