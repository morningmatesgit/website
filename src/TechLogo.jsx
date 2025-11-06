import React from "react";


const logosRow1 = [
  "/react.png", "/node.png", "aws.png", "/flutter.png",
  "/php.png", "/vue.png", "/android.png", "/phython.png", "/java.png" 
];

const logosRow2 = [
  "/googleCloud.png", "/azure.png", "/c.png", "/docker.png",
  "/angular.png", "/firebase.png", "/ruby.png", "/mongo.png"
];

export default function TechStack() {
  return (
    <div className="tech-wrapper">
      <h2 className="tech-title">Tech stack</h2>
      <p className="tech-description">
        We’re well-versed in modern programming languages and frameworks.  
        We provide the perfect combination based on your business needs.
      </p>

      {/* Row 1 */}
      <div className="logo-slider">
        <div className="logo-track track-left">
          {logosRow1.concat(logosRow1).map((logo, i) => (
            <div className="logo-item" key={i}>
              <img src={logo} alt="tech" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="logo-slider">
        <div className="logo-track track-right">
          {logosRow2.concat(logosRow2).map((logo, i) => (
            <div className="logo-item" key={i}>
              <img src={logo} alt="tech" />
            </div>
          ))}
        </div>
      </div>

      {/* <button className="tech-btn">SEE OUR FULL TECH STACK</button> */}
    </div>
  );
}
