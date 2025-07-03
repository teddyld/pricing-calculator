import React from "react";

import { Select, SelectItem } from "@heroui/react";
import { type ItemPrice } from "../utils/pricingData";

export default function SelectForm({
  label,
  items,
  value,
  handleSelectionChange,
  error,
  isPerWatt,
}: {
  label: string;
  items: ItemPrice[];
  value: string;
  handleSelectionChange: (value: ItemPrice) => void;
  error?: boolean;
  isPerWatt?: boolean;
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <p className="w-full font-semibold sm:w-1/2">{label}</p>
      <Select
        placeholder="No option selected"
        radius="none"
        aria-label={label}
        selectedKeys={!value ? [] : [value]}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const item = items.find((element) => element.name === e.target.value);
          if (item) {
            handleSelectionChange(item);
          }
        }}
        variant="bordered"
        color="primary"
        disallowEmptySelection
        isInvalid={error}
      >
        {items.map((item) => {
          return (
            <SelectItem
              key={item.name}
              endContent={
                <p>
                  +${item.price}
                  {isPerWatt ? "/W" : ""}
                </p>
              }
            >
              {item.name}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
}
