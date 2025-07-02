export const panels = [
  "No option selected",
  "Trina 440w 25yr N-Type Black Frame",
  "AIKO Neostar ABC 455W All Black Front",
  "Jinko 440",
  "Jinko All Black 440",
] as const;
export type PanelType = (typeof panels)[number];

export const sungrow_inverters = [
  "No option selected",
  "5 kW Dual MPPT",
  "5 kW tripple MPPT",
  "5 kW (Hybrid)",
  "5 kW 3 Phase",
  "5 kW 3 Phase (Hybrid)",
  "6 kW (Hybrid)",
  "7 kW 3 Phase",
  "8 kW Single Phase (Hybrid)",
  "10 kW Tripple MPPT",
  "10 kW 3 Phase",
  "10 kW 3 Phase (Hybrid)",
  "10 kW Single Phase (Hybrid)",
  "15 kW 3 Phase",
  "20 kW 3 Phase (Hybrid)",
  "25 kW 3 Phase (Hybrid)",
] as const;
export type SunGrowInverterType = (typeof sungrow_inverters)[number];

export const batteryBrands = [
  "No option selected",
  "Sungrow Battery 6.4kW",
  "Sungrow Battery 9.6kW",
  "Sungrow Battery 12.8kW",
  "Sungrow Battery 16.0kW",
  "Sungrow Battery 19.2kW",
  "Sungrow Battery 22.4kw (3 Phase Only)",
  "Sungrow Battery 25.6kW (3 Phase Only)",
  "SolarEdge Energy Bank",
  "Tesla (13.2kW)",
  "GIVENERGY ALL-IN-ONE 13.5kWh AC Coupled Battery Pack",
  "Redback 7.2kW A/C Coupled Battery",
  "Redback 14.2 A/C Coupled Battery",
] as const;
export type BatteryBrandType = (typeof batteryBrands)[number];

export const selection = ["Yes", "No"] as const;
export type SelectionType = (typeof selection)[number];

export const storySelection = [
  "No",
  "Second Story House",
  "Third Story House",
] as const;
export type StoryType = (typeof storySelection)[number];

export type PricingModel = {
  system_size: number;
  postcode: number | undefined;
  stc: number;
  panel_type: PanelType;
  sungrow_inverter: SunGrowInverterType;
  panel_removal: number;
  optimisers: number;
  story_house: StoryType;
  three_phase: SelectionType;
  terracotta_tile_roof: SelectionType;
};

export const pricingDefault: PricingModel = {
  system_size: 0,
  postcode: undefined,
  stc: 0,
  panel_type: "No option selected",
  sungrow_inverter: "No option selected",
  panel_removal: 0,
  optimisers: 0,
  story_house: "No",
  three_phase: "No",
  terracotta_tile_roof: "No",
};

export type BatteryPricingModel = {
  battery_brand: BatteryBrandType;
  blackout_protection: SelectionType;
  retrofit: SelectionType;
  three_phase: SelectionType;
};

export const batteryDefault: BatteryPricingModel = {
  battery_brand: "No option selected",
  blackout_protection: "No",
  retrofit: "No",
  three_phase: "No",
};
