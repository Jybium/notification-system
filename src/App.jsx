// import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { data } from "./data/data";
import Notification from "./components/Notification";
import Vite from "./assets/react.svg";

function App() {
  // const [Data, setdata] = useState(data);

  // const markAsRead = (id) => {
  //   const updatedNotification = [...Data];

  //   updatedNotification.map((item) => item.id === id && item.read === true);

  //   setdata(updatedNotification);

  //   console.log(Data);
  // };
  return (
    <main className="bg-neutral-200 h-screen flex items-center content-center">
      <main className="bg-slate-50 h-[80vh] sm:h-[80vh] w-[90%] sm:w-4/6 lg:w-2/6 mx-auto p-5 px-6 shadow-md rounded-lg overflow-y-scroll">
        <Header />
        <section className="mt-5 py-2 grid gap-5">
          {data.map((item) => (
            <Notification item={item} key={item.id} />
          ))}
        </section>
      </main>
    </main>
  );
}

export default App;
