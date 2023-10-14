import React, { useEffect, useState, useContext } from "react";
import UseData, { DataProvider } from "../context/UseData";
// import { data } from "../data/data";

const Header = () => {
  const [count, setCount] = useState();
  const [state, setState] = useState();
  const { data, setdata } = useContext(DataProvider);

  useEffect(() => {
    const Data = data.filter((items) => items.read === false);
    const Final = Data.map((item) => item === false);
    setCount(Final.length);
    setState(Final);
    console.log(Final, data);
  }, [data, state]);

  return (
    <main>
      <div className="flex items-center justify-between font-bold">
        <p className="grid grid-flow-col gap-2 place-items-center text-lg">
          Notifications{" "}
          <span className="px-4 py-1 bg-purple-500 font-bold text-white rounded-md">
            {count}
          </span>
        </p>
        <p
          className="capitalize cursor-pointer"
          onClick={() => {
            data.map((item) => {
              setdata([...item, (item.read = true)]);
            });
            console.log(data);
          }}
        >
          mark all as read
        </p>
      </div>
    </main>
  );
};

export default Header;
