// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  ## [Description](#table-of-contents)

  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation] (#table-of-contents)
  $(data.installation)
  ## [Usage](#table-of-contents)
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## [Contributing] (#table-of-contents)
  ${renderContributionSection(data.confirmContributers, data.contribute)}
  ## [Tests] (#table-of-contents)
  ${data.tests}
  ## [Questions] (table-of-contents)
  Please contact me through the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})  
  `;
}

module.exports = generateMarkdown;
