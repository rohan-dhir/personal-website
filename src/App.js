import './App.css';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import MobileGames from './pages/MobileGames';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';

function App() {
  const setGA = () => {
    ReactGA.initialize('G-JP8H9PQZ3K');
    ReactGA.pageview('Init page view');
  };

  useEffect(() => {
    setGA();
  },[])
  
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mobilegames" component={MobileGames} />
      </Switch>
    </div>
  );
}

export default App;
