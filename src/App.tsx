import {Layout, Loader} from "./shared/Components";

function App() {

  return (
      <Layout headerContent={<div>Header</div>} mainContent={<Loader />} footerContent={<div>footer</div>}/>
  )
}

export default App
