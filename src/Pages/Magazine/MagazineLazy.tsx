import React, { type FC, Suspense } from "react";
import { Loader } from "../../shared/Components";

const Magazine = React.lazy(() => import("./index.tsx"));

const MagazineLazy: FC = () => {
  return (
    <Suspense fallback={<Loader size="lg" />}>
      <Magazine />
    </Suspense>
  );
};

MagazineLazy.displayName = "MagazineLazy";

export default MagazineLazy;
