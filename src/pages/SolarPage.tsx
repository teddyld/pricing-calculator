import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Solar from "../components/Solar";
import SolarCost from "../components/SolarCost";
import ResetButton from "../components/ResetButton";

import { usePricingSpecifications } from "../hooks/usePricingSpecifications";

import { Divider } from "@heroui/react";

export default function SolarPage() {
  const {
    solarSpecifications,
    handleSolarChange,
    solarCost,
    solarError,
    resetSolar,
  } = usePricingSpecifications(true);

  return (
    <Layout>
      <Solar
        specifications={solarSpecifications}
        handleChange={handleSolarChange}
        error={solarError}
        isSungrow
      />
      <Divider />
      <Accordion title="COST BREAKDOWN">
        <SolarCost cost={solarCost} error={solarError} />
      </Accordion>
      <ResetButton handleOnPress={resetSolar} />
    </Layout>
  );
}
