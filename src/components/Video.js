import React, { useState } from "react";
import Comment from "./Comment";

//import video from "../data/video";

function Video({ video, updateVideo }) {

    const [toggle, setToggle] = useState(true)    

    function handleClick(e) {
        
        const videoCopy = {...video}
     
        console.log("Button Type: " + e)


       if (e === "+") {
        videoCopy.upvotes++
        updateVideo(videoCopy);    
        console.log("UPS: " + videoCopy.upvotes);          
       }
       else if (e === "-") {
        videoCopy.downvote++
        updateVideo(videoCopy);    
        console.log("UPS: " + videoCopy.downvotes);          
       }
       else if (e === "toggle") {
       setToggle(!toggle)
       }
       else {
          console.log("ERROR: Invalid Button Type!")
       }
    }

    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <span>
                <button type="button" onClick={()=>handleClick("+")}>{video.upvotes} 👍</button>
                <button type="button" onClick={()=>handleClick("-")}>{video.downvotes} 👎</button>
            </span>            
            <div>
                <br/>
                <button type="button" onClick={()=>handleClick("toggle")}>
                    {toggle ? "Hide Comments" : "Show Comments"}
                </button>
                <br/>
                <br/>
            </div>
            <h2>{video.comments.length} Comments</h2>
           { toggle 
             ? <div className="comment">
                {video.comments.map((comment) => (
                    <Comment user={comment.user}
                             comment={comment.comment}
                             key={comment.id}
                    />
                 ))}
               </div> 
             : null
            }
        </div>
    )
}

export default Video;