import React from "react";
import { type PricingModel, pricingDefault } from "../utils/pricingModel";

export const usePricingSpecifications = () => {
  const [specifications, setSpecifications] =
    React.useState<PricingModel>(pricingDefault);

  const handleSystemSizeChange = (value: number) => {
    setSpecifications({ ...specifications, system_size: value });
  };

  const handlePostcodeChange = (value: number) => {
    if (String(value).length > 4) return;
    setSpecifications({ ...specifications, postcode: value });
  };

  const handleSTCChange = (value: number) => {
    setSpecifications({ ...specifications, stc: value });
  };

  const handlePanelTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecifications({
      ...specifications,
      panel_type: e.target.value as PricingModel["panel_type"],
    });
  };

  const handleSungrowInverterChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSpecifications({
      ...specifications,
      sungrow_inverter: e.target.value as PricingModel["sungrow_inverter"],
    });
  };

  const handlePanelRemovalChange = (value: number) => {
    setSpecifications({ ...specifications, panel_removal: value });
  };

  const handleOptimisersChange = (value: number) => {
    setSpecifications({ ...specifications, optimisers: value });
  };

  const handleStoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecifications({
      ...specifications,
      story_house: e.target.value as PricingModel["story_house"],
    });
  };

  const handleThreePhaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecifications({
      ...specifications,
      three_phase: e.target.value as PricingModel["three_phase"],
    });
  };

  const handleTerracottaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecifications({
      ...specifications,
      terracotta_tile_roof: e.target
        .value as PricingModel["terracotta_tile_roof"],
    });
  };

  return {
    specifications,
    handleSystemSizeChange,
    handlePostcodeChange,
    handleSTCChange,
    handlePanelTypeChange,
    handleSungrowInverterChange,
    handlePanelRemovalChange,
    handleOptimisersChange,
    handleStoryChange,
    handleThreePhaseChange,
    handleTerracottaChange,
  };
};
