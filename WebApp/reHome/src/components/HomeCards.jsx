import electronicImage from "../assets/images/electronics.jpg"
import tvImage from "../assets/images/pexels-23audiovisual-18039822.jpg"
import laptopImage from "../assets/images/emmanuel-ikwuegbu-HMPbcsTP8_g-unsplash.jpg"
const HomeCards = () => {
  return (
    <>
   
    <main className="container mt-5">
    <h2 className="text-center mb-4">Our Products</h2>
     <div className="row">
      {/* TV Category  */}
      <div className="col-md-4">
        <div className="card mb-4">
          <img src={tvImage} className="card-img-top resized-img" alt="TV" />
          <div className="card-body">
            <h5 className="card-title">Kitchen Appliances</h5>
            <p className="card-text">High-quality second-hand appliances for your kitchen needs.</p>
            <a href="Kitchen.html" className="btn btn-primary">See More</a>
          </div>
        </div>
      </div>
    {/* Laptops Category  */}
      <div className="col-md-4">
        <div className="card mb-4">
          <img src={electronicImage} className="card-img-top resized-img" alt="Laptop" />
          <div className="card-body">
            <h5 className="card-title">Electronics</h5>
            <p className="card-text">Reliable second-hand electronics for work, home or play.</p>
            <a href="catalogue.html#laptops" className="btn btn-primary">See More</a>
          </div>
        </div>
      </div>
    {/* Blenders Category  */}
      <div className="col-md-4">
        <div className="card mb-4">
          <img src={ laptopImage } className="card-img-top resized-img" alt="Blender" />
          <div className="card-body">
            <h5 className="card-title">Sounds and Instruments</h5>
            <p className="card-text">Efficient second-hand musical appliances for your music needs.</p>
            <a href="catalogue.html#blenders" className="btn btn-primary">See More</a>
          </div>
        </div>
      </div>
     
     
      
     
    </div>
    </main>
    </>
  )
}

export default HomeCards