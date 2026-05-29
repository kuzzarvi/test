import {FetchServicesType} from "./types.ts";
import {delay} from "../../../../../../shared/utils";

export const fetchServices: FetchServicesType = async () => {
    await delay(500);
    return [
            'telegram',
            'youtube',
            'tiktok',
        ];
};