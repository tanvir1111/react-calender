import { Add } from "@mui/icons-material";
import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

export const CreateEventButton = () => {
  const { setShowEventModel } = useContext(GlobalContext);
  return (
    <button
      onClick={() => {
        setShowEventModel(true);
      }}
      className=" border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <Add className="w-7 h-7" />
      <span className="pl-3 pr-7">Add new Todo</span>
    </button>
  );
};
