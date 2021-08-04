import React from "react";

const rating = () => {
  return (
    <select name="rating" id="rating">
      <option value="rating">Rating</option>
      <option value="highToLow">Highest - Lowest</option>
    </select>
  );
}

export default rating;