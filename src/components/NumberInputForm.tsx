import { NumberInput, type NumberInputProps } from "@heroui/react";
import type React from "react";

export default function NumberInputForm({
  label,
  value,
  handleValueChange,
  endContent,
}: NumberInputProps & {
  label: string;
  value: number | undefined;
  handleValueChange: (value: number) => void;
  endContent: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <p className="w-full font-semibold sm:w-1/2">{label}</p>
      <NumberInput
        radius="none"
        aria-label={`${label}-input`}
        value={value}
        onValueChange={(value: number) => handleValueChange(!value ? 0 : value)}
        color="primary"
        variant="faded"
        size="sm"
        classNames={{
          input: "text-right",
        }}
        hideStepper
        minValue={0}
        endContent={
          <span className="text-nowrap text-sm italic opacity-50">
            {endContent}
          </span>
        }
      />
    </div>
  );
}
