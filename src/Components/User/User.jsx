import React from "react";
import "./User.css";
import Description from "../Description/Description";

function User() {
  const users = [
    {
      name: "Nguyễn Văn A",
      age: 20,
      avatar:
        "https://www.enewsletterhome.com/_eNewsletter/2020/2007_J_avatar.jpg?",
      position: "Chức vụ 1",
    },
  ];

  const userLists = users.map((user, index) => (
    <div key={index} className="character">
      <h1>Tên: {user.name}</h1>

      <h2>Tuổi: {user.age}</h2>
      <div>
        <img src={user.avatar} alt="avatar" className="avatar" />
      </div>
      <div>Chức vụ: {user.position}</div>
      <span>
        <Description />
      </span>
    </div>
  ));

  console.log("userLists", userLists);

  return <div>{userLists}</div>;
}

export default User;
