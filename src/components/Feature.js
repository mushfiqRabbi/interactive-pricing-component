import React from "react";
import tik from "../icons/icon-check.svg";

export default function Feature({ feature }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src={tik} alt="" className="w-3" />
      <div className="font-semibold text-slate-400 text-sm tracking-wide">
        {feature}
      </div>
    </div>
  );
}
