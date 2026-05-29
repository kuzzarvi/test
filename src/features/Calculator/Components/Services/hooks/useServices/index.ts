import {useCallback, useEffect, useState} from "react";
import {UseServicesType} from "./types.ts";
import {fetchServices} from "../../actions";

export const useServices: UseServicesType = () => {
    const [data, setData] = useState<ReturnType<UseServicesType>['data']>([]);
    const [isFetching, setIsFetching] = useState(false);

    const getServices = useCallback(async () => {
        setIsFetching(true);

        try {
            const res =  await fetchServices();
            setData(res);
        } catch (e) {
            setData([]);
            console.warn(`Failed to fetch services: make message for error `);
        }

        setIsFetching(false);

    }, []);

    useEffect(() => {
        getServices();
    }, []);

    return { data, isFetching };
}