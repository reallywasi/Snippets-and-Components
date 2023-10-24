import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      if (prevDarkMode) {
        return false;
      } else {
        return true;
      }
    });
  };

  const appStyle = {
    background: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const navbarStyle = {
    background: darkMode ? '#222' : '#444',
  };

  return (
    <div style={appStyle}>
      <nav style={navbarStyle}>
        <div className="navbar-content">
          <h1>My App</h1>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <div className="main-content">
        <h2>Welcome to My App</h2>
        <p>This is some data on the page.</p>
      </div>
    </div>
  );
}

export default App;

