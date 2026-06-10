export type TariffType = {
    minutes: number;
    gigabytes: number;
    services: string[];
}

export type TariffConfigType = {
    stepMinutes: number;
    stepGigabytes: number;
    priceBase: number;
    priceMinutes: number;
    priceGigabytes: number;
    priceServices: number;
};