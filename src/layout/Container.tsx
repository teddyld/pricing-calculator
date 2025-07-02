import React from "react";

export default function Container({
  children,
  noBackground,
}: {
  children: React.ReactNode;
  noBackground?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col gap-4 ${noBackground ? "" : "bg-stone-50"} border-2 px-4 py-4 sm:px-8`}
    >
      {children}
    </div>
  );
}
