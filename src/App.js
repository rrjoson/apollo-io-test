import React from "react";
import Header from "./components/Header";
import AudioTime from "./components/AudioTime";
import AudioGraph from "./components/AudioGraph";
import recording from "./recording.wav";
import useAudioPlayer from "./hooks/useAudioPlayer";
import "./styles.css";

export const AppContext = React.createContext({});

export default function App() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  } = useAudioPlayer();

  return (
    <AppContext.Provider
      value={{
        curTime,
        duration,
        playing,
        setPlaying,
        setClickedTime
      }}
    >
      <audio id="audio">
        <source src={recording} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Header />
      <AudioTime />
      <AudioGraph />
    </AppContext.Provider>
  );
}
