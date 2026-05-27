import React, {FC, Suspense} from "react";
import {Loader} from "../../shared/Components";

const Calculator = React.lazy(() => import("./index.tsx"));

const CalculatorLazy: FC = () => {
   return <Suspense fallback={<Loader size='lg'/>}>
        <Calculator />
    </Suspense>
};

CalculatorLazy.displayName = 'CalculatorLazy'

export default CalculatorLazy;