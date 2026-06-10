import { Header } from "./features/Header";
import Pages from "./Pages/index";
import { Layout } from "./shared/Components";

function App() {
  return (
    <Layout
      headerContent={<Header />}
      mainContent={<Pages />}
      footerContent={<div>footer</div>}
    />
  );
}

export default App;
