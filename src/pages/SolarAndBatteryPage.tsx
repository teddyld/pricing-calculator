import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Solar from "../components/Solar";
import Battery from "../components/Battery";
import SolarCost from "../components/SolarCost";
import BatteryCost from "../components/BatteryCost";
import ResetButton from "../components/ResetButton";

import { usePricingSpecifications } from "../hooks/usePricingSpecifications";
import { useBatterySpecifications } from "../hooks/useBatterySpecifications";

import { Divider } from "@heroui/react";

export default function SolarAndBatteryPage() {
  const {
    solarSpecifications,
    handleSolarChange,
    solarCost,
    solarError,
    resetSolar,
  } = usePricingSpecifications(false);
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
