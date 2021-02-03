import "./sass/main.scss";
import './App.scss';
import Header from "./components/Header/Header.component";

function App() {
  return (
    <div className="AppContainer">
      <Header/>
      <div className="Body">
        <div className="Menus">
          Menus
        </div>
        <div className="Content">
          Content
        </div>
      </div>
    </div>
  );
}

export default App;
