import DashboardAnalytics from '../../components/dashboard-analytics';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <DashboardAnalytics />
    </div>
  );
}