import React, { useEffect, useState } from 'react';
import "./result.scss";
import yt from "../../assets/images/yt.png";

interface ResultProps { 
  type: any,
  data: {
    title: string,
    channelTitle: string,
    publishTime: string,
    description: string,
    thumbnails: {high: {url: string}}
  }
}

function Result(props: ResultProps) {

  const [img, setImg] = useState(props.data.thumbnails.high.url);

  const calculateTime = (givenTime: string) => {
    const firstTime: any = new Date(givenTime);
    const now: any = new Date();
    const diffTime = Math.abs(firstTime - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays < 30 ? `${Math.floor(diffDays)} Days ago` : 
    diffDays > 30 && diffDays < 365 ? `${Math.floor(diffDays / 30)} Months ago` : 
    diffDays > 365 ? `${Math.floor(diffDays / 365)} Years ago` : 
    diffDays < 1 ? `${diffTime} Hours ago` : 
    "";
  }

  return (
    <div className='result-container'>
      <div className={`video-img-container ${props.type !== "youtube#video" ? "channel-img-container" : ""}`}>
        <img className={props.type === "youtube#video" ? "video-img" : "channel-img"} src={img} onError={() => setImg(yt)} />
      </div>
      <div className="result-data">
        <h2>{props.data.title}</h2>
        <div className="result-data-info">
          <span>{props.data.channelTitle} .</span>
          <span>{calculateTime(props.data.publishTime)}</span>
        </div>
        <h5>{props.data.description}</h5>
      </div>
    </div>
  );
}

export default Result;