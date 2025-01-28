"use client"
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "nuka-carousel";
import { CustomDots } from "./CustomDots";

export default function HeroCarousel({banners}) {
  // function CarouselImage({ image }) {
  //   return (
  //     <div className="min-w-full">
  //       <Link href="#" className="">
  //         <Image
  //           src={`/banner/${image}`}
  //           width={712}
  //           height={384}
  //           className="w-full h-full"
  //           alt="image"
  //         />
  //       </Link>
  //     </div>
  //   );
  // }

  // const images = [
  //   { src: "/banner/1.jpg", alt: "Promotional Banner 1" },
  //   { src: "/banner/2.png", alt: "Promotional Banner 2" },
  //   { src: "/banner/3.jpg", alt: "Promotional Banner 3" },
  //   { src: "/banner/4.jpg", alt: "Promotional Banner 4" },
  //   { src: "/banner/5.jpg", alt: "Promotional Banner 5" },
  // ];

  function CarouselImage({ src, alt, href }) {
    return (
      <Link href={href} className="min-w-full">
        <Image
          src={src}
          alt={alt}
          className="w-full"
          width={712}
          height={384}
        />
      </Link>
    );
  }

  return (
    <Carousel
      autoplay
      autoplayInterval={3000}
      wrapMode="wrap"
      showArrows="hover"
      dots={<CustomDots />} // Custom dots component
      showDots
      scrollDistance="slide"
      className="rounded-md overflow-hidden bg-green-400"
    >
      {banners.map((banner, index) => (
        <CarouselImage key={index} href={banner.link} src={banner.imageUrl} alt={banner.title} />
      ))}
    </Carousel>
  );
}
