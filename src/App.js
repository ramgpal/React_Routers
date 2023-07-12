import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/*">NotFound</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path= "/" element={<MainHeader/>} >  
        {/* Default Route */}
        <Route  index element={<Home/>}/>  
        <Route path= "/support" element={<Support/>} />
        <Route path= "/about" element={<About/>} />
        <Route path= "/labs" element={<Labs/>} />
        <Route path= "*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
