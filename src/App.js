import DefaultLayout  from "./layouts/DefaultLayout";
import {publicRoutes} from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            const Layout = route.layout ? route.layout: DefaultLayout
            return (
              <Route 
                path={route.path} 
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                } 
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
