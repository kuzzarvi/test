import {Layout} from "./shared/Components";
import {Header} from "./features/Header";
import Pages from "./Pages/index";

function App() {

  return (
      <Layout headerContent={<Header />} mainContent={<Pages />} footerContent={<div>footer</div>}/>
  )
}

export default App
