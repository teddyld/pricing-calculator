import type React from "react";
import { Accordion as AccordionUI, AccordionItem } from "@heroui/react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-2">
      <AccordionUI variant="bordered">
        <AccordionItem key={title} aria-label={title} title={title}>
          <div className="flex flex-col gap-4 py-4">{children}</div>
        </AccordionItem>
      </AccordionUI>
    </div>
  );
}
