import Papa from 'papaparse';

function parseCsvToJson(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true, // use first row as header
      dynamicTyping: true, // convert numeric strings to numbers
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}
