import React, { useState } from "react";
import "../LogIn/Login.css";

function Login(props) {
  const [user, setUser] = useState("admin");
  const [password, setPassword] = useState("123456");

  const onLogIn = () => {
    if (password === "123456" && user === "admin") {
      alert("đã đăng nhập thành công");
      props.setScreen("Home");
    } else {
      alert("kiểm tra lại");
      return false;
    }
  };

  const fillInUser = (event) => {
    setUser(event.target.value);
  };

  const fillInPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="logIn">
      <form>
        <div className="Text">
          Tên đăng nhập:
          <input
            type="text"
            name="account"
            placeholder="Điền tên đăng nhập"
            value={user}
            onChange={fillInUser}
          />
        </div>
        <div className="Text">
          Mật khẩu:
          <input
            type="password"
            name="password"
            placeholder="Điền mật khẩu"
            value={password}
            onChange={fillInPassword}
          />
        </div>
        <button onClick={onLogIn}>Đăng nhập nhé!</button>
      </form>
    </div>
  );
}

export default Login;
