import React, { useContext } from "react";
import { Day } from "./Day";
import { getFormatedDate } from "../utils";
import GlobalContext from "../Context/GlobalContext";

export const Month = ({ month }) => {
  const { savedEvents } = useContext(GlobalContext);
  const getEventsBasedOnDay = (day) => {
    return savedEvents?.[getFormatedDate(day)] || [];
  };

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 max-h-screen">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              rowIndex={i}
              events={getEventsBasedOnDay(day)}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
