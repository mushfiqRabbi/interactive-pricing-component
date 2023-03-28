import React, { useState } from "react";
import Amount from "./Amount";
import Footer from "./Footer";
import Slider from "./Slider";
import Switch from "./Switch";
import Vcounts from "./Vcounts";

export default function BillForm() {
  const [sliderVal, setSliderVal] = useState(3);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center w-full px-4 py-8 space-y-6">
      <Vcounts sliderVal={sliderVal} />
      <Slider sliderVal={sliderVal} setSliderVal={setSliderVal} />
      <Amount sliderVal={sliderVal} isYearly={isYearly} />
      <Switch setIsYearly={setIsYearly} />
    </div>
  );
}
