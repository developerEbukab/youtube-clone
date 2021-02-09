import React from 'react';
import SideNavigation from '../SideNavigation/SideNavigation.component';
import "./SideDrawer.styles.scss";

const SideDrawer = ({toggleDrawerStatus}) => {
  return (
    <div className="SideDrawer">
      <div className="SideDrawerContainer">
        <div className="SideDrawerHeading" style={{paddingLeft: "1.5vw"}}>
          <div className="LeftItems">
            <i className="fas fa-bars" onClick={toggleDrawerStatus}></i>
            <div className="Logo">
              <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
              <p>YouTube</p>
            </div>
          </div>
        </div>
        <div className="NavigationBox">
          <SideNavigation/>
        </div>
        {/* <SideNavigation/> */}
      </div>
      <div onClick={toggleDrawerStatus} className="Backdrop"></div>
    </div>
  );
}

export default SideDrawer;
