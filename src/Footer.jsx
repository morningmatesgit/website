import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-logo">timspark</div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>SERVICES</h4>
            <ul>
              <li><Link to="/software-development">Software development</Link></li>
              <li><Link to="/mobile-app-development">Mobile app development</Link></li>
              <li><Link to="/web-development">Web development</Link></li>
              <li><Link to="/qa-testing">QA and testing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>EXPERTISE</h4>
            <ul>
              <li><Link to="/cyber-services">CyberSecurity services</Link></li>
              <li><Link to="/cloud-consulting">Cloud Services</Link></li>
              <li><Link to="/ai-software-development">AI software development</Link></li>
              <li><Link to="/data-management">Data management</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>DELIVERY MODELS</h4>
            <ul>
              <li><Link to="/staff-augmentation">Staff augmentation</Link></li>
              <li><Link to="/dedicated-teams">Dedicated development teams</Link></li>
              <li><Link to="/core-teams">Core teams</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONNECT WITH US</h4>
            <div className="social-icons">
              <Link to="#" className="social-icon">in</Link>
              <Link to="#" className="social-icon">X</Link>
              <Link to="#" className="social-icon">O</Link>
            </div>
            <p><a href="mailto:email@timspark.com">Email us</a></p>
            <button className="footer-cta-btn">Book a call</button>
          </div>

          <div className="footer-col address-col">
            <h4>HEADQUARTERS</h4>
            <p>United Kingdom</p>
            <p>6 St Davids Square,</p>
            <p>E14 3WA, London</p>
            <p><a href="tel:+442038552027">+44 20 3855 2027</a></p>
            <p><a href="mailto:sales@timspark.com">Sales inquiries</a></p>
          </div>

          <div className="footer-col address-col">
            <h4>BUSINESS DEVELOPMENT</h4>
            <p>United States of America</p>
            <p>7901 4th St N Ste 300,</p>
            <p>St. Petersburg FL 33702</p>
          </div>

          <div className="footer-col clutch-review">
            <h4>REVIEWED ON</h4>
            <div className="clutch-stars">⭐⭐⭐⭐⭐</div>
            <p><Link to="#">Clutch</Link> 9 Reviews</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 Timspark</p>
          <p><Link to="/privacy-policy">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
