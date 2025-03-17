import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { AppNavbar } from "../../components/ui/app-navbar";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <AppNavbar onLogout={onLogout} />
      <main className="flex-1 overflow-y-auto">
        <div>{children}</div>
      </main>
    </>
  );
}
