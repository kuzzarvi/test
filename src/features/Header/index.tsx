import {FC} from "react";
import {Navigation} from "./Components";
import {navsDefault} from "../../constnants.ts";

export const Header: FC = () => {

    return <div>
        <Navigation navs={navsDefault} />
    </div>
};