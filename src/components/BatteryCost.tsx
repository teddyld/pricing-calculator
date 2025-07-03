import type { PricingOutput, BatteryError } from "../utils/pricingData";

export default function BatteryCost({
  cost,
  error,
}: {
  cost: PricingOutput;
  error: BatteryError;
}) {
  return (
    <>
      {!error.brand ? (
        <>
          <p>Cost Before Battery STC = ${cost.before_stc}</p>
          <p>STC = ${cost.stc}</p>
          <p>Cost After Battery STC (Inc GST) = ${cost.after_stc}</p>
        </>
      ) : (
        <p className="text-red-500">{error.message}</p>
      )}
    </>
  );
}
