import type { FetchTariffConfigEndpointType } from "./types.ts";

export const mockResponse: FetchTariffConfigEndpointType = {
  MIN_STEP: 50,
  GB_STEP: 5,
  BASE_PRICE: 250,
  PRICE_PER_MINUTE: 1.3,
  PRICE_PER_GB: 5,
  SOCIAL_PRICE: 50,
  MIN_MIN: 100,
  MIN_MAX: 1000,
  GB_MIN: 5,
  GB_MAX: 100,
};
