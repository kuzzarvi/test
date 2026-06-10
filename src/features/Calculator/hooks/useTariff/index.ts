import { useCallback, useEffect, useState } from "react";
import type { UseTariffType } from "./types.ts";

export const useTariff: UseTariffType = (minutesMin = 0, gigabytesMin = 0) => {
  const [minutes, setMinutes] = useState<number>(minutesMin);
  const [gigabytes, setGigabytes] = useState<number>(gigabytesMin);
  const [services, setServices] = useState<
    ReturnType<UseTariffType>["services"]
  >({});

  const handleSetServices = useCallback((service: string) => {
    setServices((prevState) => ({
      ...prevState,
      [service]: !prevState.service,
    }));
  }, []);

  useEffect(() => {
    setMinutes(minutesMin);
  }, [minutesMin]);

  useEffect(() => {
    setGigabytes(gigabytesMin);
  }, [minutesMin]);

  return {
    minutes,
    setMinutes,
    gigabytes,
    setGigabytes,
    services,
    setServices: handleSetServices,
  };
};
