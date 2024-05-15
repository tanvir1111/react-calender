import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
export const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModel, setShowEventModel] = useState(false);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [savedEvents, setSavedEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || {}
  );
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModel,
        setShowEventModel,
        daySelected,
        setDaySelected,
        savedEvents,
        setSavedEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
