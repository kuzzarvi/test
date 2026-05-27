import {FC, PropsWithChildren, StrictMode} from "react";
import {BrowserRouter} from "react-router";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return <StrictMode>
             <BrowserRouter>
                {children}
            </BrowserRouter>
    </StrictMode>
};

Providers.displayName = "Providers";

export default Providers;