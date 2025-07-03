import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col flex-nowrap items-center justify-start gap-2 pb-4">
        {children}
      </div>
      <Footer />
    </div>
  );
}
