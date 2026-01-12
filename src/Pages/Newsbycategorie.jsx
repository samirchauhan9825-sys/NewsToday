import React, { useEffect, useState } from 'react'
import Categories from '../Common/Categories';
import { Link, useLocation } from 'react-router-dom';

function Newsbycategorie() {
  let [news, setNews] = useState([]);

  let categorie = useLocation().pathname.split("/")[2];

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_bd60b7e5ec9a4abab33aa27dcc4edb3c&country=in,pk,ru,au,ca&language=hi,gu,en&category=${categorie}&timezone=Asia/Kolkata`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data["results"]);
      });
  }, [categorie]);

  console.log(news);

  return (
    <>
      {/* Main Wrap Start */}
      <main className="position-relative">
        <div className="container">
          <div className="row">
            {/* sidebar-left */}
            <div className="col-lg-2 col-md-3 primary-sidebar sticky-sidebar sidebar-left order-2 order-md-1">
              {/* Widget Categories */}
                <Categories/>
            </div>
            {/* main content */}
            <div className="col-lg-10
             col-md-9 order-1 order-md-2">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="latest-post mb-50">
                    <div className="widget-header position-relative mb-30">
                      <div className="row">
                        <div className="col-7">
                          <h4 className=" text-center widget-title mb-0">
                             <a href='/'><Link to="/" className='text-decoration-none text-dark' style={{fontSize:"15px"}}>
                            </Link>Home </a>
                            <span className='fa fa-arrow-right text-decoration-none text-danger'>  </span>
                            {categorie}
                          </h4>
                        </div>
                        <div className="col-5 text-right">
                          <h6 className="font-medium pr-15">
                            <a className="text-muted font-small" href="#">
                              View all
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="loop-list-style-1">
                      {news.map((value , index) => {
                        return (
                          <>
                            <a href={value.link}>
                              <article className="p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                <div className="d-flex">
                                  <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                    <Link
                                      className="color-white"
                                      to={value.link}
                                    >
                                      <img
                                        className="border-radius-15"
                                        src={value.image_url} style={{width:"250px"}}
                                        alt
                                      />
                                    </Link>
                                  </div>
                                  <div className="post-content media-body">
                                    <div className="entry-meta mb-15 mt-10">
                                      <a
                                        className="entry-meta meta-2"
                                        href={value.link}
                                      >
                                        <span className="post-in text-danger font-x-small">
                                          {value.category}
                                        </span>
                                      </a>
                                    </div>
                                    <h5 className="post-title mb-15 text-limit-2-row">
                                      
                                      <a href={value.link}>{value.title}</a>
                                    </h5>
                                    <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                      <span className="post-by">
                                        By{" "}
                                        <a href={value.source_url}><img  src={value.source_icon} style={{width:"30px" , height:"10px" , marginLeft:"8px", marginRight:"10px"}}/>{value.source_name}</a>
                                      </span>
                                      <span className="post-on">
                                        {value.pubDate}
                                      </span>
                                      <span className="time-reading">
                                       
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </a>
                          </>
                        );
                      })}
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

export default Newsbycategorie