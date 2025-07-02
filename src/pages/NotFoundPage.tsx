import { Button } from "@heroui/react";

import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <p className="text-8xl">404</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Page Not Found</h1>
        <Button
          color="primary"
          variant="bordered"
          onPress={() => navigate("/")}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
