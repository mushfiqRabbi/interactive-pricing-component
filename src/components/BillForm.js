import React, { useState, useEffect } from "react";
import Amount from "./Amount";
import Slider from "./Slider";
import Switch from "./Switch";
import Vcounts from "./Vcounts";

export default function BillForm() {
  const [sliderVal, setSliderVal] = useState(3);
  const [isYearly, setIsYearly] = useState(false);
  const [views, setViews] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      const getData = async () => {
        const res = await fetch(
          `https://generic-server-xuof.onrender.com/ipc/${Number(
            sliderVal
          )}?yearly=${isYearly}`
        );
        const data = await res.json();
        setViews(data.views);
        setAmount(data.amount);
      };
      getData();
    }, 300);
    return () => clearTimeout(slideTimer);
  }, [sliderVal, isYearly]);

  return (
    <div className="flex flex-col items-center w-full px-4 py-8 space-y-6">
      <Vcounts views={views} />
      <Slider
        sliderVal={sliderVal}
        setSliderVal={setSliderVal}
        isYearly={isYearly}
        setViews={setViews}
        setAmount={setAmount}
      />
      <Amount amount={amount} />
      <Switch setIsYearly={setIsYearly} />
    </div>
  );
}
