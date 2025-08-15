import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black/40 text-white p-6 rounded-xl shadow-lg backdrop-blur-md">
      {children}
    </div>
  );
}

