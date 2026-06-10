export type UseTariffType = (minutesMin?: number, gigabytesMin?: number) => {
    minutes: number;
    setMinutes: (v: number) => void;
    gigabytes: number;
    setGigabytes: (v: number) => void;
    services: Record<string, boolean>;
    setServices: (v: string) => void;
}