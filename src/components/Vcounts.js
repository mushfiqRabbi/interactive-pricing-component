import React from "react";

export default function Vcounts({ sliderVal }) {
  let views;
  switch (sliderVal) {
    case 1:
      views = "10k";
      break;
    case 2:
      views = "50k";
      break;
    case 3:
      views = "100k";
      break;
    case 4:
      views = "500k";
      break;
    case 5:
      views = "1M";
      break;
  }

  return (
    <div className="uppercase font-bold text-sm tracking-widest text-slate-500">
      {views} pageviews
    </div>
  );
}
