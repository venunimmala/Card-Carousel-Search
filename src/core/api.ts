import axios from "axios";
import { CarResponse } from "../core/types";

export const api = axios.create({
  baseURL: "http://localhost:3002",
});

// GET ALL CARS
export const getAllCars = () => {
  return api.get("/cars/list").then((response) => response.data as CarResponse);
};
