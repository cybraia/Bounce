import React from 'react';

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
      <div className="logo" style={{ fontSize: '2.5rem', 
      fontWeight: 'bolder', 
      color: 'white',
      fontFamily: 'Dancing Script'
      }}>
        Bounce
      </div>
     
    </header>
  );
};

export default Header;