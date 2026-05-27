import {Layout} from "./shared/Components";
import Navigation from "./features/Navigation";
import {navsDefault} from "./constnants.ts";
import Pages from "./Pages/index";

function App() {

  return (
      <Layout headerContent={<Navigation navs={navsDefault}/>} mainContent={<Pages />} footerContent={<div>footer</div>}/>
  )
}

export default App
