import React from "react";
import Topics from "./Topics";

const Home = () => {
  return (
    <div>
      <Topics path="/topics" />
      <footer className="footer">
        <p>Website created_by: Mustabur Rahman</p>
        <p>
          Contact information:{" "}
          <a href="mailto:mrahman22@hotmail.com">
            mustaburrahman2017@hotmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
