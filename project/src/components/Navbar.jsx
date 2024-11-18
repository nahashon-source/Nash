import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, TreePine, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate');
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
              onClick={handleDonateClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full flex items-center justify-center gap-2"
            >
              <Heart size={18} />
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}