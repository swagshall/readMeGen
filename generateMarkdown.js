
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
  return `
  # ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
  ## Installation 
    To install necessary dependencies, run the following command: 
    ${data.instillation}

   
    ## Usage
    ${data.usage}

    ## License
    This project is licensed under the ${data.license} license.

    ## Contributing 
    ${data.project}

    ## Tests 
    To run tests, run the following command:
    ${data.test}

    ## Questions 
    For any questions the owner of this repo can be contacted through thier GitHub: ${data.username}


`;
}

module.exports = generateMarkdown;
