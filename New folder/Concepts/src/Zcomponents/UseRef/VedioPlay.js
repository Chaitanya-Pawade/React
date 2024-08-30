import { useState } from "react";
import { useRef } from "react";
function VedioPlay() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <h2>3.vedio player</h2>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        ref={ref}
        width="250"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        ></source>
      </video>
    </>
  );
}

export default VedioPlay;
