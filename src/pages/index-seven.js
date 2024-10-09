import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import bg from "../assets/images/bg/Al-Jame-ul-Anwar.jpg";
import bg2 from "../assets/images/bg/modi-indore.jpg";

import NavLight from "../components/navLight";
import AgencyTab from "../components/agencyTab";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import { TKMBranches } from "./tkm-branches";

export default function IndexSeven() {
  return (
    <>
      <NavLight />
      <section className="relative block h-screen" id="home">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="absolute end-0 top-0 w-full h-full"
        >
          <SwiperSlide>
            <div
              className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="container relative">
                <div className="grid grid-cols-1">
                  <div className="text-left">
                    <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">
                      Connect with <br /> customers smartly
                    </h1>
                    <p className="text-white/70 text-lg max-w-xl">
                      This is just a simple text made for this unique and
                      awesome template, you can replace it with any text.
                    </p>

                    <div className="mt-6">
                      <Link
                        to=""
                        className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white"
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="container relative">
                <div className="grid grid-cols-1">
                  <div className="text-left">
                    <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">
                      Get all the <br /> inspirations for your business
                    </h1>
                    <p className="text-white/70 text-lg max-w-xl">
                      This is just a simple text made for this unique and
                      awesome template, you can replace it with any text.
                    </p>

                    <div className="mt-6">
                      <Link
                        to=""
                        className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white"
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <TKMBranches />
      <Footer />
      <Switcher />
    </>
  );
}
