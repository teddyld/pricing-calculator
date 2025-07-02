import React from "react";

import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col flex-nowrap items-center justify-center gap-2 py-4">
        {children}
      </div>
    </div>
  );
}
