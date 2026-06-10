import type { FC } from "react";
import { Calculator } from "../../features/Calculator";
import "./index.css";

const Account: FC = () => (
  <div className="account">
    <Calculator />
    <Calculator />
  </div>
);

Account.displayName = "Account";

export default Account;
