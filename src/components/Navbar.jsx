import React from "react";

function Navbar() {
  const bookingData = ["Book", "check in", "Manage"];
  const flightData = [
    "Deals",
    "flying with us",
    "where we fly",
    "Flight status",
    "Flight Alerts",
    "Fee",
  ];
  return (
    <div className="h-14 w-full bg-gradient-to-r from-purple-500 to-red-500">
      <div className="flex h-full w-full">
        <div className="relative border-r-2 border-black h-full w-44 flex items-center justify-start px-5">
          <img
            src="https://static.flight-report.com/media/compagnie_tail/sq_wzLf919.png"
            className="h-full w-1/2 leading-none z-10"
          />
          <h1 className="tracking-tighter font-extralight text-2xl absolute right-7 text-white">
            america
          </h1>
        </div>
        <div className="flex gap-6 justify-center items-center uppercase text-white border-r-2 border-black  px-10">
          {bookingData.map((e, i) => (
            <h3 className="text-sm" key={i}>
              {e}
            </h3>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 text-white border-r-2 border-black pr-20 pl-5">
          {flightData.map((e, i) => (
            <h3 key={i} className="text-xs">
              {e}
            </h3>
          ))}
        </div>
        <div className="flex justify-center items-center gap-5 text-white  pl-10 ">
          <div className="flex justify-center items-center gap-[2px]">
            <h3 className="text-md font-extralight">elevate</h3>
            <img
              src="src\assets\plane-line.png"
              className="h-2 w-2 bg-white rounded-full mt-1"
            />
          </div>
          <h3 className="text-sm">sign in</h3>
          <h3 className="text-sm">sign up</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
