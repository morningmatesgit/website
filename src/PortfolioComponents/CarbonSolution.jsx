import React from 'react';

const CarbonSolution = () => {
  return (
    <>

      <div className="carbon-solution-container">
        <div className="carbon-solution-header">
          <h2 className="carbon-solution-title">Solution &<br/>functionality</h2>
          <div className="carbon-solution-description">
            <p>
              Timspark provided expertise in IoT data communication and real-
              time command execution, implementing an MQTT broker for
              reliable, lightweight data transfer. Our solution included Docker-
              based infrastructure, enabling cloud-based industrial IoT
              scalability on GCP.
            </p>
            <p>
              Our developers leveraged Solara and FastAPI to streamline efficient application
              development for the client, while integrating Looker to enhance data visualization for
              monitoring industrial IoT and carbon capture utilization. Through continuous
              support, we ensured long-term scalability and optimized production processes for the
              client's needs.
            </p>
          </div>
        </div>
        <div className="carbon-solution-objectives-section">
          <div className="carbon-cards-grid">
            <div className="carbon-card">
              <div className="carbon-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 67.5L50.2 419.1c-15.3 14.8-24.8 34.6-24.8 56.4c0 24.3 19.2 45.4 44.5 48.6l108.8 13.8c7.4 1.1 14.9-1.3 20.9-6.3L224 456l42.4 42.4c6-5 13.5-7.4 20.9-6.3l108.8-13.8c25.3-3.2 44.5-24.3 44.5-48.6c0-21.8-9.5-41.6-24.8-56.4L269.7 323.5c-4.4-4.2-11.8-2.6-14.7 2.4L224 372.2l-31-46.3c-2.9-5-10.3-6.6-14.7-2.4z"/>
                </svg>
              </div>
              <h3 className="carbon-card-title">Looker</h3>
            </div>
            <div className="carbon-card">
              <div className="carbon-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/>
                </svg>
              </div>
              <h3 className="carbon-card-title">Dashboard</h3>
            </div>
            <div className="carbon-card">
              <div className="carbon-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M0 64C0 46.3 14.3 32 32 32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm0 160c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm32-160c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H32z"/>
                </svg>
              </div>
              <h3 className="carbon-card-title">Backend</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarbonSolution;
