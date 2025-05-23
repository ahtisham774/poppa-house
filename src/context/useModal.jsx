// components/ModalContext.jsx
import React, { createContext, useContext, useState } from "react";
import { PropertyViewingPackagesModal, ProPropertyViewingFormModal } from "../components/clientPortal/servicesHub/propertyViewingPackagesModal";
import { PropertySearchServiceModal, RefundPolicyModal } from "../components/clientPortal/servicesHub/propertySearchServiceModal";
import MaintenanceService from "../components/clientPortal/servicesHub/maintainence/maintenanceService";
import BillsConsolidation from "../components/clientPortal/servicesHub/billsConsolidation";
import PropertyInsurance from "../components/clientPortal/servicesHub/propertyInsurance";


const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}


export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null); // modal: {type, props}

  function openModal(type, props = {}) {
    setModal({ type, props });
  }
  function closeModal() {
    setModal(null);
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      <ModalRenderer modal={modal} close={closeModal} />
    </ModalContext.Provider>
  );
}

// Handles modal rendering
function ModalRenderer({ modal, close }) {
  if (!modal) return null;
  let ModalComp;

  switch (modal.type) {
    case "propertyViewingPackages":
      ModalComp = PropertyViewingPackagesModal;
      break;
    case "proPropertyViewingForm":
      ModalComp = ProPropertyViewingFormModal;
      break;
    case "propertySearchService":
      ModalComp = PropertySearchServiceModal;
      break;
    case "refundPolicy":
      ModalComp = RefundPolicyModal;
      break;
    case "maintenanceServiceSelect":
      ModalComp = MaintenanceService;
      break;
    case "billsConsolidation":
      ModalComp = BillsConsolidation;
      break;
      case "propertyInsurance":
      ModalComp = PropertyInsurance;
      break; // Assuming you have a PropertyInsuranceModal component
    // case "cleaningServicePackage":
    //   ModalComp = CleaningServicePackageModal;
    //   break;
    // case "cleaningServiceStepper":
    //   ModalComp = CleaningServiceStepperModal;
    //   break;
    default:
      return null;
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-40"
      
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden p-2 shadow-lg max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-5 right-7 text-gray-400 hover:text-primary text-2xl font-bold"
        >
          ×
        </button>
        <div className="max-h-[90vh] w-full overflow-auto">
          <ModalComp {...modal.props} close={close} />
        </div>
      </div>
    </div>
  );
}






export default ModalProvider;