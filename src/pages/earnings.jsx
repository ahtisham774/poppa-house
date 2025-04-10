import  { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/staffPanel/dashboard/statCard';
import WithdrawModal from '../components/staffPanel/earnings/withdrawModal';
import InvalidAmountModal from '../components/staffPanel/earnings/invalidAmountModal';
import SuccessModal from '../components/staffPanel/earnings/successModal';


const Earnings = () => {


    const [stats, setStats] = useState({
        weeklyEarnings: 450.00,
        currentJobs: 4,
        assignedJobs: 3,
        newMessages: 4,
        totalEarnings: 2800.00,
        totalPaid: 2000.00,
        jobsDone: 24,
        availableForWithdrawal: 800.00
      });
    
      const [earningsHistory, setEarningsHistory] = useState([
        {
          id: '02',
          date: '2/15/2025',
          amount: 150.00,
          type: 'Earning'
        },
        {
          id: '01',
          date: '2/15/2025',
          amount: 250.00,
          type: 'Withdrawal'
        }
      ]);
    

  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showInvalidModal, setShowInvalidModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successAmount, setSuccessAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('Please enter a valid withdrawal amount.');

  const handleWithdrawClick = () => {
    setShowWithdrawModal(true);
  };

  const handleCloseModal = () => {
    setShowWithdrawModal(false);
    setShowInvalidModal(false);
    setShowSuccessModal(false);
  };

  const handleWithdrawSubmit = (amount) => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setErrorMessage('Please enter a valid withdrawal amount.');
      setShowWithdrawModal(false);
      setShowInvalidModal(true);
      return;
    }

    if (Number(amount) > stats.availableForWithdrawal) {
      setErrorMessage(`Maximum withdrawal amount is £${stats.availableForWithdrawal.toFixed(2)}.`);
      setShowWithdrawModal(false);
      setShowInvalidModal(true);
      return;
    }

    // Process successful withdrawal
    setSuccessAmount(Number(amount));
    setShowWithdrawModal(false);
    setShowSuccessModal(true);

    // Add to history
    const newWithdrawal = {
      id: `0${earningsHistory.length + 1}`,
      date: new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).replace(/\//g, '/'),
      amount: Number(amount),
      type: 'Withdrawal'
    };

    setEarningsHistory([newWithdrawal, ...earningsHistory]);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Earnings</h1>
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-500">You</Link>
            <span className="mx-2">›</span>
            <span>Earnings</span>
          </div>
        </div>
      
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Weekly Earnings"
          value={`£ ${stats.weeklyEarnings.toFixed(2)}`}
          icon="money"
        />
        <StatCard
          title="Total Earnings"
          value={`£ ${stats.totalEarnings.toFixed(2)}`}
          icon="chart"
        />
        <StatCard
          title="Total Paid"
          value={`£ ${stats.totalPaid.toFixed(2)}`}
          icon="payment"
        />
        <StatCard
          title="Jobs Done"
          value={stats.jobsDone}
          icon="clipboard"
        />
      </div>

      {/* Available for Withdrawal */}
      <div className="bg-white rounded-lg shadow border border-gray-100 p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Available for Withdrawal</h2>
            <p className="text-3xl font-semibold mt-2">£ {stats.availableForWithdrawal.toFixed(2)}</p>
          </div>
          <button
            onClick={handleWithdrawClick}
            className="bg-primary text-white  px-4 py-3 rounded-md font-medium  transition duration-200"
          >
            Withdraw Funds
          </button>
        </div>
      </div>

      {/* Earnings History */}
      <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Earnings History</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                <th className="text-right py-3 px-4 font-medium text-gray-600">Type</th>
              </tr>
            </thead>
            <tbody>
              {earningsHistory.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-800">{item.id}</td>
                  <td className="py-3 px-4 text-gray-800">{item.date}</td>
                  <td className="py-3 px-4 text-gray-800">£{item.amount.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right">
                    <span
                      className={`inline-block py-2 px-6 rounded-lg text-xs font-medium ${
                        item.type === 'Earning'
                          ? 'bg-accent '
                          : 'bg-secondary'
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {showWithdrawModal && (
        <WithdrawModal
          onClose={handleCloseModal}
          onSubmit={handleWithdrawSubmit}
          maxAmount={stats.availableForWithdrawal}
        />
      )}

      {showInvalidModal && (
        <InvalidAmountModal
          onClose={handleCloseModal}
          message={errorMessage}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          onClose={handleCloseModal}
          amount={successAmount}
        />
      )}
    </div>
  );
};

export default Earnings;