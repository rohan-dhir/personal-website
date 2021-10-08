import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import MobileGames from './pages/MobileGames';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

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
