import React, { useState, useEffect } from "react";
import UserService from "../../../utils/userService";
;
const Home = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        console.log(response.data);
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        {content}
      </header>
    </div>
  );
};
export default Home;