import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu POST đến API login
    axios
      .post("/api/auth/signin", {
        username,
        password,
      })
      .then((res) => {
        // Nếu login thành công, redirect sang trang home
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        // Nếu login thất bại, hiển thị thông báo lỗi
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <Link to={"/contacts"} className="link">
        <i className="bi bi-arrow-left"></i> Back to list
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
