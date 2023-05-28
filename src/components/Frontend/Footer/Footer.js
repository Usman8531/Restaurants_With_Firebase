/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import logo from "../../../assets/Img/logo.png";
export default function Footer() {
  return (
    <>
      <section id="aboutUS">
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#f3f2ef" }}
        >
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-between p-4 text-white bg-secondary"
            style={{ backgroundColor: "#21D192" }}
          >
            {/* Left */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a
                href="https://web.facebook.com/profile.php?id=100054508777162"
                target={"_blank"}
                className="text-white me-4"
              >
                <FaFacebook className="fs-3" />
              </a>
              <a  className="text-white me-4">
                <FaTwitter className="fs-3" />
              </a>
              <a
                href="https://www.instagram.com/musman.47/"
                className="text-white me-4"
                target={"_blank"}
              >
                <FaInstagram className="fs-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/mernstack-usman/"
                className="text-white me-4"
                target="_blank"
              >
                <FaLinkedinIn className="fs-3" />
              </a>
              <a
                href="https://github.com/Usman8531"
                target={"_blank"}
                className="text-white me-4"
              >
                <FaGithub className="fs-3" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">
                    {<img src={logo} alt="" className="img-fluid w-25" />}
                    <span className="fw-bold fs-1">City</span>
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Chicken
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Rice
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Fish
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Fruits
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Become Delivery Boy
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Delivery Charges
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark text-decoration-none">
                      Help
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <i className="fas fa-home mr-3" /> Pakistan, Punjab,
                    Faisalabad
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-dark text-decoration-none" href="">
              Muhammad Usman
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
        {/* End of .container */}
      </section>
    </>
  );
}
