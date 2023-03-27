import React from "react";
import styled from "styled-components";

const Ranger = styled.input`
  width: 100%;
`;

export default function Slider() {
  const handleRange = () => {};
  return (
    <div className="w-full">
      <Ranger type="range" min="1" max="5" defaultValue={1} />
    </div>
  );
}
