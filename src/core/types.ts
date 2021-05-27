import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
export const REQUEST_CARS = "REQUEST_CARS";

export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}
export interface CarResponse {
  cars: Car[];
}

interface RequestCarsAction {
  type: typeof REQUEST_CARS;
  payload: CarResponse;
}
export interface CarouselRef extends ReactElasticCarousel {
  slidePrev: () => void
  slideNext: () => void
}

export type RequestActionTypes = RequestCarsAction;
