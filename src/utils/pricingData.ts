export const SOLAR_REBATE = 0.312;
export const BATTERY_REBATE = 0.37;
export const SYSTEM_SIZE_MULTIPLIER = 1.062;
export const SYSTEM_SIZE_MULTIPLIER_SOLAR_AND_BATTERY = 0.712;

export type ItemPrice = {
  name: string;
  price: number;
  watts?: number;
};

export type PricingOutput = {
  before_stc: number;
  stc: number;
  after_stc: number;
};

/* 
===============================
            Solar 
===============================
*/

// Prices per watt
export const panels: ItemPrice[] = [
  { name: "CANADIAN SOLAR", price: 0.04 },
  { name: "DAS SOLAR", price: 0 },
];

export const sungrow_inverters: ItemPrice[] = [
  { name: "5KW DUAL MPPT", price: 0 },
  { name: "5KW TRIPPLE MPPT", price: 350 },
  { name: "5KW HYBRID", price: 1000 },
  { name: "5KW 3 PHASE", price: 500 },
  { name: "5KW 3 PHASE HYBRID", price: 1000 },
  { name: "6KW HYBRID", price: 500 },
  { name: "10KW TRIPPLE MPPT", price: 0 },
  { name: "10KW 3 PHASE", price: 500 },
  { name: "10KW 3 PHASE HYBRID", price: 1000 },
  { name: "10KW SINGLE PHASE HYBRID", price: 1000 },
  { name: "15KW 3 PHASE", price: 0 },
  { name: "15KW 3 PHASE HYBRID", price: 1000 },
];

export const inverters: ItemPrice[] = [
  { name: "ALPHA ESS 5KW", price: 0 },
  { name: "SUNGROW 5KW HYBRID", price: 0 },
  { name: "SUNGROW 5KW 3 PHASE HYBRID", price: 500 },
  { name: "SUNGROW 6KW HYBRID", price: 0 },
  { name: "SUNGROW 10KW THREE PHASE HYBRID", price: 500 },
  { name: "SUNGROW 10KW SINGLE PHASE HYBRID", price: 0 },
  { name: "SUNGROW 15KW THREE PHASE HYBRID", price: 500 },
];

// Price per watt
export const terracotta_tile: ItemPrice[] = [
  { name: "Yes", price: 0.04 },
  { name: "No", price: 0 },
];

export const three_phase: ItemPrice[] = [
  { name: "Yes", price: 500 },
  { name: "No", price: 0 },
];

export const two_story_house: ItemPrice[] = [
  { name: "Yes", price: 500 },
  { name: "No", price: 0 },
];

export const select_placeholder: ItemPrice[] = [
  { name: "Yes", price: 0 },
  { name: "No", price: 0 },
];

export const panel_removal: ItemPrice[] = [
  { name: "Yes", price: 300 },
  { name: "No", price: 0 },
];

export const optimisers: ItemPrice[] = [
  { name: "0", price: 0 },
  { name: "1", price: 125 },
  { name: "2", price: 250 },
  { name: "3", price: 375 },
  { name: "4", price: 500 },
  { name: "5", price: 625 },
  { name: "6", price: 750 },
];

export type SolarPricingModel = {
  system_size: number;
  panel_type: ItemPrice;
  inverter: ItemPrice;
  panel_removal: ItemPrice;
  optimisers: ItemPrice;
  two_story_house: ItemPrice;
  three_phase: ItemPrice;
  terracotta_tile: ItemPrice;
};

export const pricing_default: SolarPricingModel = {
  system_size: 0,
  panel_type: { name: "", price: 0 },
  inverter: { name: "", price: 0 },
  panel_removal: { name: "No", price: 0 },
  optimisers: { name: "0", price: 0 },
  two_story_house: { name: "No", price: 0 },
  three_phase: { name: "No", price: 0 },
  terracotta_tile: { name: "No", price: 0 },
};

export type SolarError = {
  panel_type: boolean;
  inverter: boolean;
  message: string;
};

/* 
===============================
            Battery 
===============================
*/

export const battery_brands: ItemPrice[] = [
  { name: "SUNGROW BATTERY 9.6KW", price: 12552, watts: 9600 },
  { name: "SUNGROW BATTERY 12.8KW", price: 14936, watts: 12800 },
  { name: "SUNGROW BATTERY 16KW", price: 17320, watts: 16000 },
  { name: "SUNGROW BATTERY 19.2KW", price: 19704, watts: 19200 },
  { name: "SUNGROW BATTERY 22.4KW (3PH)", price: 23088, watts: 22400 },
  { name: "SUNGROW BATTERY 25.6KW (3PH)", price: 25472, watts: 25600 },
  { name: "SUNGROW BATTERY 20KW", price: 20400, watts: 20000 },
  { name: "SUNGROW BATTERY 25KW", price: 24250, watts: 25000 },
  { name: "SUNGROW BATTERY 30KW (3PH)", price: 29100, watts: 30000 },
  { name: "SUNGROW BATTERY 35KW (3PH)", price: 32950, watts: 35000 },
  { name: "ALPHA ESS BATTERY 10KW", price: 9700, watts: 10000 },
  { name: "ALPHA ESS BATTERY 15KW", price: 12550, watts: 15000 },
  { name: "ALPHA ESS BATTERY 20KW", price: 15400, watts: 20000 },
  { name: "ALPHA ESS BATTERY 25KW", price: 18250, watts: 25000 },
];

