"use client"
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";


// Sample carousel data
const carouselItems = [
  {
    id: 1,
    header: "THE WINTER SALE",
    text: " OFF EVERYTHING",
    img: "/kitchen.jpg",
  },
  {
    id: 2,
    header: "NEW ARRIVALS IN",
    text: "CANDLES & VASES",
    // img: "/kitchen.jpg",
  },

];

const Hero = () => {
  // Initialize Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoplay, 3000); // 3 seconds autoplay

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [emblaApi]);

  return (
    <div className="overflow-hidden relative -mx-12 md:-mx-0" ref={emblaRef}>
      <div className="flex ">
        {carouselItems.map((item, index) => (
          item.id === 1 ? (
            <div key={item.id} className="relative flex-[0_0_100%] h-[70vh] flex">
              <div className="text-white text-center gap-8 z-10 flex-1 flex items-center justify-around bg-primary p-4">
                <div>
                  <h2 className={`text-3xl md:text-5xl font-bold font-eb-garamond mb-6`}>{item.header}</h2>
                  <div className="h-0.5 w-2/4 bg-gray-100 mx-auto mb-6"></div>
                  <p className="font-normal text-sm md:text-base text-gray-50 tracking-widest mb-3">NOW THROUGH 08/25</p>
                  <h2 className={`text-2xl md:text-4xl text-gray-50 font-bold mb-6 font-eb-garamond`}> <span className="animate-pop-color-change">25%</span> {item.text}</h2>
                  <Link href="/shop" className="bg-secondary px-2.5 py-0.5 font-medium track-wider hover:scale-105 active:scale-95 transition-transform duration-300 ">SHOP NOW</Link>
                </div>
                <div className="flex flex-col gap-y-4">
                  <Image
                    src={'/vase.jpg'}
                    className="object-cover  border-2 border-white"
                    width={150}
                    height={70}
                    alt={"Product Image"}
                  />

                  <Image
                    src={'/feather.jpg'}
                    className="object-cover  border-2 border-white"
                    width={150}
                    height={70}
                    alt={"Product Image"}
                  />
                </div>

              </div>
              <div className="hidden md:block image-side flex-1 relative">

                <img
                  src={item.img}
                  alt="hero-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div key={item.id} className=" flex-[0_0_100%] h-[70vh] flex">

              <div className="bg-[url('/candles.jpg')] bg-cover bg-center h-full w-full p-4 flex flex-col justify-center items-center text-center">
                <h4 className="animate-pop-color-change mb-4 md:text-lg text-base font-normal">{item.header}</h4>
                <h2
                  className={`md:text-5xl text-3xl font-bold font-eb-garamond text-white mb-5`}
                >
                  {item.text}
                </h2>
                <Link href="/shop" className="bg-white px-2.5 py-0.5 font-medium track-wider  hover:scale-105 active:scale-95 transition-transform duration-300">SHOP NOW</Link>
              </div>

              <div className="hidden md:block bg-[url('/vases.jpg')] bg-cover bg-center h-full w-full"></div>

            </div>
          )


        ))}
      </div>

    </div>
  );
};

export default Hero;
