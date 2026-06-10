import type { ServiceType } from "../../types.ts";

export type UseServicesType = () => {
  data: ServiceType[];
  isFetching: boolean;
};
