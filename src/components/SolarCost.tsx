import type { PricingOutput, SolarError } from "../utils/pricingData";

export default function SolarCost({
  cost,
  error,
}: {
  cost: PricingOutput;
  error: SolarError;
}) {
  return (
    <>
      {!error.inverter && !error.panel_type ? (
        <>
          <p>Cost Before Solar STC = ${cost.before_stc}</p>
          <p>STC = ${cost.stc}</p>
          <p>Cost After Solar STC (Inc GST) = ${cost.after_stc}</p>
        </>
      ) : (
        <p className="text-red-500">{error.message}</p>
      )}
    </>
  );
}
