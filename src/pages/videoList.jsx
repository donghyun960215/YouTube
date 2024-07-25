import React,{useCallback,useState,useEffect} from 'react';
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router-dom";

function VideoList(props) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const navigate = useNavigate();
  const [videoList, setVideoList] = useState([]);

  const getVideoList = useCallback( async () => {
      const {data, status} = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyCWCRNHZQD8OPXi8v5h6slPLMw6yPSIZcA`)
      if(status === 200){
        setVideoList(data.items);
        console.log('search:::',data.items)
      }

  })

  const goToDetail = (video) => {
    navigate(`/detail?id=${video.snippet.channelId}&videoId=${video.id}`);
    console.log(video)
  }

  useEffect(() => {
    if(videoList){
      getVideoList();
    }
  },[search] );

  return (
    <>
      {
        videoList.map((video) => (
          <div onClick={() => goToDetail(video)}>
            <img src={`${video.snippet.thumbnails.default.url}`} alt=""/>
            <p>{video.snippet.title}</p>
          </div>
        ))
      }
    </>
  );
}

export default VideoList;
