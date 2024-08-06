import "./Products.css"

const ProductHeader = () => {
  return (
    <>
      <header>
        <div className="hero">
          <div className="container text-center text-white">
            <h1 className="display-4">Welcome to <span className="grey-qo-regularh">Re </span><span style={{color: '#fc036b'}}>Home</span></h1>
            <p className="hero-subtitle">
              We are a company that provides you with the best home appliances
            </p>
            <p className="lead">
              Discover a curated selection of gently used home appliances that
              blend quality, affordability, and sustainability. At ReHome, we
              believe in giving home essentials a second chance to serve while
              helping you save money and reduce waste. Join us in our mission to
              create a more sustainable future, one appliance at a time.
            </p>
            <a href="/products" className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProductHeader;
