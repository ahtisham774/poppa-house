import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import AboutPage from './pages/about'
import ContactUsPage from './pages/contactUs'
import { Layout } from './components/landingPage/layout'
import ServicesPage from './pages/services'
import PropertyViewingService from './pages/property-viewing'
import Careers from './pages/careers'
import Register from './pages/register'
import Login from './pages/login'
import SignUp from './pages/signUp'
import PropertyDetailPage from './pages/propertyDetail'
import PropertiesHub from './pages/propertiesHub'
import Properties from './pages/properties'
import BlogPage from './pages/blog'
import BlogPostDetail from './pages/blogDetail'
import AccountPage from './pages/account'
import StaffDashboard from './pages/staffDashboard'
import Sidebar from './components/staffPanel/dashboard/sidebar'
import Header from './components/staffPanel/dashboard/header'
import { useState } from 'react'
import Earnings from './pages/earnings'
import Profile from './pages/profile'
import InfoCenter from './pages/infoCenter'
import TrainingDetailsPage from './pages/trainingDetailsPage'
import TrainingMaterialsPage from './pages/trainingMaterialsPage'
import AnnouncementsPage from './pages/announcementsPage'
import CurrentJobs from './pages/currentJobs'
import CurrentJobDetail from './pages/currentJobDetail'
import Messages from './pages/messages'
import AssignJobs from './pages/assignJobs'
import AssignJobDetail from './pages/assignJobDetail'
import JobHistory from './pages/jobHistory'
import JobHistoryDetail from './pages/jobHistoryDetail'
import Announcement from './pages/announcement'
import { useAuth } from './context/useAuth'
import ClientDashboard from './pages/clientDashboard'
import ServicesHub from './pages/servicesHub'
import ClientProfile from './pages/clientProfile'
import ClientChats from './pages/clientChats'
import ClientChatTemplate from './pages/clientChatTemplate'
import ChatView from './components/clientPortal/messages/chatView'
import UserProfile from './pages/userProfile'
import RegisterPage from './pages/registerPage'
import ToolsPage from './pages/tools'
import ClientPropertiesHubPage from './pages/clientPropertiesHubPage'
import DealsRoom from './pages/clientDealsRoomPage'
import LikedProperties from './pages/clientLikedPropertiesPage'
import LikedPropertiesDetailPage from './pages/likedPropertiesDetailPage'
import DealsRoomDetailPage from './pages/dealsRoomDetailPage'
import ViewAllPropertiesListing from './pages/viewAllPropertiesListing'
import ClientActivitiesPage from './pages/clientActivities'
import PageLayout from './components/common/pageLayout'
import ViewClientActivity from './pages/viewClientActivity'
import HelpAndSupport from './pages/helpAndSupport'
import CommissionTracker from './pages/commissionTracker'
import Analytics from './pages/analytics'

const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth()

  console.log('User:', user)

  if (!user) {
    return <Navigate to='/login' replace />
  }

  if (roles && !roles.includes(user?.role?.toLowerCase())) {
    return <Navigate to='/' replace />
  }

  return children
}

const AuthenticatedLayout = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useAuth()

  const SidebarComponent = Sidebar
  const HeaderComponent = Header
  // const SidebarComponent = role === 'staff' ? Sidebar : ClientSidebar
  // const HeaderComponent = role === 'staff' ? Header : ClientHeader

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <SidebarComponent
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className='flex-1 overflow-auto h-[calc(100vh-0.5rem)]'>
        <HeaderComponent
          user={user}
          handleSidebar={() => setSidebarOpen(prev => !prev)}
        />
        <Outlet />
      </div>
    </div>
  )
}

