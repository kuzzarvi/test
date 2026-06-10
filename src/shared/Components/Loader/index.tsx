import type { FC } from "react";
import { loader } from "./constants";
import type { LoaderProps } from "./types";

import "./index.css";

export const Loader: FC<LoaderProps> = ({ size = "sm" }) => {
  const className = `${loader} ${loader}-${size}`;
  return <div className={className} />;
};

Loader.displayName = "Loader";
