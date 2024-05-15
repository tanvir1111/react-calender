import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";
import { Close } from "@mui/icons-material";

export const Day = ({ day, rowIndex, events }) => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  const { setDaySelected, setShowEventModel, savedEvents, setSavedEvents } =
    useContext(GlobalContext);
  const deleteEvent = (event) => {
    const newEventList = savedEvents;
    newEventList[event.date] = savedEvents[event.date]?.filter(
      (ev) => ev.id !== event.id
    );

    localStorage.setItem("events", JSON.stringify(newEventList));
    setSavedEvents({ ...newEventList });
  };
  return (
    <div
      className="border border-gray-200 flex flex-col pb-2 cursor-pointer"
      onClick={() => {
        setDaySelected(day);
        setShowEventModel(true);
      }}
    >
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div className="flex-auto  flex gap-2 flex-col px-4 text-xs text-white overflow-y-auto">
        <div className=" flex flex-col gap-2 py-2">
          {events?.map((event) => (
            <div
              key={event.id}
              className={`flex items-center justify-between ${
                dayjs().isSame(day, "day")
                  ? "bg-blue-500"
                  : dayjs().isBefore(day, "day")
                  ? "bg-green-600"
                  : "bg-gray-400"
              }  rounded-lg px-2 py-1`}
            >
              <div className="truncate overflow-ellipsis whitespace-nowrap overflow-hidden mr-2">
                <p className="font-bold">{event?.title}</p>
                <p>{event?.description}</p>
              </div>
              <Close
                sx={{ fontSize: 16 }}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteEvent(event);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
