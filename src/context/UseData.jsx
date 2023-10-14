import { createContext, useState } from "react";
import { data as Data } from "../data/data";

export const DataProvider = createContext();

const UseData = ({ children }) => {
  const [data, setdata] = useState(Data);

  return (
    <DataProvider.Provider value={{ data, setdata }}>
      {children}
    </DataProvider.Provider>
  );
};

export default UseData;
