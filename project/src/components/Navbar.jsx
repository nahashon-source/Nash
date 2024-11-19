import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, TreePine } from 'lucide-react';

export default function Navbar({ isLoggedIn }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Do not display Navbar on Login or Sign Up pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const handleSignOut = () => {
    // Remove the user session from localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <nav className="bg-green-50 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <TreePine className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-green-800">Mazingira</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">Home</Link>
              <Link to="/organizations" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">Organizations</Link>
              <Link to="/stories" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">Stories</Link>
              <Link to="/beneficiary-list" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">Beneficiaries & inventories</Link>
              <Link to="/about" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">About</Link>
              <button
                onClick={handleSignOut}
                className="group relative flex justify-center py-1 px-2 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md font-medium">Home</Link>
            <Link to="/organizations" className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md font-medium">Organizations</Link>
            <Link to="/stories" className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md font-medium">Stories</Link>
            <Link to="/about" className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md font-medium">About</Link>
            <button
              onClick={handleSignOut}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full flex items-center justify-center gap-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
