import { useEffect } from "react";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

function FinishSignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = prompt("Please enter your email to confirm sign-in");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error signing in", error);
        });
    }
  }, [navigate]);

  return <div>Verifying Sign-In...</div>;
}

export default FinishSignUp;
