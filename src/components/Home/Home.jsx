import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h2>
          <p>Hi, I'm Marek. Nice to meet you!</p>
          <br/>
        </h2>
        <h4>
          <p>I'm a Frontend Developer specializing in React JS.</p>
          <p>I love creating beautiful and clean web applications.</p>
        </h4>
        
        <Link className="title-link" to="/projects">
          <button>View my work</button>
        </Link>
      </div>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
