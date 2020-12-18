import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

import PhoneList from './Components/PhoneList';
import NewPhone from './Components/Phone/NewPhone';
import EditPhone from './Components/Phone/EditPhone';
import PhoneDetail from './Components/Phone/PhoneDetail';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" component={PhoneList} exact />
          <Route path="/phone/:id" component={PhoneDetail} exact />
          <Route path="/add" component={NewPhone} exact />
          <Route path="/edit/:id" component={EditPhone} exact />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
