import React from "react";
import "./Header.styles.scss";
import ReactTooltip from 'react-tooltip';

class Header extends React.Component{
  render() {
    return (
      <div className="Header">
        <ReactTooltip place="bottom" arrowColor="transparent"/>
        <div className="LeftItems">
          <i className="fas fa-bars" onClick={this.props.toggleMenuCollapsed}></i>
          <div className="Logo">
            <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
            <p>YouTube</p>
          </div>
        </div>
        <div className="CenterItems">
          <form >
            <div className="Form">
              <input type="text" placeholder="Search" />
                <button data-tip="Search" type="submit">
                  <i class="fas fa-search"></i>
                </button>
            </div>
          </form>
          <i data-tip="Search with your voice" class="fas fa-microphone microphone"></i>
        </div>
        <div className="RightItems">
          <i data-tip="YouTube Apps" className="fas fa-th"></i>
          <i data-tip="Settings" className="fas fa-ellipsis-v"></i>
          <div className="UserBox">
            <i class="fas fa-user-circle"></i>
            <p>SIGN IN</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;