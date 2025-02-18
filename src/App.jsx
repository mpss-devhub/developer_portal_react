import { UserProvider } from "./pages/UserContext"
import { OctoverseRoute } from "./routes/octoverseRoute"
import { ProjectProvider } from "./pages/ProjectContext";
export default function App() {
  return (
    <UserProvider>
      <ProjectProvider>
        <OctoverseRoute />
      </ProjectProvider>
    </UserProvider>
  )
}