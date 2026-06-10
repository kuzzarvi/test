import type { TariffConfigType } from "../../types.ts";

export type UseTariffConfigType = () => {
  data: TariffConfigType;
  isFetching: boolean;
};
