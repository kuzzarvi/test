import { useCallback, useEffect, useState } from "react";
import { fetchTariffConfig } from "../../actions";
import type { UseTariffConfigType } from "./types.ts";

export const useTariffConfig: UseTariffConfigType = () => {
  const [data, setData] =
    useState<ReturnType<UseTariffConfigType>["data"]>(null);
  const [isFetching, setIsFetching] =
    useState<ReturnType<UseTariffConfigType>["isFetching"]>(false);

  const getTariffConfig = useCallback(async () => {
    setIsFetching(true);

    try {
      const res = await fetchTariffConfig();
      setData(res);
    } catch (e) {
      setData(null);
      console.warn(`Failed to fetch services: make message for error `);
      // TODO Добавить тостер об ошибке если это не аборт запроса
    }

    setIsFetching(false);
  }, []);

  useEffect(() => {
    getTariffConfig();

    return () => {
      // TODO добавить аборт запроса
    };
  }, [getTariffConfig]);

  return { data, isFetching };
};
