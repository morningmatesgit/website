import React from 'react';

const PcsResultsBusinessValue = () => {
    return (
        <div className="results-container">
            <div className="results-content-wrapper">
                <div className="results-text-section">
                    <h1 className="results-title">Results and business value</h1>
                    <p className="results-description">
                        The solution delivered significant improvements in accuracy and efficiency, enabling the client to automate point cloud
                        segmentation and BIM conversion. This led to faster project turnaround times, reduced manual labor, and minimized errors
                        in identifying and modeling building elements.
                    </p>
                </div>
                <div className="results-cards-section">
                    <div className="results-card">
                        <span className="results-card-number">01</span>
                        <p className="results-card-text">
                            Faster project turnaround with automated segmentation & BIM conversion
                        </p>
                    </div>
                    <div className="results-card">
                        <span className="results-card-number">02</span>
                        <p className="results-card-text">
                            Reduced manual labor and minimized errors in modeling
                        </p>
                    </div>
                    <div className="results-card">
                        <span className="results-card-number">03</span>
                        <p className="results-card-text">
                            Seamless integration with industry-standard BIM tools (Revit, AutoCAD)
                        </p>
                    </div>
                    <div className="results-card">
                        <span className="results-card-number">04</span>
                        <p className="results-card-text">
                            Cost savings & improved productivity for AEC workflows
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PcsResultsBusinessValue;