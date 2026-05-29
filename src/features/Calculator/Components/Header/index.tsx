import {FC} from "react";

import "./index.css";

export const Header: FC = () => {
    return <div className="calculator-header">
        <span className="calculator-badge">Конструктор</span>
        <h2 className="calculator-title">Собери свой тариф</h2>
    </div>
};

Header.displayName = "Header";

