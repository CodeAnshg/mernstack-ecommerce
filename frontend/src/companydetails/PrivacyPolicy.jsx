/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./detail.css";

const PrivacyPolicy = () => {
  const [privacyPolicyData, setPrivacyPolicyData] = useState(null);
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
        setPrivacyPolicyData(data[0].privacyPolicy); // Access the privacyPolicy from the first item
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

  if (!privacyPolicyData) {
    return <div>No data available</div>;
  }

  return (
    <div className="detail-container">
      <h1>Privacy Policy</h1>
      <section>
        <h2>Introduction</h2>
        <p>{privacyPolicyData.introduction}</p>
      </section>
      <section>
        <h2>Information Collection</h2>
        <h3>Types</h3>
        <ul>
          {privacyPolicyData.informationCollection.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
        <h3>Methods</h3>
        <ul>
          {privacyPolicyData.informationCollection.methods.map(
            (method, index) => (
              <li key={index}>{method}</li>
            )
          )}
        </ul>
      </section>
      <section>
        <h2>Information Usage</h2>
        <h3>Purposes</h3>
        <ul>
          {privacyPolicyData.informationUsage.purposes.map((purpose, index) => (
            <li key={index}>{purpose}</li>
          ))}
        </ul>
        <h3>Legal Basis</h3>
        <ul>
          {privacyPolicyData.informationUsage.legalBasis.map((basis, index) => (
            <li key={index}>{basis}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Information Sharing</h2>
        <h3>Third Parties</h3>
        <ul>
          {privacyPolicyData.informationSharing.thirdParties.map(
            (party, index) => (
              <li key={index}>{party}</li>
            )
          )}
        </ul>
        <h3>Security</h3>
        <p>{privacyPolicyData.informationSharing.security}</p>
      </section>
      <section>
        <h2>User Rights</h2>
        <ul>
          <li>
            <strong>Access:</strong> {privacyPolicyData.userRights.access}
          </li>
          <li>
            <strong>Correction:</strong>{" "}
            {privacyPolicyData.userRights.correction}
          </li>
          <li>
            <strong>Deletion:</strong> {privacyPolicyData.userRights.deletion}
          </li>
        </ul>
      </section>
      <section>
        <h2>Changes To Policy</h2>
        <p>{privacyPolicyData.changesToPolicy}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
