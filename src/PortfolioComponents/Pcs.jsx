import React from 'react';

const PointCloudSegmentation = () => {
    return (
        <div className="pcs-container">
            
            <div className="pcs-content-wrapper">
                <div className="pcs-content-card">
                    <h1 className="pcs-title">
                        Point Cloud Segmentation and BIM Conversion
                    </h1>
                    <p className="pcs-subtitle">
                        A deep learning-powered solution that performs semantic and instance segmentation of point cloud data, converting it into accurate Building Information Models (BIM).
                    </p>
                    <div className="pcs-details-container">
                        <div className="pcs-details-row pcs-details-row-desktop">
                            <div className="pcs-details-item">
                                <p className="pcs-details-label">Industry</p>
                                <p className="pcs-details-text">Architecture, Engineering, and Construction (AEC)</p>
                            </div>
                            <div className="pcs-details-item">
                                <p className="pcs-details-label">Type</p>
                                <p className="pcs-details-text">AI & Deep Learning, Data Engineering, BIM Integration</p>
                            </div>
                            <div className="pcs-details-item">
                                <p className="pcs-details-label">Country</p>
                                <p className="pcs-details-text">Netherlands</p>
                            </div>
                        </div>
                        <button className="pcs-download-button pcs-download-button-desktop">
                            DOWNLOAD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PointCloudSegmentation;