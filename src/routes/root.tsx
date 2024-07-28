import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../services/Auth";

export default function Root() {
    const navigate = useNavigate();

    return (
        <>
            {isAuthenticated() && <button onClick={() => {
                logout().then(() => navigate('/login'))
            }}>Logout</button>}
            <Outlet />
        </>
    );
}
