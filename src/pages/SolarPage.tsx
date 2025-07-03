import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Solar from "../components/Solar";
import SolarCost from "../components/SolarCost";
import ResetButton from "../components/ResetButton";

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
        <SolarCost cost={solarCost} error={solarError} />
      </Accordion>
      <ResetButton handleOnPress={resetSolar} />
    </Layout>
  );
}
