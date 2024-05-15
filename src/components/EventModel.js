import { Close } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GlobalContext";
import { getFormatedDate } from "../utils";
export const EventModel = () => {
  const { setShowEventModel, daySelected, setSavedEvents, savedEvents } =
    useContext(GlobalContext);

  const saveEventToLocalStorage = (newEvent) => {
    savedEvents[getFormatedDate(daySelected)] = [
      ...(savedEvents[getFormatedDate(daySelected)] || []),
      newEvent,
    ];
    localStorage.setItem("events", JSON.stringify(savedEvents));
    setSavedEvents(savedEvents);
  };
  const handleSubmit = () => {
    const newEvent = {
      id: Date.now(),
      date: getFormatedDate(daySelected),
      title,
      description,
    };
    saveEventToLocalStorage(newEvent);
    setTitle("");
    setDescription("");
    setShowEventModel(false);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <p className="text-gray-500 font-semibold">
            {getFormatedDate(daySelected)}
          </p>
          <button onClick={() => setShowEventModel(false)}>
            <Close className="text-gray-400" />
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2  border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="flex gap-2 items-center">
              <input
                type="text"
                name="description"
                placeholder="Add description"
                value={description}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2  border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <footer className=" flex justify-end p-4 border border-gray-100">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            save
          </button>
        </footer>
      </div>
    </div>
  );
};