function App () {
  const { user, setUser, loading } = useAuth()

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='size-10 border-4 border-t-4 border-gray-200 border-t-primary rounded-full animate-spin'></div>
      </div>
    )
  }

  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/service/:id' element={<PropertyViewingService />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/properties-hub' element={<PropertiesHub />} />
        <Route path='/properties' element={<Properties />} />
        <Route
          path='/property/:id'
          element={
            <div className='max-w-7xl w-full mx-auto p-4 bg-white'>
              <PropertyDetailPage />
            </div>
          }
        />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blog/:id' element={<BlogPostDetail />} />
        <Route path='/account' element={<AccountPage />} />
      </Route>
      <Route path='/register-list' element={<Register />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

      <Route
        path='staff'
        element={
          <ProtectedRoute roles={['staff']}>
            <AuthenticatedLayout role='staff' />
          </ProtectedRoute>
        }
      >
        <Route path='dashboard' element={<StaffDashboard />} />
        <Route path='messages' element={<Messages />} />
        <Route path='earnings' element={<Earnings />} />
        <Route
          path='profile'
          element={<Profile user={user} setUser={setUser} />}
        />

        <Route path='jobs'>
          <Route path='current'>
            <Route index element={<CurrentJobs />} />
            <Route path=':id' element={<CurrentJobDetail />} />
          </Route>
          <Route path='assign'>
            <Route index element={<AssignJobs />} />
            <Route path=':id' element={<AssignJobDetail />} />
          </Route>
          <Route path='history'>
            <Route index element={<JobHistory />} />
            <Route path=':id' element={<JobHistoryDetail />} />
          </Route>
        </Route>

        <Route path='help' element={<HelpAndSupport />} />

        <Route path='info' element={<InfoCenter />} />
        <Route path='training/:id' element={<TrainingDetailsPage />} />
        <Route path='training-materials' element={<TrainingMaterialsPage />} />
        <Route path='announcements' element={<AnnouncementsPage />} />
        <Route path='announcements/:id' element={<Announcement />} />
        <Route
          path='*'
          element={
            <h1 className='text-center text-2xl font-bold mt-10'>
              There is nothing here yet!
            </h1>
          }
        />
      </Route>
      <Route
        path='client'
        element={
          <ProtectedRoute roles={['client']}>
            <AuthenticatedLayout role='client' />
          </ProtectedRoute>
        }
      >
        <Route path='dashboard' element={<ClientDashboard />} />
        <Route path='services-hub' element={<ServicesHub />} />
        <Route path='properties-hub' element={<Outlet />}>
          <Route index element={<ClientPropertiesHubPage />} />
          <Route path='all' element={<ViewAllPropertiesListing />} />

          <Route path='deals-room' element={<Outlet />}>
            <Route index element={<DealsRoom />} />
            <Route path=':id' element={<DealsRoomDetailPage />} />
          </Route>
          <Route path='liked-properties' element={<Outlet />}>
            <Route index element={<LikedProperties />} />
            <Route path=':id' element={<LikedPropertiesDetailPage />} />
          </Route>
        </Route>
        <Route path='tools' element={<ToolsPage />} />
        <Route
          path='activities'
          element={
            <PageLayout
              title='Activities'
              description='Track and manage all your property-related activities'
            />
          }
        >
          <Route index element={<ClientActivitiesPage />} />
          <Route path=':id' element={<ViewClientActivity />} />
        </Route>
        <Route path='support' element={<HelpAndSupport />} />
        <Route path='chats' element={<ClientChatTemplate />}>
          <Route index element={<ClientChats />} />
          <Route path=':id' element={<ChatView />} />
          <Route path='user-profile/:id' element={<UserProfile />} />
        </Route>
        <Route path='profile' element={<ClientProfile />} />
        <Route
          path='*'
          element={
            <h1 className='text-center text-2xl font-bold mt-10'>
              There is nothing here yet!
            </h1>
          }
        />
      </Route>

      <Route
        path='lister'
        element={
          <ProtectedRoute roles={['lister']}>
            <AuthenticatedLayout role='lister' />
          </ProtectedRoute>
        }
      >
        <Route
          path='dashboard'
          element={<h1>Lister Dashboard Coming Soon!</h1>}
        />
        <Route path='commissions-tracker' element={<CommissionTracker />} />
        <Route path='analytics' element={<Analytics />} />

        <Route
          path='*'
          element={
            <h1 className='text-center text-2xl font-bold mt-10'>
              Lister Dashboard Coming Soon!
            </h1>
          }
        />
      </Route>

      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
