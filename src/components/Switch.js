import React from "react";
import styled from "styled-components";

const Input = styled.input`
  &:checked ~ div {
    background-color: #6fe6db;
  }
  &:checked ~ div::after {
    left: calc(100% - 4px);
    transform: translate(-100%, -50%);
  }
`;

const Div = styled.div`
  position: relative;
  padding: 3px 4px;
  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 16px;
    width: 16px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
  }
`;

export default function Switch({ setIsYearly }) {
  const handleSwitch = (e) => {
    setIsYearly((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-center  relative w-full gap-3">
      <p className="capitalize text-slate-600 font-bold text-xs">
        monthly billing
      </p>
      <label className="">
        <Input type="checkbox" className="hidden" onChange={handleSwitch} />
        <Div className="h-[26px] w-12 rounded-full bg-slate-300"></Div>
      </label>
      <p className="capitalize text-slate-600 font-bold text-xs">
        yearly billing
      </p>
      <p className="absolute top-50 right-[-10px] overflow-visible text-xs text-orange-500 font-extrabold bg-orange-500/20 px-2 py-1 rounded-full">
        -25%
      </p>
    </div>
  );
}
