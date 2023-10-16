import { useRecoilState, useRecoilValue } from "recoil";
import { clickCounter, sizeImage } from "../../store/atom";

const CountClick = () => {
  const [count, setCount] = useRecoilState<number>(clickCounter);
  const sizePX = useRecoilValue(sizeImage);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        border: "5px solid orange",
        padding: "10px",
        margin: "20px 0 20px 0",
      }}
    >
      <button
        style={{ background: "orange", padding: "10px", borderRadius: "10px" }}
        onClick={handleClick}
      >
        Click
      </button>
      <h1>
        Count Click - {count} and size px {sizePX}
      </h1>
      <p style={{ fontSize: sizePX }}>🐖</p>
    </div>
  );
};

export default CountClick;
