import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Accordion from './components/accordion/accordion.jsx'

function App() {
  return (
    <div className='App'>

      <Router>
      <div className='list'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='accordion'>Accordion</Link></li>
        </ul>
      </div>
        <Routes>
          <Route exact path='/' element={<h1>Home Page</h1>}></Route>
          <Route exact path='accordion' element={ <Accordion/> }></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
