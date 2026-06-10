import type { NormalizeType } from "../../types.ts";

export const normalize: NormalizeType = ({
  PRICE_PER_MINUTE,
  PRICE_PER_GB,
  SOCIAL_PRICE,
  MIN_STEP,
  BASE_PRICE,
  GB_STEP,
  MIN_MIN,
  MIN_MAX,
  GB_MAX,
  GB_MIN,
}) => ({
  minutesStep: MIN_STEP,
  gigabytesStep: GB_STEP,
  priceBase: BASE_PRICE,
  priceGigabytes: PRICE_PER_GB,
  priceMinutes: PRICE_PER_MINUTE,
  priceServices: SOCIAL_PRICE,
  minutesMin: MIN_MIN,
  minutesMax: MIN_MAX,
  gigabytesMin: GB_MIN,
  gigabytesMax: GB_MAX,
});
