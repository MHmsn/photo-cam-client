import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../Cam.png"

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img className="h-20" src={logo} alt=""/>
          <p>
            Md. Moinul Hassan
            <br />
            PhotoCam photography 
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            
           
            <a href="https://www.facebook.com/mssn.l" className="text-3xl" target="_blank" rel="noreferrer">
              <FaFacebook/>
            </a>
            <a href="https://www.instagram.com/mh.msn/" className="text-3xl" target="_blank" rel="noreferrer">
              <FaInstagram/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
