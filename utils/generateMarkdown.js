function renderLicenseLink(license) {
  return `https://choosealicense.com/licenses/`
};

function renderLicenseSection(license) {
  if (license === "None") {
    return " ";
  } else {
    return ` ${renderLicenseBadge(license)} `
  }
};

function renderLicenseBadge(license) {
  return `[![Generic Badge](https://img.shields.io/badge/License-{license}-blue.svg)](${renderLicenseLink(license)})
  `
};

function generateMarkdown(data) {
  let {licenseUsed, siteLink} = data

  return `## ${data.title}
  ${renderLicenseSection(licenseUsed)}

  ## Table-of-Contents
    [Description] (#description)
    [Installation] (#installation)
    [Usage] (#usage)
    [License] (#license)
    [Contributions] (#contribute)
    [Questions] (#questions)

  ## Description
  * ${data.description}


  ## Installation
  * ${data.installation}

  ## Usage
  * ${data.usage}

  ## License
  * This application uses the following license:
     => ${data.license}
  ${renderLicenseLink(siteLink)}

  ## Contributing
  * ${data.contribute}

  ## Tests
  * ${data.test}

  ## Screenshot
  * ${data.screenshot}

  ## End Goal
  * ${data.goal}

  ## Questions? Contact Me!
  Please contact me through the following links:
  * [GitHub](https://github.com/${data.githubUsername})
  * [Email: ${data.email}](mailto:${data.email})  
  `;
}

module.exports = generateMarkdown;