export const blackout_protection: ItemPrice[] = [
  { name: "Yes", price: 1000 },
  { name: "No", price: 0 },
];

export const retrofit: ItemPrice[] = [
  { name: "Yes", price: 200 },
  { name: "No", price: 0 },
];

export type BatteryPricingModel = {
  battery_brand: ItemPrice;
  blackout_protection: ItemPrice;
  retrofit: ItemPrice;
  three_phase: ItemPrice;
};

export const battery_default: BatteryPricingModel = {
  battery_brand: { name: "", price: 0 },
  blackout_protection: { name: "No", price: 0 },
  retrofit: { name: "No", price: 0 },
  three_phase: { name: "No", price: 0 },
};

export type BatteryError = {
  brand: boolean;
  message: string;
};

/* 
===============================
          Electrical 
===============================
*/

export const CASH_DISCOUNT = 0.15; // %

export const ELECTRICAL_PRICES = {
  switchboard_upgrade_single: 15000,
  switchboard_upgrade_three: 1000,

  powerpoint_new_gyprock: 100,
  powerpoint_new_brick: 150,
  powerpoint_replace_gyprock: 50,
  powerpoint_replace_brick: 70,

  lights_downlight_new: 80,
  lights_downlight_replace: 40,
  lights_pendant: 130,
  lights_led: 200,

  switch_new: 150,
  switch_replace: 50,
  switch_dimmer: 150,
  switch_fanswitch: 50,
  switch_mech: 10, // Price per switch mech

  smoke_alarm_replace: 150,
  smoke_alarm_new: 250,

  ceiling_fan_without: 275,
  ceiling_fan_with: 150,

  exhaust_fan: 150,

  tv_70_swivel: 345,
  tv_70_flat: 230,
  tv_80_swivel: 500,
  tv_80_flat: 400,

  hidden_cables: 350,

  // Prices per metre
  cable_1p_025: 7.5,
  cable_1p_4: 9.5,
  cable_1p_6: 11.5,
  cable_1p_10: 14,
  cable_3p_025: 12.5,
  cable_3p_4: 14.5,
  cable_3p_6: 16,
  cable_3p_10: 19,
};

export const callout_fee: ItemPrice[] = [
  { name: "Yes", price: 100 },
  { name: "No", price: 0 },
];

export type ElectricalPricingModel = {
  switchboard_upgrade_single: number;
  switchboard_upgrade_three: number;

  powerpoint_new_gyprock: number;
  powerpoint_new_brick: number;
  powerpoint_replace_gyprock: number;
  powerpoint_replace_brick: number;

  lights_downlight_new: number;
  lights_downlight_replace: number;
  lights_pendant: number;
  lights_led: number;

  switch_new: number;
  switch_replace: number;
  switch_dimmer: number;
  switch_fanswitch: number;

  smoke_alarm_replace: number;
  smoke_alarm_new: number;

  ceiling_fan_without: number;
  ceiling_fan_with: number;

  exhaust_fan: number;

  tv_70_swivel: number;
  tv_70_flat: number;
  tv_80_swivel: number;
  tv_80_flat: number;

  hidden_cables: number;

  cable_1p_025: number;
  cable_1p_4: number;
  cable_1p_6: number;
  cable_1p_10: number;
  cable_3p_025: number;
  cable_3p_4: number;
  cable_3p_6: number;
  cable_3p_10: number;

  callout_fee: ItemPrice;
  [key: string]: number | ItemPrice;
};

export const electrical_default: ElectricalPricingModel = {
  switchboard_upgrade_single: 0,
  switchboard_upgrade_three: 0,

  powerpoint_new_gyprock: 0,
  powerpoint_new_brick: 0,
  powerpoint_replace_gyprock: 0,
  powerpoint_replace_brick: 0,

  lights_downlight_new: 0,
  lights_downlight_replace: 0,
  lights_pendant: 0,
  lights_led: 0,

  switch_new: 0,
  switch_replace: 0,
  switch_dimmer: 0,
  switch_fanswitch: 0,

  smoke_alarm_replace: 0,
  smoke_alarm_new: 0,

  ceiling_fan_without: 0,
  ceiling_fan_with: 0,

  exhaust_fan: 0,

  tv_70_swivel: 0,
  tv_70_flat: 0,
  tv_80_swivel: 0,
  tv_80_flat: 0,

  hidden_cables: 0,

  cable_1p_025: 0,
  cable_1p_4: 0,
  cable_1p_6: 0,
  cable_1p_10: 0,
  cable_3p_025: 0,
  cable_3p_4: 0,
  cable_3p_6: 0,
  cable_3p_10: 0,

  callout_fee: { name: "No", price: 0 },
};

export type ElectricalPricingOutput = {
  invoice: number;
  cash: number;
};
