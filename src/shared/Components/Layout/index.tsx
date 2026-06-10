import type { FC } from "react";
import type { LayoutProps } from "./types";

import "./index.css";

export const Layout: FC<LayoutProps> = ({
  headerContent,
  mainContent,
  footerContent,
}) => {
  return (
    <div className="layout">
      <header>{headerContent}</header>
      <main>{mainContent}</main>
      <footer>{footerContent}</footer>
    </div>
  );
};

Layout.displayName = "Layout";
