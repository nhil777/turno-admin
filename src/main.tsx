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
import { DepositList } from './pages/DepositsList';
import { DepositView } from './pages/DepositView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'deposit', element: <DepositList /> },
      { path: 'deposit/:id', element: <DepositView /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
