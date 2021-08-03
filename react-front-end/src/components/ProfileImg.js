import React from "react";

import "./ProfileImg.scss";

export default function ProfileImg(props) {

  return (
    <div className="profile">
      <main className="profile__add" >
        <img
          className="profile__add-button"
          src="images/add.png"
          alt="Add"
          onClick={props.onAdd}
        />
        <span>Upload your profile picture</span>
      </main>
    </div>
  )
}