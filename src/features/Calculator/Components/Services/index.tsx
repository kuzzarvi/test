import {FC} from "react";
import {SocialsProps} from "./types.ts";

import './index.css';

export const Services: FC<SocialsProps> = ({services, onChange}) => <div className="socials-section">
    <h3 className="socials-title">Безлимитные сервисы (+50 ₽/мес)</h3>
    <div className="socials-grid">
        {services.map(({name, isActive}) => {
            return (
                <button
                    key={name}
                    type="button"
                    onClick={() => onChange(name)}
                    className={`social-button ${isActive ? 'social-button--active' : ''}`}
                >
                    <span className="platform-name">{name}</span>
                    <span className="platform-status">{isActive ? 'Подключено' : 'Выключено'}</span>
                </button>
            );
        })}
    </div>
</div>

Services.displayName = "Services";