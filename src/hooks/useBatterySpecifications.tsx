import React from "react";

import {
  battery_default,
  type BatteryPricingModel,
  type PricingOutput,
  type BatteryError,
  type ItemPrice,
} from "../utils/pricingData";
import { calculateBattery } from "../utils/calculatePrice";

export const useBatterySpecifications = () => {
  const localStorageKey = "battery";

  const [specifications, setSpecifications] =
    React.useState<BatteryPricingModel>(battery_default);
  const [cost, setCost] = React.useState<PricingOutput>({
    before_stc: 0,
    stc: 0,
    after_stc: 0,
  });
  const [error, setError] = React.useState<BatteryError>({
    brand: false,
    message: "",
  });

  // Load specifications from localstorage
  React.useEffect(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
      const storedSpecifications = JSON.parse(storedValue);
      setSpecifications({ ...storedSpecifications });
    }
  }, []);

  // Calculate cost
  React.useEffect(() => {
    setError({ brand: false, message: "" });
    if (!specifications["battery_brand"].name) {
      setError({
        brand: true,
        message: "Select a battery brand",
      });
      return;
    }

    const newCost = calculateBattery(specifications);
    setCost({ ...newCost });
  }, [specifications]);

  const handleChange = (
    target: keyof BatteryPricingModel,
    value: ItemPrice | number,
  ) => {
    const newSpecifications = {
      ...specifications,
      [target]: value,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(newSpecifications));
    setSpecifications({ ...newSpecifications });
  };

  const resetDefaults = () => {
    localStorage.setItem(localStorageKey, JSON.stringify(battery_default));
    setSpecifications({ ...battery_default });
  };

  return {
    batterySpecifications: specifications,
    handleBatteryChange: handleChange,
    batteryCost: cost,
    batteryError: error,
    resetBattery: resetDefaults,
  };
};
