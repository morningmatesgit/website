import React from 'react';
import "../ServicePageCss/Ai.css";

const AiTechnologies = () => {
  return (
    <div className="ai-technologies-container">
      <h1 className="ai-technologies-title">Our AI technologies expertise</h1>

      <div className="ai-expertise-subtitles">
        <span className="ai-expertise-item">Artificial Intelligence Software Development</span> |
        <span className="ai-expertise-item">AI Mobile Development</span> |
        <span className="ai-expertise-item">Neural Network Design</span> |
        <span className="ai-expertise-item">Neural Network Optimization</span> |
        <span className="ai-expertise-item">Artificial Intelligence Consulting</span> |
        <span className="ai-expertise-item">AI/ML Audit</span> |
        <span className="ai-expertise-item">MLOps</span> |
        <span className="ai-expertise-item">AI Business Intelligence</span> |
        <span className="ai-expertise-item">Intelligent Automation</span>
      </div>

      <div className="ai-tech-grid">
        <div className="ai-tech-card">
          <h2 className="ai-tech-category">Languages</h2>
          <ul className="ai-tech-list">
            <li>Python</li>
            <li>R</li>
            <li>Julia</li>
          </ul>
        </div>
        <div className="ai-tech-card">
          <h2 className="ai-tech-category">Libraries</h2>
          <ul className="ai-tech-list">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>scikit-learn</li>
            <li>Keras</li>
            <li>Pandas</li>
          </ul>
        </div>
        <div className="ai-tech-card">
          <h2 className="ai-tech-category">Algorithms</h2>
          <ul className="ai-tech-list">
            <li>Linear Regression</li>
            <li>Decision Trees</li>
            <li>Random Forest</li>
            <li>Support Vector Machines (SVM)</li>
            <li>k-Nearest Neighbors (k-NN)</li>
          </ul>
        </div>
        <div className="ai-tech-card">
          <h2 className="ai-tech-category">Frameworks</h2>
          <ul className="ai-tech-list">
            <li>OpenAI GPT-4</li>
            <li>LLamaIndex</li>
            <li>Hugging Face Transformers</li>
          </ul>
        </div>
        <div className="ai-tech-card">
          <h2 className="ai-tech-category">Neural Networks</h2>
          <ul className="ai-tech-list">
            <li>Convolutional Neural Networks (CNN)</li>
            <li>Recurrent Neural Networks (RNN)</li>
            <li>Long Short-Term Memory (LSTM)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiTechnologies;