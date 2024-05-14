import React from "react";
import { offerData } from "./offer.data";
import OfferCard from "./OfferCard";
const Offers: React.FC = () => {
  return (
    <section className="container">
      <h2 className="font-bold text-2xl md:text-4xl mb-8 mt-24">
        Специальные предложения
      </h2>
      <div className="grid lg:flex gap-10 justify-center">
        {offerData.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </section>
  );
};

export default Offers;
