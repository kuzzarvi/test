import React, {FC, Suspense} from "react";
import {Loader} from "../../shared/Components";

const Dashboard = React.lazy(() => import("./index.tsx"));

const DashboardLazy: FC = () => {
   return <Suspense fallback={<Loader size='lg'/>}>
        <Dashboard />
    </Suspense>
};

DashboardLazy.displayName = 'DashboardLazy'

export default DashboardLazy;