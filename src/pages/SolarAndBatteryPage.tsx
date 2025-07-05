import React from "react";

import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Solar from "../components/Solar";
import Battery from "../components/Battery";
import SolarCost from "../components/SolarCost";
import BatteryCost from "../components/BatteryCost";
import ResetButton from "../components/ResetButton";
import DiscountInput from "../components/DiscountInput";

import { useSolarSpecifications } from "../hooks/useSolarSpecifications";
import { useBatterySpecifications } from "../hooks/useBatterySpecifications";
import { applyDiscount } from "../utils/calculatePrice";

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

  const [discount, setDiscount] = React.useState(0);

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
            <SolarCost discount={0} cost={solarCost} error={solarError} />
          </div>
          <div>
            <p className="font-bold">Battery</p>
            <BatteryCost discount={0} cost={batteryCost} error={batteryError} />
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
                {applyDiscount(
                  solarCost.after_stc + batteryCost.after_stc,
                  discount,
                )}
              </p>
              <div className="pt-4">
                <DiscountInput discount={discount} setDiscount={setDiscount} />
              </div>
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
