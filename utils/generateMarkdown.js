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
    return `\n- [License](#license)\n`;
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

function renderDescription(description) {
  if (description !== "None" && description !== "" && description !== "N/A") {
    return `## Description

${description}`;
  }
  return `## Description

  N/A
  `;
}


function renderInstallation(install) {
  if (install !== "None" && install !== "" && install !== "N/A") {
    return `## Installation

${install}`;
  }
  return `## Installation

  N/A
  `;
}

function renderUsage(usage){
  if (usage !== "None" && usage !== "" && usage !== "N/A") {
    return `## Usage

${usage}`;
  }
  return `## Usage

  N/A
  `;
}
function renderContribution(contribution){
  if (contribution !== "None" && contribution !== "" && contribution !== "N/A") {
    return `## Contributing

${contribution}`;
  }
  return `## Contributing

  N/A
  `;
}
function renderTests(test){
  if (test !== "None" && test !== "" && test !== "N/A") {
    return `## Tests

${test}`;
  }
  return `## Tests

  N/A
  `;
}

function renderQuestions(email)
{

}

// TODO: Create a function to generate markdown for README

//add table of contents in markdown
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderDescription(data.description)}

  ## Table of Contents

- [Installation](##installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

  ${renderInstallation(data.installation)}

  ${renderUsage(data.usage)}

  ${renderContribution(data.contribution)}

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ${renderTests(data.test)}
`;
}

module.exports = generateMarkdown;
