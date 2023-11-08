// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![badge] (// insert badge)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}] (// insert link)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    if (license !== 'no license') {
      return `
      ## [License] (#table-of-contents)
      This application uses the following license:
      ${renderLicenseLink(license)}
      `;
    } else {
      return " ";
    }
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation] (#installation)
  * [Usage] (#usage)

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
