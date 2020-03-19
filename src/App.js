import React from "react";
import Header from "./components/Header";
import AudioTime from "./components/AudioTime";
import AudioGraph from "./components/AudioGraph";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <AudioTime />
      <AudioGraph />
    </div>
  );
}
