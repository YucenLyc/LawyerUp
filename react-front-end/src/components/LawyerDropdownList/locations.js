import React from "react";

const locations = () => {
  return (
    <select name="locations" id="locations">
      <option value="location">Locations</option>
      <option value="Vancouver">Vancouver</option>
      <option value="Calgary">Calgary</option>
      <option value="Edmonton">Edmonton</option>
      <option value="Toronto">Toronto</option>
    </select>
  );
}

export default locations;