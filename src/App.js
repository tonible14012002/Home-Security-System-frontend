import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { useAuthContext } from './context/AuthContext';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  const [loading, setLoading] = useState(true);
  const {checkAuth } = useAuthContext();
  const navigate = useNavigate()

  useEffect(() => {
    const authenticate = async () => {
      const isAuth = await checkAuth()
      if(!isAuth) navigate("/login")
      setLoading(false);
    };
    authenticate();
  }, []);

  if (loading) return <LoadingSpinner />;
  return (
    <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.auth ? AuthLayout : DefaultLayout;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
    </div>
  );
}

export default App;
