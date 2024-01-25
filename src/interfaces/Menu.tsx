import { useState } from "react";
import AddPage from "../components/AddPage";
import User from "../components/User";
import "./switch.css";
import { Bell, Gear, MagnifyingGlass, Star, Trash } from "@phosphor-icons/react";

function Menu() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="h-100  px-4 bg-bgMenu relative ">
      <div>
        <User/>
      </div>
      <div className="mt-20 relative h-4 bg-bgInput flex items-center rounded">
        <input
          className="text-sm  text-textWhite bg-bgInput relative pl-9 outline-none "
          type="text"
          placeholder="Procurar"
        />
        <MagnifyingGlass
          style={{ fontSize: 20 }}
          className="text-textWhite ml-2 absolute"/>
      </div>
      <div
        onClick={() => handleButtonClick(1)}
        className={`${
          selectedButton === 1 ? "bg-bgButton" : ""
        } select-none h-4 mt-2 cursor-pointer flex items-center py-2 rounded`}
      >
        <Star style={{ fontSize: 20 }}
          className="ml-2 text-textWhite"/>

        <button className="text-sm pl-2 text-textWhite">Favorites</button>
      </div>
      <div
        onClick={() => handleButtonClick(2)}
        className={`${
          selectedButton === 2 ? "bg-bgButton" : ""
        } select-none h-4 mt-2 cursor-pointer flex items-center py-2 rounded`}
      >
        <Trash style={{ fontSize: 20 }}
          className="ml-2 text-textWhite"/>
         
        <button className="text-sm pl-2 text-textWhite">
          Recently deleted
        </button>
      </div>
      <div className="mt-20 ">
        <AddPage />
      </div>
      <div className="absolute bottom-0 mb-14">
        <button>
          <Bell style={{ fontSize: 20 }} className=" text-textWhite"/>
        </button>
      </div>
      <div className="mb-4 flex justify-between absolute bottom-0 ">
        <button>
          <Gear style={{ fontSize: 20 }}
            className=" text-textWhite"/>
        </button>
        <div className="flex mr-5">
          <div className="toggle-switch ">
            <label className="switch-label">
              <input placeholder="1" type="checkbox" className="checkbox"></input>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
