import { applyDiscount } from "../utils/calculatePrice";
import type { PricingOutput, BatteryError } from "../utils/pricingData";

export default function BatteryCost({
  cost,
  discount,
  error,
}: {
  cost: PricingOutput;
  discount: number;
  error: BatteryError;
}) {
  return (
    <>
      {!error.brand ? (
        <>
          <p>Cost Before Battery STC = ${cost.before_stc}</p>
          <p>STC = ${cost.stc}</p>
          <p>
            Cost After Battery STC (Inc GST) = $
            {applyDiscount(cost.after_stc, discount)}
          </p>
        </>
      ) : (
        <p className="text-red-500">{error.message}</p>
      )}
    </>
  );
}
