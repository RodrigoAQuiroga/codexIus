import data from './data.js';


const dataContainer = document.getElementById('data-container');

dataContainer.innerHTML = `
  <h2>${data.name}</h2>
  <p>Version: ${data.version}</p>
  <p>Description: ${data.description}</p>
`;




