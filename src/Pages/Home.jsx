import React, { useEffect, useState } from "react";
import Categories from "../Common/Categories";
import Sources from "./Sources";
import { useNavigate } from "react-router-dom";

function Home() {
  let [news, setNews] = useState([]);
  let [source, setSource] = useState([]);
  let [quary,setQuery] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_bd60b7e5ec9a4abab33aa27dcc4edb3c&country=in&language=hi,gu,en&category=business,crime,domestic,education,entertainment&timezone=Asia/Kolkata"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data["results"]);
      });
  }, []);

  console.log(news);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/sources?apikey=pub_bd60b7e5ec9a4abab33aa27dcc4edb3c"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSource(data["results"].slice(0, 50));
      });
  }, []);

  console.log(source);
  console.log(quary);
  
  function handelsubmit(e){
    e.preventDefault();
    navigate(`/searchNews?query=${quary}`);
  }
  

  return (
    <>
      {/* Main Wrap Start */}
      <main className="position-relative">
        <div className="container">
          <div className="row">
            {/* sidebar-left */}
            <div className="col-lg-2 col-md-3 primary-sidebar sticky-sidebar sidebar-left order-2 order-md-1">
              {/* Widget Categories */}
              <Categories />
            </div>

            {/* main content */}
            <div className="col-lg-10 col-md-9 order-1 order-md-2">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="latest-post mb-50">
                    <div className="widget-header position-relative mb-30">
                      <div className="row">
                        <div className="col-7">
                          <h4 className="widget-title mb-0">
                            Latest <span>Posts</span>
                          </h4>
                        </div>
                        <div className="col-5 text-right">
                          {/* Search */}
                          <form onSubmit={handelsubmit}
                            action="#"
                            method="get"
                            className="search-form d-lg-inline float-right position-relative mr-30 d-none"
                          >
                            <input
                              onChange={(e)=>{
                                setQuery(e.target.value)
                              }}
                              type="search"
                              className="search_field p-1"
                              placeholder="Search News..."
                              name="s"
                            />
                          </form>
                          {/* <h6 className="font-medium pr-15">
                            <a className="text-muted font-small" href="#">
                              View all
                            </a>
                          </h6> */}
                        </div>
                      </div>
                    </div>

                    <div className="loop-list-style-1">
                      {news ? (
                        <>
                          {news.map((value, index) => {
                            return (
                              <>
                                <a href={value.link}>
                                  <article className="p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                    <div className="d-flex">
                                      <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                        <a
                                          className="color-white"
                                          href="single.html"
                                        >
                                          <img
                                            className="border-radius-15"
                                            src={value.image_url}
                                            style={{ width: "250px" }}
                                            alt
                                          />
                                        </a>
                                      </div>
                                      <div className="post-content media-body">
                                        <div className="entry-meta mb-15 mt-10">
                                          <a
                                            className="entry-meta meta-2"
                                            href="category.html"
                                          >
                                            <span className="post-in text-danger font-x-small">
                                              {value.category}
                                            </span>
                                          </a>
                                        </div>
                                        <h5 className="post-title mb-15 text-limit-2-row">
                                          <a href="single.html">
                                            {value.title}
                                          </a>
                                        </h5>
                                        <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                          <span className="post-by">
                                            By{" "}
                                            <a href={value.source_url}>
                                              <img
                                                src={value.source_icon}
                                                style={{
                                                  width: "30px",
                                                  height: "10px",
                                                  marginLeft: "8px",
                                                  marginRight: "10px",
                                                }}
                                              />
                                              {value.source_name}
                                            </a>
                                          </span>
                                          <span className="post-on">
                                            {value.pubDate}
                                          </span>
                                          <span className="time-reading"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </a>
                              </>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <h2>Please Wait...</h2>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 sidebar-right">
                  {/*Post aside style 2*/}
                  <div className="sidebar-widget">
                    <div className="widget-header mb-30">
                      <h5 className="widget-title">
                        Top <span>Trending</span>
                      </h5>
                    </div>
                    {news ? (
                      <>
                        {news.map((value) => {
                          return (
                            <div className="post-aside-style-2">
                              <ul className="list-post">
                                <li className="mb-30 wow fadeIn animated">
                                  <div className="d-flex">
                                    <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                      <a
                                        className="color-white"
                                        href="single.html"
                                      >
                                        <img src={value.image_url} alt />
                                      </a>
                                    </div>
                                    <div className="post-content media-body">
                                      <h6 className="post-title mb-10 text-limit-2-row">
                                        <a href="single.html">{value.title}</a>
                                      </h6>
                                      <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                        <span className="post-by">
                                          By{" "}
                                          <a href="author.html">
                                            {value.source_name}
                                          </a>
                                        </span>
                                        <span className="post-on">4m ago</span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <h3>Please wait...</h3>
                      </>
                    )}
                  </div>

                  {/*Top authors*/}
                  <div className="sidebar-widget mb-30 mt-4">
                    <div className="widget-top-auhor border-radius-10 p-20 bg-white">
                      <div className="widget-header widget-header-style-1 position-relative mb-15">
                        <div class="widget-header position-relative mb-30">
                          <div class="row">
                            <div className="col-7">
                              <h4 class="widget-title mb-0">
                                Top <span>Sources</span>
                              </h4>
                            </div>
                            <div class="col-5 text-right">
                              <h6 class="font-medium pr-15">
                                <a
                                  class="text-muted font-small"
                                  href="/sources"
                                >
                                  View all
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      {source ? (
                        <>
                          {source.map((value) => {
                            return (
                              <a
                                className="red-tooltip active"
                                href={value.url}
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Emma - 1034 posts"
                              >
                                <img src={value.icon} alt />
                              </a>
                            );
                          })}
                        </>
                      ) : (
                        <><h3>Please Wait...</h3></>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="latest-post mb-50">
                    <div className="loop-list-style-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
