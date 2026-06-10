import { delay } from "../../../../shared/utils";
import { mockResponse } from "./constnants.ts";
import { normalize } from "./helpers";
import type { FetchTariffConfigType } from "./types.ts";

export const fetchTariffConfig: FetchTariffConfigType = async () => {
  await delay(500);
  const response = mockResponse;

  return normalize(response);
};
