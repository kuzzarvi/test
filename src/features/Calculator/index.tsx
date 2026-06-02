import React, { useState, useMemo } from 'react';
import './index.css';
import {Slider} from "../../shared/Components";
import {Footer, Header} from "./Components";
import {Services} from "./Components/Services";

export interface TariffConfig { // TODO  пересобрать типы
    minutes: number;
    gigabytes: number;
    socials: {
        telegram: boolean;
        youtube: boolean;
        tiktok: boolean;
    };
}

const MIN_STEP = 50; // TODO перенести константы на бек
const GB_STEP = 5;
const BASE_PRICE = 250;
const PRICE_PER_MINUTE = 1.3;
const PRICE_PER_GB = 5;
const SOCIAL_PRICE = 50;

export const TariffCalculator: React.FC = () => {
    const [tariff, setTariff] = useState<TariffConfig>({ // TODO разделить стейт, стейт не должен зависеть от реализации
        minutes: 300,
        gigabytes: 20,
        socials: {
            telegram: false,
            youtube: false,
            tiktok: false,
        },
    });

    const handleSliderChange = (field: 'minutes' | 'gigabytes', value: number) => {  // TODO логику переделать
        setTariff((prev) => ({ ...prev, [field]: value }));
    };

    const handleSocialToggle = (platform: keyof TariffConfig['socials']) => {
        setTariff((prev) => ({
            ...prev,
            socials: {
                ...prev.socials,
                [platform]: !prev.socials[platform],
            },
        }));
    };

    const totalPrice = useMemo(() => {
        const minutesCost = tariff.minutes * PRICE_PER_MINUTE;
        const gbCost = tariff.gigabytes * PRICE_PER_GB;
        const activeSocialsCount = Object.values(tariff.socials).filter(Boolean).length;
        const socialsCost = activeSocialsCount * SOCIAL_PRICE;

        return BASE_PRICE + minutesCost + gbCost + socialsCost;
    }, [tariff]);

    return (
        <div className="tariff-calculator-container">
            <Header />
            <div className="sliders-group">
                <Slider step={MIN_STEP} min={100} max={1000} value={tariff.minutes} onChange={(v) =>handleSliderChange('minutes', v)} unit={'мин'} label={'Минуты на другие номера'} />
                <Slider step={GB_STEP} min={5} max={100} value={tariff.gigabytes} onChange={(v) =>handleSliderChange('gigabytes', v)} unit={'ГБ'} label={'Мобильный интернет'} />
            </div>

            <Services onChange={handleSocialToggle} isActive={tariff.socials} />

            <hr className="divider" />

            <Footer totalPrice={totalPrice} />
        </div>
    );
};
