import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Component/Navbar';
import HomePages from './Pages/HomePages';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/BlogsPages';
import ContactPage from './Pages/ContactPage';
import LogInPage from './Pages/LogInPage';
import { createContext, useState } from 'react';
import PrivateRoute from './Pages/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <Navbar navToggle={navToggle} setNavToggle={setNavToggle}></Navbar>
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <PrivateRoute path="/" exact>
                <HomePages></HomePages>
              </PrivateRoute>
              <PrivateRoute path="/about">
                <AboutPage></AboutPage>
              </PrivateRoute>
              <PrivateRoute path="/portfolios">
                <PortfolioPage></PortfolioPage>
              </PrivateRoute>
              <PrivateRoute path="/blogs">
                <BlogsPage></BlogsPage>
              </PrivateRoute>
              <PrivateRoute path="/contact">
                <ContactPage></ContactPage>
              </PrivateRoute>
              <Route path="/login">
                <LogInPage></LogInPage>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
