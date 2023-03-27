import React from "react";
import BillForm from "./BillForm";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="flex flex-col items-center">
      <BillForm />
      <Footer />
    </div>
  );
}
