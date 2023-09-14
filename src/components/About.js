import React, { useEffect, useState } from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import sample from '../utils/sample.mp3';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = React.createRef();
  const btnref = React.createRef();

  useEffect(() => {
    btnref.current.click();
  }, []);
  const toggleAudio = () => {
    // Toggle the isPlaying state to pause or play the audio
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="about">
        <h1>About Us</h1>
        <h2>This is an About Us Page</h2>
        <ProfileClass name={"OG"} />
      </div>
      <div id="music">
          <audio id="audio" ref={audioRef}>
    <source src={sample} type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
        <button className="bg-orange-400 rounded-md w-12" onClick={toggleAudio}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button ref={btnref} onClick={()=>audioRef.current.play()}></button>
      </div>
    </>
  );
};

export default About;
