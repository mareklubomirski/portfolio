import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hello,</p>
          <p>I'm Marek!</p>
          <p>Software Developer</p>
        </h1>
        <Link to="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
