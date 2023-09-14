// import React, { useEffect, useState } from "react";
// import ProfileClass from "./ProfileClass";
// import Profile from "./Profile";
// import sample from '../utils/sample.mp3';

// const About = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const audioRef = React.createRef();
//   const btnref = React.createRef();

//   useEffect(() => {
//     audioRef.current.play();
//   }, []);
//   setTimeout(()=>{
//     btnref.current.click();
//   },2000)

//   const toggleAudio = () => {
//     // Toggle the isPlaying state to pause or play the audio
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <div className="about">
//         <h1>About Us</h1>
//         <h2>This is an About Us Page</h2>
//         <ProfileClass name={"OG"} />
//       </div>
//       <div id="music">
//           <audio id="audio" ref={audioRef}>
//     <source src={sample} type="audio/mp3" />
//     Your browser does not support the audio element.
//   </audio>
//         <button className="bg-orange-400 rounded-md w-12" onClick={toggleAudio}>
//           {isPlaying ? "Pause" : "Play"}
//         </button>
//         <button ref={btnref} onClick={()=>audioRef.current.play()}></button>
//       </div>
//     </>
//   );
// };

// export default About;
import React, { useEffect, useState } from "react";
import sample from '../utils/sample.mp3';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Initially, music is paused
  const audioRef = React.createRef();

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // You can define a threshold to determine when to start playing music
      // For example, when the user has scrolled 100 pixels down
      const scrollThreshold =0;

      if (window.scrollY >= scrollThreshold && !isPlaying) {
        // Start playing music if it's not already playing
        audioRef.current.play();
        setIsPlaying(true);
      } else if (window.scrollY < scrollThreshold && isPlaying) {
        // Pause music if it's playing and user scrolls back up
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]); // Dependency array includes isPlaying

  // Rest of your component code remains the same
  const toggleAudio = () => {
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
      </div>
      <div id="music">
        <audio id="audio" ref={audioRef} autoPlay preload="auto">
          <source src={sample} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <button className="bg-orange-400 rounded-md w-12" onClick={toggleAudio}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default About;

