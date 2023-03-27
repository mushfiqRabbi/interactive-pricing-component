import React from "react";
import Amount from "./Amount";
import Footer from "./Footer";
import Slider from "./Slider";
import Switch from "./Switch";
import Vcounts from "./Vcounts";

export default function BillForm() {
  return (
    <div className="flex flex-col items-center w-full">
      <Vcounts />
      <Slider />
      <Amount />
      <Switch />
    </div>
  );
}
