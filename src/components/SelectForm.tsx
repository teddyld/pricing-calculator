import React from "react";

import { Select, SelectItem } from "@heroui/react";

export default function SelectForm({
  label,
  items,
  value,
  handleSelectionChange,
}: {
  label: string;
  items: readonly string[];
  value: string;
  handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <p className="w-full text-sm font-semibold sm:w-1/2">{label}</p>
      <Select
        placeholder="No option selected"
        radius="none"
        selectedKeys={[value]}
        onChange={handleSelectionChange}
        size="sm"
        variant="faded"
        color="primary"
      >
        {items.map((item) => {
          return <SelectItem key={item}>{item}</SelectItem>;
        })}
      </Select>
    </div>
  );
}
