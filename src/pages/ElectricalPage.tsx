import React from "react";

import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import ResetButton from "../components/ResetButton";
import NumberInputForm from "../components/NumberInputForm";
import SelectForm from "../components/SelectForm";
import DiscountInput from "../components/DiscountInput";

import {
  ELECTRICAL_PRICES,
  callout_fee,
  type ItemPrice,
} from "../utils/pricingData";

import { useElectricalSpecifications } from "../hooks/useElectricalSpecifications";
import { applyDiscount } from "../utils/calculatePrice";

export default function ElectricalPage() {
  const {
    electricalSpecifications,
    handleElectricalChange,
    electricalCost,
    resetElectrical,
  } = useElectricalSpecifications();

  const [discount, setDiscount] = React.useState(0);

  return (
    <Layout>
      <Accordion title="SWITCHBOARD UPGRADE">
        <NumberInputForm
          label="Single phase"
          value={electricalSpecifications["switchboard_upgrade_single"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("switchboard_upgrade_single", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["switchboard_upgrade_single"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Three phase"
          value={electricalSpecifications["switchboard_upgrade_three"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("switchboard_upgrade_three", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["switchboard_upgrade_three"]} each)`}</p>
          }
        />
      </Accordion>
      <Accordion title="POWER POINT">
        <p className="italic">New</p>
        <NumberInputForm
          label="Gyprock"
          value={electricalSpecifications["powerpoint_new_gyprock"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("powerpoint_new_gyprock", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["powerpoint_new_gyprock"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Solid Brick"
          value={electricalSpecifications["powerpoint_new_brick"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("powerpoint_new_brick", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["powerpoint_new_brick"]} each)`}</p>
          }
        />
        <p className="italic">Replace</p>
        <NumberInputForm
          label="Gyprock"
          value={electricalSpecifications["powerpoint_replace_gyprock"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("powerpoint_replace_gyprock", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["powerpoint_replace_gyprock"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Solid Brick"
          value={electricalSpecifications["powerpoint_replace_brick"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("powerpoint_replace_brick", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["powerpoint_replace_brick"]} each)`}</p>
          }
        />
      </Accordion>

      <Accordion title="LIGHTS">
        <NumberInputForm
          label="Downlight (New)"
          value={electricalSpecifications["lights_downlight_new"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("lights_downlight_new", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["lights_downlight_new"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Downlight (Replace)"
          value={electricalSpecifications["lights_downlight_replace"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("lights_downlight_replace", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["lights_downlight_replace"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Pendant (Supplied)"
          value={electricalSpecifications["lights_pendant"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("lights_pendant", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["lights_pendant"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="LED Batten"
          value={electricalSpecifications["lights_led"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("lights_led", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["lights_led"]} each)`}</p>}
        />
      </Accordion>
      <Accordion title="SWITCH">
        <NumberInputForm
          label="New"
          value={electricalSpecifications["switch_new"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("switch_new", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["switch_new"]}, +$${ELECTRICAL_PRICES["switch_mech"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Replace"
          value={electricalSpecifications["switch_replace"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("switch_replace", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["switch_replace"]}, +$${ELECTRICAL_PRICES["switch_mech"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Dimmer"
          value={electricalSpecifications["switch_dimmer"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("switch_dimmer", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["switch_dimmer"]} each)`}</p>}
        />
        <NumberInputForm
          label="Fan switch"
          value={electricalSpecifications["switch_fanswitch"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("switch_fanswitch", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["switch_fanswitch"]} each)`}</p>
          }
        />
      </Accordion>
      <Accordion title="SMOKE ALARM">
        <NumberInputForm
          label="New"
          value={electricalSpecifications["smoke_alarm_new"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("smoke_alarm_new", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["smoke_alarm_new"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="Replace"
          value={electricalSpecifications["smoke_alarm_replace"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("smoke_alarm_replace", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["smoke_alarm_replace"]} each)`}</p>
          }
        />
      </Accordion>
      <Accordion title="CEILING FAN">
        <NumberInputForm
          label="Without Timber (Supplied)"
          value={electricalSpecifications["ceiling_fan_without"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("ceiling_fan_without", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["ceiling_fan_without"]} each)`}</p>
          }
        />
        <NumberInputForm
          label="With Timber (Supplied)"
          value={electricalSpecifications["ceiling_fan_with"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("ceiling_fan_with", value)
          }
          endContent={
            <p>{`(+$${ELECTRICAL_PRICES["ceiling_fan_with"]} each)`}</p>
          }
        />
      </Accordion>
      <Accordion title="EXHAUST FAN">
        <NumberInputForm
          label="How many"
          value={electricalSpecifications["exhaust_fan"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("exhaust_fan", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["exhaust_fan"]} each)`}</p>}
        />
      </Accordion>
      <Accordion title="TV MOUNT">
        <p className="italic">Up to 70 inch</p>
        <NumberInputForm
          label="Swivel"
          value={electricalSpecifications["tv_70_swivel"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("tv_70_swivel", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["tv_70_swivel"]} each)`}</p>}
        />
        <NumberInputForm
          label="Flat"
          value={electricalSpecifications["tv_70_flat"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("tv_70_flat", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["tv_70_flat"]} each)`}</p>}
        />
        <p className="italic">Up to 80 inch</p>
        <NumberInputForm
          label="Swivel"
          value={electricalSpecifications["tv_80_swivel"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("tv_80_swivel", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["tv_80_swivel"]} each)`}</p>}
        />
        <NumberInputForm
          label="Flat"
          value={electricalSpecifications["tv_80_flat"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("tv_80_flat", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["tv_80_flat"]} each)`}</p>}
        />
      </Accordion>
      <Accordion title="HIDDEN CABLES">
        <NumberInputForm
          label="How many"
          value={electricalSpecifications["hidden_cables"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("hidden_cables", value)
          }
          endContent={<p>{`(+$${ELECTRICAL_PRICES["hidden_cables"]} each)`}</p>}
        />
      </Accordion>
      <Accordion title="CABLE PER METER INC LABOR">
        <NumberInputForm
          label="1P 2.5mm"
          value={electricalSpecifications["cable_1p_025"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_1p_025", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_1p_025"]}/m)`}</p>}
        />
        <NumberInputForm
          label="1P 4mm"
          value={electricalSpecifications["cable_1p_4"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_1p_4", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_1p_4"]}/m)`}</p>}
        />
        <NumberInputForm
          label="1P 6mm"
          value={electricalSpecifications["cable_1p_6"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_1p_6", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_1p_6"]}/m)`}</p>}
        />
        <NumberInputForm
          label="1P 10mm"
          value={electricalSpecifications["cable_1p_10"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_1p_10", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_1p_10"]}/m)`}</p>}
        />
        <NumberInputForm
          label="3P 2.5mm"
          value={electricalSpecifications["cable_3p_025"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_3p_025", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_3p_025"]}/m)`}</p>}
        />
        <NumberInputForm
          label="3P 4mm"
          value={electricalSpecifications["cable_3p_4"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_3p_4", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_3p_4"]}/m)`}</p>}
        />
        <NumberInputForm
          label="3P 6mm"
          value={electricalSpecifications["cable_3p_6"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_3p_6", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_3p_6"]}/m)`}</p>}
        />
        <NumberInputForm
          label="3P 10mm"
          value={electricalSpecifications["cable_3p_10"]}
          handleValueChange={(value: number) =>
            handleElectricalChange("cable_3p_10", value)
          }
          endContent={<p>{`m (+$${ELECTRICAL_PRICES["cable_3p_10"]}/m)`}</p>}
        />
      </Accordion>
      <Accordion title="CALLOUT FEE">
        <SelectForm
          label="Callout fee"
          items={callout_fee}
          value={electricalSpecifications["callout_fee"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleElectricalChange("callout_fee", value)
          }
        />
      </Accordion>
      <Accordion title="COST BREAKDOWN">
        <p>
          Invoice price = ${applyDiscount(electricalCost.invoice, discount)}
        </p>
        <p>Cash price = ${applyDiscount(electricalCost.cash, discount)}</p>
        <DiscountInput discount={discount} setDiscount={setDiscount} />
      </Accordion>
      <ResetButton handleOnPress={resetElectrical} />
    </Layout>
  );
}
