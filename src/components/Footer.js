import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <div className="footer-left">
        <h4>FitScale</h4>
        <p>© {new Date().getFullYear()} safelyworks.com. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">Privacy</a>
        <a href="#" className="footer-link">Terms</a>
        <a href="#" className="footer-link">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
