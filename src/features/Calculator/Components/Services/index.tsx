import {FC, memo} from "react";
import {SocialsProps} from "./types.ts";

import './index.css';
import {useServices} from "./hooks";
import {Loader} from "../../../../shared/Components";

export const Services: FC<SocialsProps> = memo(({onChange, isActive}) => {
    const {data, isFetching} = useServices();

    if (isFetching) {
        return <Loader size='sm' /> // TODO заменить на скелетон
    }

   return <div className="socials-section">
        <h3 className="socials-title">Безлимитные сервисы (+50 ₽/мес)</h3>
        <div className="socials-grid">
            {data.map((name) => {
                return (
                    <button
                        key={name}
                        type="button"
                        onClick={() => onChange(name)}
                        className={`social-button ${isActive[name] ? 'social-button--active' : ''}`}
                    >
                        <span className="platform-name">{name}</span>
                        <span className="platform-status">{isActive[name] ? 'Подключено' : 'Выключено'}</span>
                    </button>
                );
            })}
        </div>
    </div>
});

Services.displayName = "Services";
