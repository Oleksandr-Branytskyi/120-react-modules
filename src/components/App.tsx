import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import TagManager from "./TagManager";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <>
      <h1>State in React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt,
        voluptatum nulla at neque debitis perferendis vel ipsa quas deserunt
        beatae quidem voluptas qui nemo blanditiis excepturi. Minus, hic nemo!
      </p>
      <CountDisplay count={count} />

      <ClickCounter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <TagManager />
    </>
  );
}
