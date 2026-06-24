import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { areaById } from "@/lib/areas";
import { DocArea } from "@/pages/DocArea";
import { DocPage } from "@/pages/DocPage";
import { Dashboard } from "@/pages/Dashboard";
import { Timeline } from "@/pages/Timeline";
import { Kanban } from "@/pages/Kanban";
import { Budget } from "@/pages/Budget";
import { Team } from "@/pages/Team";
import { Ideas } from "@/pages/Ideas";

function AreaRouter() {
  const { areaId } = useParams();
  const area = areaId ? areaById(areaId) : undefined;
  if (!area) return <Navigate to="/" replace />;
  switch (area.view) {
    case "dashboard": return <Dashboard />;
    case "timeline": return <Timeline />;
    case "kanban": return <Kanban />;
    case "budget": return <Budget />;
    case "team": return <Team />;
    case "ideas": return <Ideas />;
    default: return <DocArea areaId={area.id} />;
  }
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="doc/:docId" element={<DocPage />} />
        <Route path=":areaId" element={<AreaRouter />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
