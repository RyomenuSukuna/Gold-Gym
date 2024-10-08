import React from "react";
import Button from "./Button";
import GoldGym from "../assets/GoldGym.png";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div>
        <img src={GoldGym} alt="Gold Gym" className="w-24 h-auto" />
      </div>

      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="upppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Gold <span className="text-white">Gym</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hearby acknowledge that I may become{" "}
        <span className="text-white font-medium">unbelievably jacked</span> and
        accept all risks of becoming the local{" "}
        <span className="text-white font-medium">mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
