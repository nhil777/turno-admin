import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../contexts/Auth/useAuth";

export default function Root() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated && <Header />}
            <Outlet />
            <ToastContainer />
        </>
    );
}
