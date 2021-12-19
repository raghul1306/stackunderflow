import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionDetails from "./components/QuestionDetails";
import AddQuestion from "./components/AddQuestion";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="Stack Underflow "/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/create">
              <AddQuestion />
            </Route>
            <Route path="/questions/:id">
              <QuestionDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;