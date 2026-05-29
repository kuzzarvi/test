import React, {FC, Suspense} from "react";
import {Loader} from "../../shared/Components";

const Calculator = React.lazy(() => import("./index.tsx"));

const AccountLazy: FC = () => {
   return <Suspense fallback={<Loader size='lg'/>}>
        <Calculator />
    </Suspense>
};

AccountLazy.displayName = 'AccountLazy'

export default AccountLazy;