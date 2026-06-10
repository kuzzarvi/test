import {useCallback, useEffect, useState} from "react";
import {UseServicesType} from "./types.ts";
import {fetchTariffConfig} from "../../actions";

export const useServices: UseServicesType = () => {
    const [data, setData] = useState<ReturnType<UseServicesType>['data']>([]);
    const [isFetching, setIsFetching] = useState(false);

    const getServices = useCallback(async () => {
        setIsFetching(true);

        try {
            const res =  await fetchTariffConfig();
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
        }
    }, []);

    return { data, isFetching };
}