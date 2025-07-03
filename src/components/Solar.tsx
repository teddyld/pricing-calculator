import Container from "../layout/Container";
import NumberInputForm from "../components/NumberInputForm";
import Accordion from "./Accordion";
import SelectForm from "../components/SelectForm";

import {
  optimisers,
  panels,
  sungrow_inverters,
  inverters,
  two_story_house,
  terracotta_tile,
  panel_removal,
  three_phase,
  type SolarPricingModel,
  type SolarError,
  type ItemPrice,
} from "../utils/pricingData";

export default function Solar({
  specifications,
  handleChange,
  error,
  isSungrow,
}: {
  specifications: SolarPricingModel;
  handleChange: (
    target: keyof SolarPricingModel,
    value: ItemPrice | number,
  ) => void;
  error: SolarError;
  isSungrow?: boolean;
}) {
  return (
    <>
      <Container>
        <NumberInputForm
          label="System size"
          value={specifications["system_size"]}
          handleValueChange={(value: number) =>
            handleChange("system_size", value)
          }
          endContent={
            <p className="text-nowrap text-sm">
              W <span className="opacity-50">(+$1.062/W)</span>
            </p>
          }
        />
        <NumberInputForm
          label="Post Code"
          value={specifications["postcode"]}
          handleValueChange={(value: number) => handleChange("postcode", value)}
          formatOptions={{
            minimumIntegerDigits: 4,
            useGrouping: false,
          }}
          className="sm:w-1/4"
        />
        <SelectForm
          label="Panel Type"
          items={panels}
          value={specifications["panel_type"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("panel_type", value)
          }
          error={error.panel_type}
          isPerWatt
        />
        <SelectForm
          label={`${isSungrow ? "Sungrow Inverter" : "Inverter"}`}
          items={isSungrow ? sungrow_inverters : inverters}
          value={specifications["inverter"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("inverter", value)
          }
          error={error.inverter}
        />
      </Container>
      <Accordion title="REMOVE PANELS">
        <SelectForm
          label="Remove panels"
          items={panel_removal}
          value={specifications["panel_removal"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("panel_removal", value)
          }
        />
      </Accordion>
      <Accordion title="OPTIMISERS">
        <SelectForm
          label="Optimisers"
          items={optimisers}
          value={specifications["optimisers"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("optimisers", value)
          }
        />
      </Accordion>
      <Accordion title="TWO STORY HOUSE">
        <SelectForm
          label="Two Story House"
          items={two_story_house}
          value={specifications["two_story_house"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("two_story_house", value)
          }
        />
      </Accordion>
      <Accordion title="THREE PHASE">
        <SelectForm
          label="Three Phase"
          items={three_phase}
          value={specifications["three_phase"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("three_phase", value)
          }
        />
      </Accordion>
      <Accordion title="TERRACOTTA TILE">
        <SelectForm
          label="Terracotta tile"
          items={terracotta_tile}
          value={specifications["terracotta_tile"].name}
          handleSelectionChange={(item: ItemPrice) =>
            handleChange("terracotta_tile", item)
          }
          isPerWatt
        />
      </Accordion>
    </>
  );
}
