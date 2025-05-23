import React, { useState } from 'react';
import { 
  ChartLineUp, 
  Wallet, 
  Calculator, 
  Receipt, 
  ChartBar 
} from '../components/clientPortal/tools/icons';

import Modal from '../components/clientPortal/tools/modal';
import WeeklyToMonthlyCalculator from '../components/clientPortal/tools/weeklyToMonthlyCalculator';
import RentAffordabilityCalculator from '../components/clientPortal/tools/rentAffordabilityCalculator';
import MortgageCalculator from '../components/clientPortal/tools/mortgageCalculator';
import StampDutyCalculator from '../components/clientPortal/tools/stampDutyCalculator';
import ROICalculator from '../components/clientPortal/tools/roiCalculator';

const ToolsPage = () => {
  const [activeModal, setActiveModal] = useState(null);

  const calculators = [
    {
      id: 'weekly-to-monthly',
      title: 'Weekly to Monthly Rent Calculator',
      description: 'Convert your weekly rent into a monthly figure for better budget planning.',
      icon: <ChartLineUp className="w-6 h-6 text-navy-700" />,
      component: <WeeklyToMonthlyCalculator />
    },
    {
      id: 'rent-affordability',
      title: 'Rent Affordability calculator',
      description: 'Find out how much rent you can afford based on your income.',
      icon: <Wallet className="w-6 h-6 text-navy-700" />,
      component: <RentAffordabilityCalculator />
    },
    {
      id: 'mortgage',
      title: 'Mortgage Calculator',
      description: 'Estimates monthly mortgage payments based on loan amount, interest rate, and term.',
      icon: <Calculator className="w-6 h-6 text-navy-700" />,
      component: <MortgageCalculator />
    },
    {
      id: 'stamp-duty',
      title: 'Stamp Duty Land Tax Calculator',
      description: 'Calculate your Stamp Duty based on property price and buyer status.',
      icon: <Receipt className="w-6 h-6 text-navy-700" />,
      component: <StampDutyCalculator />
    },
    {
      id: 'roi',
      title: 'Return On Investment Calculator',
      description: 'Assess the profitability of your property investment.',
      icon: <ChartBar className="w-6 h-6 text-navy-700" />,
      component: <ROICalculator />
    }
  ];

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary">Tools</h1>
        <p className="text-gray-500 mt-2 mb-8">Resources to help you make informed real estate decisions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calculator) => (
            <div key={calculator.id} className="bg-white rounded-lg br p-6 flex flex-col">
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {calculator.icon}
              </div>
              <h2 className="text-xl font-medium text-primary mb-2">{calculator.title}</h2>
              <p className="text-gray-500 mb-6 text-sm flex-grow">{calculator.description}</p>
              <button
                onClick={() => openModal(calculator.id)}
                className="w-full bg-primary text-white py-1.5 rounded-md hover:bg-primary/90 transition-colors"
              >
                Calculate Now
              </button>
            </div>
          ))}
        </div>
        
      </div>

      {activeModal && (
        <Modal onClose={closeModal} title={calculators.find(c => c.id === activeModal)?.title}>
          {calculators.find(c => c.id === activeModal)?.component}
        </Modal>
      )}
    </div>
  );
};

export default ToolsPage;