import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className='bg-gray-darkest min-h-screen'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />

          {/*
         <Route path='/resume' component={} /> 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
