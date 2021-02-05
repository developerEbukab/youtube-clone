import "./sass/main.scss";
import './App.scss';
import Header from "./components/Header/Header.component";
import { useState } from "react";
import SideNavigation from "./components/SideNavigation/SideNavigation.component";
import faker from "faker";
import moment from "moment";

const generateFakeVideos = () => {
  let fakeVideos = [];
  for (var i = 0; i < 40; i++){
    const data = {
      thumbnailImage: faker.image.image(),
      time: `${faker.random.number().toString().substring(0, 1)}:${faker.random.number().toString().substring(0, 2)}`,
      profilePicture: faker.image.image(),
      title: faker.commerce.productDescription().substring(0,65),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      date: moment().subtract(faker.random.number(), 'days').fromNow(),
      views: faker.random.number().toString().substring(0,1),
    }
    fakeVideos = [...fakeVideos,data
    ]
  }
  console.log(fakeVideos)
  return fakeVideos
}

function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [videos, setVideos] = useState(generateFakeVideos());

  const toggleMenuCollapsed = () => {
    setMenuCollapsed(!menuCollapsed)
  }
  

  return (
    <div className="AppContainer">
      <Header toggleMenuCollapsed={toggleMenuCollapsed} />
      <div className={`Body ${menuCollapsed && "MenusCollapsed"}`}>
        <SideNavigation menuCollapsed={menuCollapsed}/>
        <div className="Content">
          <div className="Videos">
            {videos.map(({thumbnailImage, time, profilePicture, title, name, date, views}, index) =>
              <div className="Video" key={index}>
                <div className="ImageBox">
                  <img src={thumbnailImage} alt=""/>
                  <p className="Time">{time}</p>
                </div>
                <div className="Details">
                  <div className="Picture">
                    <img src={profilePicture} alt=""/>
                  </div>
                  <div>
                    <p className="Title">{title} </p>
                    <p>{name}</p>
                    <p>{views}M views &#8226; {date}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
