import ProductList from "../Product/ProductList";
import BestPick from "./components/BestPick";
import Carousel from "./components/Carousel";
// import Product from "./components/Product";

function Home() {
  return (
    <div>
      <div className="py-3 bg-dark bg-pattern mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center text-white">
                <span className="heading-xxs letter-spacing-xl" style={{ color: "#228b22" }}>
                  ⚡️ Nhã Nam - Bởi vì sách là thế giới ⚡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <BestPick />
      {/* <Product /> */}
      {/* <List /> */}
      <ProductList />
      {/* <section
        className="py-13 bg-cover"
        style={{ backgroundImage: "url(src/assets/img/covers/cover-4.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-md-8 col-lg-6">
              <h3 className="mb-7">
                Get -50% from <br />
                Summer Collection
              </h3>

              <div className="d-flex mb-9" data-countdown data-date="Dec 31, 2025 00:00:00">
                <div className="text-center">
                  <div className="fs-1 fw-bolder text-primary" data-days>
                    00
                  </div>
                  <div className="heading-xxs text-muted">Days</div>
                </div>
                <div className="px-1 px-md-4">
                  <div className="fs-2 fw-bolder text-primary">:</div>
                </div>
                <div className="text-center">
                  <div className="fs-1 fw-bolder text-primary" data-hours>
                    00
                  </div>
                  <div className="heading-xxs text-muted">Hours</div>
                </div>
                <div className="px-1 px-md-4">
                  <div className="fs-2 fw-bolder text-primary">:</div>
                </div>
                <div className="text-center">
                  <div className="fs-1 fw-bolder text-primary" data-minutes>
                    00
                  </div>
                  <div className="heading-xxs text-muted">Minutes</div>
                </div>
                <div className="px-1 px-md-4">
                  <div className="fs-2 fw-bolder text-primary">:</div>
                </div>
                <div className="text-center">
                  <div className="fs-1 fw-bolder text-primary" data-seconds>
                    00
                  </div>
                  <div className="heading-xxs text-muted">Seconds</div>
                </div>
              </div>

              <a className="btn btn-dark" href="shop.html">
                Shop Now <i className="fe fe-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
