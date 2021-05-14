import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h2>
          <p>Hi, I'm Marek!</p>
          <br/>
        </h2>
        <h4>
          <p>I'm a front-end React developer honing my</p>
          <p>skills to build responsive and accessible web apps.</p>
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
