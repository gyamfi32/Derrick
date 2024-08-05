import "./NavHeader.css"

const NavHeader = () => {
  return (
    <>   
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <h1 className=" navbar-brand">ReHome</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./product.html">Cart</a>
              </li>
              <li className="nav-item">
                <a className="ctn" href="#">Contact Us</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavHeader