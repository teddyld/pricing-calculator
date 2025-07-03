import React from "react";

import {
  pricing_default,
  type SolarPricingModel,
  type PricingOutput,
  type SolarError,
  type ItemPrice,
} from "../utils/pricingData";
import { calculateSolar } from "../utils/calculatePrice";

export const usePricingSpecifications = (isSolarOnly: boolean) => {
  const localStorageKey = isSolarOnly ? "solar" : "solarandbattery";

  const [specifications, setSpecifications] =
    React.useState<SolarPricingModel>(pricing_default);
  const [cost, setCost] = React.useState<PricingOutput>({
    before_stc: 0,
    stc: 0,
    after_stc: 0,
  });
  const [error, setError] = React.useState<SolarError>({
    panel_type: false,
    inverter: false,
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
    setError({ panel_type: false, inverter: false, message: "" });
    if (
      !specifications["panel_type"].name ||
      !specifications["inverter"].name
    ) {
      setError({
        panel_type: !specifications["panel_type"].name ? true : false,
        inverter: !specifications["inverter"].name ? true : false,
        message: "Invalid panel type or inverter",
      });
      return;
    }

    const newCost = calculateSolar(specifications);
    setCost({ ...newCost });
  }, [specifications]);

  const handleChange = (
    target: keyof SolarPricingModel,
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
    localStorage.setItem(localStorageKey, JSON.stringify(pricing_default));
    setSpecifications({ ...pricing_default });
  };

  return {
    solarSpecifications: specifications,
    handleSolarChange: handleChange,
    solarCost: cost,
    solarError: error,
    resetSolar: resetDefaults,
  };
};
