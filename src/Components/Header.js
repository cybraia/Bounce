import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header
      className="header"
      style={{
        borderRadius: '0 0 0 50%',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bolder',
          color: 'white',
          fontFamily: 'Dancing Script',
          display: 'flex',
          alignItems: 'center',  // Center the logo vertically
        }}
      >
        <img
          src={logo}
          alt="Bounce Logo"
          style={{
            width: '50px',  // Adjust the width as needed
            height: 'auto', // Maintain aspect ratio
            marginRight: '1rem', // Add spacing between logo and text
          }}
        />
        Bounce
      </div>
    </header>
  );
};

export default Header;
