import React, {FC, Suspense} from "react";
import {Loader} from "../../shared/Components";

const Account = React.lazy(() => import("./index.tsx"));

const AccountLazy: FC = () => {
   return <Suspense fallback={<Loader size='lg'/>}>
        <Account />
    </Suspense>
};

AccountLazy.displayName = 'AccountLazy'

export default AccountLazy;