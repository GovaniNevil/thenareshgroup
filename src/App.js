import React from 'react';
import './App.css';
import Header from './Componants/Header';
import Footer from './Componants/Footer';
import Main from './Componants/Main';
import './tailwind.css';

function App() {
  return (
    <>
      <div className='border border-dark'>
        <div className=' text-center'  >
          <Header />
          <div>
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
