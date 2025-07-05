import { NumberInput } from "@heroui/react";

export default function DiscountInput({
  discount,
  setDiscount,
}: {
  discount: number;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <NumberInput
      className="max-w-32"
      label="Discount"
      value={discount}
      radius="none"
      aria-label="discount input"
      onValueChange={(value: number) => setDiscount(!value ? 0 : value)}
      variant="faded"
      size="sm"
      minValue={0}
      maxValue={100}
      endContent={<p className="text-sm opacity-50">%</p>}
    />
  );
}
