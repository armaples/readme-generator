// If user has chosen a license, this function will generate the badge.
function renderLicenseBadge(data) {
  if (data.license.toLowerCase() === 'mit') {
    var licenseBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
  } else if (data.license.toLowerCase() === 'apache') {
    var licenseBadge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
  } else if (data.license.toLowerCase() === 'gnu gplv3') {
    var licenseBadge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
  } else if (data.license.toLowerCase() === 'isc') {
    var licenseBadge = `https://img.shields.io/badge/License-ISC-blue.svg`;
  };
  console.log(`license badge test 1: ${licenseBadge}`);
  return licenseBadge;
}

// If user has chosen a license, this function will generate a link to the license.
function renderLicenseLink(data) {
  if (data.license.toLowerCase() === 'mit') {
    var licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (data.license.toLowerCase() === 'apache') {
    var licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  } else if (data.license.toLowerCase() === 'gnu gplv3') {
    var licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (data.license.toLowerCase() === 'isc') {
    var licenseLink = `https://opensource.org/licenses/ISC`;
  };
  console.log(`license link test 1: ${licenseLink}`);
  return licenseLink;
}

// If user has chosen a license, this function creates a section for that license.
function renderLicenseSection(data, licenseBadge, licenseLink) {
  renderLicenseBadge(data);
  console.log(`license badge test 2: ${licenseBadge}`);
  renderLicenseLink(data);
  console.log(`license link test 2: ${licenseLink}`);
  
  console.log(`license title test: ${data.license}`);
    return `## ${data.license} License
    [![License: ${data.license}](${licenseBadge})](${licenseLink})
      `;
}

// This function generates the markdown content for the README
function generateMarkdown(data) {
  // console.log(`test 2: ${data.title}`);
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Please visit my [GitHub Page](https://github.com/${data.username}) or [email me](mailto:${data.email}).
  
  `;
}

// This ensures the functions are exported to index.js
module.exports = {generateMarkdown, renderLicenseSection};