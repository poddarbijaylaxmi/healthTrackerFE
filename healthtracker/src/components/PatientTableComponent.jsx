import React from 'react';
import PropTypes from 'prop-types';

const PatientTable = ({ patients }) => {
  return (
    <div className="overflow-x-auto">
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
          {patients.map((patient, index) => (
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
