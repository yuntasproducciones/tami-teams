/**
 * @deprecated
 * This file is deprecated and will be removed in the future.
 * En caso de usarse diferentes tipos de usuario o hacer que cualquier usuario pueda acceder a la página de administración, se puede usar el siguiente código.
 */

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user || user.role !== "admin") {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
