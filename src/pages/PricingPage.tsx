import React from "react";

import Layout from "../layout/Layout";
import Container from "../layout/Container";
import NumberInputForm from "../components/NumberInputForm";
import SelectForm from "../components/SelectForm";
import Accordion from "../components/Accordion";

import { usePricingSpecifications } from "../hooks/usePricingSpecifications";
import {
  panels,
  selection,
  storySelection,
  sungrow_inverters,
} from "../utils/pricingModel";

import { Image } from "@heroui/react";
import TerracottaImage from "../assets/terracotta.png";

export default function PricingPage() {
  const {
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
  } = usePricingSpecifications();

  const [requiresRemoval, setRequiresRemoval] = React.useState(false);
  const [requiresOptimiser, setRequiresOptimiser] = React.useState(false);

  const handleRemoval = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "No") {
      handlePanelRemovalChange(0);
    }

    setRequiresRemoval(e.target.value === "Yes" ? true : false);
  };

  const handleOptimisers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "No") {
      handleOptimisersChange(0);
    }

    setRequiresOptimiser(e.target.value === "Yes" ? true : false);
  };

  return (
    <Layout>
      <Container>
        <NumberInputForm
          label="System size"
          value={specifications["system_size"]}
          handleValueChange={handleSystemSizeChange}
          endContent={<p className="text-sm opacity-75">W</p>}
        />
        <NumberInputForm
          label="Post Code"
          value={specifications["postcode"]}
          handleValueChange={handlePostcodeChange}
          formatOptions={{
            minimumIntegerDigits: 4,
            useGrouping: false,
          }}
        />
        <NumberInputForm
          label="STC"
          value={specifications["stc"]}
          handleValueChange={handleSTCChange}
        />
      </Container>
      <Container>
        <SelectForm
          label="Panel Type"
          items={panels}
          value={specifications["panel_type"]}
          handleSelectionChange={handlePanelTypeChange}
        />
        <SelectForm
          label="SunGrow Inverter"
          items={sungrow_inverters}
          value={specifications["sungrow_inverter"]}
          handleSelectionChange={handleSungrowInverterChange}
        />
      </Container>
      <Accordion title="Removal Panels?">
        <SelectForm
          label="Remove panels"
          items={selection}
          value={requiresRemoval ? "Yes" : "No"}
          handleSelectionChange={handleRemoval}
        />
        {requiresRemoval && (
          <NumberInputForm
            label="How many"
            value={specifications["panel_removal"]}
            handleValueChange={handlePanelRemovalChange}
          />
        )}
      </Accordion>
      <Accordion title="Optimisers?">
        <SelectForm
          label="Optimisers"
          items={selection}
          value={requiresOptimiser ? "Yes" : "No"}
          handleSelectionChange={handleOptimisers}
        />
        {requiresOptimiser && (
          <NumberInputForm
            label="How many"
            value={specifications["optimisers"]}
            handleValueChange={handleOptimisersChange}
          />
        )}
      </Accordion>
      <Accordion title="Others">
        <SelectForm
          label="Story house"
          items={storySelection}
          value={specifications["story_house"]}
          handleSelectionChange={handleStoryChange}
        />
        <SelectForm
          label="Three Phase"
          items={selection}
          value={specifications["three_phase"]}
          handleSelectionChange={handleThreePhaseChange}
        />
      </Accordion>
      <Accordion title="Terracotta tile roof?">
        <SelectForm
          label="Terracotta tile roof"
          items={selection}
          value={specifications["terracotta_tile_roof"]}
          handleSelectionChange={handleTerracottaChange}
        />
        <div className="flex justify-between">
          <Image src={TerracottaImage} width="50%" />
          <span />
        </div>
      </Accordion>
      <Accordion title="Cost Breakdown">
        <p>Cost Before STC =</p>
        <p>STC =</p>
        <p>Cost After STC (Inc GST) =</p>
      </Accordion>
    </Layout>
  );
}
