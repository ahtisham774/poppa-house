import { useState } from "react";
import ConversationList from "../components/staffPanel/messages/conversationList";
import ChatView from "../components/staffPanel/messages/chatView";
import ContactAdminModal from "../components/staffPanel/messages/contactAdminModal";
import ReportClientModal from "../components/staffPanel/messages/reportClientModal";
import { GoAlert } from "react-icons/go";

const Messages = () => {
    const [showContactAdmin, setShowContactAdmin] = useState(false);
    const [showReportClient, setShowReportClient] = useState(false);
    const [currentConversation, setCurrentConversation] = useState(null);
    
    const handleContactAdmin = () => {
      setShowContactAdmin(true);
    };
  
    const handleCloseContactAdmin = () => {
      setShowContactAdmin(false);
    };
  
    const handleReportClient = () => {
      setShowReportClient(true);
    };
  
    const handleCloseReportClient = () => {
      setShowReportClient(false);
    };
  
    const handleOpenConversation = (conversation) => {
      setCurrentConversation(conversation);
    };
  
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center px-6 pt-6 bg-white">
          <h1 className="text-3xl font-medium">Messages</h1>
          <button 
            onClick={handleContactAdmin}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
          <span className=" "><GoAlert /></span>
            Contact Admin
          </button>
        </header>
  
        {/* Content */}
        <div className="flex flex-1 overflow-hidden p-6">
          {!currentConversation ? (
            <ConversationList onOpenConversation={handleOpenConversation} />
          ) : (
            <ChatView 
              conversation={currentConversation} 
              onBack={() => setCurrentConversation(null)}
              onReport={handleReportClient}
            />
          )}
        </div>
  
        {/* Modals */}
        {showContactAdmin && <ContactAdminModal onClose={handleCloseContactAdmin} />}
        {showReportClient && <ReportClientModal onClose={handleCloseReportClient} />}
      </div>
    );
}

export default Messages