import React from "react";

export default function Vcounts({ views }) {
  return (
    <div className="uppercase font-bold text-sm tracking-widest text-slate-500">
      {views} pageviews
    </div>
  );
}
