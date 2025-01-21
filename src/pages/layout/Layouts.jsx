import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/ui/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        {/* <SidebarTrigger /> */}
        <div>{children}</div>
      </main>
    </SidebarProvider>
  );
}
