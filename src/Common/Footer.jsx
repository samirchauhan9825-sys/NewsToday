import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer Start*/}
      <footer>
        <div className="footer-area pt-50 bg-white">
          <div className="container">
            <div className="row pb-30">
              <div className="col">
                <ul className="float-left mr-30 font-medium">
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/business"}>Business</Link>
                  </li>
                  <li className="cat-item cat-item-3">
                    <Link to={"/Newsbycategorie/crime"}>Crime</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    {" "}
                    <Link to={"/Newsbycategorie/domestic"}>Domestic</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="float-left mr-30 font-medium">
                  <li className="cat-item cat-item-2">
                     <Link to={"/Newsbycategorie/education"}>
                                Education
                              </Link>
                  </li>
                  <li className="cat-item cat-item-3">
                   <Link to={"/Newsbycategorie/entertainment"}>
                                Entertainment
                              </Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to={"/Newsbycategorie/environment"}>
                                Environment
                              </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="float-left mr-30 font-medium">
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/food"}>Food</Link>
                  </li>
                  <li className="cat-item cat-item-3">
                    <Link to={"/Newsbycategorie/health"}>Health</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to={"/Newsbycategorie/lifestyle"}>
                                Lifestyle
                              </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="float-left mr-30 font-medium">
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/politics"}>
                                Politics
                              </Link>
                  </li>
                  <li className="cat-item cat-item-3">
                    <Link to={"/Newsbycategorie/science"}>
                                Science
                              </Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to={"/Newsbycategorie/sports"}>Sports</Link>
                  </li>
                </ul>
              </div>
              <div className="col d-none d-lg-block">
                <ul className="float-left mr-30 font-medium">
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/technology"}>
                                Technology
                              </Link>
                  </li>
                  <li className="cat-item cat-item-3">
                    <Link to={"/Newsbycategorie/top"}>Top</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to={"/Newsbycategorie/other"}>Other</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bottom aera */}
        <div className="footer-bottom-area bg-white text-muted">
          <div className="container">
            <div className="footer-border pt-20 pb-20">
              {/* <div className="row d-flex mb-15">
          <div className="col-12">
            <ul className="list-inline font-small">
              <li className="list-inline-item"><a href="category.html">World</a></li>
              <li className="list-inline-item"><a href="category.html">U.S.</a></li>
              <li className="list-inline-item"><a href="category.html">Politics</a></li>
              <li className="list-inline-item"><a href="category.html">N.Y.</a></li>
              <li className="list-inline-item"><a href="category.html">Business</a></li>
              <li className="list-inline-item"><a href="category.html">Opinion</a></li>
              <li className="list-inline-item"><a href="category.html">Tech</a></li>
              <li className="list-inline-item"><a href="category.html">Science</a></li>
              <li className="list-inline-item"><a href="category.html">Health</a></li>
              <li className="list-inline-item"><a href="category.html">Sports</a></li>
              <li className="list-inline-item"><a href="category.html">Arts</a></li>
              <li className="list-inline-item"><a href="category.html">Books</a></li>
              <li className="list-inline-item"><a href="category.html">Style</a></li>
              <li className="list-inline-item"><a href="category.html">Food</a></li>
              <li className="list-inline-item"><a href="category.html">Travel</a></li>
              <li className="list-inline-item"><a href="category.html">Magazine</a></li>
              <li className="list-inline-item"><a href="category.html">T Magazine</a></li>
              <li className="list-inline-item"><a href="category.html">Real Estate</a></li>
              <li className="list-inline-item"><a href="category.html">Video</a></li>
            </ul>
          </div>
        </div> */}
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-12">
                  <div className="footer-copy-right">
                    <p className="font-small text-muted">
                      © 2025, NewsViral | All rights reserved{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </footer>
    </>
  );
}

export default Footer;
