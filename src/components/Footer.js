import React from "react";
import FeaturesList from "./FeaturesList";
export default function Footer() {
  return (
    <div className="px-4 py-8 space-y-8">
      <FeaturesList />
      <button className="bg-blue-900 text-white px-12 py-3 rounded-full font-semibold block m-auto">
        Start my trial
      </button>
    </div>
  );
}
