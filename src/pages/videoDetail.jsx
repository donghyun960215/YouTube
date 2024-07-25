import React, {useCallback, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import axios from "axios";

function VideoDetail(props) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const videoId = searchParams.get("videoId");
  const [detail, setDetail] = useState(null);
  const [video, setVideo] = useState(null);

  const getDetail = useCallback( async () => {
    const {data, status} = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=AIzaSyCWCRNHZQD8OPXi8v5h6slPLMw6yPSIZcA`)
    if(status === 200){
      setDetail(data.items);
      console.log(data.items)
    }
  })

  // const getDetailVideo = useCallback( async () => {
  //   const {data, status} = await axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=AIzaSyCWCRNHZQD8OPXi8v5h6slPLMw6yPSIZcA`)
  //   if(status === 200){
  //     setDetail(data.items);
  //     console.log(data.items)
  //   }
  // })

  useEffect(() => {
    if(!detail){
      getDetail();
      // getDetailVideo();
    }

    const iframeProps = {
      id: "ytplayer",
      type: "text/html",
      width: "720",
      height: "405",
      src: "https://www.youtube.com/embed/cgdne04i99I",
      frameborder: "0",
      allowfullscreen: "allowfullscreen",
    };


  },[detail]);
  return (
    <>
      <div>{id}</div>
      <iframe id="ytplayer" type="text/html" width="720" height="405"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0" allowFullScreen></iframe>
    </>
  );
}

export default VideoDetail;