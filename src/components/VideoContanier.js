import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIO_LIST } from "../utils/constants";
import VedioBox from "./VedioBox";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
    

  const getVideos = async () => {
    const vedioData = await fetch(YOUTUBE_VEDIO_LIST);
    const jsonData = await vedioData.json();
    setVideo(jsonData.items);
  };
 
  return (    
    <div className=" flex mt-2 flex-wrap">
      {video.map((video) => (
        <div className=" w-1/4 "> 
        <Link to={"/watch?v="+video.id}>  <VedioBox id={video.id} info={video} /> </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
