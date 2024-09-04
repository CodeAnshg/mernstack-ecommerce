/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./detail.css";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/detail")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAboutUsData(data[0]); // Access the first item in the array
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!aboutUsData || !aboutUsData.aboutUs) {
    return <div>No data available</div>;
  }

  const { aboutUs } = aboutUsData;

  return (
    <div className="detail-container">
      <h1>{aboutUs.companyName || "Company Name Not Available"}</h1>
      <p>{aboutUs.mission || "Mission Not Available"}</p>
      <p>{aboutUs.vision || "Vision Not Available"}</p>
      <h2>History</h2>
      <p>
        Founded in {aboutUs.history.foundingYear || "N/A"} by{" "}
        {aboutUs.history.founder || "N/A"}
      </p>
      <ul>
        {aboutUs.history.milestones.length > 0 ? (
          aboutUs.history.milestones.map((milestone, index) => (
            <li key={index}>
              {milestone.year || "Year N/A"}:{" "}
              {milestone.achievement || "Achievement N/A"}
            </li>
          ))
        ) : (
          <li>No milestones available</li>
        )}
      </ul>
      <h2>Values</h2>
      <ul>
        {aboutUs.values.length > 0 ? (
          aboutUs.values.map((value, index) => (
            <li key={index}>
              <strong>{value.valueName || "Value Name N/A"}:</strong>{" "}
              {value.description || "Description N/A"}
            </li>
          ))
        ) : (
          <li>No values available</li>
        )}
      </ul>
      <h2>Team</h2>
      {aboutUs.team.leadership.length > 0 ? (
        aboutUs.team.leadership.map((leader, index) => (
          <div key={index}>
            <h3>
              {leader.name || "Name N/A"} - {leader.title || "Title N/A"}
            </h3>
            <p>{leader.bio || "Bio N/A"}</p>
          </div>
        ))
      ) : (
        <div>No team information available</div>
      )}
    </div>
  );
};

export default AboutUs;
