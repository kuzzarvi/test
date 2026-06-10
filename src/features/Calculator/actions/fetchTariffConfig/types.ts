import {TariffConfigType} from "../../types.ts";

export type FetchTariffConfigType = () => Promise<TariffConfigType>;

export type FetchTariffConfigEndpointType = {
    MIN_STEP: number;
    GB_STEP: number;
    BASE_PRICE: number;
    PRICE_PER_MINUTE: number;
    PRICE_PER_GB: number;
    SOCIAL_PRICE: number;
}

export type NormalizeType = (props: FetchTariffConfigEndpointType) => TariffConfigType;
