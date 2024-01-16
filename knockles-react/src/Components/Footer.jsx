import { useEffect, useRef, useState } from "react";
import Speaker from "../static/Sound.png";
import Mute from "../static/mute.png";
import useSound from "use-sound";
import Sound from "../static/audio.mp3";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <footer
        style={{
          transform: "translateY(-50%)",
          borderTop: "2px solid rgba(255, 255, 255, 0.08)",
        }}
        className="footerBackground bg-repeat bg-contain  w-full items-center flex justify-between fixed py-5 px-2 lg:px-20 top-[95vh]"
      >
        <div className="justify-between hidden lg:flex">
          <span className="font-semibold text-2xl font-baalo">CA: </span>
          <p className="font-normal text-white text-2xl font-baalo ml-1">
            {process.env.REACT_APP_CA}
          </p>
        </div>

        <div className="flex justify-between w-full mx-3 lg:mx-0 lg:w-auto lg:justify-normal gap-6 lg:gap-3 items-center">
          <div className="font-baalo font-normal text-base">
            2024@ Knockles. All right reserved
          </div>
          <img
            src={isPlaying ? Speaker : Mute}
            alt="sound"
            className="audio"
            onClick={togglePlay}
          />
        </div>
      </footer>
      <audio
        ref={audioRef}
        autoPlay
        src={Sound}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  );
};

export default Footer;
