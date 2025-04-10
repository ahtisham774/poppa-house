
import StatCard from './statCard';
import JobHistoryCard from './jobHistoryCard';
import NotificationsCard from './notificationsCard';

const Dashboard = ({ user, stats }) => {
  return (
    <div className="p-6">
      <div className='flex flex-col mb-5'>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, {user.name}</p>
        </div>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        <StatCard
          title="Weekly Earnings"
          value={`£ ${stats.weeklyEarnings.toFixed(2)}`}
          icon="money"
        />
        <StatCard
          title="Current jobs"
          value={stats.currentJobs}
          icon="list"
        />
        <StatCard
          title="Assigned Jobs"
          value={stats.assignedJobs}
          icon="clipboard"
        />
        <StatCard
          title="New Messages"
          value={stats.newMessages}
          icon="message"
        />
      </div>

      {/* Job History and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <JobHistoryCard />
        <NotificationsCard />
      </div>
    </div>
  );
};

export default Dashboard;
