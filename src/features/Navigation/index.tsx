import {FC} from "react";
import { NavLink } from "react-router";
import {NavigationProps} from "./types.ts";

import './index.css';

const Navigation: FC<NavigationProps> = ({navs} ) => {
    return <nav>
        {navs.map((el) =>
            <NavLink key={el} to={`/${el}`} className={({ isActive }) =>
                isActive ? "navigation navigation_active" : "navigation"
            }>
                {el}
            </NavLink>)
        }
    </nav>
};

Navigation.displayName = "Navigation"

export default Navigation;