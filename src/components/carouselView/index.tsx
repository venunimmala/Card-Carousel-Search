import { useRef } from "react";
import { View,useTheme } from "vcc-ui";
import Carousel from "react-elastic-carousel";
import ReactElasticCarousel from "react-elastic-carousel";
import { CarouselRef } from "../../core/types";
import "./style.css";
import React from "react";
import PrevIcon from "../../components/icons/chevron-circled-prev.svg";
import NextIcon from "../../components/icons/chevron-circled.svg";

interface CarouselViewProps {
  children: React.ReactNode;
  isRTL: boolean;
  itemsToShow: number;
}
const CarouselView = ({ children, isRTL, itemsToShow }: CarouselViewProps) => {
  const carouselRef = useRef() as React.RefObject<ReactElasticCarousel>;
  const theme = useTheme();
  const onClickPreview = (
    carouselRef: React.RefObject<ReactElasticCarousel>
  ) => {
    if (carouselRef.current) {
      (carouselRef.current as CarouselRef).slidePrev();
    }
  };
  const onClickNext = (carouselRef: React.RefObject<ReactElasticCarousel>) => {
    if (carouselRef.current) {
      (carouselRef.current as CarouselRef).slideNext();
    }
  };

  return (
    <View
      padding={[1, 2]}
      spacing={2}
      direction={"column"}
      justifyContent={"flex-start"}
    >
      <Carousel
        ref={carouselRef}
        isRTL={isRTL}
        itemsToShow={itemsToShow}
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2 },
          { width: 850, itemsToShow: 2 },
          { width: 1150, itemsToShow: 4 },
          { width: 1450, itemsToShow: 4 },
          { width: 1750, itemsToShow: 4 },
        ]}
      >
        {children}
      </Carousel>
      <View direction={"row"} justifyContent={"flex-end"} extend={{
        [theme.breakpoints.untilL]: {
          display:"none"
        },
      }}>
        <a href="#">
          <img
            src={PrevIcon}
            alt="Previous"
            width={50}
            onClick={() => onClickPreview(carouselRef)}
          />
        </a>
        <a href="#">
          <img
            src={NextIcon}
            alt="Next"
            width={50}
            onClick={() => onClickNext(carouselRef)}
          />
        </a>
      </View>
    </View>
  );
};
export default CarouselView;
