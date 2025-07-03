import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Battery from "../components/Battery";
import BatteryCost from "../components/BatteryCost";
import ResetButton from "../components/ResetButton";

import { useBatterySpecifications } from "../hooks/useBatterySpecifications";

import { Divider } from "@heroui/react";

export default function BatteryPage() {
  const {
    batterySpecifications,
    handleBatteryChange,
    batteryCost,
    batteryError,
    resetBattery,
  } = useBatterySpecifications();

  return (
    <Layout>
      <Battery
        specifications={batterySpecifications}
        handleChange={handleBatteryChange}
        error={batteryError}
      />
      <Divider />
      <Accordion title="Cost Breakdown">
        <BatteryCost cost={batteryCost} error={batteryError} />
      </Accordion>
      <ResetButton handleOnPress={resetBattery} />
    </Layout>
  );
}
