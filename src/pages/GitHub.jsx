import React, { useState, useEffect } from "react";

const GitHub = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = "pranjal-sahu21";

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log("RAW RESPONSE:", response);
        if (!response.ok) {
          return response.json().then((err) => {
            console.log("GitHub Error Body:", err);
            throw new Error(err.message || "API error");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("GitHub data:", data);
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="github-container">
        <div className="github-loading">
          <div className="github-spinner"></div>
          <p>Loading GitHub profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-container">
        <div className="github-error">
          <h2>Error Loading Profile</h2>
          <p>{error}</p>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
            Please check the username and try again
          </p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="github-container">
        <div className="github-error">
          <h2>No Data Found</h2>
          <p>Unable to load GitHub profile data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="github-container">
      <div className="container" style={{ minHeight: "auto", padding: "0" }}>
        <h1>GitHub Profile</h1>
        <p>Real-time data from GitHub API</p>
      </div>

      <div className="github-profile-card">
        <div className="github-header">
          <img
            src={userData.avatar_url}
            alt={userData.name || userData.login}
            className="github-avatar"
          />
          <div className="github-info">
            <h2 className="github-name">{userData.name || userData.login}</h2>
            <p className="github-username">@{userData.login}</p>
            {userData.bio && <p className="github-bio">{userData.bio}</p>}
          </div>
        </div>

        <div className="github-details">
          <div className="github-detail-item">
            <div className="github-detail-label">Followers</div>
            <div className="github-detail-value">{userData.followers || 0}</div>
          </div>
          <div className="github-detail-item">
            <div className="github-detail-label">Following</div>
            <div className="github-detail-value">{userData.following || 0}</div>
          </div>
          <div className="github-detail-item">
            <div className="github-detail-label">Public Repos</div>
            <div className="github-detail-value">
              {userData.public_repos || 0}
            </div>
          </div>
        </div>

        <div className="github-meta">
          {userData.location && (
            <div className="github-meta-item">
              <span>📍</span>
              <strong>Location:</strong> {userData.location}
            </div>
          )}
          {userData.blog && (
            <div className="github-meta-item">
              <span>🔗</span>
              <a
                href={
                  userData.blog.startsWith("http")
                    ? userData.blog
                    : `https://${userData.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <strong>Portfolio&#x2197;</strong>
              </a>
            </div>
          )}
          {userData.company && (
            <div className="github-meta-item">
              <span>🏢</span>
              <strong>Company:</strong> {userData.company}
            </div>
          )}
        </div>

        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <button className="apply-button" style={{ marginTop: "0" }}>
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
