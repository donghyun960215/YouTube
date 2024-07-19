import React,{useCallback,useState,useEffect} from 'react';
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router-dom";

function VideoList(props) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const navigate = useNavigate();
  const [videoList, setVideoList] = useState([]);

  const getVideoList = useCallback( async () => {
    // if(search){
    //   const {data, status} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyCWCRNHZQD8OPXi8v5h6slPLMw6yPSIZcA`)
    //   if(status === 200){
    //     setVideoList(data.items);
    //     console.log('search:::',data.items)
    //   }
    // }else {
    //   const {data, status} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=인기동영상&key=AIzaSyCWCRNHZQD8OPXi8v5h6slPLMw6yPSIZcA`)
    //   if(status === 200){
    //     setVideoList(data.items);
    //     console.log('baaaa:::',data.items)
    //   }
    // }
    const {data, status} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search? search : '인기동영상'}&key=AIzaSyCWCRNHZQD8OPXi8v5h6slPLMw6yPSIZcA`)
      if(status === 200){
        setVideoList(data.items);
        console.log('search:::',data.items)
      }
  })

  const goToDetail = (video) => {
    navigate(`/detail?id=${video.snippet.channelId}&videoId=${video.id.videoId}`);
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
