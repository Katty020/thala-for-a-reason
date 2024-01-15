import { useState } from "react";
import "./App.css";
import useSound from "use-sound";
import thalasong from "./assets/thalasong.mp3";
import thalanaughtyhorha from "./assets/thalanaughtyhorha.mp3";
import thalanaughtyhorha2 from "./assets/thalanaughtyhorha2.mp4";

function App() {
  const [input, setInput] = useState("");
  const [isthala, setisthala] = useState(false);
  const [play1, stopAudio1] = useSound(thalasong);
  const [play2, stopAudio2] = useSound(thalanaughtyhorha);
  const [play3, stopAudio3] = useSound(thalanaughtyhorha2);

  function isThala(e) {
    const lengthInput = input.length;

    if (
      lengthInput === 7 &&
      (input !== "gambhir" ||
        "Gambhir" ||
        "GAMBHIR" ||
        "gautam gambhir" ||
        "Gautam Gambhir")
    ) {
      setisthala(true);

      play1();
      stopAudio3.stop();
      stopAudio2.stop();
    }
    // else if (
    //   input === "gambhir" ||
    //   "Gambhir" ||
    //   "GAMBHIR" ||
    //   "gautam gambhir" ||
    //   "Gautam Gambhir"
    // ) {
    //   stopAudio1.stop();
    //   stopAudio2.stop();
    //   play3();
    //   setisthala(false);
    // }
    else {
      stopAudio1.stop();
      stopAudio3.stop();

      play2();
      setisthala(false);
    }
  }

  return (
    <div className="h-[100vh] flex flex-col gap-20 justify-center items-center bg-black z-[-10] ">
      {isthala === true ? (
        <video
          className="right-0 bottom-0 w-[100%] h-[100%]"
          muted
          autoPlay
          loop
          src={require("../src/assets/thalabolejodance.mp4")}
        ></video>
      ) : (
        <div className="text-white"></div>
      )}

      <div className=" z-[20] fixed h-full flex flex-col gap-20 justify-center items-center">
        <div>
          <label className="text-white text-7xl">
          KYA AAPKE ANDER BHI THALA HAI??
          </label>
        </div>
        <div>
          <input
            placeholder=""
            className="h-[100px] w-[500px] rounded-full border-yellow-400 border-4 m-5 p-5 text-4xl"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button
            onClick={isThala}
            className="bg-blue-500 h-[100px] w-auto p-5 text-5xl rounded-full border-yellow-400"
          >
            Check here
          </button>
        </div>
        <label className="text-white text-7xl ">
          {isthala === true ? (
            <h1>KYA AAPKE ANDER BHI THALA HAI??</h1>
          ) : (
            <h1>Check kar ke dekh Lo naaaaa</h1>
          )}
        </label>
        <label className="text-white text-3xl">
          <h1>7 to mat hi likhna bhai..
          </h1>
          <h1></h1>
          <h3>Made for fun-*Katiyar*</h3>
          <h3>🦁🦁🦁🦁🦁🦁🦁</h3>
        </label>
      </div>
    </div>
  );
}

export default App;
