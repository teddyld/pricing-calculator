import { applyDiscount } from "../utils/calculatePrice";
import type { PricingOutput, SolarError } from "../utils/pricingData";

export default function SolarCost({
  cost,
  discount,
  error,
}: {
  cost: PricingOutput;
  discount: number;
  error: SolarError;
}) {
  return (
    <>
      {!error.inverter && !error.panel_type ? (
        <>
          <p>Cost Before Solar STC = ${cost.before_stc}</p>
          <p>STC = ${cost.stc}</p>
          <p>
            Cost After Solar STC (Inc GST) = $
            {applyDiscount(cost.after_stc, discount)}
          </p>
        </>
      ) : (
        <p className="text-red-500">{error.message}</p>
      )}
    </>
  );
}
