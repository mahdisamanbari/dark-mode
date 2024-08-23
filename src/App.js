import React from 'react';

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact us</li>
            </ul>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>

          </div>

        </div>
      </header>
      <div className='content'>

      </div>
      
    </div>
  );
};

export default App;