import React, {useState} from 'react';
import "./Content.styles.scss";
import faker from "faker";
import moment from "moment";
import { Link } from 'react-router-dom';

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

const Content = () => {
  const [videos, setVideos] = useState(generateFakeVideos());

  return (
    <div className="Content">
      <div className="Videos">
        {videos.map(({thumbnailImage, time, profilePicture, title, name, date, views}, index) =>
          <Link to="watch" className="Video" key={index}>
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
          </Link>
        )}
      </div>
    </div>
  );
}

export default Content;
