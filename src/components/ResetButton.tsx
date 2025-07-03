import { Button } from "@heroui/react";

export default function ResetButton({
  handleOnPress,
}: {
  handleOnPress: () => void;
}) {
  return (
    <div className="self-end pr-2">
      <Button color="primary" onPress={handleOnPress}>
        Reset to default
      </Button>
    </div>
  );
}
