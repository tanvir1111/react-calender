import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModel: false,
  setShowEventModel: () => {},
  daySelected: null,
  setDaySelected: (day) => {},
  savedEvents: {},
  setSavedEvents: (events) => {},
});

export default GlobalContext;
