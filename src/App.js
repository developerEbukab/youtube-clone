import "./sass/main.scss";
import './App.scss';
import Header from "./components/Header/Header.component";
import { useState } from "react";
import Home from "./pages/Home/Home.component";
import Watch from "./pages/Watch/Watch.component";

function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const toggleMenuCollapsed = () => {
    setMenuCollapsed(!menuCollapsed)
  }
  
  return (
    <div className="AppContainer">
      <Header toggleMenuCollapsed={toggleMenuCollapsed} />
      <div className="Body">
        {/* <Home menuCollapsed={ menuCollapsed} /> */}
        <Watch/>
      </div>
    </div>
  );
}

export default App;
