import React from "react";

import bgHeader from "../icons/pattern-circles.svg";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgHeader})`,
      }}
      className="bg-no-repeat bg-center bg-contain py-10 text-center"
    >
      <div className="text-xl font-bold">Simple, traffic-based pricing</div>
      <div className="text-base font-normal text-slate-500 mt-3 mb-1">
        Sign up for our 30-day trial
      </div>
      <div className="text-base font-normal text-slate-500">
        No credit card required
      </div>
    </div>
  );
}
