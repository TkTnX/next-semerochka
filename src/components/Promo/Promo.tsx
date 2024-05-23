import React from "react";

const Promo: React.FC = () => {
  return (
    <section className="promoBg relative">
      <div className="container">
        <h1 className="absolute ml-2 right-2 text-center left-0 md:left-auto md:text-start   md:right-10 top-1/2  -translate-y-1/2 font-bold text-2xl lg:text-5xl  text-color-text">
          Доставка бесплатно от 1000&nbsp;₽
        </h1>
      </div>
    </section>
  );
};

export default Promo;
