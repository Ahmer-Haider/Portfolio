import React from "react";
import TypingEffect from "./TypingEffect";

const IntroCard = () => {
  const myCustomStrings = [
    "An enthusiast developer.",
    "A passionate programmer.",
    "Based in Hyderabad, India.",
  ];
  return (
    <>
      <div className="w-max mx-auto ">
        <h2 className="font-mono text-2xl text-red-500">
            <TypingEffect strings={myCustomStrings} />
        </h2>
      </div>
    </>
  );
};

export default IntroCard;
