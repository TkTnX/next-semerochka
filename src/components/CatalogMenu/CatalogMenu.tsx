import React from "react";
import { catalogData } from "@/app/catalog/catalog.data";
const CatalogMenu: React.FC = () => {
  return (
    <div className="hidden md:block absolute bg-white  left-0 top-20 right-0 z-10 py-10 ">
      <ul className=" grid container gap-6 grid-cols-2 lg:grid-cols-4">
        {catalogData.map((item) => (
          <li className="text-black catalogMenuItem  ">
            <a
              className="font-bold hover:text-color-orange transition duration-150 "
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogMenu;
