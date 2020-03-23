import React from "react";

const Home = () => {
  return (
    <div>
      <img className="showcase" src={require("./news.jpg")} alt="news" />
      <footer className="footer">
        <p>Website created_by: Mustabur Rahman</p>
        <p>
          Contact information:{" "}
          <a href="mailto:mrahman22@hotmail.com">
            mustaburrahman2017@hotmail.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
