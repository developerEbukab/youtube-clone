import "./sass/main.scss";
import './App.scss';
import Header from "./components/Header/Header.component";
import { useState } from "react";
import SideNavigation from "./components/SideNavigation/SideNavigation.component";

function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const toggleMenuCollapsed = () => {
    setMenuCollapsed(!menuCollapsed)
  }

  return (
    <div className="AppContainer">
      <Header toggleMenuCollapsed={toggleMenuCollapsed} />
      <div className={`Body ${menuCollapsed && "MenusCollapsed"}`}>
        <SideNavigation menuCollapsed={menuCollapsed}/>
        <div className="Content">
          Content
        </div>
      </div>
    </div>
  );
}

export default App;
