import "swiper/css";
import "swiper/css/pagination";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import CardCarrocel, { IPropsCarroucel } from "@/component/CardCarrocel";
import { useCallback, useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

interface Iprops {
  offer: IPropsCarroucel[];
}
export default function Carrocel({ offer }: Iprops) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex alignItems="center" h="35rem" mb="4rem">
      <MdOutlineArrowLeft
        onClick={handlePrevious}
        color="#dd9837"
        fontSize={100}
        style={{
          cursor: "pointer",
        }}
      />
      <Swiper
        loop={true}
        slidesPerView={isMobile ? 1 : 3}
        autoplay={{
          delay: 2000,
        }}
        initialSlide={0}
        speed={1000}
        spaceBetween={20}
        modules={[Autoplay, Pagination]}
        onSwiper={setSwiperRef}
        className="mySwiper"
        style={{
          margin: "auto",
          width: "100%",
          alignItems: "center",
        }}
      >
        {offer.length > 0 &&
          offer.map((item, index) => (
            <SwiperSlide style={{ backgroundColor: "#fff" }} key={index}>
              <CardCarrocel
                image={item.image}
                cash={item.cash}
                description={item.description}
                title={item.title}
                valueAmount={item.valueAmount}
                valueNoAmount={item.valueNoAmount}
                url={item.url}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <MdOutlineArrowRight
        onClick={handleNext}
        color="#dd9837"
        fontSize={100}
        style={{
          cursor: "pointer",
        }}
      />
    </Flex>
  );
}
