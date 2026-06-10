import { type FC, memo } from "react";
import type { SocialsProps } from "./types.ts";

import "./index.css";
import { Loader } from "../../../../shared/Components";
import { useServices } from "./hooks";

export const Services: FC<SocialsProps> = memo(({ onChange, isActive }) => {
  const { data, isFetching } = useServices();

  if (isFetching) {
    return <Loader size="sm" />; // TODO заменить на скелетон
  }

  if (!data.length) {
    return null;
  }

  return (
    <div className="socials-section">
      <h3 className="socials-title">Безлимитные сервисы (+50 ₽/мес)</h3>
      <div className="socials-grid">
        {data.map((name) => {
          return (
            <button
              key={name}
              type="button"
              onClick={() => onChange(name)}
              className={`social-button ${isActive[name] ? "social-button--active" : ""}`}
            >
              <span className="platform-name">{name}</span>
              <span className="platform-status">
                {isActive[name] ? "Подключено" : "Выключено"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
});

Services.displayName = "Services";
