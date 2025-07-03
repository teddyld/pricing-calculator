import {
  type SolarPricingModel,
  type BatteryPricingModel,
  type PricingOutput,
  SOLAR_REBATE,
  SYSTEM_SIZE_MULTIPLIER,
  BATTERY_REBATE,
  SYSTEM_SIZE_MULTIPLIER_SOLAR_AND_BATTERY,
} from "./pricingData";

// Round to 2 decimal places
const formatPrice = (value: number) => {
  return Number((Math.round(value * 100) / 100).toFixed(2));
};

export const calculateSolar = (
  specifications: SolarPricingModel,
  isSolarOnly: boolean,
): PricingOutput => {
  let before_stc = 0;
  //  System size
  if (isSolarOnly) {
    before_stc += specifications["system_size"] * SYSTEM_SIZE_MULTIPLIER;
  } else {
    before_stc +=
      specifications["system_size"] * SYSTEM_SIZE_MULTIPLIER_SOLAR_AND_BATTERY;
  }
  // Panel type
  before_stc +=
    specifications["panel_type"].price * specifications["system_size"];
  // Inverter
  before_stc += specifications["inverter"].price;
  // Panel removal
  before_stc += specifications["panel_removal"].price;
  // Optimisers
  before_stc += specifications["optimisers"].price;
  // Two story house
  before_stc += specifications["two_story_house"].price;
  // Three phase
  before_stc += specifications["three_phase"].price;
  // Terracotta tile
  before_stc +=
    specifications["terracotta_tile"].price * specifications["system_size"];

  const stc = specifications["system_size"] * SOLAR_REBATE;
  const after_stc = before_stc - stc;

  return {
    before_stc: formatPrice(before_stc),
    stc: formatPrice(stc),
    after_stc: formatPrice(after_stc),
  };
};

export const calculateBattery = (
  specifications: BatteryPricingModel,
): PricingOutput => {
  let before_stc = 0;
  // Battery brand
  before_stc += specifications["battery_brand"].price;
  // Blackout protection
  before_stc += specifications["blackout_protection"].price;
  // Retrofit
  before_stc += specifications["retrofit"].price;

  const stc = specifications["battery_brand"].watts
    ? specifications["battery_brand"].watts * BATTERY_REBATE
    : 0;
  const after_stc = before_stc - stc;

  return {
    before_stc: formatPrice(before_stc),
    stc: formatPrice(stc),
    after_stc: formatPrice(after_stc),
  };
};
