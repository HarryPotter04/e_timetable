import { useSelector } from "react-redux"
import { useLocation, Outlet, Navigate } from "react-router-dom"
import { userLoginState } from "../features/slices/admin/userLoginSlice"

const ProtectedRoute = () => {

    const location = useLocation()

    const { user } = useSelector(userLoginState)

    return (
        <>

            { user?.access
                ? <Outlet />
                : <Navigate to="/login" state={{ from: location }} replace={true} />}

        </>
    )
}

export default ProtectedRoute