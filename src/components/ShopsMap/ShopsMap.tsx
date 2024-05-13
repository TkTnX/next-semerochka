"use client";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import React, { useState } from "react";
import { ShopsMapData } from "./ShopsMap.data";

const ShopsMap: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState(0);

  return (
    <div className="container">
      <h2 className="font-bold text-2xl md:text-4xl mb-8 mt-28 ">
        Наши магазины
      </h2>

      <ul className="flex items-center gap-6 mb-6 flex-wrap">
        {ShopsMapData.map((item, index) => (
          <li key={index}>
            <button
              className={`  rounded p-2 hover:bg-color-green hover:opacity-80 hover:text-white transition duration-150 ${
                selectedAddress === index
                  ? "bg-color-green text-white"
                  : "bg-gray-50"
              }`}
              onClick={() => setSelectedAddress(index)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <YMaps>
          <Map
            width={"100%"}
            height={354}
            defaultState={{
              center: ShopsMapData[0].coord,
              zoom: 15,
            }}
            // state={{
            //   center: ShopsMapData[selectedAddress].coord,
            // }}
          />
        </YMaps>
      </div>
    </div>
  );
};

export default ShopsMap;
