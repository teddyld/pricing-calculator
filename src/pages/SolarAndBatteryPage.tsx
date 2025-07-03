import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Solar from "../components/Solar";
import Battery from "../components/Battery";
import SolarCost from "../components/SolarCost";
import BatteryCost from "../components/BatteryCost";
import ResetButton from "../components/ResetButton";

import { useSolarSpecifications } from "../hooks/useSolarSpecifications";
import { useBatterySpecifications } from "../hooks/useBatterySpecifications";

import { Divider } from "@heroui/react";

export default function SolarAndBatteryPage() {
  const {
    solarSpecifications,
    handleSolarChange,
    solarCost,
    solarError,
    resetSolar,
  } = useSolarSpecifications(false);
  const {
    batterySpecifications,
    handleBatteryChange,
    batteryCost,
    batteryError,
    resetBattery,
  } = useBatterySpecifications();

  return (
    <Layout>
      <Solar
        specifications={solarSpecifications}
        handleChange={handleSolarChange}
        error={solarError}
      />
      <Battery
        specifications={batterySpecifications}
        handleChange={handleBatteryChange}
        error={batteryError}
      />
      <Divider />
      <Accordion title="COST BREAKDOWN">
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-bold">Solar</p>
            <SolarCost cost={solarCost} error={solarError} />
          </div>
          <div>
            <p className="font-bold">Battery</p>
            <BatteryCost cost={batteryCost} error={batteryError} />
          </div>
          {!batteryError.brand &&
          !solarError.inverter &&
          !solarError.panel_type ? (
            <div>
              <p className="font-bold">Total</p>
              <p>
                Total Cost Before STC = $
                {solarCost.before_stc + batteryCost.before_stc}
              </p>
              <p>Total STC = ${solarCost.stc + batteryCost.stc}</p>
              <p>
                Total Cost After STC (Inc GST) = $
                {solarCost.after_stc + batteryCost.after_stc}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Accordion>
      <ResetButton
        handleOnPress={() => {
          resetSolar();
          resetBattery();
        }}
      />
    </Layout>
  );
}
