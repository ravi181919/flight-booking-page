import React from "react";
import { useState } from "react";

function Home() {
  const cardDetails = [
    {
      image:
        "https://cdn.pixabay.com/photo/2023/04/25/20/41/plane-7950995_640.png",
      heading: "Spring Gateway Deals",
      description: "Head for the sun with sweet fares from $59 one way.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/10/28/05/54/plane-8346567_960_720.png",
      heading: "Fly Higher For Triple points",
      description:
        "Refer three friends and score triple points on Dallas Love Flights.",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/black-plane-icon-isolated-on-260nw-1338345566.jpg",
      heading: "Deals On Top Shelf Seats",
      description: "Get sweet deals in main cabin select and first class.",
    },
  ];

  const inputDetails = [
    {
      label: "Guests",
      status: "Adult",
      optionFirst:"married",
      optionSecond:"UnMarried",
    },
    {
      label: "From",
      status: "New york city",
      optionFirst:"London",
      optionSecond:"America",
    },
    {
      label: "To",
      status: "city",
      optionFirst:"India",
      optionSecond:"China",
    },
  ];


  return (
    <div className="home w-full bg-white">
      <div className="h-1/2 w-full flex items-center justify-start flex-col gap-7">
        <h1 className="text-4xl tracking-tighter mt-3">
          Where Would you like to go?
        </h1>
        <div className="flex gap-4 w-full justify-between px-32 ">
          {inputDetails.map((el, ind) => (
            <div key={ind} className="flex relative">
              <label htmlFor="optionBio" className=" text-[1vw] absolute left-3 ">
                {el.label}
              </label>
              <select
                id="optionBio"
                name="optionBio"
                className="pl-2 pr-52 py-[10px] border-black border outline-none  text-xl uppercase tracking-tight"
              >
                <option value={el.status} className="text-sm">
                  {el.status}
                </option>
                <option value={el.optionFirst} className="text-sm">
                  {el.optionFirst}
                </option>
                <option value={el.optionSecond} className="text-sm">
                  {el.optionSecond}
                </option>
              </select>
            </div>
          ))}
        </div>
        <div className="btn">
          <button className="border-black border-[1.5px] px-5 py-2 uppercase font-medium">
           search flights
          </button>
        </div>
      </div>
      <div className="h-1/2 w-full bg-black/20 px-24 flex gap-5 items-center justify-between">
        {cardDetails.map((el, ind) => (
          <div
            className="h-full w-72 flex flex-col items-center justify-center py-2 px-3 gap-3"
            key={ind}
          >
            <div className="h-24 w-24  rounded-full overflow-hidden">
              <img src={el.image} className="object-cover" />
            </div>
            <h2 className="text-violet-700 font-medium font-mono tracking-tighter text-lg">
              {el.heading}
            </h2>
            <p className="text-center text-black/70 text-sm">
              {el.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
