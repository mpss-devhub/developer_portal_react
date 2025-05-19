import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { authRepository } from "../../repositories/authRepository";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      const response = await authRepository.userDetail();
      if (response?.message === "Unauthenticated.") {
        setAuthenticated(false);
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    };
    verifyUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
