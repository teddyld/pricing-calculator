import { NumberInput, type NumberInputProps } from "@heroui/react";

export default function NumberInputForm({
  label,
  value,
  handleValueChange,
  ...rest
}: NumberInputProps & {
  label: string;
  value: number | undefined;
  handleValueChange: (value: number) => void;
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <p className="w-full text-sm font-semibold sm:w-1/2">{label}</p>
      <NumberInput
        radius="none"
        value={value}
        onValueChange={handleValueChange}
        color="primary"
        variant="faded"
        classNames={{
          inputWrapper: "h-2",
          input: "text-right",
        }}
        hideStepper
        minValue={0}
        {...rest}
      />
    </div>
  );
}
