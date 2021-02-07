import React, { useState } from 'react'
import "./Watch.styles.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css'; // import css

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

const Watch = () => {
  const [videos, setVideos] = useState(generateFakeVideos())

  return (
    <div className="Watch">
      <div className="VideoContent">
        <div className="Player">
          <div className="VideoContainer">
            {/* <img src="thumbnail1.jpeg" alt=""/> */}
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </div>
          <div className="VideoDetails">
            <p className="Hashtags">#ABoogie #ABoogieWitDaHoodie #HighBridgeTheLabel</p>
            <h3 className="Title">A Boogie Wit Da Hoodie - Act Like That [Official Audio]</h3>
            <div className="ControlsContainer">
              <p className="Count">1,105,486 views • Jun 19, 2020</p>
              <div className="Controls">
                <div className="SentimentBox">
                  <div className="Sentiments">
                    <div className="Control removeLeftMargin">
                      <i className="fas fa-thumbs-up" style={{marginLeft: "0px"}}></i> 
                      <p className="label">453</p>
                    </div>
                    <div className="Control">
                      <i className="fas fa-thumbs-down"></i>  
                      <p className="label">34</p>
                    </div>
                  </div>
                  <ProgressBar completed={90} height="3px" bgcolor="grey" isLabelVisible={false}/>
                </div>
                <div className="Control">
                  <i className="fas fa-share"></i>  
                  <p className="label">SHARE</p>
                </div>
                <div className="Control">
                  <i className="fas fa-folder-plus"></i>
                  <p className="label">SAVE</p>
                </div>
                <i className="fas fa-ellipsis-h Control"></i>
              </div>
            </div>
          </div>
          <div className="VideoInfo">
            <img src={faker.image.image()} alt=""/>
            <div className="Info">
              <p className="Artist">Young Dolph</p>
              <p className="Subscribers">1.28M subscribers</p>
              <button className="Subscribe">SUBSCRIBE</button>
              <br/>
              <p>{faker.lorem.sentence()}</p>
              <br/>
              <h4 className="More">SHOW MORE</h4>
            </div>
          </div>
        </div>
        <div className="Videos">
          {videos.map(({thumbnailImage, time, profilePicture, title, name, date, views}, index) =>
            <div className="Video" key={index}>
              <div className="ImageBox">
                <img src={thumbnailImage} alt=""/>
                <p className="Time">{time}</p>
              </div>
              <div className="Details">
                <p className="Title">{title} </p>
                <p>{name}</p>
                <p>{views}M views &#8226; {date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Watch;
