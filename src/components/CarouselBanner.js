"use client"

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { bannerFive, bannerFour, bannerOne, bannerThree, bannerTwo } from "../assets";

Autoplay.globalOptions = { delay: 4000 };
const CarouselBanner = () => {
  const bannerImages = [
    { title: "bannerOne", source: bannerOne},
    { title: "bannerTwo", source: bannerTwo },
    { title: "bannerThree", source: bannerThree },
    { title: "bannerFour", source: bannerFour },
    { title: "bannerFive", source: bannerFive },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div className="overflow-hidden cursor-pointer relative z-50" ref={emblaRef}>
    <div className="flex">
      {bannerImages?.map((item) => (
        <Image
          key={item?.title}
          src={item?.source}
          alt="bannerOne"
          width={1920}
          height={1080}
        />
      ))}
    </div>
    {/* <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-mainColor" /> */}
  </div>
  )
}

export default CarouselBanner