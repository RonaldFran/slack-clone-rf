import React from "react";
import "./Message.css";

function Message({ message, timestamp, user, userImage }) {
  console.log("look here --->", new Date(timestamp?.toDate()).toUTCString);
  return (
    <div className="message">
      <img src={userImage} alt=" " />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <p>{message}</p>
        </h4>
      </div>
    </div>
  );
}

export default Message;
