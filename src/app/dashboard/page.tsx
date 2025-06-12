import DocumentTable from "../components/documentTable";
import Sidebar from "../components/sidebar";



export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <DocumentTable />
    </div>
  );
}
