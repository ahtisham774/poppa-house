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

function App () {
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
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
