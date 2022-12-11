// If user has chosen a license, this function will generate the badge.
function generateBadgeImage(data) {
  if (data.license.toLowerCase() === 'mit') {
    var licenseBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
  } else if (data.license.toLowerCase() === 'apache') {
    var licenseBadge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
  } else if (data.license.toLowerCase() === 'gnu gplv3') {
    var licenseBadge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
  } else if (data.license.toLowerCase() === 'isc') {
    var licenseBadge = `https://img.shields.io/badge/License-ISC-blue.svg`;
  };
  // this console log ensures the badge image data is collected
  // console.log(`license badge test 1: ${licenseBadge}`);
  return licenseBadge;
}

// If user has chosen a license, this function will generate a link to the license.
function generateLicenseLink(data) {
  if (data.license.toLowerCase() === 'mit') {
    var licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (data.license.toLowerCase() === 'apache') {
    var licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  } else if (data.license.toLowerCase() === 'gnu gplv3') {
    var licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (data.license.toLowerCase() === 'isc') {
    var licenseLink = `https://opensource.org/licenses/ISC`;
  };
  // this console log ensures the link data is collected
  // console.log(`license link test 1: ${licenseLink}`);
  return licenseLink;
}

function renderBadge(data) {
  const licenseBadge = generateBadgeImage(data);
  const licenseLink = generateLicenseLink(data);
  // these console logs ensure the data is being passed for the badge image and link
  // console.log(`license badge test 2: ${licenseBadge}`);
  // console.log(`license link test 2: ${licenseLink}`);
  
  // this console log ensures the data is still being passed from the index.js file
  // console.log(`license title test: ${data.license}`);
  return `
  [![License](${licenseBadge})](${licenseLink})
  `
}
// If user has chosen a license, this function creates a section for that license.
function renderLicenseSection(data) {
  const licenseLink = generateLicenseLink(data);
  return `## ${data.license} License
  Distributed under the ${data.license} License. Please follow [this link](${licenseLink}) for more information, or click on the badge at the top.`
}

// This function generates the markdown content for the README
function generateMarkdown(data) {
  // console.log(`test 2: ${data.title}`);
  return `
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [${data.license} License](#${data.license}-license)
  
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
module.exports = {generateMarkdown, renderLicenseSection, renderBadge, generateBadgeImage, generateLicenseLink};