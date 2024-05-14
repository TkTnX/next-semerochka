import { catalogData } from "@/app/catalog/catalog.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatalogItems: React.FC = () => {
  return (
    <ul className="catalogGrid gap-10">
      {catalogData.map((item, index) => (
        <li className="relative rounded" key={index}>
          <Link href={item.link}>
            <Image
              src={item.img}
              width={600}
              height={200}
              className="w-full h-auto"
              alt={item.title}
            />

            <p className="w-full absolute z-10 bottom-2 left-2 font-bold text-lg text-white ">
              {item.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CatalogItems;
