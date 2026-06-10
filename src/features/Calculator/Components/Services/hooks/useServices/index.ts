import { useCallback, useEffect, useState } from "react";
import { fetchServices } from "../../actions";
import type { UseServicesType } from "./types.ts";

export const useServices: UseServicesType = () => {
  const [data, setData] = useState<ReturnType<UseServicesType>["data"]>([]);
  const [isFetching, setIsFetching] =
    useState<ReturnType<UseServicesType>["isFetching"]>(false);

  const getServices = useCallback(async () => {
    setIsFetching(true);

    try {
      const res = await fetchServices();
      setData(res);
    } catch (e) {
      setData([]);
      console.warn(`Failed to fetch services: make message for error `);
      // TODO Добавить тостер об ошибке если это не аборт запроса
    }

    setIsFetching(false);
  }, []);

  useEffect(() => {
    getServices();

    return () => {
      // TODO добавить аборт запроса
    };
  }, [getServices]);

  return { data, isFetching };
};
