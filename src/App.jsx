import './App.css'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/logo.png'
import menutop from './images/menutop.png'


function App() {

  return (
    <>
      <div id='bg'>
      
      <img src={logo} alt='logo'  className='logo'/>
      <img src={menutop} alt='menu' className='menutop'/>
      <div className='text-menu'><h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and beacame a super Ninja developer.</p>
      </div>
      <button>Awesome!</button>
      
      </div>
      
      <div className='menu'>
      <div className='div1'>
      <img src={icon1} alt='icon1' />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive Uls.</p>
      </div>
      <div className='div2'>
      <img src={icon2} alt='icon2' />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className='div3'>
      <img src={icon3} alt='icon3' />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passedto the component's.</p>
      </div>
      <div className='div4'>
      <img src={icon4} alt='icon4' />
      <h3>JSX</h3>
      <p>Statically-typed designed to run on modern browsers.</p>
      </div>
      </div>
    </>
  )
}

export default App;
