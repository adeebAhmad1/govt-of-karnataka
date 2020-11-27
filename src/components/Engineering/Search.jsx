import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

function Search() {
  return (
    //SEARCH START
    <>
      <div id="search">
        <div className="m-container">
          <div className="breadcrumb1">
            <Link to="/" className="a">
              Home
            </Link>
            <p className="p">/</p>
            <Link to="/" className="a">
              Education
            </Link>
            <p className="p">/</p>
            <Link to="/" className="a">
              Engineering
            </Link>
          </div>
          <Zoom>
            <div className="searchbox">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter college, university, course name "
              />
              <button className="btn-o">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <g fill="none" fillRule="evenodd">
        <g fill="#FFF" fillRule="nonzero">
            <g>
                <g>
                    <g>
                        <g>
                            <path d="M17.447 16.413l-5.1-5.1c.968-1.194 1.55-2.712 1.55-4.364C13.897 3.117 10.78 0 6.95 0 3.117 0 0 3.117 0 6.949c0 3.831 3.117 6.948 6.949 6.948 1.652 0 3.17-.582 4.364-1.55l5.1 5.1c.143.143.374.143.517 0l.517-.517c.143-.143.143-.374 0-.517zM6.95 12.434c-3.025 0-5.486-2.46-5.486-5.485 0-3.025 2.46-5.486 5.486-5.486 3.025 0 5.485 2.46 5.485 5.486 0 3.025-2.46 5.485-5.485 5.485z" transform="translate(-1044 -288) translate(141 271) translate(883) translate(20 16) translate(0 1)"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg> &nbsp;Search
              </button>
            </div>
          </Zoom>
          <h2 className="h2">Engineering</h2>
        </div>
      </div>
    </>
    //SEARCH END
  );
}

export default Search;
