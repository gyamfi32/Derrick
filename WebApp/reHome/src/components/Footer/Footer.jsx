import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark py-4">
        <div className="footerContainer bg-dark py-4">
          <div className="socialIcons">
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            Copyright &copy; 2024 Designed by{" "}
            <span className="designer">Maria</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
