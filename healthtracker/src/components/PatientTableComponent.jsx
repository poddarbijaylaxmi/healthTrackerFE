import React, { useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const PatientTable = ({ patients }) => {
  const [visiblePatients, setVisiblePatients] = useState(patients.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePatients = () => {
    if (visiblePatients.length >= patients.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisiblePatients(
        visiblePatients.concat(
          patients.slice(visiblePatients.length, visiblePatients.length + 10)
        )
      );
    }, 1500);
  };

  return (
    <div className="overflow-x-auto">
      <InfiniteScroll
        dataLength={visiblePatients.length}
        next={fetchMorePatients}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Patient Name</th>
              <th className="py-2 px-4 border-b">Disease</th>
              <th className="py-2 px-4 border-b">BP</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Sugar</th>
            </tr>
          </thead>
          <tbody>
            {visiblePatients.map((patient, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{patient.name}</td>
                <td className="py-2 px-4 border-b">{patient.disease}</td>
                <td className="py-2 px-4 border-b">{patient.bp}</td>
                <td className="py-2 px-4 border-b">{patient.status}</td>
                <td className="py-2 px-4 border-b">{patient.sugar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

PatientTable.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      disease: PropTypes.string.isRequired,
      bp: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      sugar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PatientTable;
