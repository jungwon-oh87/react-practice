import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<h1>Home Page</h1>}></Route>
          <Route exact path='accordion' element={<h1>Accordion11</h1>}></Route>
        </Routes>
        {/* <div className='list'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='accordion'>Accordion</Link></li>
          </ul>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
