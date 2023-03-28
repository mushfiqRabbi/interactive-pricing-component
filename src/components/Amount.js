import React from "react";

export default function Amount({ sliderVal, isYearly }) {
  let amount;
  switch (sliderVal) {
    case 1:
      amount = 8.0;
      break;
    case 2:
      amount = 12.0;
      break;
    case 3:
      amount = 16.0;
      break;
    case 4:
      amount = 24.0;
      break;
    case 5:
      amount = 36.0;
      break;
  }
  return (
    <div className="space-x-3">
      <div className="inline-block font-bold text-4xl align-middle">
        ${isYearly ? (amount - amount * 0.25).toFixed(2) : amount.toFixed(2)}
      </div>
      <div className="inline-block text-slate-500 font-semibold align-middle">
        /month
      </div>
    </div>
  );
}
