import { delay } from "../../../../../../shared/utils";
import type { FetchServicesType } from "./types.ts";

export const fetchServices: FetchServicesType = async () => {
  await delay(500);
  return ["telegram", "youtube", "tiktok"];
};
