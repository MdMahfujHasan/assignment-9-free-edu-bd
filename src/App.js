import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Reading from './components/Reading/Reading';
import Writing from './components/Writing/Writing';
import Listening from './components/Listening/Listening';
import Speaking from './components/Speaking/Speaking';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Courses></Courses>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/reading">
            <Reading></Reading>
          </Route>
          <Route path="/writing">
            <Writing></Writing>
          </Route>
          <Route path="/listening">
            <Listening></Listening>
          </Route>
          <Route path="/speaking">
            <Speaking></Speaking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;