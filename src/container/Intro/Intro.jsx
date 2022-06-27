import React from "react";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playing, setPlaying] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlaying((prevPlaying) => !prevPlaying);
    if (playing) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        autoPlay
        controls={false}
        muted
      />
    </div>
  );
};

export default Intro;
