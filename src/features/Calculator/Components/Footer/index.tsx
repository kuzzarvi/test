import type { FC } from "react";
import type { FooterProps } from "./types.ts";

import "./index.css";

export const Footer: FC<FooterProps> = ({ totalPrice }) => {
  return (
    <div className="total-panel">
      <div>
        <div className="total-label">Aбонентская плата</div>
        <div className="total-price">
          {totalPrice} <span className="total-period">₽ / мес</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => alert("Тариф сохранен в системе!")}
        className="submit-button"
      >
        Подключить
      </button>
    </div>
  );
};

Footer.displayName = "Footer";
