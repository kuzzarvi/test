import {FetchTariffConfigType} from "./types.ts";
import {delay} from "../../../../shared/utils";
import {normalize} from "./helpers";
import {mockResponse} from "./constnants.ts";

export const fetchTariffConfig: FetchTariffConfigType = async () => {
    await delay(500);
    const response = mockResponse;

    return normalize(response);
};