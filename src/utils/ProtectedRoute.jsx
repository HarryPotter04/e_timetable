import { useSelector } from "react-redux"
import { useLocation, Outlet, Navigate } from "react-router-dom"
import { getAdminToken } from "../features/slices/admin/adminAuthSlice"

const ProtectedRoute = () => {

    const location = useLocation()

    const { token } = useSelector(getAdminToken)

    return (
        <>

            { !token
                ? <Outlet />
                : <Navigate to="/login" state={{ from: location }} replace={true} />}

        </>
    )
}

export default ProtectedRoute