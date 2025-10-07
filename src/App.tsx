import { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/Auth.context.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import PrivateRoute, { routes } from './routes/index.tsx';
import Loading from './components/Loading/Loading.tsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route) => {
              const Page = route.element as React.ComponentType<any>;
              const Layout = (route.layout ?? Fragment) as React.ComponentType<{ children: React.ReactNode }>;

              const element = route.isPrivate ? (
                <PrivateRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </PrivateRoute>
              ) : (
                <Layout>
                  <Page />
                </Layout>
              );

              return <Route key={route.path} path={route.path} element={element} />;
            })}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <ToastContainer
          position='top-right'
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;