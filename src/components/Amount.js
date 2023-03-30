import React from "react";

export default function Amount({ amount }) {
  return (
    <div className="space-x-3">
      <div className="inline-block font-bold text-4xl align-middle">
        ${amount.toFixed(2)}
      </div>
      <div className="inline-block text-slate-500 font-semibold align-middle">
        /month
      </div>
    </div>
  );
}
