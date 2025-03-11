import { useState } from 'react'
import { Button, Drawer } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const navigate = useNavigate()

  const navLinks = [
    { path: "/services", text: "Services" },
    { path: "/properties", text: "Properties Hub" },
    { path: "/blog", text: "Blog & Market Insights" },
    { path: "/about", text: "About Us" },
    { path: "/contact", text: "Contact Us" },
  ]

  const gotoCareers = () => navigate('/careers')
  const gotoLogin = () => navigate('/login')

  return (
    <header className="border-b border-b-[#B8B8B8]">
      <div className="container mx-auto px-4 h-20 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="Asare Viewing" className="h-12 -mt-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium hover:text-secondary active:text-secondary focus-within:text-secondary"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <MenuOutlined />
        </button>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button onClick={gotoCareers} className="bg-secondary text-base font-medium py-4 rounded-lg hover:!bg-secondary hover:!text-foreground/30 text-foreground">
            Careers
          </Button>
          <Button onClick={gotoLogin} className="bg-secondary hover:!bg-secondary text-base font-medium py-4 rounded-lg hover:!text-foreground/30 text-foreground">
            Login/Register
          </Button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 flex justify-between">
          <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="Asare Viewing" className="h-12" />
        </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-xl"
              aria-label="Close menu"
            >
              <CloseOutlined />
            </button>
          </div>
          
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium hover:text-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 mt-8">
              <Button  onClick={gotoCareers} className="bg-secondary text-base font-medium py-4 rounded-lg">
                Careers
              </Button>
              <Button onClick={gotoLogin} className="bg-secondary text-base font-medium py-4 rounded-lg">
                Login/Register
              </Button>
            </div>
          </nav>
        </div>

        {/* Backdrop overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  )
}