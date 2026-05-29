import { Routes, Route } from "react-router";

import {FC} from "react";
import AccountLazy from "./Account/AccountLazy.tsx";
import DashboardLazy from "./Dashboard/DashboardLazy.tsx";
import MagazineLazy from "./Magazine/MagazineLazy.tsx";

const Pages: FC = () => (
    <Routes>
        <Route path="dashboard" element={<DashboardLazy />}/>
        <Route path='account' element={<AccountLazy />} />
        <Route path='magazine' element={<MagazineLazy />} />
        <Route path='*' element={<DashboardLazy />} />
    </Routes>
);

Pages.displayName = "Pages";

export default Pages;