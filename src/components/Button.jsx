import React from "react";

export default function Button(props) {
  const { text, func } = props;

  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-[#FFD700] border-solid goldShadow duration-200"
    >
      <p className="text-white">{text}</p>
    </button>
  );
}
