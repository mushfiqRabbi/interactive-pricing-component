import React from "react";
import BillForm from "./BillForm";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-sm">
      <BillForm />
      <div className="h-[1px] w-full bg-slate-500/10"></div>
      <Footer />
    </div>
  );
}
