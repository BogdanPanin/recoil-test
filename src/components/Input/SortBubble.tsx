const SortBubble = () => {
  const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];
  const arr2 = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

  function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          const tmp = arr[j];

          arr[j] = arr[j + 1];

          arr[j + 1] = tmp;
        }
      }
    }

    return arr;
  }

  return (
    <div
      style={{
        border: "5px solid orange",
        padding: "10px",
        margin: "20px 0 20px 0",
      }}
    >
      <h1>Sort Bubble</h1>
      <h2 style={{ marginBottom: "20px" }}>{arr2.join(" | ")}</h2>
      <h2>{bubbleSort(arr).join(" | ")}</h2>
    </div>
  );
};

export default SortBubble;
