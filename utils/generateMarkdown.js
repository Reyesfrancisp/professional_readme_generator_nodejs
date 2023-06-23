// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    const badge = license.replace(/\s+/g, '_');
    return `![GitHub license](https://img.shields.io/badge/license-${badge}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

function renderDescription (description){
  if (description !== "None" && description !== "" && description !== "N/A") {
    return `## Description

${description}`;
  }
  return `## Description

  N/A
  `;
}


function renderInstallation (){}

function renderUsage (){}

function renderContributing (){}

function renderTests(){}

// TODO: Create a function to generate markdown for README

//add table of contents in markdown
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderDescription(data.description)}

  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
