import React from "react";

import {
  batteryDefault,
  type BatteryPricingModel,
} from "../utils/pricingModel";

export const useBatterySpecifications = () => {
  const [specifications, setSpecifications] =
    React.useState<BatteryPricingModel>(batteryDefault);

  const handleBatteryBrandChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSpecifications({
      ...specifications,
      battery_brand: e.target.value as BatteryPricingModel["battery_brand"],
    });
  };

  const handleBlackoutProtectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSpecifications({
      ...specifications,
      blackout_protection: e.target
        .value as BatteryPricingModel["blackout_protection"],
    });
  };

  const handleRetrofitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "No") {
      setSpecifications({
        ...specifications,
        retrofit: e.target.value as BatteryPricingModel["retrofit"],
        three_phase: "No",
      });
    } else {
      setSpecifications({
        ...specifications,
        retrofit: e.target.value as BatteryPricingModel["retrofit"],
      });
    }
  };

  const handleThreePhaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecifications({
      ...specifications,
      three_phase: e.target.value as BatteryPricingModel["three_phase"],
    });
  };

  return {
    specifications,
    handleBatteryBrandChange,
    handleBlackoutProtectionChange,
    handleRetrofitChange,
    handleThreePhaseChange,
  };
};
