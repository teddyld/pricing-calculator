import React from "react";
import {
  electrical_default,
  type ElectricalPricingModel,
  type ElectricalPricingOutput,
  type ItemPrice,
} from "../utils/pricingData";
import { calculateElectrical } from "../utils/calculatePrice";

export const useElectricalSpecifications = () => {
  const localStorageKey = "electrical";

  const [specifications, setSpecifications] =
    React.useState<ElectricalPricingModel>(electrical_default);
  const [cost, setCost] = React.useState<ElectricalPricingOutput>({
    invoice: 0,
    cash: 0,
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
    const newCost = calculateElectrical(specifications);
    setCost({ ...newCost });
  }, [specifications]);

  const handleChange = (
    target: keyof ElectricalPricingModel,
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
    localStorage.setItem(localStorageKey, JSON.stringify(electrical_default));
    setSpecifications({ ...electrical_default });
  };

  return {
    electricalSpecifications: specifications,
    handleElectricalChange: handleChange,
    electricalCost: cost,
    resetElectrical: resetDefaults,
  };
};
