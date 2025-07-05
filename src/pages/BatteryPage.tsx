import React from "react";

import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Battery from "../components/Battery";
import BatteryCost from "../components/BatteryCost";
import ResetButton from "../components/ResetButton";
import DiscountInput from "../components/DiscountInput";

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

  const [discount, setDiscount] = React.useState(0);

  return (
    <Layout>
      <Battery
        specifications={batterySpecifications}
        handleChange={handleBatteryChange}
        error={batteryError}
      />
      <Divider />
      <Accordion title="Cost Breakdown">
        <BatteryCost
          discount={discount}
          cost={batteryCost}
          error={batteryError}
        />
        <DiscountInput discount={discount} setDiscount={setDiscount} />
      </Accordion>
      <ResetButton handleOnPress={resetBattery} />
    </Layout>
  );
}
