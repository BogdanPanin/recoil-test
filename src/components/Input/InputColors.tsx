import { useRecoilState } from "recoil";
import { setColor } from "../../store/atom";

function InputColors(): React.ReactNode {
  const [colors, setColors] = useRecoilState<string>(setColor);

  const chengeColor = (backGround: string): void => {
    setColors(backGround);
  };

  return (
    <div
      style={{
        border: "5px solid orange",
        padding: "10px",
        margin: "20px 0 20px 0",
      }}
    >
      <h1 style={{ background: colors, color: "black" }}>
        BackGroud color: {colors}
      </h1>
      <button
        style={{
          background: "red",
          padding: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
        onClick={() => chengeColor("red")}
      >
        Red
      </button>
      <button
        style={{
          background: "blue",
          padding: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
        onClick={() => chengeColor("blue")}
      >
        Blue
      </button>
      <button
        style={{
          background: "green",
          padding: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
        onClick={() => chengeColor("green")}
      >
        Green
      </button>
      <button
        style={{
          background: "pink",
          padding: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
        onClick={() => chengeColor("pink")}
      >
        pink
      </button>
      <button
        style={{
          background: "yellow",
          padding: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
        onClick={() => chengeColor("yellow")}
      >
        yellow
      </button>
    </div>
  );
}

export default InputColors;
