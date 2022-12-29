import "./App.css";

function App() {
  return (
    <div>
      <header className="shadow pb-2">
        <div className="container">
          <div>
            <h2>Company Name</h2>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
            <a href="#signup" className="btn btn-outline-primary">
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <section id="Pricing">
        <div className="container">
          <div className="title mt-5">
            <h1 className="head">Pricing</h1>
            <p className="text">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It's built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
          <div className="main d-flex justify-content-center gap-4 my-5">
            <div className="priceCard">
              <div className="priceCategory">
                <h2 className="p-1">Free</h2>
              </div>
              <div className="priceMain p-3">
                <h1>
                  $0 <small className="text-muted">/ mo</small>
                </h1>
                <p className="px-5 my-3">
                  10 users included 2 GB of storage Email support Help center
                  access
                </p>
                <a href="#" className="btn btn-outline-primary w-75">
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="priceCard">
              <div className="priceCategory">
                <h2 className="p-1">Pro</h2>
              </div>
              <div className="priceMain p-3">
                <h1>
                  $15 <small className="text-muted">/ mo</small>
                </h1>
                <p className="px-5 my-3">
                  20 users included 10 GB of storage Priority email support Help
                  center access
                </p>
                <a href="#" className="btn btn-primary w-75">
                  Get Started
                </a>
              </div>
            </div>
            <div className="priceCard">
              <div className="priceCategory">
                <h2 className="p-1">Enterprise</h2>
              </div>
              <div className="priceMain p-3">
                <h1>
                  $29 <small className="text-muted">/ mo</small>
                </h1>
                <p className="px-5 my-3">
                  30 users included 15 GB of storage Phone and email support
                  Help center access
                </p>
                <a href="#" className="btn btn-primary w-75">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="rows">
            <div className="row">
              <img
                className="mb-2 image"
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt=""
              />
              <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="row">
              <div className="title">Features</div>
              <ul className="text">
                <li>
                  <a href="#">Cool stuff</a>
                </li>
                <li>
                  <a href="#">Random feature</a>
                </li>
                <li>
                  <a href="#">Team feature</a>
                </li>
                <li>
                  <a href="#">Stuff for developers</a>
                </li>
                <li>
                  <a href="#">Another one</a>
                </li>
                <li>
                  <a href="#">Last time</a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="title">Resources</div>
              <ul className="text">
                <li>
                  <a href="#">Resource</a>
                </li>
                <li>
                  <a href="#">Resource name</a>
                </li>
                <li>
                  <a href="#">Another resource</a>
                </li>
                <li>
                  <a href="#">Final resource</a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="title">About</div>
              <ul className="text">
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
