import React, { useContext } from "react";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import GlobalContext from "../Context/GlobalContext";
import dayjs from "dayjs";
export const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronLeftOutlined />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronRightOutlined />
        </span>
      </button>
      <h2 className="ml-4 text-xl font-bold ">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};
