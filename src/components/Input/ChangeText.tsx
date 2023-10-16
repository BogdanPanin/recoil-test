import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { changeText, charCountState } from "../../store/atom";

function ChangeText() {
  const [text, setText] = useRecoilState<string>(changeText);
  const textOfSpace = useRecoilValue(charCountState);
  const ChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setText(target.value);
  };
  return (
    <div
      style={{
        border: "5px solid orange",
        padding: "10px",
        margin: "20px 0 20px 0",
      }}
    >
      <input
        value={text}
        type="text"
        onChange={ChangeInput}
        style={{ width: "50vw", height: "5vh" }}
      />
      <h1>Input Text - {text}</h1>
      <h2>Number of letters - {textOfSpace}</h2>
    </div>
  );
}

export default ChangeText;
