import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); 


  useEffect(() => {
    const storedUser = localStorage.getItem('user'); 
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navItemClass = (path) =>
    `hover:text-sky-300 transition ${
      location.pathname === path ? 'text-sky-300 font-semibold' : 'text-white'
    }`;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%]">
      <nav className="bg-sky-900/70 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-xl flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-sky-300">
          OtakuMart
        </Link>

        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className={navItemClass('/')}>Home</Link>
          <Link to="/products" className={navItemClass('/products')}>Products</Link>
          <button onClick={() => handleNavigation('contact')} className="hover:text-sky-300">
            Contact
          </button>
        </div>

        {/* Auth or User Info */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-white">Hi, {user.name} 👋</span>
              <Link
                to="/profile"
                className="bg-white text-sky-800 px-4 py-1.5 rounded-full hover:bg-sky-100 font-semibold"
              >
                Profile
              </Link>
              <button onClick={handleLogout} className="hover:text-red-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="hover:text-sky-300">Sign In</Link>
              <Link
                to="/register"
                className="bg-white text-sky-800 px-4 py-1.5 rounded-full hover:bg-sky-100 font-semibold"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-2 md:hidden bg-sky-900/80 backdrop-blur-md rounded-2xl shadow-lg px-4 py-4 space-y-3 text-center">
          <Link to="/" className={navItemClass('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" className={navItemClass('/products')} onClick={() => setMenuOpen(false)}>Products</Link>
          <button onClick={() => handleNavigation('contact')} className="block w-full hover:text-sky-300">
            Contact
          </button>
          <hr className="border-white/20" />
          {user ? (
            <>
              <p className="text-white">Hi, {user.name}</p>
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="block w-full hover:text-sky-300">
                Profile
              </Link>
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block w-full text-red-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-white text-sky-800 px-4 py-2 rounded-full hover:bg-sky-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
