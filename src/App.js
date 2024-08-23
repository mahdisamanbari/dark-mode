import React,{useState} from 'react';

const App = () => {

  const [dark,setDark]=useState(true);
  const changeHandler=()=>{
    setDark(!dark)
    console.log(dark);
  }



  return (
    <div className={dark ? 'app' : 'dark-mode'}>
      <header className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact us</li>
            </ul>
            <label className='switch'>
              <input type='checkbox' onChange={changeHandler}/>
              <span className={dark ? 'slider' : 'slider1'} ></span>
            </label>

          </div>

        </div>
      </header>
      <div className='content'>
        <div className='container'>
          <h2>{dark ? "This is a Light-Mode project and now the page is Light": "This is a Dark-Mode project and now the page is Dark"}</h2>
          <p>{dark ? 'color of page is light':'color of page is dark'}</p>

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