import React, { useState } from "react";
import img1 from "../../images/bitmap-copy-3@3x.png";
import img2 from "../../images/logo-1-removebg-preview@3x.png";
import img3 from "../../images/bitmap-copy-4@3x.png";
import logo from "../../images/bitmap-copy@3x.png";
import text from "../../images/language.jpg";
import { Link, NavLink } from "react-router-dom";
import Rimg1 from "../../images/bitmap-copy-3.png";
import Rimg2 from "../../images/bitmap-copy-4.png";
import toggle from '../../images/group-16.png'
import Fade from 'react-reveal/Fade';
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { languageType,setLanguage,language } = useLanguage();
  const [open,setOpen] = useState(false);
  const openNav = () => {
    document.body.classList.add("nav_active");
  };
  const closeNav = () => {
    document.body.classList.remove("nav_active");
  };
  const onClick = e=>{
    e.preventDefault();
    setOpen(o=>!o);
  }
  return (
    <div>
      <header className="shadow hide_on_med">
        <Fade top>
          <div className="header_top bg-light py-2">
            <div className="container-fluid">
              <div className="row px-lg-5">
                <div className="col-4 header_left_box">
                  <div>
                    <img src={img1} alt="img" className="hide_on_med" width="58" />
                    <img src={Rimg1} alt="img" className="hide_on_large" />
                  </div>
                  <div style={{ lineHeight: 1.2 }} className="ml-3">
                    <b>{languageType.header.sri.name}</b>
                    <br />
                    <span className="size-primary">
                      {languageType.header.sri.title}
                </span>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <img src={img2} alt="img" width="140" />
                </div>
                <div className="col-4 header_right_box">
                  <div>
                    <img src={img3} alt="img" className="hide_on_med" width="58" />
                    <img src={Rimg2} alt="img" className="hide_on_large" />
                  </div>
                  <div style={{ lineHeight: 1.2 }} className="ml-3">
                    <b>{languageType.header.doc.name}</b>
                    <br />
                    <span className="size-primary">
                      {languageType.header.doc.title}
                </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div className="header_main py-3">
          <div className="container-fluid">
            <div className="row px-5">
              <div className="col-lg-2 d-flex align-items-center">
                <div>
                  <img src={logo} width="58" alt="imggov" />
                </div>
                <div
                  className="size-primary ml-2"
                  style={{ letterSpacing: `0.8px` }}
                >
                  {languageType.header.main}
              </div>
              </div>
              <div className="col-lg-7 pl-5 d-flex align-items-center text-uppercase">
                <NavLink
                  activeClassName="active"
                  exact
                  to="/"
                  className="header_link mx-3 d-inline-block"
                >
                  {languageType.header.links[0]}
              </NavLink>
                <a
                  href="/youth"
                  onClick={onClick}
                  exact
                  style={{position: `relative`}}
                  className="header_link mx-3 d-inline-block"
                >
                  {languageType.header.links[1]}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g fill="#333" fillRule="nonzero">
                        <g>
                          <g>
                            <path
                              d="M251.499 11.954c-.009-.149-.058-.29-.14-.4l-3.911-5.333c-.13-.177-.327-.256-.517-.207-.19.05-.344.22-.404.446-.06.227-.017.476.112.653L250.225 12l-3.586 4.887c-.13.177-.172.426-.112.653.06.226.214.396.404.446.19.049.387-.03.517-.207l3.912-5.333c.098-.134.149-.312.139-.492z"
                              transform="translate(-534 -134) translate(290 120) translate(1 5) rotate(90 249 12)"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  {open ? <span className="dropdown-content">
    <Link to="/">Link 1</Link>
    <Link to="/">Link 2</Link>
    <Link to="/">Link 3</Link>
  </span> : ""}
                </a>
                <NavLink
                  to="/counselling"
                  activeClassName="active"
                  exact
                  className="header_link mx-3 d-inline-block"
                >
                  {languageType.header.links[2]}
              </NavLink>
                <NavLink
                  to="/event"
                  activeClassName="active"
                  exact
                  className="header_link mx-3 d-inline-block"
                >
                  {languageType.header.links[3]}
              </NavLink>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-between">
                <Link
                  to="/"
                  className="header_link mx-3 d-inline-block text-uppercase mx-3"
                >
                  {languageType.header.signin}
              </Link>
                <div className="btn-group mr-2" role="group">
                  <button
                    type="button"
                    className={language === "en" ? "btn py-0 btn-secondary btn-outline-theme btn-theme" :"btn py-0 d-flex align-items-center btn-outline-secondary btn-outline-theme"}
                    onClick={()=>setLanguage("en")}
                  >
                    EN
                </button>
                  <button
                    type="button"
                    onClick={()=>setLanguage("hi")}
                    className={language === "hi" ? "btn py-0 btn-secondary btn-outline-theme btn-theme" : "btn py-0 d-flex align-items-center btn-outline-secondary btn-outline-theme"}
                  >
                    <img src={text} width="9" alt="imglanguage" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* For Mobile*/}
      <header className="shadow hide_on_large">
        <div className=" bg-light py-2">
          <div className="container-fluid">
            <Fade top>
              <div className="row header_top w-100 px-lg-5 align-items-center">
                <div className="col-4 header_left_box">
                  <div>
                    <img src={img1} alt="img" className="hide_on_med" width="58" />
                    <img src={Rimg1} alt="img" className="hide_on_large" />
                  </div>
                  <div className="header_box_heading ml-3">
                    <b>{languageType.header.sri.name}</b>
                    <br />
                    <span className="header_box_info size-primary">
                    {languageType.header.sri.title}
                </span>
                  </div>
                </div>
                <div className="col-4 text-center header_center_box">
                  <img src={img2} alt="img" />
                </div>
                <div className="col-4 header_right_box">
                  <div>
                    <img src={img3} alt="img" className="hide_on_med" width="58" />
                    <img src={Rimg2} alt="img" className="hide_on_large" />
                  </div>
                  <div className="header_box_heading ml-3">
                    <b>{languageType.header.doc.name} </b>
                    <br />
                    <span className="header_box_info size-primary">
                    {languageType.header.doc.title}
                </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="header_main px-2 py-3 d-flex justify-content-around">
          <div className="d-flex align-items-center ">
            <div>
              <img src={logo} width="58" alt="imggov" />
            </div>
            <div
              className="size-primary ml-2 w-20">
                 {languageType.header.main}
              </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="btn-group mr-2" style={{ float: "right" }} role="group">
              <button
                type="button"
                className={language === "en" ? "btn py-0 btn-secondary btn-outline-theme btn-theme" :"btn py-0 d-flex align-items-center btn-outline-secondary btn-outline-theme"}
                onClick={()=>setLanguage("en")}
              >
                EN
                </button>
              <button
                type="button"
                className={language === "hi" ? "btn py-0 btn-secondary btn-outline-theme btn-theme" :"btn py-0 d-flex align-items-center btn-outline-secondary btn-outline-theme"}
                onClick={()=>setLanguage("hi")}
              >
                <img src={text} width="9" alt="imglanguage" />
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <img onClick={openNav} style={{ cursor: `pointer` }} src={toggle} alt="img" />

            <div className="close_bg" onClick={closeNav}></div>
            <div className="side-nav">
              <div className="list_your_experiance">
                <span onClick={closeNav} className="h1 text-right d-block pointer-event px-4" style={{ cursor: `pointer` }}>&times;</span>
              </div>
              <ul className="list-unstyled mt-3">
                <li><Link onClick={closeNav} to="/">{languageType.header.links[0]}</Link></li>
                <li>
                  <Link onClick={onClick}  to="/youth">
                    {languageType.header.links[1]} <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    className="float-right"
                    height="6"
                    viewBox="0 0 12 6"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g fill="#333" fillRule="nonzero">
                        <g>
                          <g>
                            <path
                              d="M251.499 11.954c-.009-.149-.058-.29-.14-.4l-3.911-5.333c-.13-.177-.327-.256-.517-.207-.19.05-.344.22-.404.446-.06.227-.017.476.112.653L250.225 12l-3.586 4.887c-.13.177-.172.426-.112.653.06.226.214.396.404.446.19.049.387-.03.517-.207l3.912-5.333c.098-.134.149-.312.139-.492z"
                              transform="translate(-534 -134) translate(290 120) translate(1 5) rotate(90 249 12)"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                    {open ? <div className="list-unstyled pl-4">
                      <div>Link 1</div>
                      <div>Link 2</div>
                      <div>Link 3</div>
                    </div> : ""}
                  </Link>
                </li>
                <li><Link onClick={closeNav} to="/counselling">{languageType.header.links[2]}</Link></li>
                <li><Link onClick={closeNav} to="/events">{languageType.header.links[3]}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
