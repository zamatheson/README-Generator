
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![badge]
    `;
  } else {
    return " ";
  }
}


function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}])
    `;
  } else {
    return " ";
  }
}


function renderLicenseSection(license) {
  if (license !== 'no license') {
    if (license !== 'no license') {
      return `
      ## [License]
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
    #Description
    #Installation
    #Usage
    #License
    #Contributions
    #Questions

  * [Description] (#description)
  ${data.description}

  * [Installation] (#installation)
  ${data.installation}

  * [Usage] (#usage)
  ${data.usage}

  * [License] (#license)
  ${renderLicenseSection(data.license)}

  ## [Contributing] (#contributing)
  ${data.contribute}

  ## [Questions] (#questions)
  ${data.questions}

  ## [Tests] (#tests)
  ${data.test}

  ## [Screenshot] (#screenshot)
  ${data.screenshot}

  ## [End Goal] (#endgoal)
  ${data.goal}

  Please contact me through the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})  
  `;
}

module.exports = generateMarkdown;
