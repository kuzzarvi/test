import type { FC } from "react";
import { navsDefault } from "../../constnants.ts";
import { Navigation } from "./Components";

export const Header: FC = () => {
  return (
    <div>
      <Navigation navs={navsDefault} />
    </div>
  );
};
