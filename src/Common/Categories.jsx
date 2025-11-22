import React from 'react'
import { Link } from 'react-router-dom'



function Categories() {
  return (
    <>
        {/* Widget Categories */}
              <div className="sidebar-widget widget_categories border-radius-10 bg-white mb-30">
                <div className="widget-header position-relative mb-15">
                  <h5 className="widget-title">
                    <strong>Categories</strong>
                  </h5>
                </div>
                <ul className="font-small text-muted">
                  <li className="cat-item cat-item-3">
                    <Link to={"/Newsbycategorie/business"}>Business</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to={"/Newsbycategorie/crime"}>Crime</Link>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link to={"/Newsbycategorie/domestic"}>Domestic</Link>
                  </li>
                  <li className="cat-item cat-item-6">
                    <Link to={"/Newsbycategorie/education"}>Education</Link>
                  </li>
                  <li className="cat-item cat-item-7">
                    <Link to={"/Newsbycategorie/entertainment"}>Entertainment</Link>
                  </li>
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/environment"}>Environment</Link>
                  </li>
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/food"}>Food</Link>
                  </li>
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/health"}>Health</Link>
                  </li>
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/lifestyle"}>Lifestyle</Link>
                  </li>
                  <li className="cat-item cat-item-3">
                    <Link to={"/Newsbycategorie/other"}>Other</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to={"/Newsbycategorie/politics"}>Politics</Link>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link to={"/Newsbycategorie/science"}>Science</Link>
                  </li>
                  <li className="cat-item cat-item-6">
                    <Link to={"/Newsbycategorie/sports"}>Sports</Link>
                  </li>
                  <li className="cat-item cat-item-7">
                    <Link to={"/Newsbycategorie/technology"}>Technology</Link>
                  </li>
                  <li className="cat-item cat-item-2">
                    <Link to={"/Newsbycategorie/top"}>Top</Link>
                  </li>
                </ul>
              </div>
    </>
  )
}

export default Categories