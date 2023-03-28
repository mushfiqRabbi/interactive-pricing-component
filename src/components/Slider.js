import React from "react";
import styled from "styled-components";

import tl from "../icons/icon-slider.svg";

const Ranger = styled.input`
  &::-webkit-slider-thumb {
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #00d2bd;
    background-image: url(${tl});
    color: white;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default function Slider({ sliderVal, setSliderVal }) {
  const handleRange = (e) => {
    setSliderVal(Number(e.target.value));
  };
  return (
    <div className="w-full">
      <Ranger
        type="range"
        min="1"
        max="5"
        value={sliderVal}
        style={{
          backgroundSize: `${(sliderVal - 1) * 25}% 100%`,
        }}
        className="w-full appearance-none h-2 rounded-md bg-slate-400/30 bg-gradient-to-r from-[#99f1e7] to-[#99f1e7] bg-no-repeat"
        onChange={handleRange}
      />
    </div>
  );
}
