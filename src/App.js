import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div className='bg-gray-darkest min-h-screen'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/programs' component={} />
        <Route path='/contact' component={} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
