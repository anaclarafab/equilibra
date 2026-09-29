import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const APP_URL = "/app/index.html";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <a href={APP_URL} className="text-sm text-muted-foreground underline">
        Abrir o Equilibra
      </a>
    </div>
  );
}
