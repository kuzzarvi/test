import {NormalizeType} from "../../types.ts";

export const normalize: NormalizeType = ({
        PRICE_PER_MINUTE,
    PRICE_PER_GB,
    SOCIAL_PRICE,
    MIN_STEP,
    BASE_PRICE,
    GB_STEP
                                         }) => ({
    stepMinutes: MIN_STEP,
    stepGigabytes: GB_STEP,
    priceBase: BASE_PRICE,
    priceGigabytes: PRICE_PER_GB,
    priceMinutes: PRICE_PER_MINUTE,
    priceServices: SOCIAL_PRICE
});