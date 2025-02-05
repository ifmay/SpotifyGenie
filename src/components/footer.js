import React from "react"; // Add this for compatibility
import authHelpers from "../authHelpers";

const Footer = (props) => {
  const { logged } = props;
  return (
    <footer>
      {logged ? (
        <div className="logout">
          <button onClick={(e) => authHelpers.logout()}>&gt; log out</button>
        </div>
      ) : (
        <div className="logout"></div>
      )}
      <div className="github">
        <button onClick={Footer.goToRepo}></button>
      </div>
      <div className="info">
        <div className="react">
        </div>
      </div>
    </footer>
  );
};

Footer.goToReact = () => {
  let url = "https://reactjs.org";
  window.open(url, "_blank");
};

Footer.goToRepo = () => {
  let url = "https://github.com/ifmay/SpotifyGenie";
  window.open(url, "_blank");
};

export default Footer;
