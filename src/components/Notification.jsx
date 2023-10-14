import React, { useState } from "react";
import { data } from "../data/data";
import Vite from "../assets/react.svg";
import { DataProvider } from "../context/UseData";
import { useContext } from "react";

const Notification = ({ item }) => {
  const [show, setShow] = useState(false);
  const { data, setdata } = useContext(DataProvider);

  // const [read, setRead] = useState(item.read);/

  const hideDetails = (id) => {
    setShow((prev) => !show);
    const update = data;

    const items = [
      ...data,
      update.filter((item) => item.id === id).map((item) => (item.read = true)),
    ];

    setdata(update);

    // console.log(data);
    // setRead(items);

    // console.log(read);
  };

  return (
    <div
      className="flex items-start gap-5 bg-slate-500 p-3 rounded-md cursor-pointer"
      onClick={() => {
        hideDetails(item.id);
      }}
    >
      <img src={Vite} alt="" />
      <section>
        <div>
          <span className="">
            <span className="font-bold">{item.name}</span>{" "}
            <span>{item.reaction}</span>{" "}
            <span className="font-bold">{item.activity}</span>
            {"  "}{" "}
            <span
              className={`${
                item.read ? "hidden" : "inline-block"
              } h-2 w-2  ml-2 rounded-full bg-red-700`}
            >
              {" "}
            </span>
          </span>
          <p className="text-sm">{item.time}</p>
        </div>
        <div
          className={`${
            show ? "grid" : "hidden"
          } border-slate-200 border-[2px] shadow p-3 rounded mt-2 hidde cursor-pointer text-sm bg-white hover:bg-slate-200`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          voluptates facere ipsa illo minus, maxime, tenetur quidem veritatis!
        </div>
      </section>
    </div>
  );
};

export default Notification;
