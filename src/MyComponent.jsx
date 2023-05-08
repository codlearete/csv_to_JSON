import React from 'react';
import { Table } from 'react-bootstrap';
import csvtojson from 'csvtojson';
import { useEffect, useState } from "react";

function MyComponent() {
  // const CSVToJSON = require("csvtojson");
  const [jsonData, setJsonData] = useState([]);
  // const JSONToCSV = require("json2csv");

  const [selectedFile, setSelectedFile] = useState(null);
  <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

  useEffect(() => {
    if (!selectedFile) return;
  
    const reader = new FileReader();
    reader.onload = async (event) => {
      const csvData = event.target.result;
      const jsonObj = await csvtojson().fromString(csvData);
      setJsonData(jsonObj);
    };
    reader.readAsText(selectedFile);
  }, [selectedFile]);

  <Table striped bordered hover>
  <thead>
    <tr>
      {jsonData.length > 0 &&
        Object.keys(jsonData[0]).map((key, index) => (
          <th key={index}>{key}</th>
        ))}
    </tr>
  </thead>
  <tbody>
    {jsonData.length > 0 &&
      jsonData.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ))}
  </tbody>
</Table>

return (
  <div>
    <h1>CSV to JSON Table</h1>
    <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
    {jsonData.length > 0 ? (
      <Table striped bordered hover>
        {/* Table code */}
      </Table>
    ) : (
      <p>Please select a CSV file.</p>
    )}
  </div>
);

}

export default MyComponent;
