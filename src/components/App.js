import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video"

function App() {

  const [videoData, setVideoData] = useState(video)

  console.log("Here's your data:", videoData);

  return (
    <div>
      <Video video={videoData} updateVideo={setVideoData} />      
    </div>
  );
}

export default App;
