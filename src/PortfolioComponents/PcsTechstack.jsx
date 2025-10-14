import React from 'react';

const PcsTechStack = () => {
    return (
        <div className="tech-container">
            <div className="tech-content-wrapper">
                <h1 className="tech-title">Tech stack</h1>
                <div className="tech-section">
                    <hr className="tech-line" />
                    <h2 className="tech-section-title">Backend</h2>
                    <ul className="tech-list">
                        <li>Python</li>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                    </ul>
                </div>
                <div className="tech-section">
                    <hr className="tech-line" />
                    <h2 className="tech-section-title">Database</h2>
                    <ul className="tech-list">
                        <li>AWS/Azure</li>
                    </ul>
                </div>
                <div className="tech-section">
                    <hr className="tech-line" />
                    <h2 className="tech-section-title">Tools</h2>
                    <ul className="tech-list">
                        <li>Point Cloud Processing: OpenCV, PCL (Point Cloud Library)</li>
                        <li>BIM Integration: AutoCAD, Revit, BIM 360</li>
                        <li>3D Scanning: LiDAR technology</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PcsTechStack;