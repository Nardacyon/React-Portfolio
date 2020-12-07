import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <Router>
      <main>
        <Switch>
        <Route path='/react-portfolio' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
        </Switch>
      </main>


    </Router>

  );
}

export default App;