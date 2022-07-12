import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStar, setSelectedStar] = useState(0);

  return (
    <div>
      Stars:
      {createArray(totalStars).map((val, index) => {
        return (
          <Star
            key={index}
            selected={selectedStar > index}
            onSelect={() => setSelectedStar(index + 1)}
          />
        );
      })}
      <p>
        Total : {totalStars}, selected: {selectedStar}
      </p>
    </div>
  );
}

export default function App() {
  return <StarRating totalStars={10} />;
}
