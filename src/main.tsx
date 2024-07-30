import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import ErrorPage from './pages/Error';
import { Login } from './pages/Login';
import { Deposits } from './pages/Deposits';
import { Deposit } from './pages/Deposit';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { AuthProvider } from './contexts/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProtectedRoute element={<Deposits />} /> },
      { path: 'deposit/:id', element: <ProtectedRoute element={<Deposit />} /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
