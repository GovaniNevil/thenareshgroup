import Header from './componants/Header';
import './App.css';
import MainPages from './componants/Main';
import Footer from './componants/Footer';

function App() {

  return (
    <>
      <div className='border border-dark'>
        <div className=' text-center'  >
          <Header />
          <div>
            <MainPages/>
          </div>
        </div>
       < Footer/>
      </div>
    </>
  )
}

export default App
