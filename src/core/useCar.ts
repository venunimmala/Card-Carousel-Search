import { useEffect, useState } from "react";
import { getAllCars } from "./api";
import { CarResponse } from "./types";

const useCar = () => {
  const [data, setCars] = useState<CarResponse>();
  const [isPending, setIsPending] = useState(false);
  const [errorCode, setErrorCode] = useState(0);

  useEffect(() => {
    setIsPending(true);
    getAllCars()
      .then(setCars)
      .then(() => {
        setErrorCode(0);
      })
      .catch((error) => {
        return error.response ? setErrorCode(error.response.status) : null;
      })
      .finally(() => {
        setIsPending(false);
      });
  }, []);

  return { data, isPending, errorCode };
};
export default useCar;
