import HyAppHeader from "./components/app-header";
// import { renderRoutes } from 'react-router-config'
import { HashRouter } from "react-router-dom";
// 
// import routes from './router'

function App() {
  return (
    <HashRouter>
      <HyAppHeader>
        {/* {renderRoutes(routes)} */}
        </HyAppHeader>
    </HashRouter>
  );
}

export default App;
