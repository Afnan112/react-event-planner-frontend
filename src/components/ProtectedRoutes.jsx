// Ref => https://m.youtube.com/watch?v=cSsAnbBMa4k
import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
    const token = localStorage.getItem('access_token')

    return (
        token ? <Outlet/> : <Navigate to="/login" />
    )
}

export default ProtectedRoute