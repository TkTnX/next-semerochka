import React from "react";

type OfferCardType = {
  img: string;
  title: string;
  text: string;
};

const OfferCard: React.FC<OfferCardType> = ({ img, title, text }) => {
  return (
    <a
      href="#!"
      className="relative overflow-hidden hover:shadow-2xl shadow-current transition duration-150"
    >
      <div>
        <img className=" h-36 sm:h-auto" src={img} alt={title} />
      </div>
      <div className="absolute top-2 sm:top-5 left-2  sm:left-5 bottom-9 sm:bottom-9 z-10 max-w-40 sm:max-w-52 ">
        <h3 className="font-bold text-lg md:text-2xl">{title}</h3>
        <p className="font-normal text-xs md:text-base ">{text}</p>
      </div>
    </a>
  );
};

export default OfferCard;
