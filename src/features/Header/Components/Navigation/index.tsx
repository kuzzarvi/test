import type { FC } from "react";
import { NavLink } from "react-router";
import type { NavigationProps } from "./types.ts";

import "./index.css";

export const Navigation: FC<NavigationProps> = ({ navs }) => {
  return (
    <nav>
      {navs.map((el) => (
        <NavLink
          key={el}
          to={`/${el}`}
          className={({ isActive }) =>
            isActive ? "navigation navigation_active" : "navigation"
          }
        >
          {el}
        </NavLink>
      ))}
    </nav>
  );
};

Navigation.displayName = "Navigation";
