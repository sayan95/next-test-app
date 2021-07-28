import React, { useEffect, useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

const Counter = ({ description, defaultCount }: CounterProps) => {
  const [count, setCount] = useState(defaultCount);
  const [disableMinus, setDisableMinus] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setDisableMinus(true);
    } else {
      setDisableMinus(false);
    }
  }, [count]);

  return (
    <div>
      <h2>Description: {description}</h2>
      <button
        onClick={() => {
          !disableMinus ? setCount(count - 1) : undefined;
        }}
      >
        -
      </button>
      Current count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

Counter.defaultProps = {
  description: "",
  defaultCount: 0,
};

export default Counter;
