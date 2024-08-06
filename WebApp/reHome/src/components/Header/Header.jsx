import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header-content">
        <h1 className="h1">WORLD OF PRICELESS HOME APPLIANCES</h1>
          <h2 className="h2">
            Breathe New Life into Your Home with Quality, Affordable Second-Hand
            Appliances
          </h2>          
          <a className="ctn" href="/products">
            Learn More
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
