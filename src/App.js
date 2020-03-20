import React from "react";
import Header from "./components/Header";
import AudioTime from "./components/AudioTime";
import AudioGraph from "./components/AudioGraph";
import useAudioPlayer from "./hooks/useAudioPlayer";
import "./styles.css";

export default function App() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  } = useAudioPlayer();

  return (
    <div>
      <Header playing={playing} setPlaying={setPlaying} />
      <AudioTime curTime={curTime} duration={duration} />
      <AudioGraph />
    </div>
  );
}
