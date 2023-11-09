function generateMarkdown(data) {
  return `## ${data.title}

  ## Badge
  * ${data.badge}

  ## Table-of-Contents
    #Description
    #Installation
    #Usage
    #License
    #Contributions
    #Questions

  ## Description
  * ${data.description}

  ## Installation
  * ${data.installation}

  ## Usage
  * ${data.usage}

  ## License
  * This application uses the following license:
     => ${data.license}

  ## Contributing
  * ${data.contribute}

  ## Questions
  * ${data.questions}

  ## Tests
  * ${data.test}

  ## Screenshot
  * ${data.screenshot}

  ## End Goal
  * ${data.goal}

  ## Contact
  Please contact me through the following links:
  * [GitHub](https://github.com/${data.githubUsername})
  * [Email: ${data.email}](mailto:${data.email})  
  `;
}

module.exports = generateMarkdown;
