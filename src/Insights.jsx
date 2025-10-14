

const Insights = () => {
  return (
    <section className="insights">
      <h2>Our latest insights</h2>

      <div className="insights-grid">
        <div className="insight-card">
          <div className="insight-image-placeholder insight-image-1"></div>
          <p>
            Discover the definitive choice for your business: comparing web apps
            to native mobile app development. Find out when web apps prevail or
            emerge as the only solution.
          </p>
        </div>

        <div className="insight-card">
          <div className="insight-image-placeholder insight-image-2"></div>
          <p>
            Explore how cross-platform development tackles the challenge of
            creating and maintaining a product for various platforms with
            distinct code bases.
          </p>
        </div>

        <div className="insight-card">
          <div className="insight-image-placeholder insight-image-3"></div>
          <p>
            From understanding certification requirements to exploring types of
            healthcare software, it’s an essential read for anyone interested in
            IT’s role in healthcare.
          </p>
        </div>
      </div>

      <div className="insights-cta">
        <button className="cta-btn">SEE ALL BLOG POSTS</button>
      </div>
    </section>
  );
};

export default Insights;
