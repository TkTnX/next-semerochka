import React from "react";

import footerLogo from "./images/footerLogo.svg";

import facebookImg from "./images/social/facebook.svg";

import instagramImg from "./images/social/instagram.svg";
import okImg from "./images/social/ok.svg";
import vkImg from "./images/social/vkontakte.svg";

import Image from "next/image";
import { Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className=" py-6 mt-20">
      <div className="container flex flex-wrap gap-3 justify-center text-center items-center md:text-left md:justify-between">
        <div className="grid  md:flex items-center gap-10">
          <Image
            src={footerLogo}
            className="w-auto mx-auto md:mx-0 h-auto"
            alt="logo"
          />
          <nav>
            <ul className="flex justify-center md:justify-start items-center gap-x-10 gap-y-2 flex-wrap">
              <li>
                <a href="#!" className=" text-xs font-normal hover:opacity-80 ">
                  О компании
                </a>
              </li>
              <li>
                <a href="#!" className=" text-xs font-normal hover:opacity-80 ">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#!" className=" text-xs font-normal hover:opacity-80 ">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#!" className=" text-xs font-normal hover:opacity-80 ">
                  Статьи
                </a>
              </li>
              <li>
                <a href="#!" className=" text-xs font-normal hover:opacity-80 ">
                  Политика обработки персональных данных
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid  sm:flex items-center gap-10 mb-10 md:mb-0 ">
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <a href="#!">
                <Image
                  src={facebookImg}
                  alt="facebook"
                  className="w-auto h-auto"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <Image
                  src={instagramImg}
                  alt="instagram"
                  className="w-auto h-auto"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <Image src={okImg} alt="OK" className="w-auto h-auto" />
              </a>
            </li>
            <li>
              <a href="#!">
                <Image src={vkImg} alt="vk" className="w-auto h-auto" />
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <Phone />
            <a href="tel:88007773333">8 800 777 33 33</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
