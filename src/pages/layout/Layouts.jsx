import { AppNavbar } from "../../components/ui/app-navbar";

export default function Layout({ children }) {
  return (
    <>
      <AppNavbar />
      <main className="flex-1 overflow-y-auto">
        <div>{children}</div>
      </main>
    </>
  );
}
