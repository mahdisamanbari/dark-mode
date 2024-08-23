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
        <div className='container'>
          <h2>This is a light-mode project and now the page is light</h2>
          <p>color of page is light</p>

        </div>
        <div className='container'>
          <div className='cart'>
            <div className='cart-item'>
              <img src='image/2.jpg' />
              <h3>cart 1</h3>
              <p>this is cart 1</p>
            </div>
            <div className='cart-item'>
              <img src='image/6.jpg' />
              <h3>cart 2</h3>
              <p>this is cart 2</p>
            </div>
            <div className='cart-item'>
              <img src='image/7.jpg' />
              <h3>cart 3</h3>
              <p>this is cart 3</p>
            </div>
          </div>
          
        </div>

      </div>
      
    </div>
  );
};

export default App;