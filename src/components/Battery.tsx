import Container from "../layout/Container";
import SelectForm from "../components/SelectForm";
import {
  battery_brands,
  blackout_protection,
  retrofit,
  type BatteryError,
  type BatteryPricingModel,
  type ItemPrice,
} from "../utils/pricingData";

export default function Battery({
  specifications,
  handleChange,
  error,
}: {
  specifications: BatteryPricingModel;
  handleChange: (target: keyof BatteryPricingModel, value: ItemPrice) => void;
  error: BatteryError;
}) {
  return (
    <>
      <Container>
        <SelectForm
          label="Battery Brands"
          items={battery_brands}
          value={specifications["battery_brand"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("battery_brand", value)
          }
          error={error.brand}
        />
        <SelectForm
          label="Blackout Protection"
          items={blackout_protection}
          value={specifications["blackout_protection"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("blackout_protection", value)
          }
        />
        <SelectForm
          label="Retrofit"
          items={retrofit}
          value={specifications["retrofit"].name}
          handleSelectionChange={(value: ItemPrice) =>
            handleChange("retrofit", value)
          }
        />
      </Container>
    </>
  );
}
