import React from 'react'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

function Search() {
    return (
        //SEARCH START
        <>
            <div id="search">
                <div className="m-container">
                    <div className="breadcrumb1">
                        <Link to="/" className="a">Home</Link>
                        <p className="p">/</p>
                        <Link to="/" className="a">Education</Link>
                        <p className="p">/</p>
                        <Link to="/" className="a">Engineering</Link>
                    </div>
                    <Zoom>
                        <div className="searchbox">
                            <input type="text" name="text" id="text" placeholder="Enter college, university, course name " />
                            <button className="btn-o"><i className="fas fa-search" />Search</button>
                        </div>
                    </Zoom>
                    <h2 className="h2">Engineering</h2>
                </div>
            </div>
        </>
        //SEARCH END
    )
}

export default Search
