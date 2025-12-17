import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect");
    const intervalId = setInterval(() => {
      console.log("Interval");
      console.log({ intervalId });
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // console.log(intervalId)
  }, []);

  return <p>{time.toLocaleTimeString()} </p>;
}
