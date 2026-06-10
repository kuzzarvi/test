export type TariffType = {
    minutes: number;
    gigabytes: number;
    services: string[];
}

export type TariffConfigType = null | {
    minutesStep: number;
    minutesMin: number;
    minutesMax: number;
    gigabytesStep: number;
    gigabytesMin: number;
    gigabytesMax: number;
    priceBase: number;
    priceMinutes: number;
    priceGigabytes: number;
    priceServices: number;
};