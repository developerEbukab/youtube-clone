import React from 'react';
import "./Home.styles.scss";
import Content from '../../components/Content/Content.component';
import SideNavigation from '../../components/SideNavigation/SideNavigation.component';

const Home = ({menuCollapsed, }) => {
  return (
    <div className={`Home ${menuCollapsed && "MenusCollapsed"}`}>
      <SideNavigation menuCollapsed={menuCollapsed}/>
      <Content/>
    </div>
  );
}

export default Home;
