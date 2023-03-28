import React from "react";
import Feature from "./Feature";

export default function FeaturesList() {
  return (
    <div className="space-y-2">
      <Feature feature="Unlimited websites" />
      <Feature feature="100% data ownership" />
      <Feature feature="Email reports" />
    </div>
  );
}
