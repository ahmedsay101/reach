import React, { useEffect } from 'react';
import { createParenthesizedType } from 'typescript';
import "./video.scss";

interface VideoProps { 
  data: {
    title: string,
    channelTitle: string,
    publishTime: string,
    description: string,
    thumbnails: {default: {url: string}}
  }
}

function Video(props: VideoProps) {

  return (
    <div className='video-container'>
      <div className="video-img-container">
        <img className='video-img' src={props.data.thumbnails.default.url} />
      </div>
      <div className="video-data">
        <h2>{props.data.title}</h2>
        <div className="video-data-info">
          <span>{props.data.channelTitle} .</span>
          <span>{props.data.publishTime}</span>
        </div>
        <h5>{props.data.description}</h5>
      </div>
    </div>
  );
}

export default Video;