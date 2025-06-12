import ContractReviewPage from "../components/assistant/contractReview";
import DocumentTable from "../components/assistant/documentTable";
import Sidebar from "../components/assistant/sidebar";




export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <DocumentTable />
    </div>
  );
}
