import Layout from "../layout/Layout";
import Container from "../layout/Container";
import SelectForm from "../components/SelectForm";
import Accordion from "../components/Accordion";

import { Divider } from "@heroui/react";

import { batteryBrands, selection } from "../utils/pricingModel";
import { useBatterySpecifications } from "../hooks/useBatterySpecifications";

export default function BatteryPage() {
  const {
    specifications,
    handleBatteryBrandChange,
    handleBlackoutProtectionChange,
    handleRetrofitChange,
    handleThreePhaseChange,
  } = useBatterySpecifications();

  return (
    <Layout>
      <Container>
        <SelectForm
          label="Battery Brands"
          items={batteryBrands}
          value={specifications["battery_brand"]}
          handleSelectionChange={handleBatteryBrandChange}
        />
        <SelectForm
          label="Blackout Protection"
          items={selection}
          value={specifications["blackout_protection"]}
          handleSelectionChange={handleBlackoutProtectionChange}
        />
        <div className={`flex flex-col gap-4 rounded-sm`}>
          <SelectForm
            label="Retrofit"
            items={selection}
            value={specifications["retrofit"]}
            handleSelectionChange={handleRetrofitChange}
          />
          {specifications["retrofit"] === "Yes" && (
            <>
              <Divider />
              <SelectForm
                label="Three Phase"
                items={selection}
                value={specifications["three_phase"]}
                handleSelectionChange={handleThreePhaseChange}
              />
            </>
          )}
        </div>
      </Container>
      <Accordion title="Cost Breakdown">
        <p>Total price before PRCs (Inc) =</p>
        <p>PRCs =</p>
        <p>Total cost (Inc) =</p>
      </Accordion>
    </Layout>
  );
}
