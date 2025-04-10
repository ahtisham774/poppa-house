import { Outlet, Route, Routes } from 'react-router-dom'
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
import AnnouncementDetailsPage from './pages/announcementDetailsPage'
import CurrentJobs from './pages/currentJobs'
import CurrentJobDetail from './pages/currentJobDetail'
import Messages from './pages/messages'
import AssignJobs from './pages/assignJobs'
import AssignJobDetail from './pages/assignJobDetail'
import JobHistory from './pages/jobHistory'
import JobHistoryDetail from './pages/jobHistoryDetail'

function App () {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  })
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
        <Route path='/property/:id' element={<PropertyDetailPage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blog/:id' element={<BlogPostDetail />} />
        <Route path='/account' element={<AccountPage />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

      <Route
        path='staff'
        element={
          <div className='flex h-screen bg-gray-50'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className='flex-1 overflow-auto'>
              <Header user={user} handleSidebar={()=>setSidebarOpen(prev=>!prev)} />
              <Outlet />
            </div>
          </div>
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
          <Route path='current' >
            <Route index element={<CurrentJobs />} />
            <Route path=':id' element={<CurrentJobDetail />} />
          </Route>
          <Route path='assign' >
            <Route index element={<AssignJobs />} />
            <Route path=':id' element={<AssignJobDetail />} />
          </Route>
          <Route path='history' >
            <Route index element={<JobHistory />} />
            <Route path=':id' element={<JobHistoryDetail />} />
          </Route>
        </Route>

        <Route path='info' element={<InfoCenter />} />
        <Route path='training/:id' element={<TrainingDetailsPage />} />
        <Route path='training-materials' element={<TrainingMaterialsPage />} />
        <Route path='announcements' element={<AnnouncementsPage />} />
        <Route path='announcements/:id' element={<AnnouncementDetailsPage />} />
      </Route>
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
