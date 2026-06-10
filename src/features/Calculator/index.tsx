import React, {memo} from 'react';
import './index.css';
import {Loader, Slider} from "../../shared/Components";
import {Footer, Header, Services} from "./Components";
import {useTariff, useTariffConfig} from "./hooks";

export const Calculator: React.FC = memo(() => {
    const {data: tariffConfig, isFetching} = useTariffConfig();

    const {minutes, setMinutes, gigabytes, setGigabytes, services, setServices} = useTariff(tariffConfig?.minutesMin, tariffConfig?.gigabytesMin);

    if (isFetching) {
        return <Loader size='sm' /> // TODO заменить на скелетон
    }

    if (!tariffConfig) {
        return <div>No data...</div>; //TODO Сообщение об ошибке
    }

    const totalPrice = () => {
        const minutesCost = minutes * tariffConfig.priceMinutes
        const gbCost = gigabytes * tariffConfig.priceGigabytes;
        const activeSocialsCount = Object.values(services).filter(Boolean).length;
        const socialsCost = activeSocialsCount * tariffConfig.priceServices;

        return tariffConfig.priceBase + minutesCost + gbCost + socialsCost;
    };

    return (
        <div className="tariff-calculator-container">
            <Header />
            <div className="sliders-group">
                <Slider step={tariffConfig.minutesStep} min={tariffConfig.minutesMin} max={tariffConfig.minutesMax} value={minutes} onChange={setMinutes} unit={'мин'} label={'Минуты на другие номера'} />
                <Slider step={tariffConfig.gigabytesStep} min={tariffConfig.gigabytesMin} max={tariffConfig.gigabytesMax} value={gigabytes} onChange={setGigabytes} unit={'ГБ'} label={'Мобильный интернет'} />
            </div>

            <Services onChange={setServices} isActive={services} />

            <hr className="divider" />

            <Footer totalPrice={totalPrice()} />
        </div>
    );
});

Calculator.displayName = "Calculator";