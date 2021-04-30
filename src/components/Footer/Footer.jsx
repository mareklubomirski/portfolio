import "./style.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/mareklubomirski"
        target="_blank rel='noreferrer'"
      >
        <img
          src={`${process.env.PUBLIC_URL}/github.png`}
          alt="github-icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/mareklubomirski/" target="_blank" rel='noreferrer'>
        <img
          src={`${process.env.PUBLIC_URL}/linkedin.png`}
          alt="linkedin-icon"
        />
      </a>
      <a href="https://twitter.com/mod_ek" target="_blank" rel='noreferrer'>
        <img
          src={`${process.env.PUBLIC_URL}/twitter-logo.png`}
          alt="twitter-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;