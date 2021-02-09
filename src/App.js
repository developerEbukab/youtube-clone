import "./sass/main.scss";
import './App.scss';
import Header from "./components/Header/Header.component";
import { useState } from "react";
import Home from "./pages/Home/Home.component";
import Watch from "./pages/Watch/Watch.component";
import { Switch, Route, Redirect } from 'react-router-dom';
import SideNavigation from "./components/SideNavigation/SideNavigation.component";
import SideDrawer from "./components/SideDrawer/SideDrawer.component";


function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [drawerStatus, setDrawerStatus] = useState(false);

  const toggleDrawerStatus = () => {
    setDrawerStatus(!drawerStatus)
  }

  const toggleMenuCollapsed = () => {
    setMenuCollapsed(!menuCollapsed);
  }
  
  return (
    <div className="AppContainer">
      {drawerStatus &&
        <SideDrawer toggleDrawerStatus={toggleDrawerStatus}/>
      }
      <Header toggleMenuCollapsed={toggleMenuCollapsed} toggleDrawerStatus={toggleDrawerStatus}/>
      <div className="Body">
        <Switch >
          {/* <Route exact path="/" component={Home} /> */}
          <Route
              exact
              path="/"
              render={() => <Home menuCollapsed = {menuCollapsed}/>}/>
          <Route path="/watch" component={Watch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
