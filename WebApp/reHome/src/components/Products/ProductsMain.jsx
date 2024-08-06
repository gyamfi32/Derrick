import "./Products.css";
import pexelAndrew from "../../assets/images/pexels-andrew-16053029-removebg-preview.png"
import pexelMorining from "../../assets/images/pexels-morningtrain-18105-removebg-preview.png"
import standingFan from "../../assets/images/standing_fan-removebg-preview.png"
import portableAir from "../../assets/images/portable air conditioner.jpg"
import airCompress from "../../assets/images/Air-Compressor-Portable.jpg"
import blender from "../../assets/images/blender-removebg-preview.png"
import microwave from "../../assets/images/microwave.jpg"
import blender2 from "../../assets/images/blender.jpeg"
import combo from "../../assets/images/combo.jpg"
import soundBar from "../../assets/images/sound_bar-removebg-preview.png"
import eKeyboard from "../../assets/images/electronic-keyboard-organ-removebg-preview.png"
import studioMonitor from "../../assets/images/studio monitor.png"
import homeTheater from "../../assets/images/HOME_THEATER_SYSTEM-removebg-preview.png"

const ProductsMain = () => {
  return (
    <>
      <main className="container my-5">
        <h2 className="text-center my-5">Our Products</h2>
        <div className="row">
          <h3 className="text-center">Electronics</h3>
          {/* TV Category */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src={pexelAndrew}
                className="card-img-top"
                alt="TV"
              />
              <div className="card-body">
                <h5 className="card-title">LED TVs</h5>
                <p className="card-text">
                  High-quality second-hand TVs for your entertainment needs.
                </p>
                <a href="catalogue.html#tvs" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Laptops Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src= {pexelMorining}
                className="card-img-top"
                alt="Laptop"
              />
              <div className="card-body">
                <h5 className="card-title">Laptops</h5>
                <p className="card-text">
                  Reliable second-hand laptops for work or play.
                </p>
                <a href="catalogue.html#laptops" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={standingFan}
                className="card-img-top resized-img"
                alt="Blender"
              />
              <div className="card-body">
                <h5 className="card-title">Standing Fans</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={portableAir}
                className="card-img-top"
                alt="Laptop"
              />
              <div className="card-body">
                <h5 className="card-title">Portable Air Conditioners</h5>
                <p className="card-text">
                  Reliable second-hand laptops for work or play.
                </p>
                <a href="catalogue.html#laptops" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={airCompress}
                className="card-img-top resized-img"
                alt="Blender"
              />
              <div className="card-body">
                <h5 className="card-title">Air Compressors</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={airCompress}
                className="card-img-top resized-img"
                alt="Blender"
              />
              <div className="card-body">
                <h5 className="card-title">Air Compressors</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={airCompress}
                className="card-img-top resized-img"
                alt="Blender"
              />
              <div className="card-body">
                <h5 className="card-title">Air Compressors</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={airCompress}
                className="card-img-top resized-img"
                alt="Blender"
              />
              <div className="card-body">
                <h5 className="card-title">Air Compressors</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* Kitchen Category */}
          <h3 className="text-center my-5">Kitchen Appliances</h3>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={blender}
                className="card-img-top resized-img"
                alt="Blender"
              />
              <div className="card-body">
                <h5 className="card-title">Blenders</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Microwaves Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={microwave}
                className="card-img-top mt-3 "
                alt="Microwave"
              />
              <div className="card-body">
                <h5 className="card-title">Microwaves</h5>
                <p className="card-text">
                  Convenient second-hand microwaves for quick meals.
                </p>
                <a href="catalogue.html#microwaves" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* Blenders Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src={blender2}
              className="card-img-top" 
              alt="Blender" />
              <div className="card-body">
                <h5 className="card-title">Blenders</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img src={blender2}
              className="card-img-top" 
              alt="Blender" />
              <div className="card-body">
                <h5 className="card-title">Blenders</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* Music Category */}
          <h3 className="text-center my-5">Sounds and Instruments</h3>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={combo}
                className="card-img-top"
                alt="Microwave"
              />
              <div className="card-body">
                <h5 className="card-title">Combo</h5>
                <p className="card-text">
                  Convenient second-hand microwaves for quick meals.
                </p>
                <a href="catalogue.html#microwaves" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* <TV Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src={soundBar} className="card-img-top" alt="TV" />
              <div className="card-body">
                <h5 className="card-title">Sound Bar</h5>
                <p className="card-text">
                  High-quality second-hand TVs for your entertainment needs.
                </p>
                <a href="catalogue.html#tvs" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Laptops Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src={eKeyboard} className="card-img-top" alt="Laptop" />
              <div className="card-body">
                <h5 className="card-title">Electronic Keyboard</h5>
                <p className="card-text">
                  Reliable second-hand laptops for work or play.
                </p>
                <a href="catalogue.html#laptops" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Blenders Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src={studioMonitor} className="card-img-top" alt="Blender" />
              <div className="card-body">
                <h5 className="card-title">Studio Monitor</h5>
                <p className="card-text">
                  Efficient second-hand blenders for your kitchen needs.
                </p>
                <a href="catalogue.html#blenders" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Microwaves Category */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={homeTheater}
                className="card-img-top"
                alt="Microwave"
              />
              <div className="card-body">
                <h5 className="card-title">Home Theater</h5>
                <p className="card-text">
                  Convenient second-hand microwaves for quick meals.
                </p>
                <a href="catalogue.html#microwaves" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={homeTheater}
                className="card-img-top"
                alt="Microwave"
              />
              <div className="card-body">
                <h5 className="card-title">Home Theater</h5>
                <p className="card-text">
                  Convenient second-hand microwaves for quick meals.
                </p>
                <a href="catalogue.html#microwaves" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={homeTheater}
                className="card-img-top"
                alt="Microwave"
              />
              <div className="card-body">
                <h5 className="card-title">Home Theater</h5>
                <p className="card-text">
                  Convenient second-hand microwaves for quick meals.
                </p>
                <a href="catalogue.html#microwaves" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src={homeTheater}
                className="card-img-top"
                alt="Microwave"
              />
              <div className="card-body">
                <h5 className="card-title">Home Theater</h5>
                <p className="card-text">
                  Convenient second-hand microwaves for quick meals.
                </p>
                <a href="catalogue.html#microwaves" className="btn btn-info actionBtn">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsMain;
