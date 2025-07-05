import React from "react";

import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Solar from "../components/Solar";
import SolarCost from "../components/SolarCost";
import ResetButton from "../components/ResetButton";
import DiscountInput from "../components/DiscountInput";

import { useSolarSpecifications } from "../hooks/useSolarSpecifications";

import { Divider } from "@heroui/react";

export default function SolarPage() {
  const {
    solarSpecifications,
    handleSolarChange,
    solarCost,
    solarError,
    resetSolar,
  } = useSolarSpecifications(true);

  const [discount, setDiscount] = React.useState(0);

  return (
    <Layout>
      <Solar
        specifications={solarSpecifications}
        handleChange={handleSolarChange}
        error={solarError}
        isSolarOnly
      />
      <Divider />
      <Accordion title="COST BREAKDOWN">
        <SolarCost cost={solarCost} discount={discount} error={solarError} />
        <DiscountInput discount={discount} setDiscount={setDiscount} />
      </Accordion>
      <ResetButton handleOnPress={resetSolar} />
    </Layout>
  );
}
